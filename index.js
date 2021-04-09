let modal, btn, span;

window.onload = function () {
    modal = document.getElementById("info-modal");
    btn = document.getElementById("Btn1");
    span = document.getElementsByClassName("modal-close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    };

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    modalBody("Well, it works!");
};

function modalHead(head) {
    let modalHeader = document.getElementById("modal-header");
    modalHeader.innerHTML = head;
}

function modalBody(body) {
    let modalBody = document.getElementById("modal-content");
    modalBody.innerHTML = body;
}
