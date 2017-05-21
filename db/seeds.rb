# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(first_name: "John", last_name: "Ballon", email: "email@gmail.com", password: "password")
User.create(first_name: "Elliot", last_name: "Humphrey", email: "email1@gmail.com", password: "password")
User.create(first_name: "Gary", last_name: "Yeh", email: "email2@gmail.com", password: "password")
User.create(first_name: "Eric", last_name: "Wong", email: "email3@gmail.com", password: "password")
User.create(first_name: "Robin", last_name: "Wilborn", email: "email4@gmail.com", password: "password")
User.create(first_name: "Sean", last_name: "Perfecto", email: "email5@gmail.com", password: "password")
User.create(first_name: "Vilya", last_name: "Levitskiy", email: "email6@gmail.com", password: "password")
User.create(first_name: "Mark", last_name: "Azuolas", email: "email7@gmail.com", password: "password")
User.create(first_name: "Grey", last_name: "Keith", email: "email8@gmail.com", password: "password")
User.create(first_name: "Sam", last_name: "Faber-Manning", email: "email9@gmail.com", password: "password")
User.create(first_name: "Monte", last_name: "Jiran", email: "email10@gmail.com", password: "password")

City.destroy_all

City.create(name: "Perth", image_url: "http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495302501/image.adapt.1663.medium_as661s.jpg")
City.create(name: "Kyoto", image_url: "http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495173344/kyoto-best-lake-ever_xhcxgq.jpg")
City.create(name: "Venice", image_url: "http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495173247/venice-italy_qyqrhm.jpg")
City.create(name: "Stavanger", image_url: "http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495173178/stavanger_da9l8h.jpg")
City.create(name: "Tokyo", image_url: "http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495232733/places.tokyo_sr38ni.jpg")
City.create(name: "Oslo", image_url: "http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495301816/oslo_uebdio.jpg")
City.create(name: "San Francisco", image_url: "http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495172076/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco_egcxtn.jpg")
City.create(name: "New York", image_url: "http://res.cloudinary.com/dzbwfwz4j/image/upload/v1495172034/5104226627001_5244714388001_5205235439001-vs_ywumkw.jpg")


Event.destroy_all

Event.create(date: Faker::Date.forward(50), time: "9:30 AM", address: "1-19-8 Dogenzaka, Shibuya-ku", description: "Hip, compact, and urban.", host_id: 1, city_id: 5, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "9:30 AM", address: "1-16-11 Tomigaya, Shibuya-ku", description: "Vintage and classy.", host_id: 1, city_id: 5, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "9:30 AM", address: "5-17-5 Jingumae, Shibuya-ku", description: "Industrial decor with fast-moving baristas at the core.", host_id: 3, city_id: 5, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "9:30 AM", address: "3-1-4 Kiyosumi, Koto", description: "Funky and confortable.", host_id: 4, city_id: 5, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "9:30 AM", address: "1-17-23 Meguro, Meguro-ku", description: "Friendly and open, but deadly serious about tea.", host_id: 5, city_id: 5, max_attend: 6)
