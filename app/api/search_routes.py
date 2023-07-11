from app.models import Product, db
from flask import Blueprint, request

search_routes = Blueprint('search', __name__)

@search_routes.route('/')
def search_products():
  
    search_query = request.args.get("query")
    print("search param being picked up by backend route: ", search_query)
    product_query = (
        db.session.query(Product)
        .filter((Product.name.ilike(f"%{search_query}%")) | (Product.details.ilike(f"%{search_query}%")) | (Product.category.ilike(f"%{search_query}%")))
    )

    response = [product.to_dict() for product in product_query]
    return {"products": response}
