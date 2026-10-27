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
    cover: "/images/cafes/1.png",
    date: "2026-10-27",
    updated: "2026-10-27",
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
    id: "goa-beach-weekend",
    title: "A lazy weekend on the Goa beaches",
    location: "Goa, India",
    cover: "https://picsum.photos/id/1011/800/1000",
    date: "2026-09-14",
    updated: "2026-09-20",
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
    id: "mountain-sunrise",
    title: "Chasing a sunrise in the mountains",
    location: "Manali, India",
    cover: "https://picsum.photos/id/1036/800/1000",
    date: "2026-08-02",
    updated: "2026-08-02",
    gallery: [
      "https://picsum.photos/id/1036/1400/1000",
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
