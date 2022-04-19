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

vidPerPage.addEventListener('change',function(){
    pagination.range = Number(vidPerPage.value);
    pagination.end = Number(vidPerPage.value);
    pagination.tot = pagination.finaltot;                  //Imp
    pagination.pages = pagination.tot / pagination.range;
    extra = pagination.tot % pagination.range;
    if(extra != 0) {
        pagination.tot -= extra;
        --pagination.pages;
    }
});

//default - 3pages
pagination.pages = pagination.tot / pagination.range;
var extra = pagination.tot % pagination.range;
if(extra != 0) {
    pagination.tot -= extra;
    --pagination.pages;
}

var API_req = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAKceI9-ceyhFx10ihd3iHFAvQDRXjCUcY&type=video&maxResults=20";
//const API_req = "https://randomuser.me/api/";
// let countOfVideos = 15;

let submitEvent = document.querySelector('#btn');
submitEvent.addEventListener('click', function () {

    // var form = document.forms[0];
    // var selectedValue = form.querySelector('input[id="search"]');
    // var searchInput = selectedValue.value;

    var searchInput = document.querySelector("#search").value;                        //not working ***
    // var searchInput = document.getElementById("search").value;
    console.log(searchInput);

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

function Fn(pgno) {
    //btn.style.backgroundColor = 'green';
    let dummy = `btn${pgno}`;
  //  pgbtn = document.getElementById(`${dummy}`);
    embedVideos(pagination.data, pgno);
}

function nextFn() {
    embedVideos(pagination.data, "next");
}

function prevFn() {
    embedVideos(pagination.data, "previous");
}
var table;     //***** Imp */
function embedVideos(data, incoming) {

    if (incoming === "next") {
        pagination.start += pagination.range;
        pagination.end += pagination.range;

        if (pagination.end > pagination.tot) {
            alert("This is the last page");
            pagination.end = pagination.tot;
            pagination.start = pagination.tot - pagination.range;
            return;
        }
        document.getElementById('container').removeChild(table);
    }
    else if (incoming === "previous") {
        pagination.start -= pagination.range;
        pagination.end -= pagination.range;

        if (pagination.start < 0) {
            alert("This is the first page");
            pagination.start = 0;
            pagination.end = pagination.start + pagination.range;
            return;
        }
        document.getElementById('container').removeChild(table);
    }

    else if (typeof incoming === "number") {

        pagination.start = (incoming - 1) * pagination.range;
        pagination.end = pagination.start + pagination.range;
        document.getElementById('container').removeChild(table);
    }

    table = document.createElement('table');
    table.classList.add('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

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

    var st = pagination.start;
    var en = pagination.end;
    //console.log(st+" "+en);

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
        // row_data_1.innerHTML = description;
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

    /* var row = table.insertRow(-1);  //insert row at last
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     var cell3 = row.insertCell(2);
     cell1.innerHTML = description;
     cell2.innerHTML = channel;
     cell3.innerHTML = publishtime; */
}

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