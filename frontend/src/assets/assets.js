import everestHotel from './everestHotel.jpg';
import greenHillResort from './GreenHillResort.jpg';
import ramaPalaceHotel from './RamaPalaceHotel.jpg';
import parsJungleLodge from './parsaJungleLodge.webp';
import yakYetiHotel from './hotelYakandYeti.jpg';
import MtEverest from './Mount-Everest.webp';
import phewaLake from './PhewaLake.jpeg';
import lumbini from './Lumbini.jpg';
import MtAnnapurna from './annapurnaBaseCamp.jpg';
import ChitwanNationalPark from './ChitwanNationalPark.jpeg';
import KathmanduDurbarSquare from './KathmanduDurbarSquare.jpg';
import Nagarkot from './Nagarkot.jpeg';
import Swayambhu from './Swayambhu.jpeg';
import RaraLake from './raraLake.jpeg';
import Gaisokunda from './Gaisokunda.jpeg';
import manakamana from './manakamana.jpg';
import janakiTemple from './janakiTemple.jpg';
import bardiaNationalPark from './BardiaNationalPark.jpeg';
import patanDurbarSquare from './patanDurbarSquare.jpg';
import { images } from '../assets/hotels/images';

export const hotels = [
  // Province No. 1 - Everest, Ilam, Dharan
  {
    id: 1,
    name: 'Summit Serenity Hotel',
    location: 'Namche Bazaar, Province No. 1',
    rating: 4.8,
    price: 55000,
    amenities: ['Stunning Everest Views', 'Gourmet Dining', 'Luxury Spa'],
    image: images.hotel1,
    description: `<p><strong>Summit Serenity Hotel</strong> offers breathtaking views of the Himalayas from its lofty perch in Namche Bazaar. Enjoy gourmet dining and relax in a luxurious spa after a day of adventure.</p>`,
  },
  {
    id: 2,
    name: 'Everest Peak Retreat',
    location: 'Lukla, Province No. 1',
    rating: 4.6,
    price: 48000,
    amenities: ['Adventure Packages', 'Trekking Guides', 'Comfortable Rooms'],
    image: images.hotel2,
    description: `<p><strong>Everest Peak Retreat</strong> is a haven for adventurers and trekkers. Located in Lukla, it provides easy access to Everest Base Camp while ensuring comfort with modern amenities.</p>`,
  },
  {
    id: 3,
    name: 'Highland Haven',
    location: 'Dharan, Province No. 1',
    rating: 4.4,
    price: 32000,
    amenities: ['City Views', 'Modern Facilities', 'Cultural Tours'],
    image: images.hotel4,
    description: `<p><strong>Highland Haven</strong> in Dharan combines urban comforts with cultural experiences, making it ideal for both leisure and business travelers.</p>`,
  },
  {
    id: 4,
    name: 'Aurora Mountain Lodge',
    location: 'Ilam, Province No. 1',
    rating: 4.7,
    price: 40000,
    amenities: ['Tea Garden Views', 'Eco-Friendly', 'Local Cuisine'],
    image: images.hotel5,
    description: `<p><strong>Aurora Mountain Lodge</strong> provides a serene escape in Ilam, surrounded by lush tea gardens. Guests enjoy eco-friendly accommodations and savor the best of local flavors.</p>`,
  },

  // Madhesh Province
  {
    id: 5,
    name: 'Janakpur Heritage Inn',
    location: 'Janakpur, Madhesh Province',
    rating: 4.3,
    price: 15000,
    amenities: ['Cultural Heritage', 'Traditional Decor', 'Local Cuisine'],
    image: images.hotel7,
    description: `<p><strong>Janakpur Heritage Inn</strong> is immersed in the rich cultural tapestry of Janakpur. Enjoy traditional decor and authentic local meals that showcase the region’s heritage.</p>`,
  },
  {
    id: 6,
    name: 'Mithila Comfort Hotel',
    location: 'Dhanusha, Madhesh Province',
    rating: 4.2,
    price: 13000,
    amenities: ['Spacious Rooms', 'Family Friendly', 'Local Art'],
    image: images.hotel3,
    description: `<p><strong>Mithila Comfort Hotel</strong> offers a warm and welcoming atmosphere in Dhanusha with spacious rooms and decor inspired by traditional Mithila art.</p>`,
  },
  {
    id: 7,
    name: 'Madhesh Royal Retreat',
    location: 'Birgunj, Madhesh Province',
    rating: 4.5,
    price: 18000,
    amenities: ['Royal Ambiance', 'Fine Dining', 'Heritage Rooms'],
    image: images.hotel2,
    description: `<p><strong>Madhesh Royal Retreat</strong> delivers a regal experience in Birgunj with heritage-inspired rooms, fine dining, and an ambiance that exudes luxury.</p>`,
  },
  {
    id: 8,
    name: 'Janaki Comfort Lodge',
    location: 'Janakpur, Madhesh Province',
    rating: 4.0,
    price: 11000,
    amenities: ['Budget Friendly', 'Near Janaki Temple', 'Homely Ambiance'],
    image: images.hotel6,
    description: `<p><strong>Janaki Comfort Lodge</strong> is an affordable option in Janakpur, conveniently located near Janaki Temple, offering a cozy and homely environment for budget travelers.</p>`,
  },

  // Bagmati Province
  {
    id: 9,
    name: 'Kathmandu Heritage Hotel',
    location: 'Kathmandu, Bagmati Province',
    rating: 4.7,
    price: 25000,
    amenities: ['Cultural Heritage', 'Modern Amenities', 'Central Location'],
    image: images.hotel12,
    description: `<p><strong>Kathmandu Heritage Hotel</strong> is a blend of tradition and modernity, centrally located in Kathmandu. It offers a glimpse of the city's rich culture alongside contemporary comforts.</p>`,
  },
  {
    id: 10,
    name: 'City Lights Inn',
    location: 'Lalitpur, Bagmati Province',
    rating: 4.5,
    price: 22000,
    amenities: ['Business Facilities', 'Cozy Rooms', 'Rooftop Cafe'],
    image: images.hotel10,
    description: `<p><strong>City Lights Inn</strong> in Lalitpur provides excellent business facilities and cozy accommodations, enhanced by a rooftop cafe with stunning city views.</p>`,
  },
  {
    id: 11,
    name: 'Nagarkot Sunrise Resort',
    location: 'Nagarkot, Bagmati Province',
    rating: 4.8,
    price: 28000,
    amenities: ['Panoramic Sunrise Views', 'Outdoor Terrace', 'Local Cuisine'],
    image: images.hotel11,
    description: `<p><strong>Nagarkot Sunrise Resort</strong> is renowned for its spectacular sunrise vistas over the Himalayas. Enjoy an outdoor terrace and indulge in local culinary delights.</p>`,
  },
  {
    id: 12,
    name: 'Royal Heritage Inn',
    location: 'Bhaktapur, Bagmati Province',
    rating: 4.4,
    price: 2000,
    image: images.hotel9,
    amenities: ['Heritage Architecture', 'Cultural Experience', 'Garden View'],
    description: `<p><strong>Royal Heritage Inn</strong> in Bhaktapur offers a unique cultural experience with its heritage architecture and tranquil garden views, merging history with modern luxury.</p>`,
  },

  // Gandaki Province
  {
    id: 13,
    name: 'Lakeside Bliss Resort',
    location: 'Pokhara, Gandaki Province',
    rating: 4.9,
    price: 1000,
    image: images.hotel6,
    amenities: ['Lake View', 'Boat Rides', 'Luxury Spa'],
    description: `<p><strong>Lakeside Bliss Resort</strong> is a premier resort in Pokhara that offers stunning lake views, private boat rides, and a luxurious spa for the ultimate relaxation experience.</p>`,
  },
  {
    id: 14,
    name: "Annapurna Trekker's Lodge",
    location: 'Annapurna, Gandaki Province',
    rating: 4.6,
    price: 15000,
    amenities: ['Trekking Packages', 'Mountain View', 'Warm Hospitality'],
    image: images.hotel6,
    description: `<p><strong>Annapurna Trekker's Lodge</strong> caters to adventure enthusiasts with specially curated trekking packages and warm hospitality, providing an authentic mountain experience.</p>`,
  },
  {
    id: 15,
    name: 'Mountain Breeze Hotel',
    location: 'Pokhara, Gandaki Province',
    rating: 4.5,
    price: 5000,
    amenities: ['Breathtaking Views', 'Modern Rooms', 'Gourmet Dining'],
    image: images.hotel10,
    description: `<p><strong>Mountain Breeze Hotel</strong> in Pokhara offers modern rooms with breathtaking mountain views and gourmet dining that delights the senses.</p>`,
  },
  {
    id: 16,
    name: 'Serenity Hill Resort',
    location: 'Annapurna, Gandaki Province',
    rating: 4.7,
    price: 3000,
    amenities: ['Peaceful Environment', 'Hiking Trails', 'Eco-Friendly'],
    image: images.hotel1,
    description: `<p><strong>Serenity Hill Resort</strong> provides a peaceful escape in the Annapurna region with eco-friendly practices, scenic hiking trails, and a tranquil atmosphere.</p>`,
  },

  // Lumbini Province
  {
    id: 17,
    name: "Buddha's Retreat Hotel",
    location: 'Lumbini, Lumbini Province',
    rating: 4.6,
    price: 19000,
    amenities: ['Meditation Zone', 'Serene Gardens', 'Cultural Tours'],
    image: images.hotel2,
    description: `<p><strong>Buddha's Retreat Hotel</strong> in Lumbini offers a serene environment perfect for meditation and cultural exploration, complete with lush gardens and guided tours.</p>`,
  },
  {
    id: 18,
    name: 'Palpa Heritage Inn',
    location: 'Palpa, Lumbini Province',
    rating: 4.3,
    price: 14000,
    amenities: ['Historical Ambiance', 'Hilltop View', 'Local Delicacies'],
    image: images.hotel3,
    description: `<p><strong>Palpa Heritage Inn</strong> provides a historical ambiance with hilltop views and delicious local delicacies that capture the essence of Palpa.</p>`,
  },
  {
    id: 19,
    name: 'Lumbini Tranquility Lodge',
    location: 'Lumbini, Lumbini Province',
    rating: 4.5,
    price: 16000,
    amenities: ['Quiet Environment', 'Spa Services', 'Organic Meals'],
    image: images.hotel4,
    description: `<p><strong>Lumbini Tranquility Lodge</strong> offers a quiet retreat in Lumbini with rejuvenating spa services and organic meals to refresh both mind and body.</p>`,
  },
  {
    id: 20,
    name: 'Maya Devi Resort',
    location: 'Lumbini, Lumbini Province',
    rating: 4.8,
    price: 21000,
    amenities: ['Near Maya Devi Temple', 'Luxury Rooms', 'Zen Garden'],
    image: images.hotel8,
    description: `<p><strong>Maya Devi Resort</strong> offers a luxurious stay near the sacred Maya Devi Temple, featuring opulent rooms and a zen garden that creates a serene escape.</p>`,
  },

  // Karnali Province
  {
    id: 21,
    name: 'Rara Serenity Lodge',
    location: 'Rara, Karnali Province',
    rating: 4.7,
    price: 23000,
    amenities: ['Lakeside Retreat', 'Boating', 'Fishing'],
    image: images.hotel8,
    description: `<p><strong>Rara Serenity Lodge</strong> offers a tranquil lakeside retreat in the Rara region with boating and fishing activities, providing a unique outdoor experience.</p>`,
  },
  {
    id: 22,
    name: 'Phoksundo Wilderness Resort',
    location: 'Phoksundo, Karnali Province',
    rating: 4.8,
    price: 25000,
    amenities: ['Wilderness Experience', 'Eco-Tours', 'Local Cuisine'],
    image: images.hotel9,
    description: `<p><strong>Phoksundo Wilderness Resort</strong> immerses guests in the raw beauty of nature with eco-tours and local cuisine that celebrates the wilderness of Phoksundo.</p>`,
  },
  {
    id: 23,
    name: 'Karnali Adventure Inn',
    location: 'Karnali, Karnali Province',
    rating: 4.4,
    price: 18000,
    amenities: ['Adventure Sports', 'Guided Trekking', 'Riverside Camping'],
    image: images.hotel7,
    description: `<p><strong>Karnali Adventure Inn</strong> is designed for thrill-seekers, offering adventure sports, guided trekking, and riverside camping in the rugged terrains of Karnali.</p>`,
  },
  {
    id: 24,
    name: 'Highland Karnali Retreat',
    location: 'Karnali, Karnali Province',
    rating: 4.5,
    price: 21000,
    amenities: ['Scenic Views', 'Comfortable Stay', 'Cultural Evenings'],
    image: images.hotel5,
    description: `<p><strong>Highland Karnali Retreat</strong> provides scenic views and a comfortable stay, enhanced by cultural evenings that offer a taste of local traditions.</p>`,
  },

  // Sudurpashchim Province
  {
    id: 25,
    name: 'Khaptad Horizon Hotel',
    location: 'Khaptad, Sudurpashchim Province',
    rating: 4.6,
    price: 20000,
    amenities: ['Mountain Views', 'Nature Walks', 'Local Cuisine'],
    image: images.hotel1,
    description: `<p><strong>Khaptad Horizon Hotel</strong> offers stunning mountain views and invigorating nature walks in the Khaptad region, complemented by delightful local cuisine.</p>`,
  },
  {
    id: 26,
    name: 'Shuklaphanta Nature Retreat',
    location: 'Shuklaphanta, Sudurpashchim Province',
    rating: 4.7,
    price: 22000,
    amenities: ['Jungle Safari', 'Bird Watching', 'Luxury Tent Stay'],
    image: images.hotel3,
    description: `<p><strong>Shuklaphanta Nature Retreat</strong> invites guests to experience the vibrant ecosystem of Shuklaphanta with exciting jungle safaris, bird watching, and luxurious tent accommodations.</p>`,
  },
  {
    id: 27,
    name: 'Sudurpashchim Heritage Inn',
    location: 'Sudurpashchim, Sudurpashchim Province',
    rating: 4.3,
    price: 17000,
    amenities: [
      'Cultural Heritage',
      'Historic Architecture',
      'Traditional Meals',
    ],
    image: images.hotel6,
    description: `<p><strong>Sudurpashchim Heritage Inn</strong> provides an immersive cultural experience with historic architecture and traditional meals that celebrate the local heritage.</p>`,
  },
  {
    id: 28,
    name: 'Western Frontier Lodge',
    location: 'Sudurpashchim, Sudurpashchim Province',
    rating: 4.4,
    price: 19000,
    amenities: ['Adventure Activities', 'River Rafting', 'Local Festivals'],
    image: images.hotel8,
    description: `<p><strong>Western Frontier Lodge</strong> offers an adventurous escape in the heart of Sudurpashchim, where guests can enjoy river rafting, immerse in local festivals, and experience vibrant outdoor activities.</p>`,
  },
  {
    id: 29,
    name: 'Hotel Everest View',
    location: 'Everest, Province No. 1',
    rating: 5.0,
    price: 50000,
    amenities: ['Panoramic Everest View', 'Luxury Rooms', 'Fine Dining'],
    image: everestHotel,
    description: `<p><strong>Hotel Everest View</strong> offers a breathtaking panoramic view of Everest, paired with luxurious amenities tailored for high-end travelers. Enjoy exquisite fine dining and impeccable service in one of Nepal's most scenic locations.</p>`,
  },
  {
    id: 30,
    name: 'Greenhill Resort',
    location: 'Ilam, Province No. 1',
    rating: 4.5,
    price: 12000,
    amenities: ['Tea Garden Views', 'Eco-Friendly', 'Free Breakfast'],
    image: greenHillResort,
    description: `<p><strong>Greenhill Resort</strong> is nestled in the lush tea gardens of Ilam. Its eco-friendly practices and warm hospitality make it a perfect retreat for nature lovers seeking tranquility and comfort.</p>`,
  },

  // Madhesh Province - Janakpur, Parsa
  {
    id: 31,
    name: 'Rama Palace Hotel',
    location: 'Janakpur, Madhesh Province',
    rating: 4.3,
    price: 9000,
    amenities: [
      'Near Janaki Temple',
      'Traditional Maithili Decor',
      'Restaurant',
    ],
    image: ramaPalaceHotel,
    description: `<p><strong>Rama Palace Hotel</strong> provides a blend of traditional Maithili decor and modern comfort, located near the revered Janaki Temple. Guests enjoy authentic local cuisine and a culturally rich ambiance.</p>`,
  },
  {
    id: 32,
    name: 'Parsa Jungle Lodge',
    location: 'Parsa National Park, Madhesh Province',
    rating: 4.6,
    price: 18000,
    amenities: ['Wildlife Safari', 'Luxury Tent Stay', 'Campfire Nights'],
    image: parsJungleLodge,
    description: `<p><strong>Parsa Jungle Lodge</strong> offers an adventurous stay on the edge of Parsa National Park. Enjoy luxury tent accommodations, exciting wildlife safaris, and memorable campfire nights under the stars.</p>`,
  },

  // Bagmati Province - Kathmandu, Nagarkot
  {
    id: 33,
    name: 'Hotel Yak & Yeti',
    location: 'Kathmandu, Bagmati Province',
    rating: 4.5,
    price: 20000,
    amenities: ['Spa', 'Fine Dining', 'Business Lounge'],
    image: yakYetiHotel,
    description: `<p><strong>Hotel Yak & Yeti</strong> in Kathmandu combines traditional Nepali hospitality with modern luxury. Guests can enjoy rejuvenating spa treatments, fine dining experiences, and a well-equipped business lounge.</p>`,
  },
  {
    id: 34,
    name: 'Nagarkot Country Villa',
    location: 'Nagarkot, Bagmati Province',
    rating: 4.7,
    price: 15000,
    amenities: ['Panoramic Mountain View', 'Sunrise Point', 'Local Cuisine'],
    image: 'https://i.imgur.com/8nHcdeO.jpg',
    description: `<p><strong>Nagarkot Country Villa</strong> is a charming retreat in Nagarkot, offering panoramic mountain views and a serene sunrise point. Savor the flavors of local cuisine in a cozy, nature-inspired setting.</p>`,
  },

  // Gandaki Province - Pokhara, Annapurna
  {
    id: 35,
    name: 'Fishtail Lodge',
    location: 'Pokhara, Gandaki Province',
    rating: 4.9,
    price: 25000,
    amenities: ['Lake View', 'Private Boating', 'Luxury Spa'],
    image: 'https://i.imgur.com/rzSy4xU.jpg',
    description: `<p><strong>Fishtail Lodge</strong> in Pokhara offers an opulent lakeside experience with private boating facilities and a luxury spa. Revel in the tranquility of the lake and the comfort of modern amenities.</p>`,
  },
  {
    id: 36,
    name: 'Annapurna Base Camp Lodge',
    location: 'Annapurna, Gandaki Province',
    rating: 4.5,
    price: 10000,
    amenities: ['Trekking Lodge', 'Mountain View', 'Hot Showers'],
    image: 'https://i.imgur.com/GXdOQJm.jpg',
    description: `<p><strong>Annapurna Base Camp Lodge</strong> caters to trekkers with essential comforts after a long day on the trails. Enjoy stunning mountain views and the simple pleasure of a hot shower in a rustic setting.</p>`,
  },

  // Lumbini Province - Lumbini, Palpa
  {
    id: 37,
    name: 'Lumbini Buddha Garden Resort',
    location: 'Lumbini, Lumbini Province',
    rating: 4.6,
    price: 12000,
    amenities: ['Near Maya Devi Temple', 'Meditation Zone', 'Peaceful Retreat'],
    image: 'https://i.imgur.com/YFovX8M.jpg',
    description: `<p><strong>Lumbini Buddha Garden Resort</strong> provides a peaceful retreat near the sacred Maya Devi Temple. Enjoy a dedicated meditation zone and a tranquil atmosphere designed to soothe the mind and spirit.</p>`,
  },
  {
    id: 38,
    name: 'Hotel Srinagar Palpa',
    location: 'Palpa, Lumbini Province',
    rating: 4.2,
    price: 8000,
    amenities: ['Traditional Newari Architecture', 'Hilltop View'],
    image: 'https://i.imgur.com/wIXu1Eq.jpg',
    description: `<p><strong>Hotel Srinagar Palpa</strong> features a charming blend of traditional Newari architecture and modern comforts, offering guests sweeping hilltop views and an authentic cultural experience in Palpa.</p>`,
  },

  // Karnali Province - Rara, Phoksundo
  {
    id: 39,
    name: 'Rara Lake Resort',
    location: 'Rara Lake, Karnali Province',
    rating: 4.8,
    price: 22000,
    amenities: ['Lakeside Stay', 'Canoeing', 'Fishing'],
    image: 'https://i.imgur.com/YOpeY0D.jpg',
    description: `<p><strong>Rara Lake Resort</strong> offers a serene lakeside experience at Rara Lake, with activities like canoeing and fishing, making it an ideal getaway for nature and adventure enthusiasts.</p>`,
  },
  {
    id: 40,
    name: 'Phoksundo Eco Lodge',
    location: 'Shey Phoksundo, Karnali Province',
    rating: 4.7,
    price: 18000,
    amenities: ['Eco Stay', 'Guided Trekking', 'Organic Meals'],
    image: 'https://i.imgur.com/HW1V1KR.jpg',
    description: `<p><strong>Phoksundo Eco Lodge</strong> emphasizes an eco-friendly stay with guided trekking adventures and organic meals, allowing guests to experience the pristine wilderness of Phoksundo in comfort.</p>`,
  },

  // Sudurpashchim Province - Khaptad, Shuklaphanta
  {
    id: 41,
    name: 'Khaptad Adventure Camp',
    location: 'Khaptad National Park, Sudurpashchim Province',
    rating: 4.6,
    price: 14000,
    amenities: ['Camping Experience', 'Nature Walks', 'Bonfire'],
    image: 'https://i.imgur.com/ECl7c0M.jpg',
    description: `<p><strong>Khaptad Adventure Camp</strong> offers an immersive camping experience in Khaptad National Park, complete with guided nature walks and cozy bonfire evenings under the stars.</p>`,
  },
  {
    id: 42,
    name: 'Shuklaphanta Safari Lodge',
    location: 'Shuklaphanta National Park, Sudurpashchim Province',
    rating: 4.5,
    price: 17000,
    amenities: ['Jungle Safari', 'Bird Watching', 'Luxury Stay'],
    image: 'https://i.imgur.com/ZV9b70h.jpg',
    description: `<p><strong>Shuklaphanta Safari Lodge</strong> in Shuklaphanta National Park features exciting jungle safaris, bird watching tours, and a luxury stay that combines adventure with comfort.</p>`,
  },
];

