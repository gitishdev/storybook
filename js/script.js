
document.addEventListener('DOMContentLoaded', () => {
  const storyList = document.getElementById('storyList');
  stories.forEach(story => {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.innerHTML = `
      <h3>${story.title}</h3>
      <div class="buttons">
        <a class="button" href="story.html?id=${story.id}&mode=page">Page by Page</a>
        <a class="button" href="story.html?id=${story.id}&mode=full">Full Story</a>
      </div>
    `;
    storyList.appendChild(card);
  });
});
