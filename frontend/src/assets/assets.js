import everestHotel from './everestHotel.jpg';
import greenHillResort from './GreenHillResort.jpg';
import ramaPalaceHotel from './RamaPalaceHotel.jpg';
import parsJungleLodge from './parsaJungleLodge.webp';
import yakYetiHotel from './hotelYakandYeti.jpg';
import MtEverest from './Mount-Everest.webp';

export const hotels = [
  // Province No. 1 - Everest, Ilam, Dharan
  {
    name: 'Hotel Everest View',
    location: 'Everest, Province No. 1',
    rating: 5.0,
    price: 50000,
    amenities: ['Panoramic Everest View', 'Luxury Rooms', 'Fine Dining'],
    image: everestHotel,
  },
  {
    name: 'Greenhill Resort',
    location: 'Ilam, Province No. 1',
    rating: 4.5,
    price: 12000,
    amenities: ['Tea Garden Views', 'Eco-Friendly', 'Free Breakfast'],
    image: greenHillResort,
  },

  // Madhesh Province - Janakpur, Parsa
  {
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
  },
  {
    name: 'Parsa Jungle Lodge',
    location: 'Parsa National Park, Madhesh Province',
    rating: 4.6,
    price: 18000,
    amenities: ['Wildlife Safari', 'Luxury Tent Stay', 'Campfire Nights'],
    image: parsJungleLodge,
  },

  // Bagmati Province - Kathmandu, Nagarkot
  {
    name: 'Hotel Yak & Yeti',
    location: 'Kathmandu, Bagmati Province',
    rating: 4.5,
    price: 20000,
    amenities: ['Spa', 'Fine Dining', 'Business Lounge'],
    image: yakYetiHotel,
  },
  {
    name: 'Nagarkot Country Villa',
    location: 'Nagarkot, Bagmati Province',
    rating: 4.7,
    price: 15000,
    amenities: ['Panoramic Mountain View', 'Sunrise Point', 'Local Cuisine'],
    image: 'https://i.imgur.com/8nHcdeO.jpg',
  },

  // Gandaki Province - Pokhara, Annapurna
  {
    name: 'Fishtail Lodge',
    location: 'Pokhara, Gandaki Province',
    rating: 4.9,
    price: 25000,
    amenities: ['Lake View', 'Private Boating', 'Luxury Spa'],
    image: 'https://i.imgur.com/rzSy4xU.jpg',
  },
  {
    name: 'Annapurna Base Camp Lodge',
    location: 'Annapurna, Gandaki Province',
    rating: 4.5,
    price: 10000,
    amenities: ['Trekking Lodge', 'Mountain View', 'Hot Showers'],
    image: 'https://i.imgur.com/GXdOQJm.jpg',
  },

  // Lumbini Province - Lumbini, Palpa
  {
    name: 'Lumbini Buddha Garden Resort',
    location: 'Lumbini, Lumbini Province',
    rating: 4.6,
    price: 12000,
    amenities: ['Near Maya Devi Temple', 'Meditation Zone', 'Peaceful Retreat'],
    image: 'https://i.imgur.com/YFovX8M.jpg',
  },
  {
    name: 'Hotel Srinagar Palpa',
    location: 'Palpa, Lumbini Province',
    rating: 4.2,
    price: 8000,
    amenities: ['Traditional Newari Architecture', 'Hilltop View'],
    image: 'https://i.imgur.com/wIXu1Eq.jpg',
  },

  // Karnali Province - Rara, Phoksundo
  {
    name: 'Rara Lake Resort',
    location: 'Rara Lake, Karnali Province',
    rating: 4.8,
    price: 22000,
    amenities: ['Lakeside Stay', 'Canoeing', 'Fishing'],
    image: 'https://i.imgur.com/YOpeY0D.jpg',
  },
  {
    name: 'Phoksundo Eco Lodge',
    location: 'Shey Phoksundo, Karnali Province',
    rating: 4.7,
    price: 18000,
    amenities: ['Eco Stay', 'Guided Trekking', 'Organic Meals'],
    image: 'https://i.imgur.com/HW1V1KR.jpg',
  },

  // Sudurpashchim Province - Khaptad, Shuklaphanta
  {
    name: 'Khaptad Adventure Camp',
    location: 'Khaptad National Park, Sudurpashchim Province',
    rating: 4.6,
    price: 14000,
    amenities: ['Camping Experience', 'Nature Walks', 'Bonfire'],
    image: 'https://i.imgur.com/ECl7c0M.jpg',
  },
  {
    name: 'Shuklaphanta Safari Lodge',
    location: 'Shuklaphanta National Park, Sudurpashchim Province',
    rating: 4.5,
    price: 17000,
    amenities: ['Jungle Safari', 'Bird Watching', 'Luxury Stay'],
    image: 'https://i.imgur.com/ZV9b70h.jpg',
  },
];

export const touristPlaces = [
  {
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
    image: 'https://i.imgur.com/rzSy4xU.jpg',
  },
  {
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
    image: 'https://i.imgur.com/YFovX8M.jpg',
  },
];

