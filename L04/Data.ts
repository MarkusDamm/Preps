namespace L04_Einkaufsliste {

  export interface Item {
    name: string;
    amount: number;
    comment: string;
    date: string;
  }

  export let items: Item[] = [
    { name: "Spekulatius", amount: 3, comment: "Packungen", date: "09.09.2022" },
    { name: "Tee", amount: 2, comment: "Teebeutel", date: "13.09.2022" },
    { name: "Plüschi", amount: 1, comment: "Pokémon", date: "14.09.2022" }
  ];
}