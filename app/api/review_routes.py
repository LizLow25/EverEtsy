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

@review_routes.route("/<int:id>", methods=['DELETE'])
@login_required
def delete_review(id):

    review = Review.query.get(id)

    if review is None:
        return {"errors": "Review does not exist"}, 404


    db.session.delete(review)
    db.session.commit()

    return {"message": "Review Succesfully Deleted"}

@review_routes.route("/<int:id>/edit", methods=['PUT'])
@login_required
def update_review(id):
    updated_review = Review.query.get(id)

    data = request.get_json(force=True)

    if data["content"]:
        updated_review.content = data["content"]
    if data["itemRating"]:
        updated_review.item_quality_rating = data["itemRating"]
    if data["shipRating"]:
        updated_review.shipping_rating = data["shipRating"]
    if data["serviceRating"]:
        updated_review.customer_service_rating = data["serviceRating"]

    db.session.commit()

    if update_review is None:
        return {"errors": "Review does not exist"}, 404
