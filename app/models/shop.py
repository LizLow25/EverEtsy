from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date


class Shop(db.Model):
    __tablename__ = "shops"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    shop_owner = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    shop_image = db.Column(db.String, nullable=False)
    created_at = db.Column(db.Date, nullable=False, default=date.today())

    product = db.relationship("Product", back_populates="shop", cascade="all, delete")
    user = db.relationship("User", back_populates="shop")

    def to_dict(self):
        return {
            'id': self.id,
            'shop_owner': self.shop_owner,
            'name': self.name,
            'description': self.description,
            'shop_image': self.shop_image
        }
