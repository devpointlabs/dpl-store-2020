

tshirts = Category.create(name: 'T-Shirts', image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587490051/U2NyZWVuIFNob3QgMjAyMC0wNC0yMSBhdCAxMS4yNi40NSBBTS5wbmc=/preview')

shirt = Product.create(
  category_id: tshirts.id,
    title: 'Grey Tshirt',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587486640/RFBMX0dyYXkuanBn/preview',
    featured: 'true'
)

Image.create(
  url: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587486652/RFBMX0dyYXlfQmFjay5qcGc=/preview', 
  product_id: shirt.id,
)

Product.create(
  category_id: tshirts.id,
    title: 'Planet',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487345/UGxhbmV0LmpwZw==/preview',
    featured: 'false'
)

hats = Category.create(name: 'Hats', image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAD0EqW.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f&x=2187&y=1290')

hat = Product.create(
  category_id: hats.id,
    title: 'Black Hat',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587486257/RFBMX0hhdC5qcGc=/preview',
    featured: 'true'
)

Image.create(
  url: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487265/RFBMX0hhdDIuanBn/preview', 
  product_id: hat.id,
)



hoodies = Category.create(name: 'Hoodies', image:'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587490157/U2NyZWVuIFNob3QgMjAyMC0wNC0yMSBhdCAxMS4yOC4yNiBBTS5wbmc=/preview')

jacket = Product.create(
  category_id: hoodies.id,
    title: 'Grey Jacket',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487178/RFBMX0phY2tldC5qcGc=/preview',
    featured: 'true'
)

Image.create(
  url: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487188/RFBMX0phY2tldDIuanBn/preview', 
  product_id: jacket.id,
)

Product.create(
  category_id: hoodies.id,
    title: 'Black Hoodie',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487446/RFBMX0JsYWNrX0hvb2RpZS5qcGc=/preview',
    featured: 'false'

)

greyhoodie = Product.create(
  category_id: hoodies.id,
    title: 'Grey Hoodie',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: { Xsmall: 5, Small: 5, Medium: 5, Large: 5, XLarge: 5, XXL: 5 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487545/RFBMX0dyYXlfSG9vZGllLmpwZw==/preview',
    featured: 'true'
)

Image.create(
  url: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487554/RFBMX0dyYXlfSG9vZGllX0JhY2suanBn/preview', 
  product_id: greyhoodie.id,
)
Image.create(
  url: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487568/RFBMX0dyYXlfSG9vZGllMi5qcGc=/preview', 
  product_id: greyhoodie.id,
)
Image.create(
  url: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487579/RFBMX0hvb2RpZV8zLmpwZw==/preview', 
  product_id: greyhoodie.id,
)

other = Category.create(name: 'Other', image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587490174/U2NyZWVuIFNob3QgMjAyMC0wNC0yMSBhdCAxMS4yOC40NCBBTS5wbmc=/preview')
glasses = Product.create(
  category_id: other.id,
    title: 'Glasses',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: {noSize: 20 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587486943/U3VuZ2xhc3Nlcy5qcGc=/preview',
    featured: 'true'
)

Image.create(
  url: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587486953/U3VuZ2xhc3MyLmpwZw==/preview', 
  product_id: glasses.id,
)
Product.create(
  category_id: other.id,
    title: 'Koozie',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: {noSize: 20 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587486977/RFBMX2tvb3ppZS5qcGc=/preview',
    featured: 'false'

)
Product.create(
  category_id: other.id,
    title: 'Thin Sticker',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: {noSize: 20 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487000/UDEwNDkwNjQuanBlZw==/preview',
    featured: 'false'

)
Product.create(
  category_id: other.id,
    title: 'Small Sticker',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: {noSize: 20 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487027/UDEwNDkwNjUuanBlZw==/preview',
    featured: 'false'

)
Product.create(
  category_id: other.id,
    title: 'Medium Sticker',
    description: Faker::Movies::HarryPotter.quote,
    price: Faker::Number.decimal(l_digits: 2),
    has_size: true,
    sizes: {noSize: 20 },
    main_image: 'https://res-console.cloudinary.com/dpo2wzfn1/thumbnails/v1/image/upload/v1587487052/UDEwNDkwNjguanBlZw==/preview',
    featured: 'false'
)



puts 'Products Seeded'

Admin.create(name:"admin", email:"admin@email.com", password:"adminPassword")

puts "admin created with email: admin@email.com, password:adminPassword"
