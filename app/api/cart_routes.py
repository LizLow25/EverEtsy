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

    return {"message": "Item added"}, 200

#reduce the number of cart items
@cart_routes.route("reduce/<int:id>", methods=['DELETE'])
@login_required
def reduce_product_in_cart(id):
    product = CartItem.query.filter(CartItem.product_id == id, CartItem.user_id == current_user.id).first()

    if product:
        db.session.delete(product)
        db.session.commit()
        return {"message": "Removed successfully"}, 200

    return {"message": "Product not found"}, 404


#remove all products regardless of amount
@cart_routes.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_product_from_cart(id):
    products = CartItem.query.filter(CartItem.product_id == id, CartItem.user_id == current_user.id).all()

    for product in products:
        db.session.delete(product)

    db.session.commit()
    return {"message": "Removed successfully"}, 200
