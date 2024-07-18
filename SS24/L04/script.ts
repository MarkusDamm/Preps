namespace ShoppingList {
  interface Item {
    name: string,
    quantity: number,
    date: string,
    comment: string,
    isChecked: boolean
  }

  let data: Item[] =
    [{
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

  function hndLoad(_event: Event) {
    generateContent(data);
  }

  function generateContent(_data: Item[]) {

  }

}