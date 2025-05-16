function getParams() {
  const url = new URL(window.location.href);
  return {
    id: parseInt(url.searchParams.get("id")),
    mode: url.searchParams.get("mode")
  };
}

function goHome() {
  window.location.href = "index.html";
}

const { id, mode } = getParams();
const story = stories.find(s => s.id === id);

const container = document.getElementById("story-container");

if (story && mode === "full") {
  container.innerHTML = `<h2>${story.title}</h2>` +
    story.pages.map(p => `<p>${p}</p>`).join("") +
    `<p><strong>Moral:</strong> ${story.moral}</p>`;
} else if (story && mode === "page") {
  let pageIndex = 0;
  const renderPage = () => {
    container.innerHTML = `
      <h2>${story.title}</h2>
      <p>${story.pages[pageIndex]}</p>
      <div>
        <button onclick="prevPage()">⬅️ Back</button>
        <button onclick="nextPage()">➡️ Next</button>
      </div>
    `;
  };
  window.prevPage = () => {
    if (pageIndex > 0) {
      pageIndex--;
      renderPage();
    }
  };
  window.nextPage = () => {
    if (pageIndex < story.pages.length - 1) {
      pageIndex++;
      renderPage();
    } else {
      container.innerHTML += `<p><strong>Moral:</strong> ${story.moral}</p>`;
    }
  };
  renderPage();
}