
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("storyList");

  stories.forEach(story => {
    const div = document.createElement("div");
    div.className = "story-item";
    div.innerHTML = `
      <h3>${story.title}</h3>
      <a href="story.html?id=${story.id}&mode=single">Page by Page</a>
      <a href="story.html?id=${story.id}&mode=full">Full Story</a>
    `;
    container.appendChild(div);
  });
});
