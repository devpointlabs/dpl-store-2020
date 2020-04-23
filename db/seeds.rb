

tshirts = Category.create(name: 'T-Shirts', image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587490051/Screen%20Shot%202020-04-21%20at%2011.26.45%20AM.png.png')

shirt = Product.create(
  category_id: tshirts.id,
    title: 'Grey Tshirt',
    description: "It looks grey so you don't have to",
    price: 7,
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587486640/DPL_Gray.jpg.jpg',
    featured: 'true'
)

Image.create(
  url: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587486652/DPL_Gray_Back.jpg.jpg', 
  product_id: shirt.id,
)

Product.create(
  category_id: tshirts.id,
    title: 'Planet',
    description: "A t-shirt truly worthy of the cosmos.",
    price: 7,
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487345/Planet.jpg.jpg',
    featured: 'false'
)

hats = Category.create(name: 'Hats', image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAD0EqW.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f&x=2187&y=1290')

hat = Product.create(
  category_id: hats.id,
    title: 'Black Hat',
    description: "There are black hat hackers out there. Now you can pretend to be one.",
    price: 15,
    has_size: true,
    sizes: {noSize: 20 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587486257/DPL_Hat.jpg.jpg',
    featured: 'true'
)

Image.create(
  url: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487265/DPL_Hat2.jpg.jpg', 
  product_id: hat.id,
)



hoodies = Category.create(name: 'Hoodies', image:'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587490157/Screen%20Shot%202020-04-21%20at%2011.28.26%20AM.png.png')

jacket = Product.create(
  category_id: hoodies.id,
    title: 'Grey Jacket',
    description: "Ever feeling cold on a dark grey rainey day? Blend into the grey with this stylish hoodie.",
    price: 30,
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487178/DPL_Jacket.jpg.jpg',
    featured: 'true'
)

Image.create(
  url: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487188/DPL_Jacket2.jpg.jpg', 
  product_id: jacket.id,
)

Product.create(
  category_id: hoodies.id,
    title: 'Black Hoodie',
    description: "Hoodies are comfortable. This one is probably more comfortable than most.",
    price: 20,
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487446/DPL_Black_Hoodie.jpg.jpg',
    featured: 'false'

)

greyhoodie = Product.create(
  category_id: hoodies.id,
    title: 'Grey Hoodie',
    description: "Soft grey material and a hood. What more could you want?",
    price: 25,
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487545/DPL_Gray_Hoodie.jpg.jpg',
    featured: 'true'
)

Image.create(
  url: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487554/DPL_Gray_Hoodie_Back.jpg.jpg', 
  product_id: greyhoodie.id,
)
Image.create(
  url: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487568/DPL_Gray_Hoodie2.jpg.jpg', 
  product_id: greyhoodie.id,
)
Image.create(
  url: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487579/DPL_Hoodie_3.jpg.jpg', 
  product_id: greyhoodie.id,
)

other = Category.create(name: 'Other', image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587490174/Screen%20Shot%202020-04-21%20at%2011.28.44%20AM.png.png')
glasses = Product.create(
  category_id: other.id,
    title: 'Glasses',
    description: "You wont see the world through rose colored glasses, but these are bit better",
    price: 15,
    has_size: false,
    sizes: {noSize: 20 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587486943/Sunglasses.jpg.jpg',
    featured: 'true'
)

Image.create(
  url: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587486953/Sunglass2.jpg.jpg', 
  product_id: glasses.id,
)
Product.create(
  category_id: other.id,
    title: 'Koozie',
    description: "Coding can be hard. Beer can make that better. Keep your beer cold with this koozie. Or like... sparkling water if you're still at work.",
    price: 6,
    has_size: false,
    sizes: {noSize: 20 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587486977/DPL_koozie.jpg.jpg',
    featured: 'false'

)
Product.create(
  category_id: other.id,
    title: 'Thin Sticker',
    description: "So thin. It will fit on a laptop, or a water bottle. We both know whats happening to these stickers.",
    price: 2,
    has_size: false,
    sizes: {noSize: 20 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487000/P1049064.jpeg.jpg',
    featured: 'false'

)
Product.create(
  category_id: other.id,
    title: 'Small Sticker',
    description: "DevPoint Labs Black Beaker Logo",
    price: 1,
    has_size: false,
    sizes: {noSize: 20 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487027/P1049065.jpeg.jpg',
    featured: 'false'

)
Product.create(
  category_id: other.id,
    title: 'Medium Sticker',
    description: 'Black DevPoint Labs Logo',
    price: 2,
    has_size: false,
    sizes: {noSize: 20 },
    main_image: 'https://res.cloudinary.com/dpo2wzfn1/image/upload/v1587487052/P1049068.jpeg.jpg',
    featured: 'false'
)



puts 'Products Seeded'

Admin.create(name:"admin", email:"email@email.com", password:"password")

puts "admin created with email: email@email.com, password:password"
