let modal, btn, span, dataJSON;

window.onload = function () {
    modal = document.getElementById("info-modal");
    btn = document.getElementById("Btn1");
    span = document.getElementsByClassName("modal-close")[0];

    map_init();

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

function getData() {
    let xhrObj = new XMLHttpRequest();

    xhrObj.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            dataJSON = JSON.parse(this.responseText);
        }
    };

    xhrObj.open("GET", "data.json", false);
    xhrObj.send();
}

function modifyMarkerEvents() {
    let iframe = document.getElementById("map");
    let marker;

    dataJSON.forEach((element) => {
        marker = iframe.contentWindow.document.querySelector(
            "[title='" + element.title + "']"
        );
    });
}
