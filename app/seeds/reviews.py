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
    # review1 = Review (
    #     user='',
    #     product='',
    #     content='',
    #     item_quality_rating='',
    #     shipping_rating='',
    #     customer_service_rating=''
    # )
    # review1 = Review (
    #     user='',
    #     product='',
    #     content='',
    #     item_quality_rating='',
    #     shipping_rating='',
    #     customer_service_rating=''
    # )
    # review1 = Review (
    #     user='',
    #     product='',
    #     content='',
    #     item_quality_rating='',
    #     shipping_rating='',
    #     customer_service_rating=''
    # )
    # review1 = Review (
    #     user='',
    #     product='',
    #     content='',
    #     item_quality_rating='',
    #     shipping_rating='',
    #     customer_service_rating=''
    # )
    # review1 = Review (
    #     user='',
    #     product='',
    #     content='',
    #     item_quality_rating='',
    #     shipping_rating='',
    #     customer_service_rating=''
    # )
    # review1 = Review (
    #     user='',
    #     product='',
    #     content='',
    #     item_quality_rating='',
    #     shipping_rating='',
    #     customer_service_rating=''
    # )

    reviews = [ review1, review2, review3]
    [db.session.add(review) for review in reviews]
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
