"use strict";
var L02;
(function (L02) {
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        window.addEventListener("mousemove", hndMove);
        let button = document.querySelector("button");
        button.addEventListener("click", createCustomEvent);
        document.addEventListener("CustomEvent", hndEvent);
        let body = document.querySelector("body");
        body.addEventListener("CustomEvent", createCustomEvent);
    }
    function hndMove(_event) {
        let span = document.querySelector("span");
        span.style.top = Number(_event.clientY + 15).toString() + "px";
        span.style.left = Number(_event.clientX + 15).toString() + "px";
    }
    function createCustomEvent() {
        let customEvent = new CustomEvent("CustomEvent");
        let button = document.querySelector("button");
        button.dispatchEvent(customEvent);
    }
    function hndEvent(_event) {
        console.log(_event.type);
    }
})(L02 || (L02 = {}));
//# sourceMappingURL=main.js.map