/**
 * DANANG FOR LESS - INTERNATIONALIZATION (i18n) ENGINE
 * Complete bilingual (EN / VN) dictionary and dynamic language switcher
 * Persists selection in localStorage, dispatches global events, and animates transitions
 */

const DN_I18N_DICTIONARY = {
  en: {
    // Brand & Global Header
    "brand.title": "Da Nang",
    "brand.sub": "for less",
    "brand.tagline": "Experience Da Nang on a budget",
    "nav.tours": "Tours",
    "nav.hotels": "Hotels & Stays",
    "nav.guides": "Guides",
    "nav.about": "About Us",
    "nav.contact": "Contact",
    "nav.offers": "Special Offers",
    "nav.admin": "Admin",
    "nav.my_bookings": "My Bookings & Loyalty",
    "nav.admin_dashboard": "Admin Dashboard",
    "nav.hotline": "Support hotline:",

    // Hero Section
    "hero.guarantee_badge": "Best Price Guarantee in Da Nang • Save 20% - 40%",
    "hero.headline": '<span class="block text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-2 hero-title-shadow">Experience</span><span class="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-crimson tracking-tight hero-crimson-shadow mt-1 sm:mt-2">Da Nang for Less</span>',
    "hero.subtitle_1": "Budget-friendly tours & stays.",
    "hero.subtitle_2": "Experience Da Nang on a budget. Hand-picked local deals with zero hidden fees.",
    "search.tab_tours": "Tours",
    "search.tab_hotels": "Hotels & Stays",
    "search.tab_combos": "Special Deals",
    "search.destination_label": "Destination",
    "search.destination_placeholder": "Where are you going?",
    "search.destination_hotel_placeholder": "My Khe Beach, Son Tra...",
    "search.destination_combo_placeholder": "Special Tour + Hotel Combos...",
    "search.dates_label": "Time / Dates",
    "search.dates_placeholder": "Check-in — Check-out",
    "search.dates_tour_placeholder": "Select Departure Date",
    "search.guests_label": "Travelers",
    "search.guests_placeholder": "2 adults · 1 room",
    "search.guests_tour_placeholder": "2 adults · Group Tour",
    "search.btn": "Search",

    // Value Proposition & Trust Bar
    "trust.best_price_title": "Best Price Guarantee",
    "trust.best_price_desc": "We find the best local deals for you.",
    "trust.best_price_sub": "Best price guaranteed.",
    "trust.local_support_title": "Local Support",
    "trust.local_support_desc": "24/7 bilingual assistance in Da Nang.",
    "trust.local_support_sub": "Local support 24/7.",
    "trust.curated_title": "Curated Quality",
    "trust.curated_desc": "Hand-picked budget stays & tours.",
    "trust.curated_sub": "Curated quality experiences.",

    // Featured Tours Section
    "tours.badge": "Experiences",
    "tours.title": "Featured Tours",
    "tours.subtitle": "Top rated budget experiences in Da Nang & Central Vietnam",
    "tours.see_all": "See all tours",
    "tours.bana_title": "Ba Na Hills Full Day",
    "tours.bana_sub": "Ba Na Hills Full Day Tour",
    "tours.hoian_title": "Hoi An Evening Tour",
    "tours.hoian_sub": "Hoi An Ancient Town",
    "tours.marble_title": "Marble Mountains",
    "tours.marble_sub": "Marble Mountains",
    "tours.hanriver_title": "Han River Night Cruise",
    "tours.hanriver_sub": "Han River Night Cruise",
    "tours.book_btn": "Book",
    "tours.hours": "hours",
    "tours.new_badge": "New",

    // Top-Rated Hotels Section
    "hotels.badge": "Accommodations",
    "hotels.title": "Top-Rated Hotels",
    "hotels.subtitle": "Handpicked stays in Da Nang & Hoi An",
    "hotels.see_all": "See all hotels",
    "hotels.from": "from",
    "hotels.per_night": "/night",
    "hotels.view_hotel": "View Hotel",
    "hotels.tag_oceanfront": "Oceanfront",
    "hotels.tag_luxury": "Luxury",
    "hotels.tag_best_value": "Best Value",
    "hotels.pool": "Pool",
    "hotels.spa": "Spa",
    "hotels.breakfast": "Breakfast",
    "hotels.resort": "Resort",
    "hotels.fine_dining": "Fine Dining",
    "hotels.city_view": "City View",
    "hotels.wifi": "WiFi",

    // Travel Guide Banner
    "guide.badge": "Travel Guides",
    "guide.headline_html": "Explore Da Nang <br><span class=\"text-red-400 font-serif italic font-normal\">Your Way</span>",
    "guide.desc": "From hidden street food gems to pristine beaches and ancient temples — our insider travel guides help you discover the best of Da Nang without breaking the bank.",
    "guide.btn": "View Travel Guides",
    "guide.insider_badge": "Insider Secrets",
    "guide.card_title": "Top 15 local street food gems in Da Nang",

    // Dedicated Guides Page
    "guides.page_title": "Da Nang Travel Guides & Local Tips",
    "guides.page_subtitle": "Insider advice, budget itineraries, and local secrets to explore Da Nang smart and affordably.",
    "guides.breadcrumb_home": "Home",
    "guides.breadcrumb_guides": "Travel Guides",
    "guides.filter_all": "All Guides",
    "guides.filter_itinerary": "Itineraries",
    "guides.filter_food": "Food & Dining",
    "guides.filter_budget": "Budget Tips",
    "guides.category_budget": "Budget Travel",
    "guides.category_itinerary": "3D2N Itinerary",
    "guides.featured_badge": "Featured Guide",
    "guides.reading_time": "5 min read",
    "guides.sample_title": "The Ultimate 3D2N Da Nang Budget Guide: Eat, Stay & Explore Under $100",
    "guides.sample_subtitle": "How to experience the best of Da Nang, Son Tra, and Hoi An with high comfort and minimum expenses.",
    "guides.author": "By DaNang Local Team",
    "guides.date": "Updated September 2024",
    "guides.overview_title": "Quick Overview & Budget Breakdown",
    "guides.budget_label": "Estimated Total:",
    "guides.budget_val": "~$95 (2.300.000đ / person)",
    "guides.duration_label": "Duration:",
    "guides.duration_val": "3 Days 2 Nights",
    "guides.transport_label": "Transport:",
    "guides.transport_val": "Rental Motorbike ($5/day) or Grab",
    "guides.stay_label": "Best Stay Area:",
    "guides.stay_val": "My Khe Beach / An Thuong area",
    "guides.day1_title": "Day 1: Son Tra Peninsula, My Khe Beach & Dragon Bridge Fire Show",
    "guides.day2_title": "Day 2: Marble Mountains & Enchanting Hoi An Ancient Town",
    "guides.day3_title": "Day 3: Con Market Street Food Safari & Han Market Souvenirs",
    "guides.food_title": "Must-Try Local Foods Under $2",
    "guides.tips_title": "5 Money-Saving Insider Tips",
    "guides.related_title": "More Travel Guides & Local Recommendations",
    "guides.card1_title": "Top 15 Local Street Food Spots in Da Nang (No Tourist Traps)",
    "guides.card2_title": "Hai Van Pass by Motorbike: Safety Guide & Scenic Stops",
    "guides.card3_title": "How to Book Hotels in Da Nang with 25% Secret Discounts",
    "guides.cta_title": "Ready for your Da Nang adventure?",
    "guides.cta_desc": "Save up to 30% on handpicked tours and top-rated accommodations.",
    "guides.cta_tours_btn": "Explore Affordable Tours",
    "guides.cta_stays_btn": "Find Best Hotel Deals",

    // Secret Deals Newsletter
    "deals.badge": "Exclusive Deals",
    "deals.title": "Get Secret Deals!",
    "deals.desc": "Join 10,000+ travelers getting exclusive deals, hidden gems & local tips straight to their inbox.",
    "deals.placeholder": "Enter your email address...",
    "deals.btn": "Subscribe",
    "deals.note": "No spam, ever. Unsubscribe anytime.",

    // Footer
    "footer.intro": "Your trusted local partner for high-quality travel experiences at affordable prices in Da Nang and Central Vietnam.",
    "footer.explore": "Explore",
    "footer.homestays": "Homestay & Villas",
    "footer.travel_guide": "Travel Guide",
    "footer.partners": "For Partners",
    "footer.list_property": "List Your Property",
    "footer.tour_operator": "Tour Operator",
    "footer.affiliate": "Affiliate Program",
    "footer.partnership": "Business Partnership",
    "footer.support": "Support & Legal",
    "footer.help_center": "Help Center",
    "footer.cancel_policy": "Cancellation Policy",
    "footer.terms": "Terms of Use",
    "footer.privacy": "Privacy Policy",
    "footer.community": "Community Guidelines",
    "footer.copyright": "© 2024 DaNang for less. All rights reserved.",
    "footer.license": "International Travel Business License No: 79-1234/2024/TCDL-GP LHQT",

    // Stays Listing & Details Page
    "stays.page_title": "Find Your Perfect Stay",
    "stays.page_subtitle": "Discover handpicked hotels, resorts & villas at the best prices.",
    "stays.search_location_label": "Location",
    "stays.search_checkin_label": "Check-in",
    "stays.search_checkout_label": "Check-out",
    "stays.search_guests_label": "Guests",
    "stays.filters_title": "Filters",
    "stays.clear_all": "Clear all",
    "stays.property_type": "Property Type",
    "stays.star_rating": "Star Rating",
    "stays.price_range": "Price Range",
    "stays.amenities": "Amenities",
    "stays.apply_filters": "Apply Filters",
    "stays.available_hotels": "hotels available in Da Nang",
    "stays.sort_by": "Sort by:",
    "stays.sort_featured": "Featured & Recommended",
    "stays.sort_price_low": "Price: Low to High",
    "stays.sort_price_high": "Price: High to Low",
    "stays.sort_rating": "Guest Rating",
    "stays.view_details": "View Details",
    "stays.book_room": "Book Room",
    "stays.promo_badge": "Save More For Your Stay",
    "stays.promo_title": "Get 15% off your first booking!",
    "stays.promo_desc": "Join our community to unlock hidden member-only prices and exclusive travel tips for Da Nang. No spam, ever.",
    "stays.join_now": "Join Now",
    "stays.select_room": "Select Your Room",
    "stays.room_desc": "Spacious deluxe room with balcony and panoramic sea view",
    "stays.per_night_tax": "per night (taxes included)",

    // Tours Listing & Details Page
    "tours.page_title": "Explore Da Nang Tours",
    "tours.page_subtitle": "Discover Da Nang travel experiences at the best prices",
    "tours.tour_type": "Tour Type",
    "tours.duration": "Duration",
    "tours.available_tours": "tours available in Da Nang",
    "tours.book_now": "Book Now",
    "tours.instant_confirmation": "Instant Confirmation",
    "tours.free_cancel": "Free cancellation up to 24h before",
    "tours.itinerary": "Detailed Itinerary",
    "tours.whats_included": "What's Included",
    "tours.whats_excluded": "What's Excluded",
    "tours.guest_reviews": "Guest Reviews",

    // Checkout & Booking Process
    "booking.step_select": "Select",
    "booking.step_details": "Your Details",
    "booking.step_confirm": "Confirmation",
    "booking.breadcrumbs_search": "Search Results",
    "booking.breadcrumbs_property": "Property Details",
    "booking.breadcrumbs_checkout": "Checkout & Payment",
    "booking.guest_info": "Guest Information",
    "booking.full_name": "Full Name *",
    "booking.phone_number": "Phone Number *",
    "booking.email_address": "Email Address *",
    "booking.special_requests": "Special Requests (optional)",
    "booking.primary_guest": "I am the primary guest staying at the property",
    "booking.payment_method": "Payment Method",
    "booking.payment_card": "Credit / Debit Card",
    "booking.payment_momo": "MoMo E-Wallet",
    "booking.payment_vnpay": "VNPay / Domestic Bank",
    "booking.card_details": "Card Details",
    "booking.card_number": "Card Number",
    "booking.card_exp": "Expiry (MM/YY)",
    "booking.card_cvc": "CVC / CVV",
    "booking.summary_title": "Booking Summary",
    "booking.pay_now_btn": "Pay Now & Confirm Booking",
    "booking.success_title": "Booking Successful!",
    "booking.success_desc": "Thank you for booking with us. Your reservation is confirmed and a copy of your e-ticket has been sent to your email.",
    "booking.download_pdf": "Download E-Ticket (PDF)",
    "booking.add_calendar": "Add to Google Calendar",
    "booking.back_home": "Back to Home",

    // Customer Portal & Admin
    "portal.user_title": "My Account & Bookings",
    "portal.bookings_tab": "My Bookings",
    "portal.profile_tab": "Profile Settings",
    "portal.loyalty_tab": "Loyalty Points",
    "portal.wishlist_tab": "Wishlist",
    "portal.support_tab": "Support & Help",
    "portal.admin_title": "Admin Dashboard",
    "portal.admin_overview": "Overview & Performance",
    "portal.admin_hotels": "Manage Hotels",
    "portal.admin_tours": "Manage Tours",
    "portal.admin_orders": "Customer Bookings",

    // Authentication (Login & Register)
    "nav.login": "Sign In",
    "nav.signup": "Sign Up",
    "nav.logout": "Sign Out",
    "auth.login_title": "Sign In",
    "auth.login_subtitle": "Explore Da Nang tours & stays at the best rates",
    "auth.register_title": "Create an Account",
    "auth.register_subtitle": "Join DaNang for less and earn welcome rewards",
    "auth.email_label": "Email or Phone Number",
    "auth.password_label": "Password",
    "auth.fullname_label": "Full Name",
    "auth.phone_label": "Phone Number",
    "auth.forgot_password": "Forgot password?",
    "auth.remember_me": "Remember me",
    "auth.submit_login": "Sign In",
    "auth.submit_register": "Create Account",
    "auth.demo_hint": "Quick Demo Login:",
    "auth.or_continue": "Or continue with",
    "auth.or_register_with": "Or register with",
    "auth.no_account": "Don't have an account?",
    "auth.register_now": "Sign up now",
    "auth.have_account": "Already have an account?",
    "auth.login_now": "Sign in",
    "auth.back_home": "Home",
    "auth.welcome_bonus_title": "Get 500 Loyalty Points Instantly!",
    "auth.welcome_bonus_desc": "Applied directly as a discount on your first tour or hotel booking.",
    "auth.terms_agree": "I agree to the Terms of Service and Privacy Policy of DaNang for less.",

    // Wishlist / Saved Items
    "wishlist.title": "Saved Items",
    "wishlist.all": "All",
    "wishlist.tours": "Tours",
    "wishlist.stays": "Hotels & Stays",
    "wishlist.empty_title": "Your Wishlist is Empty",
    "wishlist.empty_desc": "Save items with the heart icon to view, compare or book them later.",
    "wishlist.explore_btn": "Explore Tours & Stays",
    "wishlist.clear_all": "Clear All",
    "wishlist.view_detail": "View Details",
    "wishlist.book_now": "Book Now",
    "wishlist.toast_added": "Saved to your Wishlist!",
    "wishlist.toast_removed": "Removed from Wishlist",
    "wishlist.total_est": "Estimated Total:",
    "wishlist.count_unit": "items",
    "wishlist.view_in_portal": "View in My Account",

    // Why We Stand Out (Inspired by Dacotours)
    "why_us.badge": "Why Travelers Choose Us",
    "why_us.title": "Why We Stand Out",
    "why_us.subtitle": "Explore Da Nang and Central Vietnam with unmatched local expertise, authentic value, and genuine care.",
    "why_us.f1_title": "Fast & Hassle-Free Booking",
    "why_us.f1_desc": "Book in under 60 seconds with instant confirmation, digital tickets, and zero tedious paperwork.",
    "why_us.f2_title": "24/7 Local Support",
    "why_us.f2_desc": "Direct hotline, WhatsApp & Zalo with our local Da Nang experts. Always by your side throughout your journey.",
    "why_us.f3_title": "Expert Local Guides",
    "why_us.f3_desc": "100% licensed, passionate local guides sharing authentic history, hidden gems, and true Vietnamese warmth.",
    "why_us.f4_title": "Safe, Smooth & Stress-Free",
    "why_us.f4_desc": "Modern air-conditioned transport fleet, vetted drivers, and full passenger travel insurance included.",
    "why_us.f5_title": "Easy & Flexible Refund",
    "why_us.f5_desc": "Free cancellation up to 24 hours before departure. Flexible rescheduling if weather conditions change.",
    "why_us.f6_title": "Best Value, Zero Hidden Fees",
    "why_us.f6_desc": "Transparent all-inclusive rates with zero tourist traps, no forced shopping stops, guaranteed.",
    "why_us.f7_title": "Authentic Local Experiences",
    "why_us.f7_desc": "Taste genuine street food favorites and explore centuries-old craft villages away from crowded tourist routes.",
    "why_us.f8_title": "Tailored & Custom Itineraries",
    "why_us.f8_desc": "Personalized schedules tailored for solo travelers, families, and private groups based on your style and budget.",
    "why_us.f9_title": "Responsible & Sustainable Tourism",
    "why_us.f9_desc": "Supporting local artisan communities, respecting wildlife on Son Tra Peninsula, and keeping beaches clean.",

    // Travelers' Reviews (Inspired by Dacotours)
    "reviews.badge": "Travelers' Reviews",
    "reviews.title": "Real Stories From Real Travelers",
    "reviews.subtitle": "Over 12,800+ 5-star reviews on TripAdvisor, Google and GetYourGuide speak for our quality.",
    "reviews.score_label": "4.9/5 Excellent",
    "reviews.score_desc": "Recommended by 99% of travelers on TripAdvisor & Google Reviews",
    "reviews.tab_all": "All Reviews",
    "reviews.tab_google": "Google Reviews",
    "reviews.tab_tripadvisor": "TripAdvisor",
    "reviews.tab_getyourguide": "GetYourGuide",
    "reviews.verified_traveler": "Verified Traveler",
    "reviews.see_more": "See All Reviews on Google & TripAdvisor",

    // Book Without Stress Banner
    "stressfree.title": "Book Your Da Nang Adventure Without Any Stress",
    "stressfree.desc": "With 12+ years of local expertise, our travel specialists craft your perfect itinerary from start to finish. Simply enjoy every moment; we handle the rest.",
    "stressfree.btn": "Get Free Custom Itinerary & Advice",

    // About Us Page
    "about.hero_badge": "Local Tour Operator & Travel Agency",
    "about.hero_title": "About Da Nang For Less",
    "about.hero_subtitle": "Founded with a passion to deliver high-quality, authentic Central Vietnam experiences at the most affordable, transparent prices.",
    "about.nav_who_we_are": "Who We Are",
    "about.nav_vision": "Our Vision",
    "about.nav_mission": "Our Mission",
    "about.nav_values": "Core Values",
    "about.nav_team": "Our Local Experts",
    "about.nav_achievements": "Achievements",
    "about.nav_license": "Legal & Licenses",
    "about.story_title": "Our Story",
    "about.story_p1": "Established in Da Nang, Da Nang For Less was born from a simple belief: every traveler deserves to experience the enchanting beauty, vibrant culture, and world-famous cuisine of Central Vietnam without worrying about overpriced tourist traps or hidden costs.",
    "about.story_p2": "Over the past 12 years, we have guided more than 150,000 travelers across Da Nang, Hoi An, Hue, and the Central Highlands. From solo backpackers to family vacations and corporate retreats, our team customizes every journey with heartfelt hospitality.",
    "about.vision_title": "Our Vision",
    "about.vision_p1": "To be the most trusted #1 choice for travelers seeking authentic, high-value, and stress-free travel in Da Nang and Central Vietnam.",
    "about.vision_p2": "We aspire to set the standard for sustainable, transparent, and community-centered tourism that preserves Vietnam's rich heritage for future generations.",
    "about.mission_title": "Our Mission",
    "about.mission_p1": "Making travel effortless, inspiring, and accessible to everyone. We replace the stress of trip planning with meticulously arranged, joyful journeys that leave lasting memories.",
    "about.mission_p2": "Connecting travelers directly to local cultures, family-owned restaurants, and artisan workshops, ensuring that tourism benefits the communities we visit.",
    "about.values_title": "Our 5 Core Values",
    "about.val1_title": "1. Put People First",
    "about.val1_desc": "We treat every traveler like family. From your first inquiry to your departure flight, your comfort and happiness guide our decisions.",
    "about.val2_title": "2. Authentic Experiences",
    "about.val2_desc": "Real stories, real flavors, and genuine connections. We bypass artificial setups to bring you the true spirit of Da Nang.",
    "about.val3_title": "3. Honest & Transparent",
    "about.val3_desc": "No hidden fees, no forced commission shopping, no inflated rates. What you see is what you pay — always.",
    "about.val4_title": "4. Passion in Every Step",
    "about.val4_desc": "We are proud Da Nang locals who love our home city. That genuine pride shines through in every tour and recommendation.",
    "about.val5_title": "5. Responsible Tourism",
    "about.val5_desc": "We actively participate in beach cleanup campaigns, support local craftspeople, and promote eco-conscious travel habits.",
    "about.team_title": "Meet Our Local Experts",
    "about.team_subtitle": "Our passionate, licensed travel specialists and tour guides dedicated to making your journey unforgettable.",
    "about.achieve_title": "Highlight Achievements",
    "about.achieve_subtitle": "Recognized by global travel authorities and loved by thousands of travelers worldwide.",
    "about.license_title": "Government Licenses & Transparency",
    "about.license_subtitle": "Fully licensed and accredited under Vietnamese tourism law.",

    // Contact Us Page
    "contact.hero_badge": "We Are Here To Help 24/7",
    "contact.hero_title": "Get in Touch with Us",
    "contact.hero_subtitle": "Have questions about tours, stays, or want a free customized itinerary for Da Nang? Our local team is ready 24/7.",
    "contact.form_title": "Send Us a Message",
    "contact.form_subtitle": "Fill out the form below and we will get back to you within 30 minutes.",
    "contact.name_label": "Your Full Name",
    "contact.name_placeholder": "e.g. Alex Johnson",
    "contact.email_label": "Email Address",
    "contact.email_placeholder": "you@example.com",
    "contact.phone_label": "Phone / WhatsApp / Zalo",
    "contact.phone_placeholder": "+84 914 136 151",
    "contact.travel_date_label": "Expected Travel Date",
    "contact.guests_count_label": "Number of Travelers",
    "contact.service_label": "Service of Interest",
    "contact.service_tours": "Daily Tours (Ba Na, Hoi An, Hue...)",
    "contact.service_private": "Private Custom Tour Package",
    "contact.service_hotels": "Hotel & Resort Bookings",
    "contact.service_combo": "Tour + Stay Package Combo",
    "contact.service_other": "General Inquiry & Advice",
    "contact.message_label": "Your Travel Request & Details",
    "contact.message_placeholder": "Tell us about your travel dates, places you want to visit, or any special requests...",
    "contact.submit_btn": "Send Inquiry (Free Advice)",
    "contact.info_title": "Contact Information",
    "contact.address_label": "Head Office in Da Nang:",
    "contact.address_val": "195 Dang Vu Hy, An Hai Dong, Son Tra, Da Nang City, Vietnam",
    "contact.hotline_label": "Hotline / WhatsApp / Zalo 24/7:",
    "contact.email_val": "hello@danangforless.com / info@danangforless.com",
    "contact.hours_label": "Office Hours:",
    "contact.hours_val": "7:00 AM - 10:00 PM (Monday - Sunday)",
    "contact.faq_title": "Frequently Asked Questions",
    "contact.faq_q1": "How far in advance should I book my tour?",
    "contact.faq_a1": "For daily tours (Ba Na Hills, Hoi An, Hue), you can book up to 6:00 PM the day prior. For peak holiday seasons or customized private itineraries, we recommend booking 3 to 7 days in advance.",
    "contact.faq_q2": "What is the cancellation and refund policy?",
    "contact.faq_a2": "We offer 100% full refund if you cancel at least 24 hours before tour departure. In case of unexpected bad weather or typhoons, we provide free rescheduling or instant full refunds.",
    "contact.faq_q3": "Do you offer hotel pick-up and drop-off in Da Nang?",
    "contact.faq_a3": "Yes! All our group and private tours include free door-to-door pick-up and drop-off at hotels located in Da Nang city center and along My Khe Beach.",
    "contact.faq_q4": "Are there any hidden costs during the tour?",
    "contact.faq_a4": "Never. All entrance tickets, cable cars, buffet lunches (when specified), AC transport, English-speaking guide, and travel insurance are included in the published price with zero hidden fees."
  },

  vn: {
    // Brand & Global Header
    "brand.title": "Da Nang",
    "brand.sub": "for less",
    "brand.tagline": "Trải nghiệm Đà Nẵng, chi phí tối ưu",
    "nav.tours": "Chuyến đi",
    "nav.hotels": "Khách sạn & Chỗ nghỉ",
    "nav.guides": "Cẩm nang",
    "nav.about": "Về chúng tôi",
    "nav.contact": "Liên hệ",
    "nav.offers": "Ưu đãi đặc biệt",
    "nav.admin": "Quản trị",
    "nav.my_bookings": "Vé của tôi & Điểm thưởng",
    "nav.admin_dashboard": "Trang quản trị",
    "nav.hotline": "Hotline hỗ trợ:",

    // Hero Section
    "hero.guarantee_badge": "Cam kết giá tốt nhất Đà Nẵng • Tiết kiệm 20% - 40%",
    "hero.headline": '<span class="block text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-2 hero-title-shadow">Trải Nghiệm</span><span class="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-crimson tracking-tight hero-crimson-shadow mt-1 sm:mt-2">Da Nang for Less</span>',
    "hero.subtitle_1": "Chuyến đi & khách sạn giá tốt nhất.",
    "hero.subtitle_2": "Trải nghiệm Đà Nẵng như người bản địa. Ưu đãi độc quyền, minh bạch tuyệt đối, không phí ẩn.",
    "search.tab_tours": "Chuyến đi",
    "search.tab_hotels": "Khách sạn & Chỗ nghỉ",
    "search.tab_combos": "Combo tiết kiệm",
    "search.destination_label": "Điểm đến",
    "search.destination_placeholder": "Bà Nà, Hội An, Sơn Trà...",
    "search.destination_hotel_placeholder": "Bãi biển Mỹ Khê, Bán đảo Sơn Trà...",
    "search.destination_combo_placeholder": "Combo Tour + Khách sạn tiết kiệm...",
    "search.dates_label": "Thời gian",
    "search.dates_placeholder": "Nhận phòng — Trả phòng",
    "search.dates_tour_placeholder": "Chọn ngày khởi hành",
    "search.guests_label": "Số khách",
    "search.guests_placeholder": "2 người lớn · 1 phòng",
    "search.guests_tour_placeholder": "2 người lớn · Tour ghép",
    "search.btn": "Tìm kiếm",

    // Value Proposition & Trust Bar
    "trust.best_price_title": "Cam Kết Giá Tốt Nhất",
    "trust.best_price_desc": "Chúng tôi tìm kiếm các ưu đãi bản địa tốt nhất cho bạn.",
    "trust.best_price_sub": "Đảm bảo giá tốt nhất thị trường.",
    "trust.local_support_title": "Hỗ Trợ Bản Địa 24/7",
    "trust.local_support_desc": "Hỗ trợ song ngữ 24/7 trực tiếp tại Đà Nẵng.",
    "trust.local_support_sub": "Đồng hành cùng bạn trong suốt chuyến đi.",
    "trust.curated_title": "Trải Nghiệm Chọn Lọc",
    "trust.curated_desc": "Tuyển chọn các chỗ nghỉ & tour chất lượng cao.",
    "trust.curated_sub": "Bảo chứng từ người dân địa phương.",

    // Featured Tours Section
    "tours.badge": "Trải nghiệm",
    "tours.title": "Chuyến Đi Nổi Bật",
    "tours.subtitle": "Những trải nghiệm được đánh giá cao nhất tại Đà Nẵng & Miền Trung",
    "tours.see_all": "Xem tất cả chuyến đi",
    "tours.bana_title": "Bà Nà Hills Trọn Gói",
    "tours.bana_sub": "Tour Cầu Vàng & Bà Nà Hills 1 ngày",
    "tours.hoian_title": "Phố Cổ Hội An Về Đêm",
    "tours.hoian_sub": "Thả đèn hoa đăng & Ẩm thực phố cổ",
    "tours.marble_title": "Ngũ Hành Sơn Kỳ Bí",
    "tours.marble_sub": "Khám phá hang động & Làng đá Non Nước",
    "tours.hanriver_title": "Du Thuyền Sông Hàn Đêm",
    "tours.hanriver_sub": "Ngắm Cầu Rồng phun lửa & Cầu quay",
    "tours.book_btn": "Đặt ngay",
    "tours.hours": "giờ",
    "tours.new_badge": "Mới",

    // Top-Rated Hotels Section
    "hotels.badge": "Chỗ nghỉ",
    "hotels.title": "Khách Sạn Hàng Đầu",
    "hotels.subtitle": "Các chỗ nghỉ ven biển được tuyển chọn kỹ lưỡng",
    "hotels.see_all": "Xem tất cả khách sạn",
    "hotels.from": "từ",
    "hotels.per_night": "/đêm",
    "hotels.view_hotel": "Xem khách sạn",
    "hotels.tag_oceanfront": "Sát biển",
    "hotels.tag_luxury": "Sang trọng",
    "hotels.tag_best_value": "Giá tốt nhất",
    "hotels.pool": "Hồ bơi",
    "hotels.spa": "Spa",
    "hotels.breakfast": "Bữa sáng",
    "hotels.resort": "Nghỉ dưỡng",
    "hotels.fine_dining": "Ẩm thực cao cấp",
    "hotels.city_view": "View phố",
    "hotels.wifi": "WiFi tốc độ cao",

    // Travel Guide Banner
    "guide.badge": "Cẩm nang du lịch",
    "guide.headline_html": "Khám Phá Đà Nẵng <br><span class=\"text-red-400 font-serif italic font-normal\">Theo Cách Của Bạn</span>",
    "guide.desc": "Từ những quán ăn vỉa hè chuẩn vị đến những bãi tắm hoang sơ và đền chùa cổ kính — cẩm nang từ người bản địa giúp bạn trải nghiệm trọn vẹn mà không lo 'chặt chém'.",
    "guide.btn": "Xem Cẩm Nang Bản Địa",
    "guide.insider_badge": "Bí kíp địa phương",
    "guide.card_title": "Top 15 quán ăn bản địa Đà Nẵng không thể bỏ lỡ",

    // Dedicated Guides Page
    "guides.page_title": "Cẩm Nang Du Lịch & Mẹo Bản Địa Đà Nẵng",
    "guides.page_subtitle": "Bí kíp du lịch thông minh, lịch trình tự túc tiết kiệm và địa chỉ ăn chơi chuẩn người bản xứ.",
    "guides.breadcrumb_home": "Trang chủ",
    "guides.breadcrumb_guides": "Cẩm nang du lịch",
    "guides.filter_all": "Tất cả bài viết",
    "guides.filter_itinerary": "Lịch trình",
    "guides.filter_food": "Ẩm thực",
    "guides.filter_budget": "Mẹo tiết kiệm",
    "guides.category_budget": "Tiết kiệm",
    "guides.category_itinerary": "Lịch trình 3N2Đ",
    "guides.featured_badge": "Cẩm nang nổi bật",
    "guides.reading_time": "5 phút đọc",
    "guides.sample_title": "Cẩm Nang Du Lịch Đà Nẵng Tự Túc Tiết Kiệm 3N2Đ Chỉ Từ 2.300.000đ: Ăn Gì, Ở Đâu, Chơi Gì?",
    "guides.sample_subtitle": "Trải nghiệm trọn vẹn vẻ đẹp Đà Nẵng, Sơn Trà và Hội An chất lượng cao với chi phí tối ưu nhất.",
    "guides.author": "Bởi Đội Ngũ Bản Địa DaNang",
    "guides.date": "Cập nhật Tháng 09/2024",
    "guides.overview_title": "Tóm Tắt & Dự Toán Chi Phí Tối Ưu",
    "guides.budget_label": "Dự toán chi phí:",
    "guides.budget_val": "~2.300.000đ / người (Trọn gói)",
    "guides.duration_label": "Thời lượng:",
    "guides.duration_val": "3 Ngày 2 Đêm",
    "guides.transport_label": "Phương tiện:",
    "guides.transport_val": "Thuê xe máy (120k/ngày) hoặc Grab",
    "guides.stay_label": "Khu vực lưu trú:",
    "guides.stay_val": "Gần biển Mỹ Khê / phố An Thượng",
    "guides.day1_title": "Ngày 1: Bán Đảo Sơn Trà, Biển Mỹ Khê & Xem Cầu Rồng Phun Lửa",
    "guides.day2_title": "Ngày 2: Danh Thắng Ngũ Hành Sơn & Phố Cổ Hội An Lung Linh",
    "guides.day3_title": "Ngày 3: Food Tour Chợ Cồn & Săn Đặc Sản Chợ Hàn Làm Quà",
    "guides.food_title": "Món Ngon Bản Địa Nhất Định Phải Thử (Chỉ Từ 25.000đ)",
    "guides.tips_title": "5 Mẹo Vàng Tiết Kiệm Chi Phí Từ Người Bản Xứ",
    "guides.related_title": "Các Bài Viết & Cẩm Nang Liên Quan",
    "guides.card1_title": "Top 15 quán ăn vặt và ẩm thực bản địa Đà Nẵng không lo chặt chém",
    "guides.card2_title": "Kinh nghiệm phượt Đèo Hải Vân bằng xe máy an toàn & điểm check-in đẹp",
    "guides.card3_title": "Bí quyết săn phòng khách sạn & villa Đà Nẵng giảm giá đến 25%",
    "guides.cta_title": "Sẵn sàng cho chuyến vi vu Đà Nẵng?",
    "guides.cta_desc": "Tiết kiệm đến 30% khi đặt tour chọn lọc và khách sạn giá tốt trên DaNang for less.",
    "guides.cta_tours_btn": "Xem Các Tour Tiết Kiệm",
    "guides.cta_stays_btn": "Khám Phá Khách Sạn Giá Tốt",

    // Secret Deals Newsletter
    "deals.badge": "Ưu đãi độc quyền",
    "deals.title": "Nhận Ưu Đãi Bí Mật!",
    "deals.desc": "Cùng 10,000+ du khách nhận các mã giảm giá ẩn, địa điểm bí mật và mẹo du lịch qua email.",
    "deals.placeholder": "Nhập địa chỉ email của bạn...",
    "deals.btn": "Đăng ký nhận tin",
    "deals.note": "Cam kết không spam. Hủy đăng ký bất kỳ lúc nào.",

    // Footer
    "footer.intro": "Đối tác địa phương đáng tin cậy cho những trải nghiệm du lịch chất lượng cao với chi phí tối ưu tại Đà Nẵng và miền Trung.",
    "footer.explore": "Khám phá",
    "footer.homestays": "Homestay & Biệt thự",
    "footer.travel_guide": "Cẩm nang du lịch",
    "footer.partners": "Dành cho đối tác",
    "footer.list_property": "Đăng ký cơ sở lưu trú",
    "footer.tour_operator": "Nhà tổ chức tour",
    "footer.affiliate": "Tiếp thị liên kết",
    "footer.partnership": "Hợp tác doanh nghiệp",
    "footer.support": "Hỗ trợ & Pháp lý",
    "footer.help_center": "Trung tâm trợ giúp",
    "footer.cancel_policy": "Chính sách hủy đặt chỗ",
    "footer.terms": "Điều khoản sử dụng",
    "footer.privacy": "Chính sách bảo mật",
    "footer.community": "Quy tắc cộng đồng",
    "footer.copyright": "© 2024 DaNang for less. Bảo lưu mọi quyền.",
    "footer.license": "Giấy phép kinh doanh dịch vụ lữ hành quốc tế số: 79-1234/2024/TCDL-GP LHQT",

    // Stays Listing & Details Page
    "stays.page_title": "Tìm Kiếm Chỗ Nghỉ Lý Tưởng",
    "stays.page_subtitle": "Khám phá khách sạn, resort & villa tuyển chọn với giá tốt nhất.",
    "stays.search_location_label": "Địa điểm",
    "stays.search_checkin_label": "Nhận phòng",
    "stays.search_checkout_label": "Trả phòng",
    "stays.search_guests_label": "Số khách",
    "stays.filters_title": "Bộ lọc",
    "stays.clear_all": "Xóa bộ lọc",
    "stays.property_type": "Loại chỗ nghỉ",
    "stays.star_rating": "Hạng sao",
    "stays.price_range": "Khoảng giá",
    "stays.amenities": "Tiện ích",
    "stays.apply_filters": "Áp dụng bộ lọc",
    "stays.available_hotels": "khách sạn có sẵn tại Đà Nẵng",
    "stays.sort_by": "Sắp xếp:",
    "stays.sort_featured": "Nổi bật & Đề xuất",
    "stays.sort_price_low": "Giá: Thấp đến Cao",
    "stays.sort_price_high": "Giá: Cao đến Thấp",
    "stays.sort_rating": "Đánh giá của khách",
    "stays.view_details": "Xem chi tiết",
    "stays.book_room": "Đặt phòng",
    "stays.promo_badge": "Tiết kiệm hơn cho kỳ nghỉ",
    "stays.promo_title": "Giảm ngay 15% cho lần đặt đầu tiên!",
    "stays.promo_desc": "Tham gia cùng chúng tôi để mở khóa giá dành riêng cho thành viên và các mẹo du lịch bí mật tại Đà Nẵng. Không spam, hủy bất cứ lúc nào.",
    "stays.join_now": "Tham gia ngay",
    "stays.select_room": "Chọn Loại Phòng",
    "stays.room_desc": "Phòng Deluxe rộng rãi có ban công ngắm toàn cảnh biển Mỹ Khê",
    "stays.per_night_tax": "mỗi đêm (đã bao gồm thuế phí)",

    // Tours Listing & Details Page
    "tours.page_title": "Khám Phá Các Tour Đà Nẵng",
    "tours.page_subtitle": "Trải nghiệm các chuyến đi chọn lọc với mức giá ưu đãi nhất",
    "tours.tour_type": "Loại chuyến đi",
    "tours.duration": "Thời lượng",
    "tours.available_tours": "chuyến đi có sẵn tại Đà Nẵng",
    "tours.book_now": "Đặt ngay",
    "tours.instant_confirmation": "Xác nhận tức thì",
    "tours.free_cancel": "Hủy miễn phí trước 24 giờ",
    "tours.itinerary": "Lịch trình chi tiết",
    "tours.whats_included": "Bao gồm",
    "tours.whats_excluded": "Không bao gồm",
    "tours.guest_reviews": "Đánh giá của khách",

    // Checkout & Booking Process
    "booking.step_select": "Chọn gói",
    "booking.step_details": "Thông tin",
    "booking.step_confirm": "Xác nhận",
    "booking.breadcrumbs_search": "Kết quả tìm kiếm",
    "booking.breadcrumbs_property": "Chi tiết chỗ nghỉ",
    "booking.breadcrumbs_checkout": "Thanh toán & Đặt chỗ",
    "booking.guest_info": "Thông Tin Khách Hàng",
    "booking.full_name": "Họ và tên *",
    "booking.phone_number": "Số điện thoại *",
    "booking.email_address": "Địa chỉ Email *",
    "booking.special_requests": "Yêu cầu đặc biệt (tùy chọn)",
    "booking.primary_guest": "Tôi là khách chính nhận phòng tại cơ sở lưu trú",
    "booking.payment_method": "Phương Thức Thanh Toán",
    "booking.payment_card": "Thẻ Quốc Tế (Visa / Master / JCB)",
    "booking.payment_momo": "Ví điện tử MoMo",
    "booking.payment_vnpay": "VNPay / QR Ngân hàng nội địa",
    "booking.card_details": "Thông Tin Thẻ",
    "booking.card_number": "Số thẻ",
    "booking.card_exp": "Hạn dùng (MM/YY)",
    "booking.card_cvc": "Mã bảo mật (CVC)",
    "booking.summary_title": "Tóm Tắt Đơn Đặt",
    "booking.pay_now_btn": "Thanh Toán & Xác Nhận Đặt Chỗ",
    "booking.success_title": "Đặt Chỗ Thành Công!",
    "booking.success_desc": "Cảm ơn bạn đã đặt chỗ. Vé điện tử đã được xác nhận và bản sao chi tiết đã được gửi tới email của bạn.",
    "booking.download_pdf": "Tải Vé Điện Tử (PDF)",
    "booking.add_calendar": "Lưu Vào Google Calendar",
    "booking.back_home": "Về Trang Chủ",

    // Customer Portal & Admin
    "portal.user_title": "Tài Khoản & Chuyến Đi",
    "portal.bookings_tab": "Đơn Đặt Chỗ",
    "portal.profile_tab": "Cài Đặt Hồ Sơ",
    "portal.loyalty_tab": "Điểm Thưởng",
    "portal.wishlist_tab": "Danh Sách Yêu Thích",
    "portal.support_tab": "Hỗ Trợ & Trợ Giúp",
    "portal.admin_title": "Trang Quản Trị Hệ Thống",
    "portal.admin_overview": "Tổng Quan & Doanh Thu",
    "portal.admin_hotels": "Quản Lý Khách Sạn",
    "portal.admin_tours": "Quản Lý Chuyến Đi",
    "portal.admin_orders": "Đơn Đặt Của Khách",

    // Authentication (Login & Register)
    "nav.login": "Đăng nhập",
    "nav.signup": "Đăng ký",
    "nav.logout": "Đăng xuất",
    "auth.login_title": "Đăng Nhập",
    "auth.login_subtitle": "Khám phá tour & khách sạn giá tốt nhất tại Đà Nẵng",
    "auth.register_title": "Tạo Tài Khoản",
    "auth.register_subtitle": "Gia nhập DaNang for less và nhận ngay ưu đãi thành viên",
    "auth.email_label": "Email hoặc Số điện thoại",
    "auth.password_label": "Mật khẩu",
    "auth.fullname_label": "Họ và tên",
    "auth.phone_label": "Số điện thoại",
    "auth.forgot_password": "Quên mật khẩu?",
    "auth.remember_me": "Ghi nhớ đăng nhập",
    "auth.submit_login": "Đăng Nhập",
    "auth.submit_register": "Đăng Ký Tài Khoản",
    "auth.demo_hint": "Đăng nhập nhanh thử nghiệm:",
    "auth.or_continue": "Hoặc tiếp tục với",
    "auth.or_register_with": "Hoặc đăng ký với",
    "auth.no_account": "Bạn chưa có tài khoản?",
    "auth.register_now": "Đăng ký ngay",
    "auth.have_account": "Bạn đã có tài khoản?",
    "auth.login_now": "Đăng nhập",
    "auth.back_home": "Trang chủ",
    "auth.welcome_bonus_title": "Tặng ngay 500 Điểm Loyalty!",
    "auth.welcome_bonus_desc": "Áp dụng giảm trực tiếp khi đặt phòng hoặc tour đầu tiên.",
    "auth.terms_agree": "Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật của DaNang for less.",

    // Wishlist / Saved Items
    "wishlist.title": "Danh sách đã lưu",
    "wishlist.all": "Tất cả",
    "wishlist.tours": "Chuyến đi",
    "wishlist.stays": "Khách sạn & Chỗ nghỉ",
    "wishlist.empty_title": "Danh sách lưu đang trống",
    "wishlist.empty_desc": "Hãy bấm vào biểu tượng trái tim trên các tour và khách sạn để lưu lại xem sau.",
    "wishlist.explore_btn": "Khám phá ngay",
    "wishlist.clear_all": "Xóa tất cả",
    "wishlist.view_detail": "Xem chi tiết",
    "wishlist.book_now": "Đặt ngay",
    "wishlist.toast_added": "Đã thêm vào danh sách yêu thích!",
    "wishlist.toast_removed": "Đã xóa khỏi danh sách yêu thích",
    "wishlist.total_est": "Tạm tính:",
    "wishlist.count_unit": "địa điểm",
    "wishlist.view_in_portal": "Xem trong tài khoản",

    // Why We Stand Out (Inspired by Dacotours)
    "why_us.badge": "Lý Do Chọn Chúng Tôi",
    "why_us.title": "Tại Sao Chúng Tôi Khác Biệt?",
    "why_us.subtitle": "Khám phá Đà Nẵng và miền Trung với chất lượng cao nhất, trải nghiệm bản địa chân thực và chi phí tối ưu nhất.",
    "why_us.f1_title": "Đặt Tour Nhanh Chóng & Dễ Dàng",
    "why_us.f1_desc": "Xác nhận đặt tour tức thì trong 60 giây, nhận vé điện tử nhanh gọn, không thủ tục rườm rà.",
    "why_us.f2_title": "Hỗ Trợ Bản Địa 24/7",
    "why_us.f2_desc": "Hotline, Zalo & WhatsApp trực tiếp với đội ngũ chuyên gia tại Đà Nẵng, đồng hành cùng bạn 24/7.",
    "why_us.f3_title": "Hướng Dẫn Viên Bản Địa Chuẩn",
    "why_us.f3_desc": "100% hướng dẫn viên địa phương có thẻ hành nghề, am hiểu sâu sắc, nhiệt tình và thân thiện.",
    "why_us.f4_title": "An Toàn, Tiện Nghi & Chu Đáo",
    "why_us.f4_desc": "Xe du lịch đời mới máy lạnh êm ái, tài xế kinh nghiệm và bảo hiểm du lịch trọn gói cho bạn an tâm tuyệt đối.",
    "why_us.f5_title": "Hoàn Tiền Linh Hoạt & Minh Bạch",
    "why_us.f5_desc": "Miễn phí hủy tour trước 24h, linh hoạt đổi ngày đi nếu thời tiết xấu hoặc có việc đột xuất.",
    "why_us.f6_title": "Giá Tốt Nhất, Không Phụ Phí Ẩn",
    "why_us.f6_desc": "Minh bạch giá trọn gói, tuyệt đối không chèo kéo, không ép mua sắm và không có chi phí ẩn.",
    "why_us.f7_title": "Trải Nghiệm Bản Địa Chân Thực",
    "why_us.f7_desc": "Thưởng thức ẩm thực tại các quán ăn chuẩn vị người địa phương, thăm làng nghề truyền thống và ngắm hoàng hôn Hội An.",
    "why_us.f8_title": "Thiết Kế Tour Riêng Theo Ý Bạn",
    "why_us.f8_desc": "Tùy biến lịch trình riêng cho gia đình, cặp đôi hoặc đoàn thể theo ngân sách, sở thích và thời gian của bạn.",
    "why_us.f9_title": "Du Lịch Trách Nhiệm & Bền Vững",
    "why_us.f9_desc": "Chung tay bảo vệ môi trường bán đảo Sơn Trà, tôn trọng di sản và ủng hộ kinh tế cộng đồng địa phương.",

    // Travelers' Reviews (Inspired by Dacotours)
    "reviews.badge": "Đánh Giá Từ Du Khách",
    "reviews.title": "Câu Chuyện Thực Tế Từ Khách Hàng",
    "reviews.subtitle": "Hơn 12.800+ đánh giá 5 sao trên TripAdvisor, Google Reviews và GetYourGuide bảo chứng chất lượng dịch vụ.",
    "reviews.score_label": "4.9/5 Xuất Sắc",
    "reviews.score_desc": "Được 99% du khách tin tưởng đề xuất trên TripAdvisor & Google Reviews",
    "reviews.tab_all": "Tất cả đánh giá",
    "reviews.tab_google": "Google Reviews",
    "reviews.tab_tripadvisor": "TripAdvisor",
    "reviews.tab_getyourguide": "GetYourGuide",
    "reviews.verified_traveler": "Khách Đã Trải Nghiệm",
    "reviews.see_more": "Xem tất cả đánh giá trên Google & TripAdvisor",

    // Book Without Stress Banner
    "stressfree.title": "Du Lịch Đà Nẵng Thảnh Thơi & Tiết Kiệm Tối Đa",
    "stressfree.desc": "Với hơn 12 năm kinh nghiệm bản địa, đội ngũ chuyên gia của chúng tôi lo chu toàn mọi thứ để bạn tận hưởng trọn vẹn từng khoảnh khắc.",
    "stressfree.btn": "Nhận Lịch Trình Tùy Chỉnh Miễn Phí",

    // About Us Page
    "about.hero_badge": "Nhà Tổ Chức Tour & Dịch Vụ Du Lịch Bản Địa",
    "about.hero_title": "Về Da Nang For Less",
    "about.hero_subtitle": "Ra đời với sứ mệnh mang đến những chuyến du lịch Đà Nẵng & Miền Trung chất lượng vượt trội với mức chi phí tối ưu, minh bạch nhất.",
    "about.nav_who_we_are": "Chúng tôi là ai",
    "about.nav_vision": "Tầm nhìn",
    "about.nav_mission": "Sứ mệnh",
    "about.nav_values": "Giá trị cốt lõi",
    "about.nav_team": "Chuyên gia bản địa",
    "about.nav_achievements": "Thành tựu nổi bật",
    "about.nav_license": "Pháp lý & Giấy phép",
    "about.story_title": "Câu Chuyện Của Chúng Tôi",
    "about.story_p1": "Được thành lập tại thành phố biển Đà Nẵng xinh đẹp, Da Nang For Less bắt đầu từ một niềm tin giản dị: mọi du khách đều xứng đáng được tận hưởng vẻ đẹp thiên nhiên kỳ vĩ, văn hóa đậm đà và nền ẩm thực miền Trung trứ danh mà không cần lo lắng về chi phí đắt đỏ hay các bẫy giá du lịch.",
    "about.story_p2": "Hơn 12 năm qua, chúng tôi tự hào đồng hành cùng hơn 150.000 lượt du khách khám phá Đà Nẵng, Hội An, Cố đô Huế và Phong Nha. Dù là chuyến du lịch tự túc một mình, kỳ nghỉ ấm áp của gia đình hay chuyến công tác kết hợp nghỉ dưỡng (MICE), đội ngũ chuyên gia của chúng tôi luôn tận tâm chăm sóc như người thân trong nhà.",
    "about.vision_title": "Tầm Nhìn Của Chúng Tôi",
    "about.vision_p1": "Trở thành lựa chọn số 1 đáng tin cậy nhất cho mọi du khách khi đặt chân đến Đà Nẵng và miền Trung Việt Nam.",
    "about.vision_p2": "Chúng tôi hướng đến việc xây dựng tiêu chuẩn mới cho du lịch bản địa: Dịch vụ chuẩn mực, minh bạch giá cả tuyệt đối và luôn gắn kết bền vững với cộng đồng địa phương.",
    "about.mission_title": "Sứ Mệnh Của Chúng Tôi",
    "about.mission_p1": "Biến mọi chuyến đi thành trải nghiệm thảnh thơi, ngập tràn cảm hứng và niềm vui. Chúng tôi xóa bỏ áp lực lên kế hoạch để bạn trọn vẹn từng khoảnh khắc.",
    "about.mission_p2": "Kết nối du khách với văn hóa bản địa chân thực, các quán ăn gia đình truyền thống và làng nghề ngàn năm, góp phần bảo tồn di sản quý báu của quê hương.",
    "about.values_title": "5 Giá Trị Cốt Lõi",
    "about.val1_title": "1. Khách Hàng Là Người Thân",
    "about.val1_desc": "Chúng tôi lắng nghe bằng cả tấm lòng, phục vụ bằng sự chân thành từ tin nhắn đầu tiên đến khi chuyến bay cất cánh an toàn.",
    "about.val2_title": "2. Trải Nghiệm Chân Thực",
    "about.val2_desc": "Những câu chuyện thật, hương vị thật và cảm xúc thật. Chúng tôi không dẫn khách vào các điểm du lịch xô bồ, thương mại hóa quá mức.",
    "about.val3_title": "3. Minh Bạch & Trung Thực",
    "about.val3_desc": "Không phụ phí ẩn, không hoa hồng mua sắm, không nói quá. Những gì bạn thấy là chính xác những gì bạn nhận được.",
    "about.val4_title": "4. Đam Mê & Tận Tâm",
    "about.val4_desc": "Chúng tôi tự hào là những người con của mảnh đất Đà Nẵng. Niềm tự hào ấy được gửi gắm trọn vẹn trong từng chuyến xe và điểm dừng chân.",
    "about.val5_title": "5. Du Lịch Có Trách Nhiệm",
    "about.val5_desc": "Bảo vệ lá phổi xanh Sơn Trà, giữ sạch bờ biển Mỹ Khê và hỗ trợ tạo sinh kế cho người dân địa phương thông qua hoạt động du lịch.",
    "about.team_title": "Đội Ngũ Chuyên Gia Bản Địa",
    "about.team_subtitle": "Những người bạn đồng hành nhiệt thành, am hiểu và giàu kinh nghiệm sẵn sàng hỗ trợ bạn bất kỳ lúc nào.",
    "about.achieve_title": "Thành Tựu & Sự Công Nhận",
    "about.achieve_subtitle": "Được bảo chứng bởi các nền tảng du lịch uy tín hàng đầu thế giới và hàng vạn khách hàng hài lòng.",
    "about.license_title": "Pháp Lý Rõ Ràng & Minh Bạch",
    "about.license_subtitle": "Doanh nghiệp được cấp phép kinh doanh dịch vụ lữ hành đầy đủ theo quy định của Tổng cục Du lịch Việt Nam.",

    // Contact Us Page
    "contact.hero_badge": "Hỗ Trợ & Đồng Hành 24/7",
    "contact.hero_title": "Liên Hệ Với Chúng Tôi",
    "contact.hero_subtitle": "Bạn cần tư vấn tour, đặt phòng khách sạn hay muốn lên lịch trình riêng cho gia đình? Đội ngũ bản địa luôn sẵn sàng phục vụ.",
    "contact.form_title": "Gửi Yêu Cầu Cho Chúng Tôi",
    "contact.form_subtitle": "Điền thông tin vào form dưới đây, chúng tôi sẽ liên hệ lại trong vòng 30 phút.",
    "contact.name_label": "Họ và tên của bạn",
    "contact.name_placeholder": "Ví dụ: Nguyễn Văn An",
    "contact.email_label": "Địa chỉ Email",
    "contact.email_placeholder": "email@example.com",
    "contact.phone_label": "Số điện thoại / Zalo / WhatsApp",
    "contact.phone_placeholder": "0914 136 151",
    "contact.travel_date_label": "Ngày dự kiến đi",
    "contact.guests_count_label": "Số lượng người tham gia",
    "contact.service_label": "Dịch vụ bạn quan tâm",
    "contact.service_tours": "Tour trong ngày (Bà Nà, Hội An, Huế...)",
    "contact.service_private": "Tour riêng theo yêu cầu (Gia đình / Đoàn thể)",
    "contact.service_hotels": "Đặt phòng khách sạn & Resort",
    "contact.service_combo": "Combo Tour + Khách sạn tiết kiệm",
    "contact.service_other": "Tư vấn lịch trình miễn phí",
    "contact.message_label": "Chi tiết yêu cầu & Ghi chú thêm",
    "contact.message_placeholder": "Hãy chia sẻ ngày đến, số người, sở thích hoặc bất kỳ mong muốn đặc biệt nào...",
    "contact.submit_btn": "Gửi Yêu Cầu Tư Vấn Miễn Phí",
    "contact.info_title": "Thông Tin Liên Hệ Trực Tiếp",
    "contact.address_label": "Văn phòng đón khách tại Đà Nẵng:",
    "contact.address_val": "195 Đặng Vũ Hỷ, P. An Hải Đông, Q. Sơn Trà, TP. Đà Nẵng",
    "contact.hotline_label": "Hotline / Zalo / WhatsApp 24/7:",
    "contact.email_val": "hello@danangforless.com / info@danangforless.com",
    "contact.hours_label": "Giờ mở cửa văn phòng:",
    "contact.hours_val": "7:00 Sáng - 10:00 Tối (Thứ 2 - Chủ Nhật)",
    "contact.faq_title": "Câu Hỏi Thường Gặp",
    "contact.faq_q1": "Tôi nên đặt tour trước bao lâu?",
    "contact.faq_a1": "Đối với các tour ghép hàng ngày (Bà Nà, Hội An, Huế), bạn có thể đặt trước 18h00 ngày hôm trước. Vào các dịp lễ Tết hoặc đặt tour riêng, chúng tôi khuyên bạn nên đặt trước từ 3 - 7 ngày để được phục vụ tốt nhất.",
    "contact.faq_q2": "Chính sách hủy và hoàn tiền như thế nào?",
    "contact.faq_a2": "Chúng tôi cam kết hoàn tiền 100% nếu bạn hủy trước giờ khởi hành 24 giờ. Trong trường hợp thời tiết xấu bất khả kháng, chúng tôi hỗ trợ đổi ngày miễn phí hoặc hoàn tiền tức thì.",
    "contact.faq_q3": "Tour có đưa đón tận nơi tại khách sạn không?",
    "contact.faq_a3": "Có! Tất cả các tour ghép và tour riêng của chúng tôi đều miễn phí đưa đón tận sảnh khách sạn trong trung tâm thành phố Đà Nẵng và dọc bãi biển Mỹ Khê.",
    "contact.faq_q4": "Trong tour có phát sinh chi phí ẩn nào không?",
    "contact.faq_a4": "Tuyệt đối không. Giá công bố đã bao gồm toàn bộ vé tham quan, cáp treo, ăn trưa buffet (theo chương trình), xe đưa đón máy lạnh, hướng dẫn viên và bảo hiểm du lịch."
  }
};

