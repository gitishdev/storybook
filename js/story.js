
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const storyId = parseInt(urlParams.get('id'));
  const mode = urlParams.get('mode');
  const story = stories.find(s => s.id === storyId);

  const titleEl = document.getElementById('story-title');
  const contentEl = document.getElementById('story-content');
  const moralEl = document.getElementById('story-moral');
  const imageEl = document.getElementById('story-image');
  const nextBtn = document.getElementById('next-btn');
  const backBtn = document.getElementById('back-btn');

  let pageIndex = 0;
  titleEl.textContent = story.title;

  if (story.image) {
    imageEl.src = story.image;
    imageEl.style.display = 'block';
  }

  function renderPage() {
    contentEl.textContent = story.pages[pageIndex] || "";
    moralEl.textContent = "";
    if (pageIndex === 0 && story.image) {
      imageEl.style.display = 'block';
    } else {
      imageEl.style.display = 'none';
    }
  }

  function showFullStory() {
    imageEl.style.display = story.image ? 'block' : 'none';
    contentEl.innerHTML = story.pages.map(p => `<p>${p}</p>`).join("");
    moralEl.textContent = story.moral;
    nextBtn.style.display = 'none';
    backBtn.style.display = 'none';
  }

  if (mode === "full") {
    showFullStory();
  } else {
    renderPage();

    nextBtn.addEventListener('click', () => {
      if (pageIndex < story.pages.length - 1) {
        pageIndex++;
        renderPage();
      } else if (pageIndex === story.pages.length - 1) {
        moralEl.textContent = story.moral;
        pageIndex++;
      }
    });

    backBtn.addEventListener('click', () => {
      if (pageIndex > 0) {
        pageIndex--;
        renderPage();
      }
    });
  }
});
