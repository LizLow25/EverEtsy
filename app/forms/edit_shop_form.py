from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed
from ..api.AWS_helpers import ALLOWED_EXTENSIONS


class EditShopForm(FlaskForm):
    name = StringField("Shop Name", validators=[DataRequired()])
    description = TextAreaField(
        "Shop Description",
        validators=[
            DataRequired(),
        ],
    )
    shop_image = FileField(
        "Image File", validators=[FileAllowed(list(ALLOWED_EXTENSIONS))]
    )
