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

User.create(first_name: "Aaron", last_name: "Wayne", email: "email11@gmail.com", password: "password")
User.create(first_name: "Alex", last_name: "Scott", email: "email12@gmail.com", password: "password")
User.create(first_name: "Alissara", last_name: "Rojanapairat", email: "email13@gmail.com", password: "password")
User.create(first_name: "Allen", last_name: "Chen", email: "email14@gmail.com", password: "password")
User.create(first_name: "Audrey", last_name: "Mefford", email: "email15@gmail.com", password: "password")
User.create(first_name: "Brady", last_name: "Kimball", email: "email16@gmail.com", password: "password")
User.create(first_name: "Brandon", last_name: "Chui", email: "email17@gmail.com", password: "password")
User.create(first_name: "Brandon", last_name: "Tat", email: "email18@gmail.com", password: "password")
User.create(first_name: "Bryant", last_name: "Luong", email: "email19@gmail.com", password: "password")
User.create(first_name: "David", last_name: "Dobrynin", email: "email20@gmail.com", password: "password")
User.create(first_name: "David", last_name: "Wong", email: "email21@gmail.com", password: "password")

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

Event.create(date: Faker::Date.forward(50), time: "8:45 AM", address: "16a Cloisters Arcade,, 865 Hay St, Perth WA 6000, Australia", description: "Come relax with strangers.", host_id: 2, city_id: 1, max_attend: 4)
Event.create(date: Faker::Date.forward(50), time: "11:40 AM", address: "16 Gordon St, West Perth WA 6005, Australia", description: "Great venue.", host_id: 2, city_id: 1, max_attend: 5)
Event.create(date: Faker::Date.forward(50), time: "10:30 AM", address: "172 St Georges Terrace, Perth WA 6000, Australia", description: "They have the best tea in town.", host_id: 2, city_id: 1, max_attend: 3)
Event.create(date: Faker::Date.forward(50), time: "4:10 PM", address: "125 St Georges Terrace, Perth WA 6000, Australia", description: "Rain or shine!", host_id: 1, city_id: 1, max_attend: 8)
Event.create(date: Faker::Date.forward(50), time: "12:30 PM", address: " 90 King St, Perth WA 6000, Australia", description: "They make great sandwiches too!", host_id: 1, city_id: 1, max_attend: 6)

Event.create(date: Faker::Date.forward(50), time: "8:55 AM", address: "239 E 5th St, New York, NY 10003", description: "Local chain.", host_id: 3, city_id: 8, max_attend: 3)
Event.create(date: Faker::Date.forward(50), time: "11:40 AM", address: "187 Columbus Ave, New York, NY 10023", description: "Free-trade tea here.", host_id: 1, city_id: 8, max_attend: 1)
Event.create(date: Faker::Date.forward(50), time: "10:30 AM", address: "18 W 29th St, New York, NY 10001", description: "Thoughtfully sourced tea.", host_id: 3, city_id: 8, max_attend: 2)
Event.create(date: Faker::Date.forward(50), time: "8:10 AM", address: "180 10th Ave, New York, NY 10011", description: "Soccer fans!", host_id: 4, city_id: 8, max_attend: 1)
Event.create(date: Faker::Date.forward(50), time: "12:30 PM", address: "21 E 27th St, New York, NY 10016", description: "Art-adorned tea shop.", host_id: 5, city_id: 8, max_attend: 6)

Event.create(date: Faker::Date.forward(50), time: "8:30 AM", address: "735 Columbus Ave, San Francisco, CA 94133", description: "Venerable tea shop.", host_id: 1, city_id: 7, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "9:40 AM", address: "200 Columbus Ave, San Francisco, CA 94133", description: "Small & bustling spot.", host_id: 1, city_id: 7, max_attend: 3)
Event.create(date: Faker::Date.forward(50), time: "10:30 AM", address: "375 Valencia St, San Francisco, CA 94103", description: "Trendy cafe chain with great tea!", host_id: 3, city_id: 7, max_attend: 1)
Event.create(date: Faker::Date.forward(50), time: "8:10 AM", address: "315 Linden St, San Francisco, CA 94102", description: "Rustic ambiance.", host_id: 4, city_id: 7, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "12:30 PM", address: "375 Taylor St, San Francisco, CA 94102", description: "Artisanal tea.", host_id: 5, city_id: 7, max_attend: 1)

Event.create(date: Faker::Date.forward(50), time: "9:30 AM", address: "Grønlandsleiret 32, 0190 Oslo, Norway", description: "Contemporary setting.", host_id: 1, city_id: 6, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "1:30 PM", address: "Olav Vs gate 2, 0161 Oslo, Norway", description: "Bi-level airy spot.", host_id: 1, city_id: 6, max_attend: 4)
Event.create(date: Faker::Date.forward(50), time: "4:30 PM", address: "Thorvald Meyers gate 18A, 0474 Oslo, Norway", description: "Great pastries.", host_id: 3, city_id: 6, max_attend: 8)
Event.create(date: Faker::Date.forward(50), time: "9:15 AM", address: "Universitetsgata 2, 0164 Oslo, Norway", description: "Specializes in custom blends.", host_id: 4, city_id: 6, max_attend: 2)
Event.create(date: Faker::Date.forward(50), time: "11:30 AM", address: "Grüners gate 1, 0552 Oslo, Norway", description: "Laid back local chain.", host_id: 5, city_id: 6, max_attend: 1)

