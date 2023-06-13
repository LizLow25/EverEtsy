from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    user4 = User(
        username = 'sophia',
        firstname = 'Sophia',
        lastname = 'Baker',
        email = 'sophia@gmail.com',
        user_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/user4.png',
        password = 'password'
    )
    user5 = User(
        username = 'emily',
        firstname = 'Emily',
        lastname = 'Scott',
        email = 'emily@gmail.com',
        user_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/user5.png',
        password = 'password'
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(user4)
    db.session.add(user5)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
