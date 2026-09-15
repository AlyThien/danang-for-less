/**
 * DANANG FOR LESS - MOCK DATA REPOSITORY
 * Exactly matching Figma specifications & assets
 */

const DANANG_DATA = {
  // 1. Featured & All Tours
  tours: [
    {
      id: 'tour-bana-hills',
      name: 'Ba Na Hills Full Day',
      subtitle: 'Ba Na Hills Full Day Tour with Golden Bridge',
      location: 'Ba Na Hills, Da Nang',
      duration: '8 Hours',
      hours: 8,
      rating: 4.8,
      reviewsCount: 124,
      originalPrice: 55,
      price: 44,
      discountBadge: '-20%',
      isBestSeller: true,
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&auto=format&fit=crop&q=80',
      description: 'Visit the world-famous Golden Bridge, ride one of the longest cable cars in the world, and explore French Village and Fantasy Park high above the clouds.',
      includes: ['Cable car 2-way ticket', 'Buffet lunch on peak', 'English/Vietnamese guide', 'Hotel pickup & drop-off', 'Bottled water'],
      excludes: ['Wax museum entry', 'Personal expenses', 'Tips for guide/driver'],
      maxGroup: 15,
      pickupTime: '07:30 AM - 08:15 AM'
    },
    {
      id: 'tour-hoi-an-evening',
      name: 'Hoi An Evening Tour',
      subtitle: 'Hoi An Ancient Town & Lantern River Cruise',
      location: 'Hoi An Ancient Town, Quang Nam',
      duration: '5 Hours',
      hours: 5,
      rating: 4.9,
      reviewsCount: 89,
      originalPrice: 30,
      price: 25,
      discountBadge: '-15%',
      isBestSeller: true,
      category: 'culture',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80',
      description: 'Explore the mystical Japanese Covered Bridge, ancient merchant houses, taste traditional street delicacies, and release glowing paper lanterns onto the Hoai River.',
      includes: ['Walking tour entrance ticket', 'Sampan lantern boat ride', 'Traditional Cao Lau dinner', 'Private AC minivan', 'Bilingual guide'],
      excludes: ['Beverages during dinner', 'Souvenirs'],
      maxGroup: 12,
      pickupTime: '03:00 PM'
    },
    {
      id: 'tour-marble-mountains',
      name: 'Marble Mountains Half Day',
      subtitle: 'Marble Mountains & Am Phu Cave Discovery',
      location: 'Ngu Hanh Son, Da Nang',
      duration: '3 Hours',
      hours: 3,
      rating: 4.7,
      reviewsCount: 215,
      originalPrice: 25,
      price: 18,
      discountBadge: null,
      isBestSeller: false,
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format&fit=crop&q=80',
      description: 'Climb sacred limestone peaks, delve into mysterious natural caves with Buddhist shrines, and admire 400-year-old stone carving art at the craft village.',
      includes: ['Elevator 2-way ticket', 'All cave entrance fees', 'Water & local guide'],
      excludes: ['Snacks', 'Personal purchases'],
      maxGroup: 20,
      pickupTime: '08:30 AM or 02:00 PM'
    },
    {
      id: 'tour-han-river-cruise',
      name: 'Han River Night Cruise',
      subtitle: 'Han River Night Cruise & Dragon Bridge Fire Show',
      location: 'Han River, Da Nang',
      duration: '1.5 Hours',
      hours: 1.5,
      rating: 4.6,
      reviewsCount: 78,
      originalPrice: null,
      price: 22,
      discountBadge: 'New',
      isBestSeller: false,
      category: 'entertainment',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&auto=format&fit=crop&q=80',
      description: 'Glide on a modern boat along the sparkling Han River, admire the illuminated architectural bridges, and enjoy front-row seats for the iconic Dragon Bridge fire show on weekends.',
      includes: ['Cruise ticket with reserved seat', 'Welcome fruit plate & drink', 'Cham dance live performance', 'Travel insurance'],
      excludes: ['Hotel transfer (self-checkin at pier)'],
      maxGroup: 40,
      pickupTime: '07:45 PM'
    },
    {
      id: 'tour-son-tra-sunset',
      name: 'Son Tra Sunset & Lady Buddha',
      subtitle: 'Son Tra Peninsula, Linh Ung Pagoda & Hidden Viewpoints',
      location: 'Son Tra Peninsula, Da Nang',
      duration: '4 Hours',
      hours: 4,
      rating: 4.5,
      reviewsCount: 156,
      originalPrice: 40,
      price: 20,
      discountBadge: '-50%',
      isBestSeller: false,
      category: 'nature',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80',
      description: 'Marvel at the 67m tall Lady Buddha statue, look for rare red-shanked douc langurs, and take in the panoramic sunset over Da Nang bay.',
      includes: ['Sightseeing minivan', 'English-speaking guide', 'Sunset iced tea stop'],
      excludes: ['Tips'],
      maxGroup: 14,
      pickupTime: '02:30 PM'
    },
    {
      id: 'tour-danang-foodie',
      name: 'Da Nang Foodie Night',
      subtitle: 'Motorbike Street Food Safari with Locals',
      location: 'Da Nang City Center',
      duration: '3.5 Hours',
      hours: 3.5,
      rating: 4.9,
      reviewsCount: 310,
      originalPrice: 45,
      price: 38,
      discountBadge: '-15%',
      isBestSeller: true,
      category: 'food',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80',
      description: 'Hop on the back of a motorbike to sample 6 iconic regional dishes: Banh Xeo, Mi Quang, Nem Lui, Banh Trang Cuon Thit Heo, Avocado Ice Cream and local draft beer.',
      includes: ['All 6 food & drink tasting stops', 'Motorbike with experienced local driver', 'Helmet & rain poncho', 'Insurance'],
      excludes: ['Personal shopping'],
      maxGroup: 10,
      pickupTime: '05:30 PM'
    }
  ],

  // 2. Featured & All Hotels
  hotels: [
    {
      id: 'hotel-bliss-oceanfront',
      name: 'The Bliss Oceanfront Hotel',
      subtitle: 'Happy Hotel - Beachfront Luxury with Infinity Pool',
      location: '230 Vo Nguyen Giap St, My Khe Beach, Da Nang',
      area: 'My Khe Beach',
      rating: 5.0,
      stars: 5,
      reviewsCount: 420,
      originalPrice: 120,
      pricePerNight: 85,
      tag: 'Oceanfront',
      amenities: ['Free High-speed Wi-Fi', 'Infinity Rooftop Pool', 'Full-service Spa', 'Signature Restaurant', 'Daily Buffet Breakfast', '24/7 Fitness Center'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&auto=format&fit=crop&q=80'
      ],
      description: 'Experience the pinnacle of coastal luxury at The Bliss Oceanfront Hotel. Nestled directly on the pristine sands of My Khe Beach, our property offers panoramic views of the East Vietnam Sea and the iconic Son Tra Peninsula. Each room is meticulously designed with contemporary Vietnamese elegance, featuring floor-to-ceiling windows that invite the ocean breeze and natural light.',
      rooms: [
        {
          id: 'room-deluxe-city',
          name: 'Deluxe City View',
          size: '32 sqm',
          bed: '1 King Bed or 2 Twins',
          capacity: '2 Adults',
          price: 85,
          features: ['Breakfast Included', 'Free WiFi', 'City Balcony', 'Rain Shower']
        },
        {
          id: 'room-grand-ocean',
          name: 'Grand Ocean Suite',
          size: '56 sqm',
          bed: '1 Super King + Separate Living Area',
          capacity: '2 Adults, 1 Child',
          price: 145,
          features: ['Breakfast Included', 'Panoramic Sea View', 'Free WiFi', 'Exclusive Lounge Access', 'Bathtub']
        }
      ]
    },
    {
      id: 'hotel-intercon-danang',
      name: 'InterContinental Sun Peninsula',
      subtitle: 'Luxury Sanctuary on the slopes of Son Tra',
      location: 'Son Tra Peninsula, Da Nang',
      area: 'Son Tra',
      rating: 4.9,
      stars: 5,
      reviewsCount: 890,
      originalPrice: 220,
      pricePerNight: 145,
      tag: 'Luxury',
      amenities: ['Private Beach Cove', 'Fine Dining Restaurant', 'Award-Winning Spa', 'Cable Car Hill Tram', 'Kids Club', 'Tennis Courts'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80'
      ],
      description: 'Famed architect Bill Bensley designed this legendary cliffside resort where dramatic jungle hills meet the turquoise private bay. Ranked among the best resorts in Asia.',
      rooms: [
        {
          id: 'room-classic-terrace',
          name: 'Classic Terrace Ocean View',
          size: '70 sqm',
          bed: '1 King Bed',
          capacity: '2 Adults',
          price: 145,
          features: ['Ocean Balcony', 'Deep-soak Marble Tub', 'Complimentary Minibar', 'Breakfast Included']
        }
      ]
    },
    {
      id: 'hotel-sala-danang',
      name: 'Sala Danang Beach Hotel',
      subtitle: 'Modern 4-Star Beach Hotel with Infinity Pool',
      location: '36 Lam Hoanh St, My Khe Beach, Da Nang',
      area: 'My Khe Beach',
      rating: 4.7,
      stars: 4,
      reviewsCount: 350,
      originalPrice: 75,
      pricePerNight: 55,
      tag: 'Best Value',
      amenities: ['Rooftop Pool', 'Rooftop Bar', 'Free Breakfast', 'High-Speed WiFi', 'Airport Shuttle'],
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&auto=format&fit=crop&q=80'
      ],
      description: 'Located only 100 meters from My Khe beach, Sala Danang offers contemporary stylish rooms, a 25th-floor rooftop pool with sweeping coastal views, and exceptional value.',
      rooms: [
        {
          id: 'room-superior-city',
          name: 'Superior Double City View',
          size: '28 sqm',
          bed: '1 Queen Bed',
          capacity: '2 Adults',
          price: 55,
          features: ['Buffet Breakfast', 'Smart TV', 'City View', 'Free WiFi']
        }
      ]
    },
    {
      id: 'hotel-sky-blu',
      name: 'Sky Blu Hotel & Apartments',
      subtitle: 'Modern Loft Apartment - Near Dragon Bridge',
      location: 'Han River View, Hai Chau, Da Nang',
      area: 'City Center',
      rating: 4.9,
      stars: 4,
      reviewsCount: 88,
      originalPrice: 65,
      pricePerNight: 45,
      tag: 'Superhost',
      amenities: ['Full Kitchen', 'High Speed Net', 'Washer/Dryer', 'River View Balcony', 'Co-working Lounge'],
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80',
      description: 'Authentic local living in the city center. Fully equipped kitchen, fast Wi-Fi, and a cozy workspace. Perfect for digital nomads and families.',
      rooms: [
        {
          id: 'room-loft-studio',
          name: 'Design Loft Studio',
          size: '42 sqm',
          bed: '1 Queen Bed',
          capacity: '2 Adults',
          price: 45,
          features: ['Kitchenette', 'Work Desk', 'Washing Machine', 'High Speed WiFi']
        }
      ]
    },
    {
      id: 'hotel-furama-resort',
      name: 'Furama Resort Danang',
      subtitle: 'Malean Retreat & Tropical Resort Villa',
      location: 'Vo Nguyen Giap St, Khue My, Ngu Hanh Son, Da Nang',
      area: 'My Khe Beach',
      rating: 4.2,
      stars: 5,
      reviewsCount: 198,
      originalPrice: 350,
      pricePerNight: 120,
      tag: 'Quiet & Peaceful',
      amenities: ['Private Beach', 'Lagoon Pool', 'Ayurveda Spa', 'Water Sports', 'Kids Club'],
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=80',
      description: 'Vietnam\'s first 5-star beach resort, set in lush tropical gardens fronting My Khe Beach. Historic grandeur combined with culinary excellence.',
      rooms: [
        {
          id: 'room-garden-deluxe',
          name: 'Garden Superior Room',
          size: '48 sqm',
          bed: '1 King or 2 Twins',
          capacity: '2 Adults, 1 Child',
          price: 120,
          features: ['Private Garden Balcony', 'Marble Bathroom', 'Breakfast Buffet Included']
        }
      ]
    }
  ],

  // 3. Live Booking Social Proof Notifications
  liveBookings: [
    { name: 'Anh Tuấn (Hà Nội)', action: 'vừa đặt Tour Bà Nà Hills & Cầu Vàng', timeAgo: '2 phút trước', avatar: 'AT', savings: '$11.00' },
    { name: 'Chị Mai (TP. Hồ Chí Minh)', action: 'vừa đặt The Bliss Oceanfront Hotel (3 đêm)', timeAgo: '5 phút trước', avatar: 'TM', savings: '$35.00' },
    { name: 'Michael Brown (Australia)', action: 'booked Han River Night Cruise (2 tickets)', timeAgo: '9 mins ago', avatar: 'MB', savings: '$8.00' },
    { name: 'Gia đình chị Hạnh (Đà Lạt)', action: 'vừa đặt Tour Ẩm Thực Đà Nẵng Đêm', timeAgo: '12 phút trước', avatar: 'LH', savings: '$14.00' },
    { name: 'Kenji & Yoko (Japan)', action: 'booked InterContinental Sun Peninsula Resort', timeAgo: '18 mins ago', avatar: 'KY', savings: '$75.00' }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.DANANG_DATA = DANANG_DATA;
}
