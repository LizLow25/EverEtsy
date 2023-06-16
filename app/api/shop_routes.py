from flask import Blueprint, request
from app.models import Shop, db
from ..forms.shop_form import ShopForm
from ..forms.edit_shop_form import EditShopForm
from flask_login import login_required, current_user
from .AWS_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3

shop_routes = Blueprint('shops', __name__)

@shop_routes.route('/')
def shops():
    shops = Shop.query.all()
    print('shops', shops)
    return {'shops': [shop.to_dict() for shop in shops]}

@shop_routes.route("/<int:id>")
def get_single_shop(id):
    shop = Shop.query.get(id)

    if shop is None:
        return {"errors": "Shop not Found"}

    return {"shop": shop.to_dict()}

@shop_routes.route("/new", methods=['POST'])
@login_required
def post_new_shop():
    print('creating a shop backend')
    form = ShopForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        data = form.data

        # upload the image file to aws
        shop_image = data["shop_image"]
        shop_image.filename = get_unique_filename(shop_image.filename)
        upload = upload_file_to_s3(shop_image)


        #pause submission if there is an AWS error
        if "url" not in upload:
            print("Errors Occured in the AWS Upload", upload["errors"])
            return upload["errors"]

        #upload new shop to database
        new_shop = Shop(
            shop_owner=current_user.id,
            name=data["name"],
            description=data["description"],
            shop_image=upload["url"]
        )
        db.session.add(new_shop)
        db.session.commit()
        return (
            {"shop": new_shop.to_dict()},
            200,
            {"Content-Type": "application/json"},
        )

    if form.errors:
        print("There were some form errors", form.errors)
        return {"errors": form.errors}, 400, {"Content-Type": "application/json"}


@shop_routes.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_shop(id):

    shop = Shop.query.get(id)

    if shop is None:
        return {"errors": "Shop does not exist"}, 404

    #remove from aws if not part of seeder data
    if shop.id not in range(1, 4):
        remove_file_from_s3(shop.shop_image)

    db.session.delete(shop)
    db.session.commit()

    return {"message": "Shop Succesfully Deleted"}


@shop_routes.route("/<int:id>/edit", methods=['PUT'])
@login_required
def update_shop(id):

    edit_shop_form = EditShopForm()

    updated_shop = Shop.query.get(id)

    if updated_shop is None:
            return {"errors": "Shop does not exist"}, 404

    if edit_shop_form.validate_on_submit():
        data = edit_shop_form.data

        if data["name"]:
            updated_shop.name = data["name"]
        if data["description"]:
            updated_shop.description = data["description"]
        #if there is a new image uploaded, need to put it into AWS
        if data["shop_image"]:

            shop_image = data["shop_image"]
            shop_image.filename = get_unique_filename(shop_image.filename)
            upload = upload_file_to_s3(shop_image)





    edit_form = EditShopForm()
    edit_form["csrf_token"].data = request.cookies["csrf_token"]
