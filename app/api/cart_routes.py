from flask import Blueprint, request
from app.models import User, Product, db, CartItem
from flask_login import login_required, current_user


cart_routes = Blueprint('cart', __name__)

@cart_routes.route("/new", methods=['POST'])
def add_items_to_cart():
    data = request.get_json()
    print('cart data', data)

    item = CartItem(
                    product_id=data,
                    user_id=current_user.id
                )

    db.session.add(item)
    db.session.commit()

    return {"message": ["Item added"]}, 200
