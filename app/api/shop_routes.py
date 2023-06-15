from flask import Blueprint
from app.models import Shop, db

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
