from flask import Blueprint, request
from app.models import User, Product, db, CartItem
from flask_login import login_required, current_user


cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/')
def get_cart_items():
    products = [product.id for product in current_user.shopping_cart]
    items = []

    #make a list of products with the keys of id and count to send to the front end
    for product in products:
        item = {}
        item['id'] = product
        item['count'] = CartItem.query.filter(CartItem.user_id == current_user.id, CartItem.product_id == product).count()
        items.append(item)

    return {'products': items}


@cart_routes.route("/new", methods=['POST'])
def add_items_to_cart():
    data = request.get_json()

    item = CartItem(
                    product_id=data,
                    user_id=current_user.id
                )

    db.session.add(item)
    db.session.commit()

    return {"message": ["Item added"]}, 200