export const touristPlaces = [
  {
    id: 1,
    name: 'Mount Everest',
    location: 'Solukhumbu, Province No. 1',
    description: `
      <div>
        <h2>Mount Everest</h2>
        <p><strong>Mount Everest</strong>, located in the Himalayas, is the highest mountain on Earth, standing at an astounding 8,848.86 meters (29,031.7 feet) above sea level. It straddles the border between Nepal and the Tibet Autonomous Region of China. Known as <em>Sagarmatha</em> in Nepal and <em>Chomolungma</em> in Tibet, Everest has attracted mountaineers from around the world for decades.</p>

        <p>Climbing Everest is an extremely challenging and dangerous task. Despite its beauty, the mountain is notorious for its harsh conditions, including extreme cold, strong winds, and low oxygen levels. Each year, hundreds of climbers attempt to reach the summit, but the success rate is low, and many lives have been lost. However, the lure of standing at the top of the world continues to draw adventurers and mountaineers to its slopes.</p>

        <h3>Key Features</h3>
        <ul>
          <li>World's highest mountain at 8,848.86 meters</li>
          <li>Located in the Himalayas, on the border of Nepal and China</li>
          <li>Attracts hundreds of climbers annually despite its dangers</li>
        </ul>

        <h3>Challenges of Climbing Everest</h3>
        <p>The journey to the summit of Mount Everest is not for the faint of heart. The expedition involves:</p>
        <ol>
          <li>Severe altitude sickness due to low oxygen levels</li>
          <li>Extreme weather conditions, including freezing temperatures and high winds</li>
          <li>Physical and mental endurance required to climb for days in difficult terrain</li>
        </ol>

        <p>The mountain has a rich history of expeditions, with Sir Edmund Hillary and Tenzing Norgay famously reaching the summit in 1953. Since then, countless mountaineers have followed in their footsteps, despite the dangers and high risk of fatalities.</p>
      </div>
    `,
    attractions: [
      'Everest Base Camp',
      'Sherpa Culture',
      'Sagarmatha National Park',
    ],
    image: MtEverest,
  },
  {
    id: 2,
    name: 'Phewa Lake',
    location: 'Pokhara, Gandaki Province',
    description: `
      <div>
        <h2>Phewa Lake</h2>
        <p><strong>Phewa Lake</strong>, located in the city of Pokhara, is one of Nepal's most picturesque lakes. It is famous for its serene waters that reflect the Annapurna mountain range. The lake is a popular spot for boating, with tourists enjoying paddle boats and canoe rides while taking in the breathtaking views.</p>

        <p>In addition to its beauty, Phewa Lake holds cultural significance for the people of Pokhara. It is home to the Tal Barahi Temple, a small island temple dedicated to the Hindu goddess Barahi. The lake's tranquil setting and the surrounding natural beauty make it a must-visit destination for travelers to Nepal.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Popular boating destination</li>
          <li>Reflection of the Annapurna mountain range</li>
          <li>Tal Barahi Temple located on a small island in the lake</li>
        </ul>

        <h3>Things to Do Around Phewa Lake</h3>
        <p>Visitors can enjoy a range of activities around Phewa Lake, including:</p>
        <ol>
          <li>Boating on the tranquil waters</li>
          <li>Visiting the Tal Barahi Temple</li>
          <li>Exploring the lakeside market and local shops</li>
        </ol>

        <p>The lakeside area is also dotted with cafes and restaurants, where visitors can relax while enjoying the view of the lake and the surrounding mountains.</p>
      </div>
    `,
    attractions: ['Boating', 'Tal Barahi Temple', 'Lakeside Market'],
    image: phewaLake,
  },
  {
    id: 3,
    name: 'Lumbini',
    location: 'Lumbini, Lumbini Province',
    description: `
      <div>
        <h2>Lumbini</h2>
        <p><strong>Lumbini</strong>, located in the Lumbini Province of Nepal, is one of the holiest sites in Buddhism. It is the birthplace of Lord Buddha, the founder of Buddhism, and is a UNESCO World Heritage Site. The site attracts thousands of Buddhist pilgrims from around the world each year who come to pay homage to the Buddha's birthplace.</p>

        <p>The sacred garden in Lumbini is home to many historical and religious monuments, including the Maya Devi Temple, which marks the exact spot where Queen Maya Devi gave birth to Prince Siddhartha (later known as the Buddha). The area is also home to various monasteries built by Buddhist communities from different countries.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Birthplace of Lord Buddha</li>
          <li>UNESCO World Heritage Site</li>
          <li>Numerous Buddhist monuments and monasteries</li>
        </ul>

        <h3>Places to Visit in Lumbini</h3>
        <p>In addition to the Maya Devi Temple, visitors can explore several other significant sites in Lumbini, such as:</p>
        <ol>
          <li>The World Peace Pagoda</li>
          <li>The Lumbini Museum</li>
          <li>The Monastic Zone, home to monasteries from different Buddhist countries</li>
        </ol>

        <p>Lumbini offers a peaceful and spiritual atmosphere, making it an ideal place for reflection, meditation, and learning about the life of Lord Buddha.</p>
      </div>
    `,
    attractions: ['Maya Devi Temple', 'World Peace Pagoda', 'Monasteries'],
    image: lumbini,
  },
  {
    id: 4,
    name: 'Annapurna Base Camp',
    location: 'Kaski, Gandaki Province',
    description: `
      <div>
        <h2>Annapurna Base Camp</h2>
        <p><strong>Annapurna Base Camp</strong>, situated at an altitude of 4,130 meters, is one of Nepal's most spectacular trekking destinations. The base camp offers unparalleled views of the Annapurna mountain range and surrounding peaks. It's particularly famous for its amphitheater-like setting, surrounded by towering peaks.</p>

        <p>The trek to Annapurna Base Camp takes trekkers through diverse landscapes, from lush rhododendron forests to high-altitude glacial basins. The journey offers a perfect blend of natural beauty and cultural experiences as you pass through traditional Gurung and Magar villages.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Spectacular mountain views at 4,130 meters</li>
          <li>Diverse landscapes and ecosystems</li>
          <li>Rich cultural encounters with local communities</li>
        </ul>

        <h3>Trekking Highlights</h3>
        <p>The journey to Annapurna Base Camp includes several memorable experiences:</p>
        <ol>
          <li>Crossing beautiful rhododendron forests</li>
          <li>Visiting traditional mountain villages</li>
          <li>Witnessing stunning sunrise and sunset views over the Himalayas</li>
        </ol>

        <p>The trek is considered moderate to challenging and offers a great alternative to the Everest region, with equally stunning mountain views and a rich cultural experience.</p>
      </div>
    `,
    attractions: ['Mountain Views', 'Traditional Villages', 'Hot Springs'],
    image: MtAnnapurna,
  },
  {
    id: 5,
    name: 'Chitwan National Park',
    location: 'Chitwan, Bagmati Province',
    description: `
      <div>
        <h2>Chitwan National Park</h2>
        <p><strong>Chitwan National Park</strong>, established in 1973, is Nepal's first national park and a UNESCO World Heritage Site. This subtropical paradise is home to some of Asia's most exotic wildlife, including the one-horned rhinoceros, Bengal tigers, and various species of birds and reptiles.</p>

        <p>The park's location in the Terai lowlands offers a completely different experience from Nepal's mountainous regions. Visitors can explore the park through various activities while learning about wildlife conservation efforts and the local Tharu culture.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Home to endangered wildlife species</li>
          <li>Rich biodiversity and ecosystem</li>
          <li>Cultural experiences with indigenous Tharu community</li>
        </ul>

        <h3>Popular Activities</h3>
        <p>Visitors to Chitwan National Park can enjoy various activities:</p>
        <ol>
          <li>Jeep and elephant safaris</li>
          <li>Canoe rides on the Rapti River</li>
          <li>Traditional Tharu cultural performances</li>
        </ol>

        <p>The park provides a unique opportunity to experience Nepal's wildlife and subtropical ecosystem while supporting conservation efforts.</p>
      </div>
    `,
    attractions: [
      'Wildlife Safari',
      'Elephant Breeding Center',
      'Tharu Cultural Shows',
    ],
    image: ChitwanNationalPark,
  },
  {
    id: 6,
    name: 'Kathmandu Durbar Square',
    location: 'Kathmandu, Bagmati Province',
    description: `
      <div>
        <h2>Kathmandu Durbar Square</h2>
        <p><strong>Kathmandu Durbar Square</strong>, located in the heart of old Kathmandu city, is a UNESCO World Heritage site that showcases the rich history of Nepal's Malla and Shah dynasties. This ancient royal palace complex features spectacular Nepalese architecture, intricate wood carvings, and historic temples dating back to the 12th century.</p>

        <p>The square served as the residence of Nepal's royal family until the 19th century and remains a living museum of Nepal's architectural heritage. Despite damage from the 2015 earthquake, the square continues to be a vibrant center of cultural and religious activities, hosting numerous festivals throughout the year.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Ancient royal palace complex with traditional architecture</li>
          <li>Home to the living goddess Kumari</li>
          <li>Center of cultural and religious festivals</li>
        </ul>

        <h3>Notable Attractions</h3>
        <p>The square offers various points of interest including:</p>
        <ol>
          <li>The Hanuman Dhoka Palace Complex</li>
          <li>The Kumari Bahal (House of the Living Goddess)</li>
          <li>Numerous temples and courtyards with historic significance</li>
        </ol>

        <p>The square remains a testament to Nepal's rich cultural heritage and offers visitors a glimpse into the country's royal history and architectural excellence.</p>
      </div>
    `,
    attractions: ['Hanuman Dhoka', 'Kumari House', 'Taleju Temple'],
    image: KathmanduDurbarSquare,
  },
  {
    id: 7,
    name: 'Nagarkot',
    location: 'Bhaktapur, Bagmati Province',
    description: `
      <div>
        <h2>Nagarkot</h2>
        <p><strong>Nagarkot</strong>, perched at an altitude of 2,175 meters, is renowned for offering one of the most spectacular views of the Himalayas. This hill station provides panoramic views of eight mountain ranges of Nepal, including Mount Everest on a clear day. It's particularly famous for its stunning sunrise and sunset views over the mountains.</p>

        <p>Originally an ancient fort built to monitor external activities in Kathmandu Valley, Nagarkot has transformed into a popular tourist destination. The area offers a perfect escape from the bustling city life of Kathmandu, with its peaceful environment and cool mountain air.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Panoramic views of eight Himalayan ranges</li>
          <li>Famous sunrise and sunset viewing points</li>
          <li>Pleasant climate and peaceful environment</li>
        </ul>

        <h3>Popular Activities</h3>
        <p>Visitors to Nagarkot can enjoy various activities:</p>
        <ol>
          <li>Hiking along nature trails</li>
          <li>Photography at viewpoints</li>
          <li>Bird watching in the surrounding forests</li>
        </ol>

        <p>The destination offers a perfect blend of natural beauty and outdoor activities, making it an ideal weekend getaway or short excursion from Kathmandu.</p>
      </div>
    `,
    attractions: ['Himalayan Views', 'Nature Trails', 'Viewpoint Tower'],
    image: Nagarkot,
  },
  {
    id: 8,
    name: 'Swayambhunath Stupa',
    location: 'Kathmandu, Bagmati Province',
    description: `
      <div>
        <h2>Swayambhunath Stupa</h2>
        <p><strong>Swayambhunath Stupa</strong>, also known as the Monkey Temple, is an ancient religious complex atop a hill in the Kathmandu Valley. This UNESCO World Heritage site is one of the oldest religious sites in Nepal, dating back to the 5th century CE. The site holds immense significance for both Buddhists and Hindus.</p>

        <p>The complex features a majestic white stupa with Buddha's eyes painted on all four sides, numerous shrines, temples, and a monastery. The resident monkeys, considered holy to Tibetan Buddhists, add to the unique character of this sacred site.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Ancient Buddhist stupa with distinctive architecture</li>
          <li>Panoramic views of Kathmandu Valley</li>
          <li>Rich religious and cultural significance</li>
        </ul>

        <h3>Sacred Elements</h3>
        <p>The complex contains several important religious features:</p>
        <ol>
          <li>The main stupa with Buddha's eyes</li>
          <li>Ancient Sanskrit manuscripts and religious artifacts</li>
          <li>Traditional prayer wheels and butter lamps</li>
        </ol>

        <p>The site continues to be an important center of Buddhist learning and preserves ancient religious traditions and practices.</p>
      </div>
    `,
    attractions: ['Main Stupa', 'Buddhist Monastery', 'Valley Views'],
    image: Swayambhu,
  },
  {
    id: 9,
    name: 'Rara Lake',
    location: 'Mugu, Karnali Province',
    description: `
      <div>
        <h2>Rara Lake</h2>
        <p><strong>Rara Lake</strong>, the largest and deepest freshwater lake in Nepal, lies at an altitude of 2,990 meters within Rara National Park. The pristine blue waters of the lake, surrounded by snow-capped peaks and pine forests, create a spectacular landscape that has earned it the title of 'Queen of Lakes'.</p>

        <p>The national park surrounding the lake is home to unique wildlife including the red panda, musk deer, and numerous species of birds. The area's isolation has helped preserve its natural beauty and ecological significance.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Largest freshwater lake in Nepal</li>
          <li>Rich biodiversity and wildlife</li>
          <li>Pristine natural environment</li>
        </ul>

        <h3>Visitor Activities</h3>
        <p>The lake and surrounding area offer various activities:</p>
        <ol>
          <li>Trekking around the lake circuit</li>
          <li>Bird watching and wildlife observation</li>
          <li>Camping in designated areas</li>
        </ol>

        <p>Despite its remote location, Rara Lake offers visitors an unforgettable experience of Nepal's natural wilderness and serene beauty.</p>
      </div>
    `,
    attractions: ['Lake Circuit', 'Wildlife Viewing', 'Mountain Scenery'],
    image: RaraLake,
  },
  {
    id: 10,
    name: 'Gosaikunda Lake',
    location: 'Rasuwa, Bagmati Province',
    description: `
      <div>
        <h2>Gosaikunda Lake</h2>
        <p><strong>Gosaikunda Lake</strong> is a sacred high-altitude lake system situated at an elevation of 4,380 meters in Langtang National Park. According to Hindu mythology, this lake was created by Lord Shiva when he thrust his trident into the ground to obtain water. The site is particularly significant during the Janai Purnima festival when thousands of pilgrims visit.</p>

        <p>The lake remains frozen for six months in winter and is surrounded by snow-capped mountains. The trek to Gosaikunda offers stunning views of the Langtang and Ganesh Himal mountain ranges and passes through diverse landscapes.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Sacred high-altitude alpine lake</li>
          <li>Religious significance in Hindu mythology</li>
          <li>Part of the Langtang National Park</li>
        </ul>

        <h3>Trek Highlights</h3>
        <p>The journey to Gosaikunda includes:</p>
        <ol>
          <li>Spectacular mountain views</li>
          <li>Rich biodiversity and alpine flora</li>
          <li>Cultural experiences in local villages</li>
        </ol>

        <p>The combination of natural beauty and religious significance makes Gosaikunda a unique destination for both pilgrims and trekkers.</p>
      </div>
    `,
    attractions: ['Sacred Lake', 'Mountain Views', 'Pilgrim Trails'],
    image: Gaisokunda,
  },
  {
    id: 11,
    name: 'Bardia National Park',
    location: 'Bardia, Lumbini Province',
    description: `
      <div>
        <h2>Bardia National Park</h2>
        <p><strong>Bardia National Park</strong> is the largest and most undisturbed national park in Nepal's Terai region. Established in 1988, it provides pristine wilderness and is home to endangered species including Royal Bengal tigers, wild elephants, and Great One-horned rhinoceros.</p>

        <p>The park's remoteness and excellent conservation efforts have helped maintain its natural ecosystem. The Karnali River flowing through the park adds to its biodiversity and offers opportunities for various wildlife viewing activities.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Pristine wilderness and natural habitat</li>
          <li>High density of Royal Bengal tigers</li>
          <li>Less crowded than Chitwan National Park</li>
        </ul>

        <h3>Wildlife Activities</h3>
        <p>Visitors can participate in various activities:</p>
        <ol>
          <li>Jungle walks and tiger tracking</li>
          <li>River rafting for wildlife viewing</li>
          <li>Bird watching tours</li>
        </ol>

        <p>The park offers an authentic wildlife experience away from the usual tourist crowds, making it perfect for nature enthusiasts.</p>
      </div>
    `,
    attractions: ['Tiger Tracking', 'River Safari', 'Jungle Walks'],
    image: bardiaNationalPark,
  },
  {
    id: 12,
    name: 'Patan Durbar Square',
    location: 'Lalitpur, Bagmati Province',
    description: `
      <div>
        <h2>Patan Durbar Square</h2>
        <p><strong>Patan Durbar Square</strong> is an enchanting mix of palace buildings, artistic courtyards, and graceful pagoda temples. Listed as a UNESCO World Heritage site, it is one of the three Durbar Squares in the Kathmandu Valley, and is known for its rich cultural heritage and fine arts.</p>

        <p>The city of Patan has a long history of arts and crafts, particularly known for its metalwork and wooden sculptures. The square itself houses the Patan Museum, considered one of the best museums in South Asia, showcasing the rich cultural heritage of the Newari people.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Ancient royal palace complex</li>
          <li>Exceptional Newari architecture</li>
          <li>Rich tradition of arts and crafts</li>
        </ul>

        <h3>Cultural Highlights</h3>
        <p>The square offers various cultural experiences:</p>
        <ol>
          <li>Traditional metalwork demonstrations</li>
          <li>Ancient temple architecture</li>
          <li>Museum exhibitions of Buddhist and Hindu art</li>
        </ol>

        <p>The square continues to be a living museum of traditional arts and architecture, offering insights into Nepal's rich cultural heritage.</p>
      </div>
    `,
    attractions: ['Patan Museum', 'Krishna Temple', 'Traditional Crafts'],
    image: patanDurbarSquare,
  },
  {
    id: 13,
    name: 'Manakamana Temple',
    location: 'Gorkha, Gandaki Province',
    description: `
      <div>
        <h2>Manakamana Temple</h2>
        <p><strong>Manakamana Temple</strong> is a sacred Hindu temple dedicated to Goddess Bhagwati, an incarnation of Parvati. Located atop a 1,302-meter hill, it is believed that the goddess fulfills the wishes of her devotees. The temple is accessible by one of Nepal's only cable car systems, offering spectacular views during the journey.</p>

        <p>The temple holds great religious significance and attracts thousands of pilgrims and tourists throughout the year. The cable car journey itself has become an attraction, offering panoramic views of the Trisuli and Marshyangdi river valleys.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Sacred Hindu temple with wish-fulfilling deity</li>
          <li>Modern cable car access</li>
          <li>Panoramic mountain views</li>
        </ul>

        <h3>Visitor Experiences</h3>
        <p>Visitors to Manakamana can enjoy:</p>
        <ol>
          <li>Cable car ride with valley views</li>
          <li>Traditional temple ceremonies</li>
          <li>Local market and food experiences</li>
        </ol>

        <p>The combination of religious significance and modern accessibility makes Manakamana a unique destination for both pilgrims and tourists.</p>
      </div>
    `,
    attractions: ['Cable Car Ride', 'Temple Worship', 'Mountain Views'],
    image: manakamana,
  },
  {
    id: 14,
    name: 'Janaki Temple',
    location: 'Janakpur, Madhesh Province',
    description: `
      <div>
        <h2>Janaki Temple</h2>
        <p><strong>Janaki Temple</strong>, also known as Janaki Mandir, is a unique architectural marvel built in 1911 in a mixed style of Mughal and local Koiri architecture. The temple is dedicated to Goddess Sita and marks the site of her birthplace. It is one of the most important religious sites in Hindu mythology.</p>

        <p>The temple's stunning white marble structure features 60 rooms, making it the largest temple in Nepal. Its architecture showcases intricate details and artistry, with beautiful carvings and paintings depicting scenes from the Ramayana.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Unique blend of architectural styles</li>
          <li>Birthplace of Goddess Sita</li>
          <li>Elaborate marble construction</li>
        </ul>

        <h3>Religious Significance</h3>
        <p>The temple complex offers various spiritual experiences:</p>
        <ol>
          <li>Daily worship ceremonies</li>
          <li>Religious festivals and celebrations</li>
          <li>Ancient artifacts and historical exhibits</li>
        </ol>

        <p>The temple serves as a major pilgrimage site and offers visitors insight into the rich religious and cultural heritage of Nepal.</p>
      </div>
    `,
    attractions: [
      'Temple Architecture',
      'Religious Ceremonies',
      'Historical Exhibits',
    ],
    image: janakiTemple,
  },
];

