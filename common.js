// Formats "2026-09-14" as "14 Sep 2026"
function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

// Newest first
function sortedPosts() {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
