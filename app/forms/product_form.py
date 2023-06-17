from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, FloatField, IntegerField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed, FileRequired
from ..api.AWS_helpers import ALLOWED_EXTENSIONS


class ProductForm(FlaskForm):
    name = StringField("Product Name", validators=[DataRequired()])
    details = TextAreaField(
        "Product Details",
        validators=[
            DataRequired(),
        ]
    )
    shop_id = IntegerField("Shop Id", validators=[
            DataRequired(),
        ])
    price = FloatField("Price", validators=[
            DataRequired(),
        ])
    main_image = FileField(
        "Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))]
    )
    category = StringField("Category", validators=[DataRequired()])
