/*
  ============================================================
  MHMP COUPLE VLOGS – ALL YOUR POSTS LIVE HERE
  ============================================================
  To add a new vlog, copy one block { ... } and change:

    id       – short unique name, no spaces (used in the link)
    title    – post title
    location – where it happened (optional)
    cover    – the photo shown in the home page grid
    date     – first posted, format YYYY-MM-DD
    updated  – last updated, format YYYY-MM-DD
    gallery  – list of photos for the post page
    content  – your story; you can use <p>, <h2>, <strong>, <em>

  Photos: put your pictures in the /images folder and write
  the path like "images/goa-1.jpg". The picsum.photos links
  below are only placeholders so the site looks complete.

  Newest posts are shown first automatically (sorted by date).
  ============================================================
*/

const POSTS = [
  {
    id: "hyd-cafe-hopping",
    title: "11 best cafes in Hyderabad",
    location: "Hyderabad, Telangana, India",
    cover: "images/cafes/1.png",
    date: "2026-10-27",
    updated: "2026-10-27",
    gallery: [
      "images/cafes/1.png",
      "images/cafes/2.png",
      "images/cafes/3.png",
      "images/cafes/4.png",
      "images/cafes/5.png",
      "images/cafes/6.png",
      "images/cafes/7.png",
      "images/cafes/8.png",
      "images/cafes/9.png",
      "images/cafes/10.png",
      "images/cafes/11.png",
      "images/cafes/12.png",
      "images/cafes/13.png"
    ],
    content: `


  <h1>☕ Couple Connect: Best Cafés to Explore in Hyderabad ❤️</h1>

  <p>
    💑❤️ Welcome to <strong>Couple Connect</strong> — a community for
    couples who love café hopping, exploring new places, discovering
    delicious food, and making unforgettable memories! ✨
  </p>

  <p>
    Are you looking for beautiful cafés in Hyderabad for your next
    date, a weekend coffee outing, or a fun meetup with other couples?
    😍 You've come to the right place!
  </p>

  <h2>☕ Explore These Cafés in Hyderabad</h2>

  <p>
    Discover new coffee spots, cozy corners, delicious food, and
    Instagram-worthy cafés. Follow these cafés on Instagram to explore
    their latest menus, ambience, and updates.
  </p>

  <ul>
    <li><a href="https://www.instagram.com/roastcafe.in/"
      target="_blank" rel="noopener noreferrer">@roastcafe.in</a></li>

    <li><a href="https://www.instagram.com/c53wc.in/"
      target="_blank" rel="noopener noreferrer">@c53wc.in</a></li>

    <li><a href="https://www.instagram.com/sobremesa_hyd/"
      target="_blank" rel="noopener noreferrer">@sobremesa_hyd</a></li>

    <li><a href="https://www.instagram.com/cafeniloufer/"
      target="_blank" rel="noopener noreferrer">@cafeniloufer</a></li>

    <li><a href="https://www.instagram.com/theorycafe_hyd/"
      target="_blank" rel="noopener noreferrer">@theorycafe_hyd</a></li>

    <li><a href="https://www.instagram.com/craverycafe/"
      target="_blank" rel="noopener noreferrer">@craverycafe</a></li>

    <li><a href="https://www.instagram.com/katha.india/"
      target="_blank" rel="noopener noreferrer">@katha.india</a></li>

    <li><a href="https://www.instagram.com/betwenus.hyd/"
      target="_blank" rel="noopener noreferrer">@betwenus.hyd</a></li>

    <li><a href="https://www.instagram.com/thebougainvilleahyderabad/"
      target="_blank" rel="noopener noreferrer">@thebougainvilleahyderabad</a></li>

    <li><a href="https://www.instagram.com/roasterycoffeehouseindia/"
      target="_blank" rel="noopener noreferrer">@roasterycoffeehouseindia</a></li>

    <li><a href="https://www.instagram.com/kafika.in/"
      target="_blank" rel="noopener noreferrer">@kafika.in</a></li>
  </ul>

  <h2>💑 Join the Couple Connect Community!</h2>

  <p>
    Imagine discovering hidden cafés, going on weekend trips,
    enjoying food adventures, and making beautiful memories with
    like-minded couples! 👫❤️
  </p>

  <p>
    📍 <strong>Location:</strong> Hyderabad and across India 🇮🇳
  </p>

  <p>
    💌 Want to join our Couple Meetup Community?
    Register as a couple using the QR code on our Couple Connect poster
    and become part of our growing community!
  </p>

  <p>
    📸 Follow us on Instagram:
    <a href="https://www.instagram.com/mhmp_couple/"
       target="_blank" rel="noopener noreferrer">
       <strong>@mhmp_couple</strong>
    </a>
  </p>

  <p>
    ❤️ Follow us for café recommendations, food adventures,
    travel inspiration, couple outings, and upcoming meetups!
  </p>

  <h2>👇 Let's Make It Interactive!</h2>

  <p>💬 Comment with your favourite activity:</p>

  <ul>
    <li>☕ <strong>CAFÉ</strong> — for café hopping</li>
    <li>🍕 <strong>FOODIE</strong> — for food outings</li>
    <li>🏞️ <strong>TRAVEL</strong> — for weekend trips</li>
    <li>💑 <strong>MEETUP</strong> — to connect with other couples</li>
  </ul>

  <p>
    📩 Tag another couple who would love to join you on your next outing!
    Let's turn strangers into friends and outings into memories. 🥰✨
  </p>

  <h2>🏷️ Tags & Hashtags</h2>

  <p>
    #MHMPCouple #CoupleConnect #CoupleMeetup #HyderabadCouples
    #HyderabadDiaries #CoupleFriends #CoupleOutings #CafeHopping
    #FoodieCouples #WeekendGetaway #TravelCouples #ExploreHyderabad
    #CoupleCommunity #MeetNewPeople #IndiaTravel
  </p>

    `
  },
  {
    id: "Wayanad",
    title: "Wayanad:'land of paddy fields'",
    location: "Wayanad,Keral, India",
    cover: "images/wayanad/1.png",
    date: "2024-09-12",
    updated: "2026-09-26",
    gallery: [
      "https://picsum.photos/id/1011/1400/1000",
      "https://picsum.photos/id/1015/1400/1000",
      "https://picsum.photos/id/1016/1400/1000",
      "https://picsum.photos/id/1018/1400/1000",
      "https://picsum.photos/id/1019/1400/1000"
    ],
    content: `
      <p>We finally took the trip we had been talking about for months. Two days, no alarms, and as much seafood as we could eat.</p>
      <h2>Day one</h2>
      <p>We landed early and went straight to the beach. The water was warm and the shacks were just opening for the season.</p>
      <h2>Day two</h2>
      <p>A sunset boat ride, a little shopping at the night market, and a long walk back along the sand.</p>
      <p><strong>Tip:</strong> go in late September before the crowds arrive.</p>
    `
  },
  {
    id: "vietnam",
    title: "Vietnam: A Country of Endless Wonders",
    location: "Vietnam",
    cover: "images/vietnam/1.png",
    date: "2023-02-15",
    updated: "2026-08-02",
    gallery: [
      "images/vietnam/1.png",
      "https://picsum.photos/id/1039/1400/1000",
      "https://picsum.photos/id/1043/1400/1000",
      "https://picsum.photos/id/1044/1400/1000"
    ],
    content: `
      <p>We woke up at 4 a.m., wrapped ourselves in every jacket we had, and hiked up to the viewpoint.</p>
      <p>It was cold, we were tired, and it was completely worth it.</p>
    `
  },

  {
    id: "dubai",
    title: "Dubai: The City of Gold and Endless Dreams",
    location: "Dubai, UAE"
    cover: "images/dubai/1.png",
    date: "2026-01-22",
    updated: "2026-06-22",
    gallery: [
      "images/dubai/1.png",
      "https://picsum.photos/id/1068/1400/1000",
      "https://picsum.photos/id/1069/1400/1000"
    ],
    content: `
      <p>Waterfalls on every turn, hot pakoras at every stop, and a playlist we had been building for weeks.</p>
    `
  },
  {
    id: "anniversary-dinner",
    title: "Celebrating our anniversary",
    location: "Mumbai, India",
    cover: "https://picsum.photos/id/1025/800/1000",
    date: "2026-05-30",
    updated: "2026-06-01",
    gallery: [
      "https://picsum.photos/id/1025/1400/1000",
      "https://picsum.photos/id/1027/1400/1000",
      "https://picsum.photos/id/1029/1400/1000"
    ],
    content: `
      <p>A quiet dinner by the sea to celebrate another year together.</p>
    `
  },
  {
    id: "old-town-walk",
    title: "A slow walk through the old town",
    location: "Jaipur, India",
    cover: "https://picsum.photos/id/1031/800/1000",
    date: "2026-04-12",
    updated: "2026-04-12",
    gallery: [
      "https://picsum.photos/id/1031/1400/1000",
      "https://picsum.photos/id/1033/1400/1000",
      "https://picsum.photos/id/1040/1400/1000"
    ],
    content: `
      <p>Pink walls, busy markets, and the best lassi we have had so far.</p>
    `
  },

  {
    id: "monsoon-drive",
    title: "Our first monsoon road trip",
    location: "Lonavala, India",
    cover: "https://picsum.photos/id/1067/800/1000",
    date: "2026-06-22",
    updated: "2026-06-22",
    gallery: [
      "https://picsum.photos/id/1067/1400/1000",
      "https://picsum.photos/id/1068/1400/1000",
      "https://picsum.photos/id/1069/1400/1000"
    ],
    content: `
      <p>Waterfalls on every turn, hot pakoras at every stop, and a playlist we had been building for weeks.</p>
    `
  },
  {
    id: "anniversary-dinner",
    title: "Celebrating our anniversary",
    location: "Mumbai, India",
    cover: "https://picsum.photos/id/1025/800/1000",
    date: "2026-05-30",
    updated: "2026-06-01",
    gallery: [
      "https://picsum.photos/id/1025/1400/1000",
      "https://picsum.photos/id/1027/1400/1000",
      "https://picsum.photos/id/1029/1400/1000"
    ],
    content: `
      <p>A quiet dinner by the sea to celebrate another year together.</p>
    `
  },
  {
    id: "old-town-walk",
    title: "A slow walk through the old town",
    location: "Jaipur, India",
    cover: "https://picsum.photos/id/1031/800/1000",
    date: "2026-04-12",
    updated: "2026-04-12",
    gallery: [
      "https://picsum.photos/id/1031/1400/1000",
      "https://picsum.photos/id/1033/1400/1000",
      "https://picsum.photos/id/1040/1400/1000"
    ],
    content: `
      <p>Pink walls, busy markets, and the best lassi we have had so far.</p>
    `
  }
];
