let modal, btn, span;
let mymap, dataJSON;

window.onload = function () {
    modal = document.getElementById("info-modal");
    btn = document.getElementById("Btn1");
    span = document.getElementsByClassName("modal-close")[0];

    map_init();
    getData();

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

function modalHead(head) {
    let modalHeader = document.getElementById("modal-header");
    modalHeader.innerHTML = head;
}

function modalBody(body) {
    let modalBody = document.getElementById("modal-content");
    modalBody.innerHTML = body;
}

function map_init() {
    mymap = L.map("mapid").setView([35.25, 24.93], 9);

    L.tileLayer(
        "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}",
        {
            attribution:
                'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: "abcd",
            minZoom: 0,
            maxZoom: 11,
            ext: "png",
        }
    ).addTo(mymap);
}

function getData() {
    let xhrObj = new XMLHttpRequest();

    xhrObj.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            dataJSON = JSON.parse(this.responseText);

            place_markers(mymap, dataJSON);
        }
    };

    xhrObj.open("GET", "data.json", false);
    xhrObj.send();
}

function place_markers(map, data) {
    data.forEach((element) => {
        let marker = L.marker(element["location"]).addTo(map);
        marker.on("click", () => {
            modalHead(element["title"]);
            modalBody(element["body"]);
            modal.style.display = "block";
        });
    });
}
