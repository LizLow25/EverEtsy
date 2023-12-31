from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False)
    product = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("products.id")), nullable=False)
    content = db.Column(db.Text, nullable=False)
    item_quality_rating = db.Column(db.Integer, nullable=False)
    shipping_rating = db.Column(db.Integer, nullable=False)
    customer_service_rating = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.Date, nullable=False, default=date.today())

    userDetails = db.relationship('User')

    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user,
            'product': self.product,
            'content': self.content,
            'item_quality_rating': self.item_quality_rating,
            'shipping_rating': self.shipping_rating,
            'customer_service_rating': self.customer_service_rating,
            'created_at': self.created_at,
            'userDetails': self.userDetails.to_dict()
        }
