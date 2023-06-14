from app.models import db, Shop, environment, SCHEMA
from sqlalchemy.sql import text


def seed_shops():
    shop1 = Shop(
        shop_owner = 4,
        name ='WestNinthVintage',
        shop_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/shop1.png',
        description = 'We offer rustic, farmhouse, artistic decor.')
    shop2 = Shop(
        shop_owner = 4,
        name ='tangerinejewelryshop',
        shop_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/shop2.png',
        description = 'Boho jewelry from southern California.')
    shop3 = Shop(
        shop_owner = 5,
        name = 'theLABERA',
        shop_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/shop3.png',
        description = 'Offering handmade, luxury clothing.')
    shop4 = Shop(
        shop_owner = 5,
        name = 'TeddyandWool',
        shop_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/shop4.png',
        description = 'High Quality Contemporary Fiber Art.')
    # shop5 = Shop(
    #     shop_owner = '',
    #     name = '',
    #     shop_image = '',
    #     description = '')

    shops = [shop1, shop2, shop3, shop4]
    [db.session.add(shop) for shop in shops]
    db.session.commit()


def undo_shops():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.shops RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM shops"))

    db.session.commit()
