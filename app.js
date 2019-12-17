function getJobs() {
  window.location.href = "/jobSearch.html";
}
/*--------------------------------------------------*/

function goToJobSearch() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jobs.github.com/positions.json?page=1", true);
  
  console.log("Request Open");
  xhttp.onload = function() {
    const foundJobs = JSON.parse(this.response);
    const searchedLocation = document.getElementById("jobLocation").value;
    const searchedType = document.getElementById("type").value;
    foundJobs.filter(job => {
      if (
        (!searchedLocation || job.location === searchedLocation) &&
        (!searchedType || job.type === searchedType)
        ) {
          
          foundJobs.forEach(job => {
            const grid = document.getElementById('grid-container')
            const div = document.createElement('div')
            const title = document.createElement('h1')
            div.setAttribute('class', 'job-Card')
            
            title.innerText = job.title
            grid.appendChild(div)
            div.appendChild(title)
          console.log(div)
          
        });
      }
    });
  };
  xhttp.onerror = function() {
    console.log("Request Error...");
  };
  xhttp.send();
}
