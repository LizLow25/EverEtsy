from flask import Blueprint, request
from app.models import Product, db
from flask_login import login_required, current_user
from ..forms.product_form import ProductForm
from .AWS_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3
from ..forms.edit_product_form import EditProductForm

product_routes = Blueprint('products', __name__)

@product_routes.route('/')
def products():
    products = Product.query.all()
    return {'products': [product.to_dict() for product in products]}


@product_routes.route("/<int:id>")
def get_single_product(id):
    product = Product.query.get(id)

    if product is None:
        return {"errors": "Product not Found"}

    return {"product": product.to_dict()}

@product_routes.route("/new", methods=['POST'])
@login_required
def post_new_product():

    form = ProductForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        data = form.data

        # upload the image file to aws
        main_image = data["main_image"]
        main_image.filename = get_unique_filename(main_image.filename)
        upload = upload_file_to_s3(main_image)


        #pause submission if there is an AWS error
        if "url" not in upload:
            print("Errors Occured in the AWS Upload", upload["errors"])
            return upload["errors"]

        #upload new product to database
        new_product = Product(
            name=data["name"],
            shop_id=data["shop_id"],
            details=data["details"],
            price=data["price"],
            main_image=upload["url"],
            category=data["category"]
            )
        db.session.add(new_product)
        db.session.commit()
        return (
            {"product": new_product.to_dict()},
            200,
            {"Content-Type": "application/json"},
        )

    if form.errors:
        print("There were some form errors", form.errors)
        return {"errors": form.errors}, 400, {"Content-Type": "application/json"}

@product_routes.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_product(id):

    product = Product.query.get(id)

    if product is None:
        return {"errors": "Product does not exist"}, 404

    #remove from aws if not part of seeder data
    if product.id not in range(1, 32):
        remove_file_from_s3(product.main_image)

    db.session.delete(product)
    db.session.commit()

    return {"message": "Product Succesfully Deleted"}

@product_routes.route("/<int:id>/edit", methods=['PUT'])
@login_required
def update_product(id):

    edit_product_form = EditProductForm()
    edit_product_form["csrf_token"].data = request.cookies["csrf_token"]
    updated_product = Product.query.get(id)

    #save old image in a variable
    prev_image = updated_product.main_image

    if updated_product is None:
            return {"errors": "Product does not exist"}, 404

    if edit_product_form.validate_on_submit():
        data = edit_product_form.data

        if data["name"]:
            updated_product.name = data["name"]
        if data["details"]:
            updated_product.details = data["details"]
        if data["price"]:
            updated_product.price = data["price"]
        if data["category"]:
            updated_product.category = data["category"]
        #if there is a new image uploaded, need to put it into AWS
        if data["main_image"]:

            main_image = data["main_image"]
            main_image.filename = get_unique_filename(main_image.filename)
            upload = upload_file_to_s3(main_image)

            if "url" not in upload:
                print("Errors Occured in the AWS Upload", upload["errors"])
                return upload["errors"]


            #if user uploads a new image, remove the old image from AWS, as long as it's not part of seeder data
            if updated_product.id not in range(1, 33):
                remove_file_from_s3(prev_image)

            #finally, set the image in the new shop to the url returned from aws upload
            updated_product.main_image = upload["url"]

        #commit updates to database
        db.session.commit()

        #send updated shop back to frontend
        return (
            {"product": updated_product.to_dict()},
            200,
            {"Content-Type": "application/json"},
        )

    if edit_product_form.errors:
        print("There were some form errors", edit_product_form.errors)
        return {"errors": edit_product_form.errors}, 400, {"Content-Type": "application/json"}
