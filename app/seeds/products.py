from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_products():
    product1 = Product(
        name = 'Vintage Style Farmhouse Vase with Tulips',
        shop_id = 1,
        details =
        """This is an adorable vintage style jar lantern with your choice of florals. This is a beautiful accent piece, and the florals are removable so this piece can be used throughout the year. Lights with timer are included. See info about lights below. This piece measures approximately 12" tall with most florals.

        Jar by itself dimensions:
        Full Diameter: 6 1/4
        Opening Diameter: 3 1/8
        Height: 7

        Tulips
        Blend 1 - Large Ivory Roses and Greenery
        Blend 2 - Sunflowers and Greenery
        Blend 3 - Mini White Roses and Greenery
        Blend 4 - Lavendar and Greenery
        Blend 5 - Mini Pink Roses and Greenery
        Blend 6 - Greenery Alone

        Lights last about 40hrs with intermittent use. They are just to start you out, you will have to purchase and replace the batteries!
        You will need a small screwdriver to replace the batteries. They are CR2032 tab batteries. You can get the batteries in bulk on Amazon.
        Greenery is plastic but not fake or cheesy looking.
        """,
        price = 69.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product1main.png',
        category = 'Home & Living'
    )
    product2 = Product(
        name = 'Lilac Tall Ceramic Vase With Handle',
        shop_id = 1,
        details = """Long Lasting High Quality: Crafted from 100% Ceramic by Vietnamese artisans, this durable, boho, trendy vase will keep your home décor looking fresh and up-to-date year after year.
        Indoor and Outdoor Use: The vase features an elegant and minimalistic design, great for Centerpieces, Weddings, Birthday, or House Warming Gifts; it's even great for adding a little touch to your house with this trendy item
        Versatile Design: With a handle for easy carrying, the neutral stoneware Growler vase brightens your space by placing this item where its design will surely bring that warm ambience; place it where space needs attraction and color. With dimensions of 4.7 inches in width and 8.5 inches in height, it perfectly complements any space, adding a touch of elegance and style.
        Perfect Gift: If you're looking for a gift that's unique and stylish for family or friends, and is something that would add an attractive touch at home, this vase is the best choice for a lasting gift for all occasions.
        Notes: Kindly note that this ceramic vase is handmade, therefore, there may be slight variations in size, surface texture, glaze consistency, color, or tone of the vase. Every piece is one of a kind. Plants and props are not included. """,
        price = 32.41,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product2main.jpg',
        category = 'Home & Living'
    )
    product3 = Product(
        name = 'Mahogany High Quality Wooden Bathtub',
        shop_id = 1,
        details = """J Haus Bath wooden bathtub made of solid wood made to order
        The wooden bathtub is deep and spacious.

        The stunning modern wave design bathtub crafted with Red Mahogany wood will bring a comforting sense of calmness to your bathing experience. The sensual design contours to your every position making bath time truly exhilarating.

        Made in USA

        Bathtub Features:
        Contemporary Wave Design
        Easy to Clean
        100% Waterproof
        Weight (100kg)
        Dimensions (1800 l x 850 w x 650 h )
        Drain Fixing (40mm Waste Outlet & Centered)

        Note:
        Our products are made to order. May takes approximately 2 to 6 weeks from order. Shipping can take between 4 to 12 weeks, or the item can be sent via Courier (7 to 10 days) and additional fee may vary.

        ****No returns or refunds are offered on this item.*** """,
        price = 11895.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product3main.png',
        category = 'Home & Living'
    )
    product4 = Product(
        name = 'Irregular shape stone coasters for cups and glasses',
        shop_id = 1,
        details = """Irregular oval shape coasters for tea, coffee cups or glasses. Decorate your table and give your home some exclusivity and luxury!

        Coasters are made of innovative material - a thin layers of natural stone (1 mm real slate rock) and a gray felt (4 mm) base, which will protect your table surface from scratches. Especially lightweight!

        The materials are impregnated.

        Pay attention that each coaster is unique because the stone is a natural material, so the pattern, shades, and texture may be different from the examples we present in our photos.

        You can clean stone and felt surface with sponge or wet wipes.

        Set of 6 coasters (3 reddish/brown ant 3 rustic varied color).

        You can choose coasters sizes:
        * 9x9cm (3.5"x3.5")
        * 11x11cm (4.3"x4.3")
        * 9x9 cm (3.5"x3.5") + 1 big for serving 19x19 cm (7.48"x7.48")
        * 11x11cm (4.3"x4.3") + 1 big for serving 19x19 cm (7.48"x7.48")

        We design items with fun, beauty, functionality and practicality in mind. """,
        price = 30.44,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product4main.png',
        category = 'Home & Living'
    )
    product5 = Product(
        name = 'Purple linen dress',
        shop_id = 3,
        details = """Purple linen dress is lightweight and it will take you effortlessly from everywhere and every-time.
        Could be worn in both size, pleat creates extra room in the front.
        Pure linen midi summer dress is extremely comfortable due to natural materials it is made of.
        Plus size minimal dress will look fabulous on every woman.

        Pure linen loose dress is made of 100% high quality natural linen fabric certified by OEKO-TEX 100 standard.
        If you would like other color, please, choose from our 31 colors palette in the right drop down menu.
        Please note, colors might vary due to computer monitor settings and lightening.

        Caring: hand wash only in warm water, do not wring and lay flat to dry. """,
        price = 109.37,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product5.png',
        category = 'Clothing & Shoes'
    )
    product6 = Product(
        name = 'Set of 2: Duo Form Rings',
        shop_id = 2,
        details = """D U O ∙ F O R M ∙ R I N G S

        Feeling bold, minimalistic or maybe a little bit of both? Our 2 ring set with one thick ring and one thin ring allow you to cater your jewelry choices to your mood. The wavy design of these stacking rings is a great addition to your summer jewelry collection.

        • Material: High Quality Solid 925 Sterling Silver

        • Finish: 18K Gold

        • Featuring Set of 2 Curve Rings. Perfect for your Stacking.


        W H Y ∙ Y O U ' L L ∙ L O V E ∙ I T

        • It's dainty and can be worn every day

        • A special piece you'll treasure

        • High quality materials and attention to detail""",
        price = 27.30,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product6.png',
        category = 'Jewelry & Accessories'
    )
    product7 = Product(
        name = 'Dainty Blue Floral Necklace',
        shop_id = 2,
        details = """Add a touch of sophistication to your look with our Dainty Blue Floral Necklace. This 18K gold plated necklace features minimalist floral charms, creating a delicate and feminine accessory. Perfect as a gift for a loved one or as a treat for yourself, this tiny flower necklace is sure to become a cherished piece in your collection.

        What's Included?
        • 1x Dainty Blue Floral Necklace Gold/Silver (37CM)

        Guarantees:
        • Free Shipping: Enjoy 6-10 days shipping on your order after processing.
        • 14-Day Returns: If you're not satisfied with your purchase, we offer 14-day returns and exchanges.
        """,
        price = 17.98,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product7.png',
        category = 'Jewelry & Accessories'
    )
    product8 = Product(
        name = 'Citrine Raw Ring',
        shop_id = 2,
        details = """Very minimalist yet very beautiful rings. Natural high quality Moonstone and Labradorite baguette, and raw clear Citrine, Aqua, Amethyst, Lapis, Rose Quartz. stone used. Made with high care using best quality Italian Brass. Durable gold plating. Non Allergic and Anti-tarnish. All options are available in all sizes. Raw Stone shape will vary from picture, though will be more or less same in all orders.
        These rings stand out for sure. """,
        price = 15.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product8.png',
        category = 'Jewelry & Accessories'
    )
    product9 = Product(
        name = 'Tiny Wildflower Lever-back Earrings in Sterling Silver',
        shop_id = 2,
        details = """Dainty, tiny silver hand stamped botanical rectangular tag earrings, paired with secure lever-back earwires. Hand stamped with a minimalist wildflower design, these petite dangle leverback earrings are a customer favorite because they are so lightweight and easy to wear! All in nickel-free solid sterling silver metal for long lasting quality.

        • Overall earring length is about 1.1 inches.
        • Tag dangles are about 0.5 inch by 0.25 inch.
        • All components are nickel-free sterling silver.
        • Sterling silver lever-back ear wires.
        • Handcrafted with love in Alaska by Burnish.
        • Beautifully packaged in a gift box.
        • Free returns & exchanges. Pre-paid return label included with order. (USA only)
        • Gift wrapping available in cart (select "this order is a gift", then "add gift wrapping".
        • To include a gift message: in cart select "this order is a gift", then "add gift message for free". """,
        price = 38.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product9.png',
        category = 'Jewelry & Accessories'
    )
    product10 = Product(
        name = 'Colorado Tee',
        shop_id = 3,
        details = """****PLEASE NOTE****
        This is a standard unisex size Comfort Colors Tee. For an oversized tee, please size up.
        If you are looking for an oversized "T-shirt Dress" look, we recommend sizing up 2 sizes.
        Please review the size chart to ensure you receive the fit you want.---Unisex Crew Neck-----

        *Product Description *
        ___________________________________________________________________________
        Ring spun cotton
        soft washed garment dyed fabric
        double needle collar
        twill taped neck and shoulders
        double needle armhole, sleeve and bottom hems
        as with all pigment dyed shirts colors will vary slightly.""",
        price = 29.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product10.png',
        category = 'Clothing & Shoes'
    )
    product11 = Product(
        name = 'Vintage Denim Dress/Duster',
        shop_id = 3,
        details = """Featuring: a button front closure, collar, cuffs, chest pockets, long length, and cotton material.

        Era: 90's

        Label: Vintage Studio

        Size Marked: 14

        Estimated Size: Loose Medium

        Material: 100% Cotton

        Condition: Excellent

        Measurements:

        Shoulder: 17”

        Chest: 20”

        Waist: 19”

        Hips: 22”

        Length: 51”


        Measured flat, Please double width measurements for total. Please let me know if you have any additional questions :) """,
        price = 108.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product11.png',
        category = 'Clothing & Shoes'
    )
    product12 = Product(
        name = 'Cotton dress',
        shop_id = 3,
        details = """Introducing our White Linen Minimalist Handmade Dress: a timeless and elegant piece designed to effortlessly elevate your wardrobe. This dress embodies the essence of simplicity and sophistication, offering a refreshing take on classic femininity.

        Handcrafted with meticulous attention to detail, this dress is made from high-quality, breathable linen fabric that feels soft against your skin. The lightweight and airy nature of linen ensures maximum comfort, making it perfect for both warm summer days and stylish evening occasions.

        The minimalist design of the dress focuses on clean lines and a sleek silhouette, allowing the beauty of the fabric to shine through. The crisp white color enhances the dress's versatility, enabling you to easily pair it with various accessories and create different looks to suit any occasion. """,
        price = 63.91,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product12.png',
        category = 'Clothing & Shoes'
    )
    product13 = Product(
        name = 'Tufted Jardin Rug',
        shop_id = 4,
        details = """Made of 100% natural wool
        All our products are of premium quality that made to last for generations. They are handcrafted using old weaving techniques which have been passed down from generations to generation

        Handmade in India

        Care Instructions:
        Dry Clean is recommended for best results
        Stains must be treated immediately. Blot the stain with a paper towel or soft cloth "Don't rub" then apply a tiny amount of mild soap to a clean cloth and dab it on the stain. Apply water to remove the soap. Repeat until the stain is gone
        CAUTIONS: Don't use bleach or stain remover
        Vacuum by the lowest available setting
        Avoid exposure to direct sunlight

        Variations can be expected due to the nature of handmade which makes each piece one of a kind

        For rugs, a pad is recommended to prevent slipping """,
        price = 129.61,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product13.png',
        category = 'Art & Collectibles'
    )
    product14 = Product(
        name = 'Large Fiber Tapestry',
        shop_id = 4,
        details = """CONTEMPORARY LARGE FIBER ART WALL HANGING

        Complete the look of your decor with a large fiber art wall hanging. Create your boho and modern style at your home with these special yarn art pieces. Add some color and texture to your walls by hanging fiber textile arts. Design eye-catching textured walls and make your space characteristic with wood fringe wall art.

        This beautiful handcrafted product is made of fibers on the cut, sanded, and varnished linear wood. These handmade linear woods have been cut, sanded, and varnished. Fiber art wall hangings have been cut gently - made with love and passion! They make your space look and feel cozier. This large fiber tapestry will be a perfect match for your living room, bedroom, nursery, entryway, etc. walls.

        These sophisticated and modern fiber art wall hangings give a natural organic feel and they make your space unique. """,
        price = 169.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product14.png',
        category = 'Art & Collectibles'
    )
    product15 = Product(
        name = 'Moon moth embroidered art',
        shop_id = 4,
        details = """I have embroidered this gorgeous 🌙 design onto black fabric.

        I then placed it into an 8 inch hoop.

        The back is left open and you can see the stitching.

        Because hoops are made from bamboo. Some slight variations may 0ccur.

        Please ask all questions before.""",
        price = 25.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product15.png',
        category = 'Art & Collectibles'
    )
    product16 = Product(
        name = 'King silk art handmade embroidery landscape winter forest',
        shop_id = 4,
        details = """• Handmade embroidery silk art with Certificate of Authenticity.
        • Unframed, mounted size 30x30cm, art size 20x20cm.
        • Matt color choice: white, off white or black.
        • Silk colors shimmer when light hits and softly glow in dim-dark areas.
        • The inventory artworks will vary slightly from the web photos due to hand-stitching.
        • The inventory artwork looks much better than web photos as web photos can not show the silk shimmers.

        A talented artist spent months and sometimes years hand stitching this gorgeous Silk Art. This handmade Silk Art is an entirely natural form of art. No glues, paint or machinery, just silk, vegetable dyes and a needle. Compared to prints and paintings, silk artwork has a nearly 3 dimensions look and very high value. It is a real one-of-a-kind artwork. """,
        price = 68.99,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product16.png',
        category = 'Art & Collectibles'
    )
    product17 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product18 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product19 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product20 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product21 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product22 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product23 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product24 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product25 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product26 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product27 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product28 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product29 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product30 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product31 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )
    product1 = Product(
        name = '',
        shop_id = '',
        details = '',
        price = '',
        main_image = '',
        category = '',
    )



    db.session.add()
    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
