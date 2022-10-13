"use strict";
var L01;
(function (L01) {
    let subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    function getVerse(_subjects, _predicates, _objects) {
        let vers = "";
        let randomNumber = 0;
        randomNumber = Math.floor(Math.random()) * _subjects.length - 1;
        vers += _subjects.splice(randomNumber)[0] + " ";
        randomNumber = Math.floor(Math.random()) * _predicates.length - 1;
        vers += _predicates.splice(randomNumber)[0] + " ";
        randomNumber = Math.floor(Math.random()) * _objects.length - 1;
        vers += _objects.splice(randomNumber)[0] + ".";
        return vers;
    }
    for (let i = 6; i > 1; i--) {
        console.log(getVerse(subjects, predicates, objects));
    }
})(L01 || (L01 = {}));
//# sourceMappingURL=script.js.map