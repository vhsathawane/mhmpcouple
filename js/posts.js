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
    title: "Wayanad:land of paddy fields",
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
      "images/vietnam/2.JPG",
      "images/vietnam/3.png",
      "images/vietnam/4.png",
    ],
    content: `
      <p>We woke up at 4 a.m., wrapped ourselves in every jacket we had, and hiked up to the viewpoint.</p>
      <p>It was cold, we were tired, and it was completely worth it.</p>
    `
  },
  {
    id: "dubai",
    title: "Dubai: The City of Gold and Endless Dreams",
    location: "Dubai, UAE",
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
    id: "Alibag",
    title: "Alibaug in a Weekend: Sun-Kissed and Carefree",
    location: "Alibag, Maharashtra, India",
    cover: "images/alibag/1.png",
    date: "2026-05-30",
    updated: "2026-06-01",
    gallery: [
      "images/alibag/1.png",
      "https://picsum.photos/id/1027/1400/1000",
      "https://picsum.photos/id/1029/1400/1000"
    ],
    content: `
      
<article class="travel-blog">

  <header class="blog-header">
    <p>MHMP_Couple Travel Diaries</p>
    <h1>Our Alibag Trip: Beaches, Adventure and Coastal Memories</h1>
    
    <h2>1. Our Alibag Escape</h2>
    <p>
      Alibag, a beautiful coastal destination in Maharashtra, is perfect
      for a quick getaway filled with beaches, historic forts, delicious
      coastal food and exciting water sports.
    </p>
    <p>
      Our recent trip with MHMP_Couple was all about exploring the Konkan
      coastline, enjoying peaceful beach views, discovering local
      attractions and making unforgettable memories together.
    </p>
    <p>
      Whether you are planning a romantic escape, a friends' trip or a
      family vacation, Alibag offers a wonderful combination of adventure,
      relaxation, scenic drives and beautiful sunsets.
    </p>
  </section>

  <section id="attractions">
    <h2>2. Top Attractions to Visit in Alibag</h2>

    <div class="attraction">
      <h3>Alibag Beach</h3>
      <img
        src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=80"
        alt="Ocean waves and coastal scenery"
        loading="lazy">
      <p>
        Alibag Beach is a popular destination for evening walks, sea views,
        local snacks and beautiful sunsets. It is also the starting point
        for exploring nearby Kolaba Fort.
      </p>
      <a href="https://www.google.com/maps/search/?api=1&query=Alibag+Beach"
         target="_blank" rel="noopener">View Location</a>
    </div>

    <div class="attraction">
      <h3>Kolaba Fort</h3>
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80"
        alt="Historic landscape inspiration"
        loading="lazy">
      <p>
        Kolaba Fort is a historic sea fort associated with the Maratha
        navy. Explore its heritage and coastal views. Check tide timings
        and safe access conditions before visiting.
      </p>
      <a href="https://www.google.com/maps/search/?api=1&query=Kolaba+Fort+Alibag"
         target="_blank" rel="noopener">View Location</a>
    </div>

    <div class="attraction">
      <h3>Nagaon Beach</h3>
      <img
        src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80"
        alt="Sandy beach and sea"
        loading="lazy">
      <p>
        Nagaon Beach is a favourite stop for beach lovers and groups.
        Enjoy the coastal atmosphere, local food and seasonal water
        sports when available.
      </p>
      <a href="https://www.google.com/maps/search/?api=1&query=Nagaon+Beach+Alibag"
         target="_blank" rel="noopener">View Location</a>
    </div>

    <div class="attraction">
      <h3>Kihim and Varsoli Beaches</h3>
      <p>
        These beaches are great for peaceful coastal walks, photography
        and relaxing away from the busiest tourist areas.
      </p>
      <a href="https://www.google.com/maps/search/?api=1&query=Kihim+Beach+Alibag"
         target="_blank" rel="noopener">Explore Kihim Beach</a>
      <br>
      <a href="https://www.google.com/maps/search/?api=1&query=Varsoli+Beach+Alibag"
         target="_blank" rel="noopener">Explore Varsoli Beach</a>
    </div>

    <div class="attraction">
      <h3>Kashid Beach</h3>
      <p>
        Kashid Beach is known for its scenic coastline and sandy
        shoreline. It is a good option for travellers who want to extend
        their Alibag trip with a coastal road journey.
      </p>
      <a href="https://www.google.com/maps/search/?api=1&query=Kashid+Beach+Maharashtra"
         target="_blank" rel="noopener">View Location</a>
    </div>

    <div class="attraction">
      <h3>Murud-Janjira Fort</h3>
      <p>
        Murud-Janjira Fort is a remarkable island fort near Murud.
        Visitors generally reach it by boat from Rajapuri. Check boat
        operations and sea conditions before planning your visit.
      </p>
      <a href="https://www.google.com/maps/search/?api=1&query=Murud+Janjira+Fort"
         target="_blank" rel="noopener">View Location</a>
    </div>
  </section>

  <section id="hotels">
    <h2>3. Best Hotels and Resorts to Consider</h2>
    <p>
      Choosing the right accommodation can make your Alibag trip even
      better. Select a stay based on your budget, preferred beach,
      facilities and travel plans.
    </p>

    <h3>Budget Hotels and Guesthouses</h3>
    <p>
      Budget hotels and guesthouses around Alibag town are worth
      considering if you want affordable accommodation and easy access
      to local restaurants and transport.
    </p>

    <h3>Beachside Resorts</h3>
    <p>
      Explore resorts and cottages around Nagaon, Kihim and Varsoli
      for a relaxed coastal experience.
    </p>

    <h3>Private Villas and Homestays</h3>
    <p>
      A private villa or homestay can be a good choice for couples,
      families and groups. Compare the total cost, amenities and
      occupancy rules before confirming your booking.
    </p>

    <h3>How to Book</h3>
    <p>
      Compare room prices, recent guest reviews, cancellation policies,
      meal options and the distance from your planned attractions.
    </p>
    <p>
      <a href="https://www.booking.com/searchresults.html?ss=Alibag%2C%20India"
         target="_blank" rel="noopener">
        Explore Hotels and Stays in Alibag
      </a>
    </p>
    <p>
      Hotel prices and availability vary by date and season. Confirm
      the final price directly with the booking provider.
    </p>
  </section>

  <section id="routes">
    <h2>4. How to Reach Alibag from Major Cities</h2>

    <h3>From Mumbai</h3>
    <p>
      Travel by road via Panvel and Pen to reach Alibag. Another option
      is to check ferry services from the Gateway of India to Mandwa,
      followed by onward transport to Alibag.
    </p>

    <h3>From Pune</h3>
    <p>
      Drive via the Mumbai-Pune Expressway and continue towards Khopoli,
      Pen and Alibag, depending on your chosen route and current road
      conditions.
    </p>

    <h3>From Nashik</h3>
    <p>
      Travel towards the Kalyan or Thane region, continue towards
      Panvel and Pen, and then proceed to Alibag.
    </p>

    <h3>From Hyderabad</h3>
    <p>
      Consider travelling by train or flight to Mumbai or Pune and
      completing the journey to Alibag by road. Compare schedules,
      transfer costs and total journey time.
    </p>

    <h3>From Bengaluru</h3>
    <p>
      Travel to Mumbai or Pune by air or train, then continue to
      Alibag using road transport.
    </p>

    <h3>Approximate Road Travel Times</h3>
    <table>
      <thead>
        <tr>
          <th>Starting City</th>
          <th>Estimated Travel Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mumbai</td>
          <td>3–4+ hours</td>
        </tr>
        <tr>
          <td>Pune</td>
          <td>3.5–5 hours</td>
        </tr>
        <tr>
          <td>Nashik</td>
          <td>4–6+ hours</td>
        </tr>
        <tr>
          <td>Hyderabad</td>
          <td>Plan a full travel day or longer</td>
        </tr>
        <tr>
          <td>Bengaluru</td>
          <td>Plan a full travel day or longer</td>
        </tr>
      </tbody>
    </table>

    <p>
      These are planning estimates, not live navigation times.
      Traffic, road conditions, ferry schedules and transport
      connections may affect your journey.
    </p>

    <p>
      <a href="https://www.google.com/maps/dir/?api=1&destination=Alibag%2C+Maharashtra"
         target="_blank" rel="noopener">
        Get Directions to Alibag
      </a>
    </p>
  </section>

  <section id="adventure">
    <h2>5. Adventure Activities and Rides</h2>

    <h3>Jet Ski</h3>
    <p>
      Enjoy an exciting ride across the water with a local operator
      where conditions permit. Follow the operator's safety instructions
      and wear the required safety equipment.
    </p>

    <h3>Banana Boat Ride</h3>
    <p>
      A fun group water activity for friends and couples. Confirm the
      permitted number of riders and the safety arrangements before
      booking.
    </p>

    <h3>Parasailing</h3>
    <p>
      Experience an aerial view of the coastline when suitable
      conditions and authorised operators are available.
    </p>

    <h3>Speedboat Rides</h3>
    <p>
      Add excitement to your beach visit with a speedboat experience.
      Confirm the route, duration and price with the operator in advance.
    </p>

    <h3>Kayaking and Coastal Exploration</h3>
    <p>
      Where guided kayaking is available, enjoy a slower way to
      experience the water. Alternatively, explore nearby beaches,
      villages and forts by road.
    </p>

    <p>
      Water sports depend on the weather, sea conditions, season and
      local restrictions. Check availability and safety arrangements
      before participating.
    </p>
  </section>

  <section id="itinerary">
    <h2>6. Suggested Two-Day Alibag Itinerary</h2>

    <h3>Day 1: Arrival and Beach Exploration</h3>
    <ul>
      <li>Travel to Alibag and check in to your hotel.</li>
      <li>Explore Alibag Beach and nearby attractions.</li>
      <li>Enjoy local Konkani or Malvani food.</li>
      <li>Watch the sunset and spend a relaxing evening by the coast.</li>
    </ul>

    <h3>Day 2: Fort Visit and Adventure</h3>
    <ul>
      <li>Visit Kolaba Fort if access and tide conditions are suitable.</li>
      <li>Head to Nagaon or Kihim Beach.</li>
      <li>Try available water sports or enjoy a peaceful beach walk.</li>
      <li>Have lunch and begin your return journey.</li>
    </ul>

    <h3>Optional Extension</h3>
    <p>
      If you have additional time, consider visiting Kashid Beach and
      Murud-Janjira Fort. Allow enough time for road travel and boat
      transfers rather than squeezing everything into a short trip.
    </p>
  </section>

  <section id="budget">
    <h2>7. Expected Budget for an Alibag Trip</h2>
    <p>
      The following estimates are per person for a two-day, one-night
      trip, assuming shared accommodation and local travel.
    </p>

    <table>
      <thead>
        <tr>
          <th>Expense</th>
          <th>Estimated Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Round-trip travel</td>
          <td>₹500–₹2,000</td>
        </tr>
        <tr>
          <td>Accommodation</td>
          <td>₹1,000–₹2,500</td>
        </tr>
        <tr>
          <td>Food and refreshments</td>
          <td>₹600–₹1,200</td>
        </tr>
        <tr>
          <td>Local transport</td>
          <td>₹300–₹800</td>
        </tr>
        <tr>
          <td>Adventure activities</td>
          <td>₹500–₹1,500</td>
        </tr>
        <tr>
          <td>Miscellaneous expenses</td>
          <td>₹200–₹500</td>
        </tr>
        <tr>
          <th>Estimated Total</th>
          <th>₹3,100–₹8,500</th>
        </tr>
      </tbody>
    </table>

    <p>
      These figures are illustrative planning estimates, not confirmed
      prices. Long-distance travel from Hyderabad or Bengaluru can
      increase the overall budget substantially.
    </p>

    <h3>Tips to Save Money</h3>
    <ul>
      <li>Share accommodation costs with your travel group.</li>
      <li>Compare the cost of driving with public transport and ferry transfers.</li>
      <li>Explore local restaurants and check menu prices before ordering.</li>
      <li>Set a separate budget for water sports and other activities.</li>
      <li>Book accommodation early when travelling during busy weekends.</li>
    </ul>
  </section>

  <section id="travel-tips">
    <h2>8. Essential Travel Tips</h2>
    <ul>
      <li><strong>Best time to visit:</strong> October to March is generally pleasant for coastal sightseeing.</li>
      <li><strong>Check the tides:</strong> Confirm safe access before visiting Kolaba Fort.</li>
      <li><strong>Pack smart:</strong> Carry sunscreen, water, comfortable footwear and a power bank.</li>
      <li><strong>Plan water sports carefully:</strong> Check weather conditions and operator safety arrangements.</li>
      <li><strong>Keep a backup:</strong> Save accommodation confirmations and travel details.</li>
      <li><strong>Respect the coastline:</strong> Avoid littering and follow local rules at beaches and heritage sites.</li>
    </ul>
  </section>

  <section id="conclusion">
    <h2>9. Final Thoughts from MHMP_Couple</h2>
    <p>
      Our Alibag getaway reminds us that memorable trips are about more
      than destinations. Beautiful coastlines, delicious local food,
      exciting activities and time spent together make every journey
      special.
    </p>
    <p>
      At MHMP_Couple, we love exploring new places, sharing travel
      experiences and inspiring others to plan their own adventures.
      Alibag is a wonderful destination for anyone looking for a
      refreshing coastal escape.
    </p>
    <p>
      Pack your bags, plan your route and get ready to create your own
      Alibag memories!
    </p>
  </section>

  <section id="seo">
    <h2>Blog SEO Details</h2>
    <p><strong>SEO Title:</strong>
      MHMP_Couple's Alibag Travel Guide: Beaches, Hotels, Adventure and Budget
    </p>
    <p><strong>Meta Description:</strong>
      Explore Alibag with MHMP_Couple. Discover the best beaches, forts,
      hotels, routes, water sports, itineraries and estimated trip
      budgets for your next coastal getaway.
    </p>
 

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
    id: "Munnar",
    title: "Munnar: Where the Clouds Kiss the Tea Gardens.",
    location: "Munnar, Keralam, India",
    cover: "images/munnar/1.png",
    date: "2024-11-30",
    updated: "2026-06-01",
    gallery: [
      "images/munnar/1.png",
      "https://picsum.photos/id/1027/1400/1000",
      "https://picsum.photos/id/1029/1400/1000"
    ],
    content: `
      <p>A quiet dinner by the sea to celebrate another year together.</p>
    `
  },
  {
    id: "hampi",
    title: "Hampi: A slow walk through the old town",
    location: "Hampi, Karnataka, India",
    cover: "images/hampi/1.png",
    date: "2022-07-12",
    updated: "2026-04-12",
    gallery: [
      "images/hampi/1.png",
      "https://picsum.photos/id/1033/1400/1000",
      "https://picsum.photos/id/1040/1400/1000"
    ],
    content: `
      <p>Pink walls, busy markets, and the best lassi we have had so far.</p>
    `
  }
];
