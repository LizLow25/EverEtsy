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
        name = 'Cotton Linen Tank Top',
        shop_id = 3,
        details = """This outfit is versatile and can be worn on various occasions, such as spring/summer days, vacation, casual or working days, and even formal events. Pair it with sneakers or a lovely jacket to complete the look. The tank tops have a sleeveless design, which allows for maximum ventilation and freedom of movement. The tank tops are easy to care for and can be machine washed and dried, making them low maintenance and convenient for everyday wear.""",
        price = 24.75,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product17.png',
        category = 'Clothing & Shoes'
    )
    product18 = Product(
        name = 'Linen slip dress / Summer linen dress',
        shop_id = 3,
        details = """Rush orders:
        Please contact us if your situation requires shorter production times; we will do our best to help you.

        Please note that there is an extra charge for sizes over EU 44—only to cover the additional fabric cost.

        The fabric texture may slightly vary depending on the fabric available.

        Please note: all dresses are made-to-order and are non-returnable.

        CARE INSTRUCTIONS
        Cold hand washed
        Do not bleach
        Cold iron
        Do not dry clean
        """,
        price = 129.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product18.png',
        category = 'Clothing & Shoes'
    )
    product19 = Product(
        name = 'Linen Wedding Dress',
        shop_id = 3,
        details = """Introducing our exquisite Linen Wedding Dress, a captivating blend of timeless elegance and bohemian allure. This bridal gown is meticulously crafted to celebrate the essence of romance and natural beauty on your special day.

        Designed with a boho-inspired aesthetic, this ethically made dress embraces the charm of relaxed, flowing lines and delicate details. The soft, breathable linen fabric gracefully drapes over your figure, ensuring a comfortable and effortless fit throughout your wedding festivities.

        The highlight of this enchanting gown lies in its intricate floral embroidery, meticulously handcrafted with care. The floral motifs cascade delicately across the bodice, adding a touch of whimsy and femininity to the overall design. Each stitch is a testament to our commitment to craftsmanship and attention to detail.

        The silhouette of the dress features a flattering V-neckline, accentuating your natural beauty and framing your face with elegance. The gentle A-line skirt gracefully sweeps the floor, creating a captivating movement with every step you take. The back of the dress reveals a low, open back, adorned with ethereal embroidered lace, adding a hint of allure and charm.

        Our Linen Wedding Dress is more than just a stunning garment; it embodies our dedication to ethical fashion. Each dress is meticulously handmade by skilled artisans who are treated with respect and paid fair wages. We strive to create beautiful clothing while making a positive impact on the lives of those who help bring our designs to life. """,
        price = 340.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product19.png',
        category = 'Clothing & Shoes'
    )
    product20 = Product(
        name = '6 Strap Rope Sandals',
        shop_id = 3,
        details = """Crafted with attention to detail, these sandals feature six straps meticulously woven from soft, durable ropes. The intricate pattern of the straps adds an artistic touch to your feet, giving them a unique and eye-catching appeal. Each strap is thoughtfully placed to ensure a secure fit while allowing your feet to breathe on those warm summer days.

        Designed with comfort in mind, our 6-Strap Rope Sandals provide a gentle embrace for your feet. The soft ropes conform to your foot's natural contours, providing a snug and supportive fit that allows you to walk with ease and grace. The lightweight construction ensures that you can wear them all day long without any discomfort.

        Embracing the bohemian spirit, these sandals effortlessly blend versatility and style. They pair perfectly with flowing maxi dresses, denim shorts, or breezy skirts, allowing you to create a multitude of boho-chic looks. Whether you're strolling through a festival, exploring a vibrant market, or simply enjoying a sunny day by the beach, these sandals will be your go-to choice. """,
        price = 35.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/project20.png',
        category = 'Clothing & Shoes'
    )
    product21 = Product(
        name = 'Crescent Moon Necklace with Star and Birthstone',
        shop_id = 2,
        details = """The centerpiece of this necklace is a stunning crescent moon pendant. Its delicate curves and intricate etchings capture the mystique and allure of the moon, symbolizing intuition, femininity, and the ever-changing cycles of life. Atop the crescent moon sits a dainty star, representing dreams, guidance, and the pursuit of aspirations.

        What truly makes this necklace special is the inclusion of a birthstone of your choice. With a range of vibrant gemstones available, you can personalize this piece to reflect your own birth month or that of a loved one. The birthstone adds a touch of color and significance, infusing the necklace with personalized meaning and sentiment.

        The pendant is expertly crafted from high-quality sterling silver, known for its durability and timeless beauty. The lustrous silver complements any outfit, from casual to formal, and is sure to catch the eye of admirers. The pendant is suspended from a delicate yet sturdy chain, allowing it to rest gracefully on the neckline. """,
        price = 29.82,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product21.png',
        category = 'Jewelry & Accessories'
    )
    product22 = Product(
        name = 'Foliage Necklace',
        shop_id = 2,
        details = """Plant this symbolic piece in your collection—a delicate daily reminder of our connection to the natural world.

        Which foliage speaks to you?

        WILLOW: symbolizes enchantment, imagination, protection & softness
        MONSTERA: symbolizes energy, artistry, joy & abundance
        OLIVE BRANCH: symbolizes peace, hope, courage & forgiveness""",
        price = 51.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product22.png',
        category = 'Jewelry & Accessories'
    )
    product23 = Product(
        name = 'Pearl Droplet Anklet',
        shop_id = 2,
        details = """In the forecast: a soft shower of pearls.

        Illuminate every step with tiny freshwater pearls dropped from our daintiest chain—a touch of mesmerizing movement for your wedding day, every day or a pearls' night out. ………………………………….
        D E T A I L S

        • Materials: 100 percent sterling silver, 14k gold fill
        • Chain: sturdy cable, 1.5mm wide, adjustable by 1"
        • Charms: Five 3.75mm pearls""",
        price = 75.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product23.png',
        category = 'Jewelry & Accessories'
    )
    product24 = Product(
        name = 'Diamond Twist Ring',
        shop_id = 2,
        details = """Crafted with utmost precision and care, this minimalist stacking ring features a delicate band in a luxurious gold finish. Its sleek and slender profile adds a modern touch, making it perfect for everyday wear or as an accent piece for special occasions.

        At the heart of this mesmerizing ring, you'll find a sparkling diamond that adds a captivating touch of brilliance. This carefully selected gemstone is a symbol of love, strength, and endurance, making it an ideal choice for an anniversary gift or to commemorate a special milestone in your relationship.

        The Diamond Twist Ring is more than just a piece of jewelry. It is a reflection of your unique style and personality, effortlessly elevating any outfit and leaving a lasting impression. Its versatile design allows for easy stacking with other rings, giving you the freedom to create your own personalized look. """,
        price = 270.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product24.png',
        category = 'Jewelry & Accessories'
    )
    product25 = Product(
        name = 'Mid Century Modern Colorful Bohemian Art Print',
        shop_id = 1,
        details = """Inspired by the artistic movements of the mid-20th century, this print perfectly captures the essence of the era's iconic design and combines it with a contemporary twist. The abstract faces are intricately designed, showcasing a fusion of geometric shapes, bold lines, and expressive forms. Each face exudes its own unique personality, inviting viewers to interpret and appreciate the art in their own way.

        The explosion of colors featured in this print adds a touch of vivacity to any room. The carefully chosen color swatches, ranging from deep blues and vibrant yellows to rich reds and lush greens, create a harmonious blend that injects energy and liveliness into your living space. Whether you hang it in your bedroom, living room, or office, this art print effortlessly becomes the focal point of any room, sparking conversations and inspiring creativity.

        Crafted with meticulous attention to detail, this art print is made using high-quality materials to ensure longevity and durability. The vivid colors are printed on archival-grade paper, guaranteeing that the artwork remains vibrant and true to its original form for years to come. Its standard size allows for easy framing, giving you the freedom to choose a frame that complements your personal style and interior decor. """,
        price = 30.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product25.png',
        category = 'Home & Living'
    )
    product26 = Product(
        name = 'Bonnet Wood Stool (Blue)',
        shop_id = 1,
        details = """The Bonnet Stool is a hardy, solid-wood functional object for the home or office that can function as an end table, side table, stool, or plant stand and will look dynamite in combination with just about any thoughtfully decorated space. It is Handmade in Indianapolis, Indiana with 2.5" round Douglas Fir legs and a Sycamore top accented with Oak Dowels. The Bonnet Stool is hand finished with three coats of wipe on poly-oil wax finish for a durable, water-resistant satin glow. It's available in two sizes and a variety of colors. """,
        price = 139.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product26.png',
        category = 'Home & Living'
    )
    product27 = Product(
        name = 'Clip Shaped Side Table',
        shop_id = 1,
        details = """Material】 ABS Plastic
        【Style】 Modern / Nordic
        【Applicable space】 living room / bedroom / study / balcony / Garden / courtyard
        【Applicable scenario】: Home / Office / hotel / Cafe
        【Usage】: living room furniture / bedroom furniture / balcony furniture
        【Function】 dining chair / dressing chair / shoe changing stool/Footstool/Coffee stool/benches
        【Size】 : Length 30 * width 30, height 120cm, measured manually, subject to the real object, with an error of 2 cm
        【Excellence】 shoe changing stool is especially suitable for home scenes such as porch, study, TV cabinet and bedroom to instantly improve family taste
        【Space】 beautiful and creative decoration can instantly improve the taste and style of home decoration. No matter what kind of home style and space, it can match the creative decoration.
        【Note】 during manual manufacturing, wrinkles and scratches on the surface are normal, according to the color and ambient light, the product may have slight color difference, and the size measured manually is only for reference """,
        price = 356.71,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product27.png',
        category = 'Home & Living'
    )
    product28 = Product(
        name = 'Linen Dinner Napkins',
        shop_id = 1,
        details = """This set features my hand-carved, block printed Sardines pattern. Every piece has been hand-printed in non-toxic fabric inks with my original illustrations.

        Linen is a great, eco-friendly material that softens & becomes better with age. This larger size is perfect as a luxuriously oversized napkin, or can be used as a placemat in your tablescape.
        These turn even the most boring Tuesday night dinner into a classy affair - and are packaged in sets to make a perfect hostess/housewarming gift!

        - 55 Linen / 45% Cotton
        - Oversized 18" x 20"
        - Finished hemmed edges
        - Machine wash cold & tumble dry low - iron as needed
        - Packaged with belly band
        - All orders are wrapped in Julie Peach Palm Sunset tissue paper & sticker - ready for gifting!
        - Ships in compostable mailer """,
        price = 28.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product28.png',
        category = 'Home & Living'
    )
    product29 = Product(
        name = 'Large Green Leaves Headboard',
        shop_id = 1,
        details = """Crafted with meticulous attention to detail, this headboard features a vibrant array of large green leaves intricately designed to mimic the lush foliage found in the heart of the jungle. The lifelike textures and rich shades of green create a visually striking and immersive experience, making you feel like you're waking up in the midst of a botanical paradise every day.

        Designed to blend seamlessly with various interior styles, from boho to contemporary, this headboard is a versatile choice that complements any room. Whether you're looking to revitalize your bedroom sanctuary or add an enchanting touch to your living room, this headboard promises to transform your space into a haven of tranquility and natural beauty.

        Not only is this headboard a stylish and unique decor piece, but it also makes an exceptional gift for plant lovers and nature enthusiasts alike. Surprise your loved ones with this enchanting Safari-inspired addition to their nursery, allowing them to create a jungle-themed haven for their little one. Moreover, it's an excellent choice for a Mother's Day gift, providing a thoughtful and eye-catching present that celebrates the nurturing spirit of moms everywhere.""",
        price = 59.09,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product29.png',
        category = 'Art & Collectibles'
    )
    product30 = Product(
        name = 'Sleeping Hare',
        shop_id = 4,
        details = """The Sleeping Hare print showcases the artistry and skill of the linocut technique, where the image is painstakingly carved into a linoleum block and then pressed onto high-quality paper. This process ensures that each print is unique, with subtle variations that add character and charm.

        Measuring [dimensions], this print is the perfect size to adorn any wall in your home or office. Its timeless appeal and neutral color palette make it a versatile addition to any decor style. Whether hung alone as a focal point or paired with other nature-inspired art, the Sleeping Hare print will create an atmosphere of tranquility and harmony.

        The image of the sleeping hare exudes a sense of calmness and peace, making it an ideal choice for bedrooms, meditation spaces, or any area where you seek relaxation. The hare, often associated with intuition and sensitivity, symbolizes connection with the natural world and reminds us to find balance in our lives. """,
        price = 18.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product30.png',
        category = 'Art & Collectibles'
    )
    product31 = Product(
        name = 'Reggie',
        shop_id = 4,
        details = """Reggie is hand-carved from a linoleum block, showcasing the skillful artistry and attention to detail of the artist. The bold black silhouette of this majestic cat stands out against a contrasting background, creating a striking visual impact that will enhance any space.

        Reggie is perfectly sized to fit into a variety of settings, whether it be a cozy living room, a stylish office, or a trendy cafe. Hang it on a wall or display it on a shelf to add a touch of elegance and sophistication to your surroundings.

        The linocut technique used in creating Reggie lends a distinct texture to the artwork, adding depth and character. Every print is a unique piece, with slight variations in ink saturation and texture, making each Reggie print truly one-of-a-kind.

        Crafted with exceptional quality, Reggie is printed on high-quality archival paper using fade-resistant inks. This ensures that the print will retain its vibrant colors and sharp details for years to come, allowing you to enjoy the enigmatic presence of Reggie in all his splendor.

        Whether you are a cat lover, an art collector, or simply someone who appreciates the beauty of handcrafted creations, Reggie, the Black Cat Linocut Print, is a striking addition to any art collection. Bring the captivating allure of this magnificent feline into your space and let Reggie enchant you with his mysterious charm.""",
        price = 20.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product31.png',
        category = 'Art & Collectibles'
    )
    product32 = Product(
        name = 'Botanical Textile Print On Hanging Canvas',
        shop_id = 4,
        details = """Featuring a large wall art design, this modern wall hanging measures 175 centimeters in length, making it a striking focal point for your home or office. The canvas is carefully crafted from high-quality materials, ensuring durability and longevity, so you can enjoy its beauty for years to come.

        The botanical print showcases intricate details of various plant species, highlighting their delicate petals, vibrant colors, and graceful foliage. Each element is skillfully rendered, giving the artwork a lifelike appearance that will captivate any observer. The vintage-inspired style adds a nostalgic charm, evoking a sense of timeless elegance and sophistication.

        This botanical textile print comes with a convenient hanging system, allowing for easy installation and positioning. Whether you choose to display it in your living room, bedroom, or even a home office, it will instantly elevate the aesthetic appeal of your space. The large size ensures that it becomes a statement piece that draws attention and sparks conversations.""",
        price = 61.50,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product32.png',
        category = 'Art & Collectibles'
    )
    product33 = Product(
        name = 'Opossum Bandana',
        shop_id = 3,
        details = """Immerse yourself in a world of whimsy and adventure with this enchanting accessory that beautifully combines literature, nature, and style. Inspired by storybooks and adorned with delightful animal motifs, lush jungle leaves, and a vibrant green color palette, this bandana is a must-have for book lovers and nature enthusiasts alike.

        Crafted from high-quality cotton, this 24" bandana is not only soft and comfortable to wear but also durable and long-lasting. Its generous size allows for versatile styling options, whether you choose to wear it around your neck, tie it on your bag, or even sport it as a headband. The Opossum Bandana adds a touch of literary charm to any outfit, instantly transforming your look from ordinary to extraordinary.

        Designed with attention to detail, the Opossum Bandana features an adorable opossum illustration, surrounded by a captivating array of leaves and jungle foliage. This whimsical design captures the essence of an untamed world where imagination knows no bounds. Whether you're a fan of classic tales, adventure stories, or simply enjoy getting lost in the pages of a book, this bandana serves as a subtle yet striking statement piece that proudly showcases your love for literature. """,
        price = 16.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product33.png',
        category = 'Clothing & Shoes'
    )
    product34 = Product(
        name = 'Campfire Bandana',
        shop_id = 3,
        details = """Dusk nears as our lone camper warms by a crackling fire in "Great Pines". Mellow blue skies pop through the dark silhouettes of picturesque pines. Enjoy nature to its fullest with this wistful bandana.
        .
        Inspiration: In The Oregon Country, 1915

        ∙ Soft, 100% natural cotton
        ∙ Fan-favorite 24” size
        ∙ Durable and breathable
        ∙ Made to last a lifetime
        ∙ Designed in Portland, Maine
        ∙ A community-chosen design """,
        price = 16.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product34.png',
        category = 'Clothing & Shoes'
    )
    product35 = Product(
        name = 'Teeny Tiny Frog Necklace',
        shop_id = 2,
        details = """Introducing the Teeny Tiny Frog Necklace, a delightful and charming piece of jewelry that is sure to capture the hearts of frog lovers everywhere. This necklace showcases a colorful ceramic frog charm that exudes whimsy and personality.

        The Teeny Tiny Frog Necklace is the perfect accessory for those who appreciate the beauty and playfulness of these enchanting creatures. Crafted with great attention to detail, the ceramic charm captures the essence of a tiny frog, complete with intricate features and vibrant colors that bring it to life.""",
        price = 44.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product35.png',
        category = 'Jewelry & Accessories'
    )
    product36 = Product(
        name = '2-Pieces Branch Bobby Pins',
        shop_id = 2,
        details = """Each bobby pin features a delicate branch design, intricately molded and plated with a radiant gold and silver finish. The organic contours of the branches mimic the natural grace of twigs, lending a captivating and ethereal aura to your hair. These pins effortlessly blend sophistication with a touch of nature, creating a unique and eye-catching accessory that will enhance any hairdo.

        Not only do these hair pins exude charm and elegance, but they also provide exceptional functionality. The sturdy construction ensures a secure hold, keeping your hair flawlessly in place throughout the day or night. Whether you opt for an updo, half-up hairstyle, or any other creative arrangement, these bobby pins are versatile enough to complement a wide range of looks, from casual to formal.""",
        price = 4.99,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product36.png',
        category = 'Jewelry & Accessories'
    )
    product37 = Product(
        name = 'Crystal Bee Chain Bracelet',
        shop_id = 2,
        details = """Made from premium 925 sterling silver, this bracelet showcases the highest standards of craftsmanship, ensuring both durability and a radiant finish that will last for years to come. The lustrous gold or silver plating adds a touch of opulence, enhancing the bracelet's beauty and sophistication.

        The centerpiece of this bracelet is the intricate bee design, expertly crafted with precision. The bee, a symbol of industriousness and harmony with nature, adds a touch of whimsy and grace to your ensemble. The bee's body is adorned with dazzling crystals that catch the light with every movement, creating an enchanting sparkle that will surely turn heads.

        The delicate chain complements the bee pendant perfectly, adding an elegant and refined touch to the overall design. With its adjustable length, this bracelet offers a comfortable fit for most wrist sizes, ensuring that you can wear it with confidence and ease. """,
        price = 42.66,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product37.png',
        category = 'Jewelry & Accessories'
    )
    product38 = Product(
        name = 'Gold Boho Earrings',
        shop_id = 2,
        details = """Make a statement with our beautiful bohemian tree earrings. These earrings feature a unique and intricate design that is sure to turn heads.

        The tree design is inspired by bohemian culture and adds a touch of earthy charm to any outfit. The stamped gold finish adds a touch of elegance and sophistication to the earrings, making them perfect for any occasion.

        The lightweight design of these earrings ensures comfortable wear all day long, while the sturdy hooks keep them securely in place.

        These earrings are a perfect gift for anyone who loves bohemian or nature-inspired jewelry. They also make a great addition to your own jewelry collection and are perfect for adding a touch of style to any outfit.

        Don't miss out on the chance to own these beautiful and unique earrings. Order now and add a touch of bohemian charm to your jewelry collection! """,
        price = 22.00,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product38.png',
        category = 'Jewelry & Accessories'
    )
    product39 = Product(
        name = 'Bat Hanging Bookshelf',
        shop_id = 1,
        details = """Introducing our Bat Hanging Bookshelf, a unique and functional piece of bohemian home decor that doubles as a book storage solution. Perfect for kids' rooms or as a gift for teachers, this witchy room decor item is also ideal for book lovers seeking a mid-century modern or gothic touch. Its versatile design fits well in boho nurseries and makes for a great addition to any kid's wall bookshelf collection. Order now and add a touch of whimsy to your home!

        This Macrame Hanging Bookshelf is handcrafted/ hand woven with Natural Friendly Cotton Cord.

        DETAIL:
        - Dimensions:
        - Length: 24.8"W ~ 62cm
        - Width (without book):
        + 6 books: 16" ~ 40cm
        + 8 books: 20" ~ 50cm
        + 10 books: 24" ~ 60cm
        + 12 books: 28" ~ 70cm """,
        price = 38.10,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product39.png',
        category = 'Home & Living'
    )
    product40 = Product(
        name = 'Florals and Butterfly Wall Decor ',
        shop_id = 1,
        details = """Introducing our stunning Florals and Butterfly Wall Decor, a captivating addition to your living space that effortlessly blends the beauty of nature with eclectic charm. This 14" x 22" framed art print features an enchanting composition of vibrant flowers and delicate butterflies, creating a whimsical atmosphere that will delight any observer.

        Crafted with meticulous attention to detail, this bohemian-inspired wall hanging showcases the intricate patterns and vivid colors found in nature. The blossoming flowers, each petal carefully depicted, bring a sense of life and vitality to your walls. The graceful butterflies, with their delicate wings, add an ethereal touch, evoking a feeling of lightness and freedom. """,
        price = 82.35,
        main_image = 'https://everetsybucket.s3.us-west-1.amazonaws.com/product40.png',
        category = 'Home & Living'
    )
    # product1 = Product(
    #     name = '',
    #     shop_id = '',
    #     details = '',
    #     price = '',
    #     main_image = '',
    #     category = ''
    # )
    # product1 = Product(
    #     name = '',
    #     shop_id = '',
    #     details = '',
    #     price = '',
    #     main_image = '',
    #     category = ''
    # )
    # product1 = Product(
    #     name = '',
    #     shop_id = '',
    #     details = '',
    #     price = '',
    #     main_image = '',
    #     category = ''
    # )
    # product1 = Product(
    #     name = '',
    #     shop_id = '',
    #     details = '',
    #     price = '',
    #     main_image = '',
    #     category = ''
    # )
    # product1 = Product(
    #     name = '',
    #     shop_id = '',
    #     details = '',
    #     price = '',
    #     main_image = '',
    #     category = ''
    # )
    # product1 = Product(
    #     name = '',
    #     shop_id = '',
    #     details = '',
    #     price = '',
    #     main_image = '',
    #     category = ''
    # )
    # product1 = Product(
    #     name = '',
    #     shop_id = '',
    #     details = '',
    #     price = '',
    #     main_image = '',
    #     category = ''
    # )
    # product1 = Product(
    #     name = '',
    #     shop_id = '',
    #     details = '',
    #     price = '',
    #     main_image = '',
    #     category = ''
    # )




    products = [product1,
                product2,
                product3,
                product4,
                product5,
                product6,
                product7,
                product8,
                product9,
                product10,
                product11,
                product12,
                product13,
                product14,
                product15,
                product16,
                product17,
                product18,
                product19,
                product20,
                product21,
                product22,
                product23,
                product24,
                product25,
                product26,
                product27,
                product28,
                product29,
                product30,
                product31,
                product32,
                product33,
                product34,
                product35,
                product36,
                product37,
                product38,
                product39,
                product40]
    [db.session.add(product) for product in products]
    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
