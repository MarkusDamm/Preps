"use strict";
var ShoppingList;
(function (ShoppingList) {
    let data = [{
            name: "Besen",
            quantity: 2,
            date: "25-04-2024",
            comment: "zum sauber machen",
            isChecked: false
        },
        {
            name: "KI",
            quantity: 5,
            date: "21-04-2024",
            comment: "soll mir Code schreiben",
            isChecked: true
        }];
    document.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        generateContent(data);
    }
    function generateContent(_data) {
    }
})(ShoppingList || (ShoppingList = {}));
//# sourceMappingURL=script.js.map