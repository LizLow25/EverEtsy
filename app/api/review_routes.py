from app.models import Review, db
from flask import Blueprint, request
from flask_login import login_required, current_user

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/')
def get_all_reviews():
    reviews = Review.query.all()

    return {'reviews': [review.to_dict() for review in reviews]}

@review_routes.route('/new', methods=['POST'])
@login_required
def add_new_review():

    data = request.get_json(force=True)

    review = Review(
        user=current_user.id,
        product=data['product'],
        content=data['content'],
        item_quality_rating=data['itemRating'],
        shipping_rating=data['shipRating'],
        customer_service_rating=data['serviceRating']
    )
    db.session.add(review)
    db.session.commit()


    return {"review": review.to_dict()}
