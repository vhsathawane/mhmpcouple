(function () {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const posts = sortedPosts();
  const index = posts.findIndex(p => p.id === id);
  const root = document.getElementById("post");

  if (index === -1) {
    root.innerHTML = `
      <div class="not-found">
        <h1>This story doesn’t exist</h1>
        <p>The link may be wrong or the post was removed.</p>
        <a class="button" href="index.html">See all stories</a>
      </div>`;
    return;
  }

  const post = posts[index];
  const newer = posts[index - 1];
  const older = posts[index + 1];
  const wasUpdated = post.updated && post.updated !== post.date;

  document.title = `${post.title} – mhmp_couple vlogs`;

  root.innerHTML = `
    <a class="back-link" href="index.html">‹ All stories</a>

    <header class="post-header">
      <h1>${post.title}</h1>
      ${post.location ? `<p class="post-location">${post.location}</p>` : ""}
      <dl class="post-dates">
        <div><dt>Posted</dt><dd><time datetime="${post.date}">${formatDate(post.date)}</time></dd></div>
        <div><dt>Updated</dt><dd><time datetime="${post.updated || post.date}">${formatDate(post.updated || post.date)}</time></dd></div>
      </dl>
    </header>

    <section class="gallery" aria-label="Photo gallery">
      <button class="gallery-main" id="gallery-main" aria-label="Open photo full screen">
        <img id="main-img" src="${post.gallery[0]}" alt="${post.title}, photo 1">
        <span class="gallery-count" id="gallery-count">1 / ${post.gallery.length}</span>
      </button>
      <div class="gallery-thumbs" role="list">
        ${post.gallery.map((src, i) => `
          <button class="thumb${i === 0 ? " active" : ""}" data-i="${i}" role="listitem" aria-label="Show photo ${i + 1}">
            <img src="${src}" alt="" loading="lazy">
          </button>`).join("")}
      </div>
    </section>

    <article class="post-content">
      ${post.content}
      ${wasUpdated ? `<p class="updated-note">This story was updated on ${formatDate(post.updated)}.</p>` : ""}
    </article>

    <nav class="post-nav" aria-label="More stories">
      ${older ? `<a class="older" href="post.html?id=${encodeURIComponent(older.id)}"><small>Previous story</small>${older.title}</a>` : "<span></span>"}
      ${newer ? `<a class="newer" href="post.html?id=${encodeURIComponent(newer.id)}"><small>Next story</small>${newer.title}</a>` : "<span></span>"}
    </nav>
  `;

  // ----- Gallery -----
  let current = 0;
  const mainImg = document.getElementById("main-img");
  const count = document.getElementById("gallery-count");
  const thumbs = root.querySelectorAll(".thumb");

  function show(i) {
    current = (i + post.gallery.length) % post.gallery.length;
    mainImg.src = post.gallery[current];
    mainImg.alt = `${post.title}, photo ${current + 1}`;
    count.textContent = `${current + 1} / ${post.gallery.length}`;
    thumbs.forEach(t => t.classList.toggle("active", +t.dataset.i === current));
    lbImg.src = post.gallery[current];
  }

  thumbs.forEach(t => t.addEventListener("click", () => show(+t.dataset.i)));

  // ----- Lightbox -----
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");

  function openLightbox() {
    lbImg.src = post.gallery[current];
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("lb-close").focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    document.body.style.overflow = "";
    document.getElementById("gallery-main").focus();
  }

  document.getElementById("gallery-main").addEventListener("click", openLightbox);
  document.getElementById("lb-close").addEventListener("click", closeLightbox);
  document.getElementById("lb-prev").addEventListener("click", () => show(current - 1));
  document.getElementById("lb-next").addEventListener("click", () => show(current + 1));
  lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });

  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
})();
