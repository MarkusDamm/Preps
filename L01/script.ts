namespace L01 {

  let subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
  let predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
  let objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];


  function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
    let vers: string = "";
    let randomNumber: number = 0;
    randomNumber = Math.floor(Math.random()) * _subjects.length - 1;
    vers += _subjects.splice(randomNumber)[0] + " ";
    randomNumber = Math.floor(Math.random()) * _predicates.length - 1;
    vers += _predicates.splice(randomNumber)[0] + " ";
    randomNumber = Math.floor(Math.random()) * _objects.length - 1;
    vers += _objects.splice(randomNumber)[0] + ".";

    return vers;
  }

  for (let i: number = 6; i > 1; i--) {
    console.log(getVerse(subjects, predicates, objects));
  }
}