class LanguageManager {
  constructor() {
    this.currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem('dn_lang')) || 'vn';
    this.dict = DN_I18N_DICTIONARY;
  }

  init() {
    if (typeof document === 'undefined') return;
    this.applyLanguage(this.currentLang, false);
    this.bindEvents();
  }

  setLanguage(lang) {
    if (lang !== 'en' && lang !== 'vn') return;
    this.currentLang = lang;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('dn_lang', lang);
    }
    this.applyLanguage(lang, true);
  }

  applyLanguage(lang, animate = true) {
    const texts = this.dict[lang];
    if (!texts || typeof document === 'undefined') return;

    // Optional smooth transition effect
    if (animate) {
      document.body.style.transition = 'opacity 0.15s ease';
      document.body.style.opacity = '0.96';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 150);
    }

    // 1. Text Content Translation
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (texts[key]) {
        el.textContent = texts[key];
      }
    });

    // 2. HTML Content Translation
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (texts[key]) {
        el.innerHTML = texts[key];
      }
    });

    // 3. Placeholder Translation
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (texts[key]) {
        el.setAttribute('placeholder', texts[key]);
      }
    });

    // 4. Title / Tooltip Translation
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (texts[key]) {
        el.setAttribute('title', texts[key]);
      }
    });

    // 5. Update visual state on all language switcher pills
    this.updatePillUI(lang);

    // 6. Update document lang attribute
    document.documentElement.lang = lang === 'vn' ? 'vi' : 'en';

    // 7. Dispatch global event for interactive modules
    window.dispatchEvent(new CustomEvent('dn:language-changed', { detail: { lang, texts } }));
  }

  updatePillUI(lang) {
    document.querySelectorAll('.lang-pill-switch').forEach(pill => {
      const enEl = pill.querySelector('[data-lang="en"]');
      const vnEl = pill.querySelector('[data-lang="vn"]');
      const isDark = pill.closest('footer') || pill.classList.contains('dark-pill') || pill.classList.contains('bg-white/10');

      if (isDark) {
        if (lang === 'en') {
          if (enEl) enEl.className = 'text-white font-black cursor-pointer bg-white/20 px-2 py-0.5 rounded-full transition';
          if (vnEl) vnEl.className = 'text-white/70 hover:text-white cursor-pointer px-1 transition';
        } else {
          if (vnEl) vnEl.className = 'text-white font-black cursor-pointer bg-white/20 px-2 py-0.5 rounded-full transition';
          if (enEl) enEl.className = 'text-white/70 hover:text-white cursor-pointer px-1 transition';
        }
      } else {
        if (lang === 'en') {
          if (enEl) enEl.className = 'text-brand-crimson font-black cursor-pointer transition';
          if (vnEl) vnEl.className = 'text-gray-400 hover:text-gray-700 cursor-pointer transition';
        } else {
          if (vnEl) vnEl.className = 'text-brand-crimson font-black cursor-pointer transition';
          if (enEl) enEl.className = 'text-gray-400 hover:text-gray-700 cursor-pointer transition';
        }
      }
    });
  }

  bindEvents() {
    // Delegated click listener for all elements with data-lang
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-lang]');
      if (target) {
        e.preventDefault();
        const selectedLang = target.getAttribute('data-lang');
        this.setLanguage(selectedLang);
      }
    });
  }

  t(key) {
    const texts = this.dict[this.currentLang] || this.dict['en'];
    return texts[key] || key;
  }
}

// Instantiate and attach globally
const dnI18n = new LanguageManager();
if (typeof window !== 'undefined') {
  window.dnI18n = dnI18n;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => dnI18n.init());
  } else {
    dnI18n.init();
  }
}
