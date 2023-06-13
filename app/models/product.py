from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import date

class Product(db.Model):
    __tablename__ = "products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    shop_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("shops.id")), nullable=False)
    details = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    main_image = db.Column(db.String, nullable=False)
    category = db.Column(db.String, nullable=False)
    created_at = db.Column(db.Date, nullable=False, default=date.today())

    shop = db.relationship("Shop", back_populates="product")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'shop_id': self.shop_id,
            'details': self.details,
            'main_image': self.main_image,
            'category': self.category

        }
