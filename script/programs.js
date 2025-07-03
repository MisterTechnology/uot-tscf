// Program Data Goes in here
fetch("../database/programs.json")
//Parse the response from json file
.then(response => response.json())
.then(data => {
  //access the html structure to upload the data
  const programOutput = document.getElementById("programOutput");

  //upload the data
  data.programs.forEach(programs => {
    //Creates a new div element with classname program-card
    const programCard = document.createElement("div");
    programCard.className = "program-container";
    //Input data in here
    programCard.innerHTML = `
    <div class = "program-card">
      <div class = "banner-panel">
      <img class = "program-banner" src = ${programs.banner} />
    </div>
    <div class = "info-panel">
      <h6 class = "program-heading">${programs.heading}</h6>
      <p class = "sub-title">${programs.title}</p>
      <p class = "desc">${programs.desc}</p>
      <p class = "venue">Venue: ${programs.venue}</p>
      <p class = "date">Date: ${programs.date}</p>
    </div>
    </div>
    `;

    programOutput.appendChild(programCard);
  });

})

.catch(error => {
  console.error("Error: ", error);
});