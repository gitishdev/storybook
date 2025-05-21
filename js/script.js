document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('stories-container');
  stories.forEach((story, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3 class="story-title">${story.title}</h3>
      <a href="story.html?index=${index}">Page by Page</a><br>
      <a href="story.html?index=${index}&view=full">Full Story</a>
    `;
    container.appendChild(div);
  });
});
