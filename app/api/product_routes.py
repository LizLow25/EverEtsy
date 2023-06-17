from flask import Blueprint, request
from app.models import Product, db
from flask_login import login_required, current_user
from ..forms.product_form import ProductForm
from .AWS_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3


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
