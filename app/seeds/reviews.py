from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review (
        user=4,
        product=1,
        content='This vase is gorgous and looks perfect in the middle of my farmhouse style kitchen. All my friends are envious. It is, however, a little overpriced.',
        item_quality_rating=4,
        shipping_rating=5,
        customer_service_rating=5
    )
    review2 = Review (
        user=5,
        product=2,
        content="""I recently purchased the Lilac Tall Ceramic Vase with Handle, and I must say it has been a delightful addition to my home decor. The vase's elegant design, coupled with its vibrant lilac color, instantly catches the eye and adds a touch of sophistication to any room.""",
        item_quality_rating=5,
        shipping_rating=4,
        customer_service_rating=4
    )
    review3 = Review (
        user=4,
        product=3,
        content="""When it comes to transforming your bathroom into a serene oasis of relaxation, the Mahogany High Quality Wooden Bathtub is a true masterpiece. This bathtub is a stunning blend of craftsmanship, elegance, and functionality, providing an unparalleled bathing experience that will leave you feeling rejuvenated and pampered.""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=5
    )
    review4 = Review (
        user=5,
        product=4,
        content="""I recently purchased a set of Irregular Shape Stone Coasters for cups and glasses, and I must say, they have proven to be a worthwhile addition to my home decor and dining experience. These coasters have a unique and stylish irregular shape, which instantly caught my eye and adds a touch of elegance to any tabletop. """,
        item_quality_rating=4,
        shipping_rating=4,
        customer_service_rating=3
    )
    review5 = Review (
        user=4,
        product=5,
        content="""I recently purchased a Purple Linen Dress, and I must say, it has quickly become one of my favorite wardrobe staples. This dress exudes a sense of timeless elegance while providing exceptional comfort, making it suitable for a variety of occasions.

        First and foremost, the color of this dress is absolutely stunning. The deep shade of purple is rich and vibrant, adding a touch of sophistication to any ensemble. Whether it's a casual outing or a more formal event, this dress effortlessly elevates my style and garners compliments wherever I go. """,
        item_quality_rating=5,
        shipping_rating=2,
        customer_service_rating=5
    )
    review6 = Review (
        user=2,
        product=6,
        content="""I love these rings so much. When I hold my teacup I feel just like Ana Karenina, minus the train. """,
        item_quality_rating=5,
        shipping_rating=3,
        customer_service_rating=3
    )
    review7 = Review (
        user=2,
        product=7,
        content="""If Mary Poppins pulled pieces of the sky down from the heavens and put it on a golden chain, that would be this elegant necklace. I love how delicate and basic it is and I wear it on every Starbucks run. """,
        item_quality_rating=5,
        shipping_rating=4,
        customer_service_rating=4
    )
    review8 = Review (
        user=4,
        product=8,
        content=""" I bought this ring because I'm a fan of Wilkie Collins and let me tell you, that man was onto something. When I wear these out and about I feel like a 19th century murder victim. Fabulous! 🌙""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=''
    )
    # review1 = Review (
    #     user='',
    #     product='',
    #     content='',
    #     item_quality_rating='',
    #     shipping_rating='',
    #     customer_service_rating=''
    # )

    reviews = [ review1, review2, review3, review4, review5, review6, review7, review8]
    [db.session.add(review) for review in reviews]
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
