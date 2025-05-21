document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const storyIndex = parseInt(params.get('index'), 10);
  const viewFull = params.get('view') === 'full';

  const story = stories[storyIndex];
  const container = document.getElementById('story-container');
  let currentPage = 0;

  function showPage() {
    container.innerHTML = '';
    if (viewFull) {
      story.pages.forEach(p => {
        const para = document.createElement('p');
        para.textContent = p;
        container.appendChild(para);
      });
    } else {
      const para = document.createElement('p');
      para.textContent = story.pages[currentPage];
      container.appendChild(para);
    }
  }

  function updateButtons() {
    document.getElementById('prev-button').disabled = currentPage <= 0;
    document.getElementById('next-button').disabled = currentPage >= story.pages.length - 1;
  }

  if (!viewFull) {
    document.getElementById('prev-button').addEventListener('click', () => {
      if (currentPage > 0) currentPage--;
      showPage();
      updateButtons();
    });

    document.getElementById('next-button').addEventListener('click', () => {
      if (currentPage < story.pages.length - 1) currentPage++;
      showPage();
      updateButtons();
    });
  } else {
    document.getElementById('prev-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
  }

  showPage();
  updateButtons();
});
