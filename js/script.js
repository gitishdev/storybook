document.addEventListener("DOMContentLoaded", () => {
    const storyList = document.getElementById("storyList");
    if (!storyList) return;

    stories.forEach(story => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>${story.title}</h2>
            <img src="images/${story.image}" width="150">
            <p>
                <a href="story.html?storyId=${story.id}&mode=full">Full Story</a> |
                <a href="story.html?storyId=${story.id}&mode=page">Page by Page</a>
            </p>
        `;
        storyList.appendChild(div);
    });
});
