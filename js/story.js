
const urlParams = new URLSearchParams(window.location.search);
const storyId = parseInt(urlParams.get("id"));
const mode = urlParams.get("mode");

const story = stories.find(s => s.id === storyId);

document.getElementById("storyTitle").innerText = story.title;
document.getElementById("storyImage").src = `images/story${story.id}.jpg`;
document.getElementById("storyImage").style.display = "block";

if (mode === "full") {
  document.getElementById("navigationButtons").style.display = "none";
  document.getElementById("fullStorySection").style.display = "block";
  document.getElementById("fullStoryContent").innerText = story.pages.join(" ") + "\n\nMoral: " + story.moral;
} else {
  let currentPage = 0;
  const content = document.getElementById("storyContent");

  function renderPage() {
    if (currentPage < story.pages.length) {
      content.innerText = story.pages[currentPage];
    } else if (currentPage === story.pages.length) {
      content.innerText = "Moral: " + story.moral;
    } else {
      currentPage = story.pages.length; // prevent overflow
    }
  }

  window.nextPage = () => {
    if (currentPage < story.pages.length) {
      currentPage++;
      renderPage();
    }
  };

  window.prevPage = () => {
    if (currentPage > 0) {
      currentPage--;
      renderPage();
    }
  };

  renderPage();
}
