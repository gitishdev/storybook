const urlParams = new URLSearchParams(window.location.search);
const storyId = parseInt(urlParams.get('storyId'), 10);
const mode = urlParams.get('mode');

const story = stories.find(s => s.id === storyId);
const container = document.getElementById('storyContainer');
const nav = document.getElementById('navigationButtons');

let currentPage = 0;

function renderPage() {
    container.innerHTML = `<h2>${story.title}</h2><img src="images/${story.image}" width="200"><p>${story.pages[currentPage]}</p>`;
}

function renderFullStory() {
    container.innerHTML = `<h2>${story.title}</h2><img src="images/${story.image}" width="200">` +
        story.pages.map(p => `<p>${p}</p>`).join("") +
        `<p><strong>Moral:</strong> ${story.moral}</p>`;
    nav.innerHTML = "";
}

function setupNavigation() {
    nav.innerHTML = `
        <button onclick="goBack()">Back</button>
        <button onclick="goNext()">Next</button>
    `;
}

function goNext() {
    if (currentPage < story.pages.length - 1) {
        currentPage++;
        renderPage();
    } else if (currentPage === story.pages.length - 1) {
        currentPage++;
        container.innerHTML += `<p><strong>Moral:</strong> ${story.moral}</p>`;
    }
}

function goBack() {
    if (currentPage > 0) {
        currentPage--;
        renderPage();
    }
}

function loadFullStory() {
    location.href = `story.html?storyId=${story.id}&mode=full`;
}

function loadPageByPage() {
    location.href = `story.html?storyId=${story.id}&mode=page`;
}

if (story && container) {
    if (mode === "full") {
        renderFullStory();
    } else {
        renderPage();
        setupNavigation();
    }
}
