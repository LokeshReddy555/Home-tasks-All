console.log("Welcome");
var vidPerPage = document.getElementById("pages");
var val = Number(vidPerPage.value);
var pagination = {
    start: 0,
    range: val,
    end: val,
    tot: 20,
    finaltot: 20                              //for preserving
}
var API_req = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAKceI9-ceyhFx10ihd3iHFAvQDRXjCUcY&type=video&maxResults=${pagination.finaltot}`;
var table,thead,tbody;      //Imp **

//videos per page calculation
vidPerPage.addEventListener('change',function(){             
    pagination.range = Number(vidPerPage.value);
    pagination.end = Number(vidPerPage.value);
    pagination.tot = pagination.finaltot;                  //Imp
    pagination.pages = pagination.tot / pagination.range;
    extra = pagination.tot % pagination.range;
  
});

//default - 3pages
pagination.pages = pagination.tot / pagination.range;
var extra = pagination.tot % pagination.range;

//event triggered when clicking search button
let submitEvent = document.querySelector('#btn');
submitEvent.addEventListener('click', function () {

    var searchInput = document.querySelector("#search").value;                      
    // var searchInput = document.getElementById("search").value;
    console.log(searchInput);

    // for removing previous data
    if (document.querySelector("table") != null) {
        document.getElementById('container').removeChild(table);
        document.getElementById('pagingbtns').innerHTML = "";
        pagination.start = 0;
        pagination.end = pagination.start + pagination.range;
    }

    API_req = API_req + "&q=" + searchInput;
    console.log(API_req);
    fetch(API_req)
        .then((response) => response.json())
        .then(function (data) {
            pagination.data = data;
            console.log(data);
            embedVideos(data, "now");
            addPages();
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        })

});

// Calculation for next button in pagination
function computeNext() {
    pagination.start += pagination.range;
    if (pagination.end == pagination.finaltot) {
        alert("This is the last page");
        pagination.end = pagination.finaltot;
        pagination.start = pagination.finaltot - pagination.range;
        return -1;
    }
    if(pagination.finaltot - pagination.end >= pagination.range) {
        pagination.end += pagination.range;
    }
    else {
        pagination.end = pagination.finaltot;
        console.log(pagination.end);
    }

   // document.getElementById('container').removeChild(table);
}

// Calculation for prev button in pagination
function computePrev() {
    if(pagination.end == pagination.finaltot && pagination.finaltot%pagination.range != 0) {
        pagination.end -= (pagination.finaltot%pagination.range);
        pagination.start = pagination.end - pagination.range;
    }

    else {
    pagination.start -= pagination.range;
    pagination.end -= pagination.range;
    }

    if (pagination.start < 0) {
        alert("This is the first page");
        pagination.start = 0;
        pagination.end = pagination.start + pagination.range;
        return -1;
    }
    // document.getElementById('container').removeChild(table);
}

// Calculation for number buttons in pagination
function computeNumberedPage(pgno) {
    if((pgno)*pagination.range > pagination.finaltot) {
        pagination.end = pagination.finaltot;
        pagination.start = pagination.end - (pagination.finaltot%pagination.range);
    }

    else {
     pagination.start = (pgno - 1) * pagination.range;
     pagination.end = pagination.start + pagination.range;
    }
    // document.getElementById('container').removeChild(table);
}

function renderTableOutline() {
    table = document.createElement('table');
    table.classList.add('table');
    thead = document.createElement('thead');
    tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the table to the div(container) tag
    document.getElementById('container').appendChild(table);

    // Creating and heading row of the table
    let row_1 = document.createElement('tr');
    let heading_0 = document.createElement('th');
    heading_0.innerHTML = "Title";
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Description";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Channel";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Published Time";

    row_1.appendChild(heading_0);
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);

}

function embedVideos(data, incoming) {
    var check = 0;
    if (incoming === "next") {
       check = computeNext();
    }
    else if (incoming === "previous") {
       check = computePrev();
    }
    else if (typeof incoming === "number") {
       check = computeNumberedPage(incoming);
    }
    else {
    renderTableOutline();
    }
    if(check != -1) {
    tbody.innerHTML = "";

    var st = pagination.start;
    var en = pagination.end;
    //console.log(st+" "+en);

    //adding videos into page
    while (st < en) {
        console.log(st+" "+en);
        var description = data.items[st].snippet.description;
        var channel = data.items[st].snippet.channelTitle;
        var publishtime = data.items[st].snippet.publishTime;
        var thumbnail = data.items[st].snippet.thumbnails.high.url;
        var link = data.items[st].id.videoId;
        var title = data.items[st].snippet.title;
        st++;
        console.log(thumbnail);

        // Creating and adding data row of the table
        let row = document.createElement('tr');
        let row_data_0 = document.createElement('td');
        row_data_0.innerHTML = `<img width="200" height="150" src="${thumbnail}">`;
        let row_data_1 = document.createElement('td');
        row_data_1.innerHTML = `<a target="_blank" href="https://www.youtube.com/watch?v=${link}">${title}</a>${description}`;
        let row_data_2 = document.createElement('td');
        row_data_2.innerHTML = channel;
        let row_data_3 = document.createElement('td');
        row_data_3.innerHTML = publishtime;

        row.appendChild(row_data_0);
        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        row.appendChild(row_data_3);
        tbody.appendChild(row);

    }
  }
}

//NumberedPgBtn -- pagination
function Fn(pgno) {
    embedVideos(pagination.data, pgno);
}

//NextBtn -- pagination
function nextFn() {
    embedVideos(pagination.data, "next");
}

//PrevBtn -- pagination
function prevFn() {
    embedVideos(pagination.data, "previous");
}

//adding pagination -- all buttons(prev,next and numbered buttons)
function addPages() {
    console.log(pagination.data);
    var pgstart = document.getElementById('pagingbtns');
    let pbtn = document.createElement('button');
    pbtn.innerHTML = "Prev";
    pbtn.id = "prevbtn";
    pbtn.setAttribute("onclick", "prevFn()");
    pgstart.appendChild(pbtn);
    let i = 0, pgs = pagination.pages;
    while (i < pgs) {
        let btn = document.createElement('button');
        btn.innerHTML = i + 1;
        btn.id = `btn${i + 1}`;
        btn.setAttribute("onclick", `Fn(${i + 1})`);       //*** Imp ***
        btn.setAttribute("style", "background-color: red;");
        i++;
        pgstart.appendChild(btn);
    }
    let nbtn = document.createElement('button');
    nbtn.innerHTML = "Next";
    nbtn.id = "nxtbtn";
    nbtn.setAttribute("onclick", "nextFn()");
    pgstart.appendChild(nbtn);
}