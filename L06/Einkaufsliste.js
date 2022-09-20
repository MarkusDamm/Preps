"use strict";
var L05_Einkaufsliste;
(function (L05_Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    let url = "https://webuser.hs-furtwangen.de/~dammmark/Database/";
    let collection = "Einkaufsliste";
    async function handleLoad(_event) {
        updateEntries();
        let submitButton = document.querySelector("input[type=submit]");
        submitButton.addEventListener("click", sendEntry);
        let showButton = document.querySelector("button");
        showButton.addEventListener("click", updateEntries);
    }
    async function displayData(_offer) {
        let data = JSON.parse(_offer);
        let items = data["data"];
        for (var index in items) {
            displayItem(items[index], index);
        }
    }
    function displayItem(_item, _index) {
        let div = document.createElement("div");
        div.classList.add("entry");
        div.id = _index;
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
        let button = document.createElement("button");
        button.innerText = "Delete Entry";
        button.addEventListener("click", deleteEntry);
        div.appendChild(button);
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
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", collection);
        query.set("data", JSON.stringify(formDataToJSON(formData)));
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        console.log(responseText);
        updateEntries();
    }
    function formDataToJSON(_formData) {
        let json = {};
        for (let key of _formData.keys())
            if (!json[key]) {
                let values = _formData.getAll(key);
                json[key] = values.length > 1 ? values : values[0];
            }
        return json;
    }
    async function updateEntries() {
        let display = document.querySelector("#display");
        display.innerText = "";
        let query = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", collection);
        let response = await fetch(url + "?" + query);
        let responseText = await response.text();
        displayData(responseText);
        console.log(responseText);
    }
    async function deleteEntry(_event) {
        let button = _event.target;
        let parent = button.parentElement;
        let parentID = parent.id;
        let query = new URLSearchParams();
        query.set("command", "delete");
        query.set("collection", collection);
        query.set("id", parentID);
        let response = await fetch(url + "?" + query);
        let responseText = await response.text();
        console.log(responseText);
        updateEntries();
    }
})(L05_Einkaufsliste || (L05_Einkaufsliste = {}));
//# sourceMappingURL=Einkaufsliste.js.map