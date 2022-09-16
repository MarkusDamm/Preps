"use strict";
var L05_Einkaufsliste;
(function (L05_Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    async function handleLoad(_event) {
        let response = await fetch("Data.json");
        let offer = await response.text();
        let items = JSON.parse(offer);
        items.forEach(item => { displayItem(item); });
        let submit = document.querySelector("input[type=submit]");
        submit.addEventListener("click", sendEntry);
    }
    function displayItem(_item) {
        let div = document.createElement("div");
        div.classList.add("entry");
        let display = document.querySelector("#display");
        if (display == null) {
            alert("Fitting display-element could not be found!");
            return;
        }
        div.appendChild(createSpan(_item.name, "name"));
        let innerDiv = document.createElement("div");
        innerDiv.appendChild(createSpan(_item.amount, "amount"));
        innerDiv.appendChild(createSpan(_item.comment, "comment"));
        innerDiv.appendChild(createSpan(_item.date, "date"));
        div.appendChild(innerDiv);
        display.appendChild(div);
    }
    function createSpan(_content, _className) {
        let span = document.createElement("span");
        span.innerText = _content.toString() + " ";
        span.classList.add(_className);
        return span;
    }
    async function sendEntry() {
        console.log("Send order");
        let form = document.querySelector("form");
        let formData = new FormData(form);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        await fetch("index.html?" + query.toString());
        alert("Order sent!");
    }
})(L05_Einkaufsliste || (L05_Einkaufsliste = {}));
//# sourceMappingURL=Einkaufsliste.js.map