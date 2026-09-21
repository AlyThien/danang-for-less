/**
 * DANANG FOR LESS - INTERNATIONALIZATION (i18n) ENGINE
 * Complete bilingual (EN / VN) dictionary and dynamic language switcher
 * Persists selection in localStorage, dispatches global events, and animates transitions
 */

const DN_I18N_DICTIONARY = {
  en: {
    // Brand & Global Header
    "brand.title": "DaNang",
    "brand.sub": "for less",
    "brand.tagline": "Experience Da Nang on a budget",
    "nav.tours": "Tours",
    "nav.hotels": "Hotels & Stays",
    "nav.guides": "Guides",
    "nav.offers": "Special Offers",
    "nav.admin": "Admin",
    "nav.my_bookings": "My Bookings & Loyalty",
    "nav.admin_dashboard": "Admin Dashboard",
    "nav.hotline": "Support hotline:",

    // Hero Section
    "hero.guarantee_badge": "Best Price Guarantee in Da Nang • Save 20% - 40%",
    "hero.headline": '<span class="block text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-2 drop-shadow-md">Experience</span><span class="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-crimson tracking-tight drop-shadow-xl mt-1 sm:mt-2">Da Nang for Less</span>',
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
    "wishlist.view_in_portal": "View in My Account"
  },

  vn: {
    // Brand & Global Header
    "brand.title": "DaNang",
    "brand.sub": "for less",
    "brand.tagline": "Trải nghiệm Đà Nẵng, chi phí tối ưu",
    "nav.tours": "Chuyến đi",
    "nav.hotels": "Khách sạn & Chỗ nghỉ",
    "nav.guides": "Cẩm nang",
    "nav.offers": "Ưu đãi đặc biệt",
    "nav.admin": "Quản trị",
    "nav.my_bookings": "Vé của tôi & Điểm thưởng",
    "nav.admin_dashboard": "Trang quản trị",
    "nav.hotline": "Hotline hỗ trợ:",

    // Hero Section
    "hero.guarantee_badge": "Cam kết giá tốt nhất Đà Nẵng • Tiết kiệm 20% - 40%",
    "hero.headline": '<span class="block text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-2 drop-shadow-md">Trải Nghiệm</span><span class="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-crimson tracking-tight drop-shadow-xl mt-1 sm:mt-2">Da Nang for Less</span>',
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
    "wishlist.view_in_portal": "Xem trong tài khoản"
  }
};

class LanguageManager {
  constructor() {
    this.currentLang = (typeof localStorage !== 'undefined' && localStorage.getItem('dn_lang')) || 'vi';
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
