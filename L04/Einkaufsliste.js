"use strict";
var L04_Einkaufsliste;
(function (L04_Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        loadContent(L04_Einkaufsliste.items);
    }
    function loadContent(_items) {
        _items.forEach(item => {
            displayItem(item);
        });
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
})(L04_Einkaufsliste || (L04_Einkaufsliste = {}));
//# sourceMappingURL=Einkaufsliste.js.map