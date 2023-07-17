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
        content="""If Zeus pulled pieces of the sky down from the heavens and put them on a golden chain, that would be this elegant necklace. I love how delicate and basic it is and I wear it on every Starbucks run. """,
        item_quality_rating=5,
        shipping_rating=4,
        customer_service_rating=4
    )
    review8 = Review (
        user=4,
        product=8,
        content="""I bought this ring because I'm a fan of Wilkie Collins and let me tell you, that man was onto something. When I wear these out and about I feel like a 19th century murder victim. Fabulous! 🌙""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=4
    )
    review9 = Review (
        user=2,
        product=9,
        content="""These are the perfect accessory to wear to a garden party. It rained the whole time but these just sparkled through the night 🌱✨🌧️🌙 """,
        item_quality_rating=4,
        shipping_rating=5,
        customer_service_rating=4
    )
    review10 = Review (
        user=5,
        product=10,
        content="""I recently purchased the Girls Oversized Colorado T-Shirt for my daughter, and I must say, we are both thrilled with it! This shirt is a fantastic addition to her wardrobe and has quickly become one of her favorites.

        First and foremost, the comfort of this shirt is outstanding. It is made from high-quality, soft cotton fabric that feels gentle against the skin. The oversized fit adds an extra level of coziness, allowing for plenty of movement and breathability. My daughter can wear it all day long without any discomfort, whether she's playing outside or lounging around the house.

        """,
        item_quality_rating=4,
        shipping_rating=4,
        customer_service_rating=4
    )
    review11 = Review (
        user=4,
        product=11,
        content="""I recently purchased the Vintage Denim Dress/Duster, and I must say, it has quickly become one of my favorite wardrobe pieces. The moment I laid eyes on it, I knew it was something special. This dress exudes a timeless charm that perfectly captures the essence of vintage fashion. """,
        item_quality_rating=4,
        shipping_rating=4,
        customer_service_rating=5
    )
    review12 = Review (
        user=5,
        product=12,
        content="""This dress is great because it is warm in the winter and cool in the summer. I think linen is my favorite fabric as long as I have a steamer within arms reach. I especially like to wear this dress when fossil hunting in Utah. 🦕""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=5
    )
    review13 = Review (
        user=3,
        product=13,
        content="""I bought this rug for my study because I'm going for a greenhouse aesthetic. I truly believe there is no such thing as too much color and if you also believe that, you should purchase this rug!""",
        item_quality_rating=5,
        shipping_rating=4,
        customer_service_rating=5
    )
    review14 = Review (
        user=3,
        product=14,
        content="""I recently purchased the Large Fiber Tapestry, and I must say it has exceeded my expectations in every way possible. This tapestry has added a touch of magic and elegance to my living space, transforming it into a serene oasis that never fails to captivate anyone who enters.

        The first thing that struck me about this tapestry is its sheer size. As the name suggests, it truly is large and commands attention. The dimensions are generous, allowing it to cover a substantial portion of my wall. The intricate details and patterns are brought to life on this large canvas, creating an impressive visual impact that draws you in.""",
        item_quality_rating=4,
        shipping_rating=5,
        customer_service_rating=5
    )
    review15 = Review (
        user=5,
        product=15,
        content="""This magical piece goes perfectly with my forest witch aesthetic. Moths are quite creepy. This moth, however, manages to be beautiful. I like how there are many phases of the moon here 🌗  """,
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=5
    )
    review16 = Review (
        user=3,
        product=16,
        content="""As an avid lover of nature and art, I recently had the pleasure of acquiring the King Silk Art handmade embroidery landscape depicting a mesmerizing winter forest. To say that I am delighted with this masterpiece would be an understatement. This enchanting artwork has effortlessly transformed my living space into a serene and tranquil retreat.""",
        item_quality_rating=5,
        shipping_rating=3,
        customer_service_rating=3
    )
    review17 = Review (
        user=4,
        product=17,
        content="""I recently purchased the Cotton Linen Tank Top in Lilac, and let me tell you, it's been a game-changer for surviving the scorching summers here in New Orleans. As a resident of this vibrant city, I can't stress enough how important it is to have comfortable and breathable clothing during the hot and humid months, and this tank top delivers on all fronts.""",
        item_quality_rating=5,
        shipping_rating=3,
        customer_service_rating=5
    )
    review18 = Review (
        user=5,
        product=18,
        content="""I recently purchased the Linen Slip Dress for my much-anticipated Bali vacation, and I must say it was the perfect choice for the tropical paradise. From the moment I laid eyes on it, I knew I made the right decision. The dress exudes elegance and comfort, making it an absolute delight to wear.""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=5
    )
    review19 = Review (
        user=4,
        product=19,
        content="""I recently purchased the Linen Wedding Dress for my destination wedding in Italy, and I couldn't be happier with my choice! From start to finish, this dress was an absolute dream.

        First and foremost, the quality of the linen fabric was outstanding. It felt incredibly soft against my skin and had a luxurious drape that perfectly captured the essence of a romantic Italian wedding. Not only did it look stunning, but it was also comfortable to wear throughout the entire day. I received so many compliments on how effortlessly elegant I looked in this dress.

        """,
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=4
    )
    review20 = Review (
        user=3,
        product=20,
        content="""I recently purchased a set of 6 Strap Rope Sandals from EverEtsy, and I must say, they have exceeded my expectations in both style and functionality. As a passionate adventurer who idolizes the legendary Johnny Appleseed, these sandals have truly allowed me to embrace his spirit and explore the world with newfound comfort.""",
        item_quality_rating=4,
        shipping_rating=5,
        customer_service_rating=5
    )
    review21 = Review (
        user=5,
        product=1,
        content="""I recently purchased the Vintage Style Farmhouse Vase with Tulips, and I must say it has brought a touch of elegance and rustic charm to my home. While it may seem a little expensive at first glance, I can assure you that this delightful piece is worth every penny. """,
        item_quality_rating=5,
        shipping_rating=3,
        customer_service_rating=5
    )
    review22 = Review (
        user=2,
        product=2,
        content="""I know it's just a jug but when I fill this up at my kitchen sink I feel like a greek goddess! I like to fill it with fresh sunflowers 🌻""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=5
    )
    review23 = Review (
        user=2,
        product=3,
        content="""This is one of those products you don't think you need until you buy it and then my god. How did I ever bathe in anything other than a handmade wooden bathtub that looks suspiciously like a salad bowl.""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=5
    )
    review24 = Review (
        user=4,
        product=4,
        content="""Well these showed up smashed to smithereens. However, I got them replaced and now they look quite nice on my antique side tables but I could have dealt with less of a shipping fiasco.""",
        item_quality_rating=4,
        shipping_rating=1,
        customer_service_rating=5
    )
    review25 = Review (
        user=2,
        product=5,
        content="""I love how unique this dress is!! It fits like a dream. Everybody asks where I got it from.""",
        item_quality_rating=5,
        shipping_rating=4,
        customer_service_rating=5
    )
    review26 = Review (
        user=4,
        product=6,
        content="""These rings are PERFECT. Chic and not too subtle, not too flashy, and the price is right.""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=5
    )
    review27 = Review (
        user=5,
        product=7,
        content="""I recently had the pleasure of wearing the Dainty Blue Floral Necklace on a special occasion: my first date with my now husband. This delicate piece of jewelry not only captured my heart but also became a cherished symbol of the love we share. Allow me to share my heartfelt review of this beautiful necklace.

        From the moment I laid eyes on the Dainty Blue Floral Necklace, I was captivated by its elegant design. The intricate floral pendant, adorned with delicate blue petals, exuded a sense of grace and femininity. The silver chain complemented the pendant perfectly, adding a touch of understated sophistication to the overall look. Its craftsmanship was impeccable, showcasing the attention to detail and quality of materials used.""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=5
    )
    review28 = Review (
        user=2,
        product=8,
        content="""I recently received the most enchanting gift from my sister for my birthday, a Citrine Raw Ring, and I must say, it has completely stolen my heart. Every time I gaze at this magnificent piece, it transports me back to the ethereal beauty of crystal caves, capturing the essence of nature's wonders in a tiny, wearable form.""",
        item_quality_rating=5,
        shipping_rating=4,
        customer_service_rating=4
    )
    review29 = Review (
        user=4,
        product=21,
        content="""This necklace was a gift from my astronomy guru and I think it perfectly encapsulates the delicate and mysterious nature of the celestial bodies 🌙 ✨""",
        item_quality_rating=5,
        shipping_rating=4,
        customer_service_rating=4
    )
    review30 = Review (
        user=5,
        product=22,
        content="""I love plants and I love gold so these necklaces send me 🌱 🌿 🌞 💫 . I do wish the chain was longer though. """,
        item_quality_rating=4,
        shipping_rating=5,
        customer_service_rating=5
    )
    review31 = Review (
        user=4,
        product=23,
        content="""Wearing this anklet makes me feel like a mermaid. Except, it's on my ankle, which mermaids don't have. So a mermaid with ankles.""",
        item_quality_rating=5,
        shipping_rating=4,
        customer_service_rating=5
    )
    review32 = Review (
        user=5,
        product=23,
        content="""I checked with the seller and these diamonds are lab grown! Yay for ethical gem consumption 💎""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=3
    )
    review33 = Review (
        user=2,
        product=24,
        content="""I live alone so having these faces on the wall gives me someone to talk to! Sometimes they talk back.""",
        item_quality_rating=5,
        shipping_rating=5,
        customer_service_rating=4
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



    reviews = [ review1, review2, review3, review4, review5, review6, review7, review8, review9, review10, review11, review12, review13, review14, review15, review16, review17, review18, review19, review20, review21, review22, review23, review24, review25, review26, review27, review28, review29, review30, review31, review32, review33]
    [db.session.add(review) for review in reviews]
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
