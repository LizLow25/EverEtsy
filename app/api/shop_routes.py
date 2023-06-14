from flask import Blueprint
from app.models import Shop, db

shop_routes = Blueprint('shops', __name__)

@shop_routes.route('/')
def shops():
    shops = Shop.query.all()
    print('shops', shops)
    return {'shops': [shop.to_dict() for shop in shops]}
