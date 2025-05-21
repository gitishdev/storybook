
let currentPage = 0;
let currentStory = null;
let mode = "page";

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function renderStory() {
    const container = document.getElementById("storyContainer");
    container.innerHTML = "";

    if (mode === "full") {
        currentStory.content.forEach(line => {
            const p = document.createElement("p");
            p.textContent = line;
            container.appendChild(p);
        });
    } else {
        const p = document.createElement("p");
        p.textContent = currentStory.content[currentPage];
        container.appendChild(p);
    }
}

function previousPage() {
    if (mode === "page" && currentPage > 0) {
        currentPage--;
        renderStory();
    }
}

function nextPage() {
    if (mode === "page" && currentPage < currentStory.content.length - 1) {
        currentPage++;
        renderStory();
    }
}

function showFullStory() {
    window.location.href = `story.html?storyId=${currentStory.id}&mode=full`;
}

function showPageByPage() {
    window.location.href = `story.html?storyId=${currentStory.id}&mode=page`;
}

function goToMainPage() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const storyId = parseInt(getQueryParam("storyId"));
    mode = getQueryParam("mode");

    currentStory = stories.find(s => s.id === storyId);
    if (currentStory) {
        renderStory();
    }
});
