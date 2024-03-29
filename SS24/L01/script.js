"use strict";
var SS24;
(function (SS24) {
    let person = ["Jirka", "Alida", "Niko", "Markus"];
    let verb = ["unterrichtet", "hilft", "übt", "lernt"];
    let object = ["EIA", "Selbstmanagement", "Stromkabel nicht zu vergessen", "Kochen"];
    console.log(person);
    console.log(verb);
    console.log(object);
    for (let i = person.length; i > 0; i--) {
        console.log(i);
        let sentence = getVerse(person, verb, object);
        console.log(sentence);
    }
    function getVerse(_person, _verb, _object) {
        let randomNumber = Math.floor(Math.random() * (_person.length));
        let verse = _person.splice(randomNumber, 1)[0];
        verse += " ";
        randomNumber = Math.floor(Math.random() * (_verb.length));
        verse += _verb.splice(randomNumber, 1)[0];
        verse += " ";
        randomNumber = Math.floor(Math.random() * (_object.length));
        verse += _object.splice(randomNumber, 1)[0];
        return verse;
    }
})(SS24 || (SS24 = {}));
//# sourceMappingURL=script.js.map