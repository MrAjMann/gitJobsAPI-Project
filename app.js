
function getJobs() {
    window.location.href = "/jobSearch.html";
}
/*--------------------------------------------------*/ 
function goToJobSearch() {
    var xhttp =  new XMLHttpRequest()
    console.log('open')
    xhttp.open('GET', 
    'https://jobs.github.com/positions.json?description=JavaScript', false)
    // xhttp.setRequestHeader('Access-Control-Allow-Origin', "*/*")
    console.log('Why aint you working')
xhttp.onload = function() {
    var data = JSON.parse(this.response)
    const fullTimePositions = data.filter(job =>  {
    //    (document.getElementById('type').value == (job.type) 
      return (job.type) === document.getElementById('type').value
    })
    console.log(fullTimePositions)
    
}
 xhttp.send()
    console.log('request Sent')
}

