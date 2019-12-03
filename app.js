function getJobs() {
  window.location.href = "/jobSearch.html";
}
/*--------------------------------------------------*/

function goToJobSearch() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jobs.github.com/positions.json?", false);
  // xhttp.setRequestHeader('Access-Control-Allow-Origin', "*/*")
  console.log("Request Open");
  xhttp.onload = function() {
    var data = JSON.parse(this.response);
    let searchedLocation = document.getElementById("jobLocation").value;
    let searchedType = document.getElementById("type").value;
    // console.log('input', searchedLocation)
    // console.log('before filter', data)

    console.log(
      data.filter(job => {
        console.log(job.type);

        // console.log("job.location",job.location)
        // console.log('within filter', positions)
        if (
          (!searchedLocation || job.location == searchedLocation) &&
          (!searchedType || job.type == searchedType)
        ) {
          console.log("job", job);
        }
      })
      // console.log("After Filter job", job)

      // const positions = data.filter(anything => data.Location == searchedLocation {

      //     return (positions)
      // })
      // console.log(data.location, 'Location')
      // console.log(positions,'positions')
    );
  };
  xhttp.send();
}

// if (job.location == searchedLocation) {
//     console.log("job", job)
//     let positions = [];
//     positions += job;
// }
//         }
