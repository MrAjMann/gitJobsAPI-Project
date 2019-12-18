function getJobs() {
  window.location.href = "/jobSearch.html";
}
function goToHome(){
  window.location.href = "/index.html";
}

/*--------------------------------------------------*/

function goToJobSearch() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jobs.github.com/positions.json?page=0&markdown=true", true);
  
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
            const title = document.createElement('h2')
            const desc = document.createElement('p')
            div.setAttribute('class', 'job-Card')
            
            title.innerHTML = job.title
            desc.innerHTML = job.description
            grid.appendChild(div)
            div.appendChild(title)
            div.appendChild(desc)
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
