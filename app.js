function getJobs() {
  window.location.href = "/jobSearch.html";
}
/*--------------------------------------------------*/

function goToJobSearch() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jobs.github.com/positions.json?", false);
  console.log("Request Open");
  xhttp.onload = function() {
    var data = JSON.parse(this.response);
    let searchedLocation = document.getElementById("jobLocation").value;
    let searchedType = document.getElementById("type").value;

    console.log(
      data.filter(job => {
        console.log(job.type);
        if (
          (!searchedLocation || job.location == searchedLocation) &&
          (!searchedType || job.type == searchedType)
        ) {
          console.log("job", job);
        }
      })
    );
  };
  xhttp.send();
}
