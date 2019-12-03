
function getJobs() {
    window.location.href = "/jobSearch.html";
}


function goToJobSearch() {
    var xhttp =  new XMLHttpRequest()
    console.log('open')
    xhttp.open('GET', 
    'https://jobs.github.com/positions.json?description=JavaScript', false)
    // xhttp.setRequestHeader('Access-Control-Allow-Origin', "*/*")
    console.log('Why aint you working')
xhttp.onload = function() {
    var data = JSON.parse(this.response)
    // data.forEach(job =>  {
    //     console.log(job.id)
    // })
    console.log(data)
}
 xhttp.send()
    console.log('request Sent')
}

