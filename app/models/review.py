from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False)
    content = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.Date, nullable=False, default=date.today())

    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user,
            'content': self.content,
            'rating': self.rating,
            'created_at': self.created_at
        }
