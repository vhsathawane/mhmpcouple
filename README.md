# mhmp_couple vlogs

A simple photo vlog website that runs on GitHub Pages. No installs, no build step.

## Folder structure

```
mhmp_couple_vlogs/
├── index.html        ← Home page: photo grid, 3 per row
├── post.html         ← Story page: gallery + text + dates (one template for all posts)
├── css/
│   └── style.css     ← All colours, fonts and layout
├── js/
│   ├── posts.js      ← YOUR POSTS – the only file you edit to add stories
│   ├── common.js     ← Date formatting helpers
│   └── post.js       ← Gallery and full-screen viewer
└── images/           ← Put your photos here
```

## How it works

Clicking a photo on the home page opens `post.html?id=the-post-id`.
That page finds the matching post in `js/posts.js` and shows its
gallery, story, posted date and updated date.

## Add a new story

1. Upload your photos into the `images` folder (e.g. `images/kerala-1.jpg`).
2. Open `js/posts.js`, copy one `{ ... }` block and paste it at the top of the list.
3. Change `id`, `title`, `location`, `cover`, `date`, `updated`, `gallery` and `content`.
4. When you edit a story later, change only the `updated` date.

## Put it online with GitHub Pages

1. Create a new repository on GitHub, for example `mhmp_couple_vlogs`.
2. Upload all these files (keep the folders as they are).
3. Go to **Settings → Pages**.
4. Under **Branch**, choose `main` and `/ (root)`, then click **Save**.
5. After a minute your site is live at
   `https://YOUR-USERNAME.github.io/mhmp_couple_vlogs/`

Tip: keep photos under about 500 KB each (1600px wide is plenty) so pages load fast.
