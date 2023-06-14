from flask import Blueprint
from app.models import Product, db

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
