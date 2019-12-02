
function getJobs() {
    window.location.href = "/jobSearch.html";
}

function goToJobSearch() {
    var cors_api_host = "http://localhost:8080/";
    var cors_api_url = 'https://jobs.github.com/positions' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (targetOrigin && targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
};




// function goToJobSearch(){
//     var xhttp =  new XMLHttpRequest()
//     console.log('open');
//     xhttp.open('GET', 
//     'https://jobs.github.com/positions.json?description=python&full_time=true&location=sf', false)
//    xhttp.setRequestHeader('Access-Control-Allow-Origin','true')
//     console.log('Why aint you working');
// xhttp.onload = function() {
//     var data = JSON.parse(this.response)
//     // data.forEach( => {
//     //     // Log each movie's title
//     //     console.log(data)
//     // })
//     console.log(data);
// }
//     xhttp.send()

// }
