  // JavaScript will be used to fetch the json data file into html using the fetch() function

fetch('../database/executive.json')//Directory to the file
.then(response => response.json())
.then(data => {
  const container = document.getElementById("output");
    data.executive.forEach(executive => {
      const doc = document.createElement('div');
      doc.className = 'profile-card';
      doc.innerHTML = `
      <div class="canvas">
        <span class = "close-btn">&times;</span>
        <img src="${executive.image}" alt="${executive.name}" class="executive-image">
        <h3>${executive.name}</h3>
        <p><strong>${executive.role}</strong></p>
        <p>${executive.bio}</p>
        <p class = "course-details">${executive.course}</p>
      </div>
      `;

      // Expand on click (ignore close button)
      doc.addEventListener('click', function (e) {
        if (e.target.classList.contains('close-btn')) return;

        document.querySelectorAll('.profile-card.fullscreen').forEach(openCard => {
          openCard.classList.remove('fullscreen');
        });

        doc.classList.add('fullscreen');
      });

      // Close fullscreen
      const closeBtn = doc.querySelector('.close-btn');
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // prevent bubbling
        doc.classList.remove('fullscreen');
      });

      container.appendChild(doc);
    });
  })
  .catch(error => console.error('Fetch error:', error));

/*
async function loadData() {
  try {
    const response = await fetch('data.json');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}
loadData();
*/