import yogesh from './yogesh.jpeg';
import safal from './safal.jpeg';
import sumit from './sumit.jpeg';
import aryan from './aryan.jpeg';

export const teamMembers = [
  {
    name: 'Yogesh Shah',
    role: 'Backend Developer',
    image: yogesh,
    github: '',
  },
  {
    name: 'Safal Shyangwa',
    role: 'frontend Developer',
    image: safal,
    github: '',
  },
  {
    name: 'Sumit Maharjan',
    role: 'CEO',
    image: sumit,
    github: '',
  },
  {
    name: 'Aryan Saud',
    role: 'Co-Founder',
    image: aryan,
    github: '',
  },
];

export const testimonials = [
  {
    name: 'Rachel Adams',
    role: 'Traveler',
    image: 'https://randomuser.me/api/portraits/women/50.jpg',
    review:
      'My trip to Chitwan was unforgettable! The booking process was seamless, and the experience was beyond expectations.',
    rating: 5,
  },
  {
    name: 'Tom Harris',
    role: 'Adventurer',
    image: 'https://randomuser.me/api/portraits/men/27.jpg',
    review:
      'The customer support team was incredibly helpful in finding the perfect destination for my family vacation.',
    rating: 4,
  },
  {
    name: 'Olivia Brown',
    role: 'Explorer',
    image: 'https://randomuser.me/api/portraits/women/35.jpg',
    review:
      'I had a relaxing stay at the Beach Resort in Kathmandu. The site offers amazing options and deals.',
    rating: 5,
  },
  {
    name: 'Ethan White',
    role: 'Holiday Planner',
    image: 'https://randomuser.me/api/portraits/men/38.jpg',
    review:
      'The booking experience was straightforward and the destinations were stunning. I’ll definitely use this platform again!',
    rating: 4,
  },
];
