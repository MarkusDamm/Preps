namespace SS24 {
  let person: string [] = ["Jirka", "Alida", "Niko", "Markus"];
  let verb: string [] = ["unterrichtet", "hilft", "übt", "lernt"];
  let object: string [] = ["EIA", "Selbstmanagement", "Stromkabel nicht zu vergessen", "Kochen"];

  console.log(person);
  console.log(verb);
  console.log(object);
  
  for (let i: number = person.length; i > 0; i--) {
    console.log(i);
    let sentence: string = getVerse(person, verb, object);
    console.log(sentence);
  }

  function getVerse(_person: string[], _verb: string[], _object: string[]): string {
    let randomNumber: number = Math.floor(Math.random() * (_person.length));
    let verse: string = _person.splice(randomNumber, 1)[0];
    verse += " ";

    randomNumber = Math.floor(Math.random() * (_verb.length));
    verse += _verb.splice(randomNumber, 1)[0];
    verse += " ";
    
    randomNumber = Math.floor(Math.random() * (_object.length));
    verse += _object.splice(randomNumber, 1)[0];

    return verse;
  }
}