Event.create(date: Faker::Date.forward(50), time: "8:30 AM", address: "1-19-8 Dogenzaka, Shibuya-ku", description: "Trendy chain.", host_id: 1, city_id: 5, max_attend: 4)
Event.create(date: Faker::Date.forward(50), time: "6:40 PM", address: "1-16-11 Tomigaya, Shibuya-ku", description: "Bakey cafe.", host_id: 1, city_id: 5, max_attend: 3)
Event.create(date: Faker::Date.forward(50), time: "10:30 AM", address: "5-17-5 Jingumae, Shibuya-ku", description: "Loose-leaf teas.", host_id: 3, city_id: 5, max_attend: 0)
Event.create(date: Faker::Date.forward(50), time: "8:10 AM", address: "3-1-4 Kiyosumi, Koto", description: "Funky and confortable.", host_id: 4, city_id: 5, max_attend: 0)
Event.create(date: Faker::Date.forward(50), time: "12:30 PM", address: "1-17-23 Meguro, Meguro-ku", description: "Intimate tea shop.", host_id: 5, city_id: 5, max_attend: 6)

Event.create(date: Faker::Date.forward(50), time: "8:30 AM", address: "Klubbgata 3, 4013 Stavanger, Norway", description: "Upscale, light-filled cafe.", host_id: 13, city_id: 4, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "9:40 AM", address: "Øvre Holmegate 25, 4006 Stavanger, Norway", description: "Snacks will be served.", host_id: 13, city_id: 4, max_attend: 3)
Event.create(date: Faker::Date.forward(50), time: "12:10 PM", address: "Øvre Holmegate 32, 4006 Stavanger, Norway", description: "International teas.", host_id: 3, city_id: 4, max_attend: 5)
Event.create(date: Faker::Date.forward(50), time: "8:10 AM", address: "Kongsgata 48, 4005 Stavanger, Norway", description: "Cozy spot.", host_id: 11, city_id: 4, max_attend: 4)
Event.create(date: Faker::Date.forward(50), time: "12:30 PM", address: "Klubbgata 5, 4013 Stavanger, Norway", description: "Quaint tea shop.", host_id: 11, city_id: 4, max_attend: 6)

Event.create(date: Faker::Date.forward(50), time: "8:30 AM", address: "Sestiere di S. Marco, 950, 30124 Venezia, Italy", description: "Hip, compact, and urban.", host_id: 13, city_id: 3, max_attend: 5)
Event.create(date: Faker::Date.forward(50), time: "3:40 PM", address: "Piazza San Marco, 121, 30100 Venezia, Italy", description: "Vintage and classy.", host_id: 13, city_id: 3, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "10:30 AM", address: "Piazza San Marco, 133/134, Venezia, Italy", description: "Industrial decor with fast-moving baristas at the core.", host_id: 11, city_id: 3, max_attend: 0)
Event.create(date: Faker::Date.forward(50), time: "8:10 AM", address: "Sestiere Cannaregio, 1337, 30121 Venezia, Italy", description: "Funky and confortable.", host_id: 11, city_id: 3, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "12:30 PM", address: "Venezia Rialto, Calle dei Cinque, San Polo, 609, 30100 Venezia, Italy", description: "Friendly and open, but deadly serious about tea.", host_id: 11, city_id: 3, max_attend: 2)

Event.create(date: Faker::Date.forward(50), time: "8:30 AM", address: "Higashiyama Ward, Yasaka Kamimachi, ３６８", description: "Free wi-fi!", host_id: 7, city_id: 2, max_attend: 6)
Event.create(date: Faker::Date.forward(50), time: "7:40 AM", address: "Sakyo Ward, Yoshidahonmachi, ３６−１", description: "Coffee & Tea", host_id: 7, city_id: 2, max_attend: 4)
Event.create(date: Faker::Date.forward(50), time: "10:30 AM", address: "Fushimi Ward, Fukakusa Inarionmaecho, ８５", description: "New Venue.", host_id: 6, city_id: 2, max_attend: 5)
Event.create(date: Faker::Date.forward(50), time: "8:15 AM", address: "Shimogyo Ward, Higashiaburanokojicho, 552", description: "Great pastries.", host_id: 6, city_id: 2, max_attend: 5)
Event.create(date: Faker::Date.forward(50), time: "12:30 PM", address: "Nishinokyo Shokushicho, ６７−３８", description: "Bring your own tea.", host_id: 6, city_id: 2, max_attend: 7)

Join.destroy_all

Join.create(user_id: 2, event_id: 4)
Join.create(user_id: 2, event_id: 5)

Host.destroy_all

Host.create(user_id: 2, event_id: 1)
Host.create(user_id: 2, event_id: 2)
Host.create(user_id: 2, event_id: 3)
