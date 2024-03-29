"use strict";
var TaskTest;
(function (TaskTest) {
    document.addEventListener("DOMContentLoaded", hndLoad);
    function hndLoad() {
        document.querySelector("button")?.addEventListener("click", hndClick);
    }
    function hndClick() {
        console.log("handle Click");
        let input = document.querySelector('input[type="date"]');
        console.log(input.value);
        input = document.querySelector('input[type="time"]');
        console.log(input.value);
    }
})(TaskTest || (TaskTest = {}));
//# sourceMappingURL=script.js.map