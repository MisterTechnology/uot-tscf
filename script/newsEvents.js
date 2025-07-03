fetch('../database/newsEvent.json')
.then(response => response.json())
.then(data => {
    const container = document.getElementById('newsOutput');
    data.news.forEach(news => {
    const doc = document.createElement('div');
    doc.className = "program-container";
    doc.innerHTML = `
    <div class = "program-card">
      <div class = "banner-panel">
        <img class = "program-banner" src = "${news.image}" />
      </div>
    <div class = "info-panel"> 
      <h2>${news.heading}</h2>
      <p>${news.details}</p>
    </div>
    </div>
    `
    container.appendChild(doc);
    });
})
.catch (error => {
    console.error("Error", error);
});