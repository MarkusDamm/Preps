namespace L05_Einkaufsliste {

  window.addEventListener("load", handleLoad);
  let url: string = "https://webuser.hs-furtwangen.de/~dammmark/Database/";
  let collection: string = "Einkaufsliste";

  interface Item {
    name: string;
    amount: number;
    comment: string;
    date: string;
  }

  interface Data {
    [data: string]: Item[];
  }

  async function handleLoad(_event: Event): Promise<void> {

    updateEntries();

    let submitButton: HTMLInputElement = <HTMLInputElement>document.querySelector("input[type=submit]");
    submitButton.addEventListener("click", sendEntry);

    let showButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    showButton.addEventListener("click", updateEntries);
  }

  async function displayData(_offer: string): Promise<void> {
    let data: Data = JSON.parse(_offer);
    let items: Item[] = data["data"];

    for (var index in items) {
      displayItem(items[index], index);
    }
  }

  function displayItem(_item: Item, _index: string): void {
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add("entry");
    div.id = _index;
    let display: HTMLElement | null = document.querySelector("#display");

    if (display == null) {
      alert("Fitting display-element could not be found!");
      return;
    }

    div.appendChild(createSpan(_item.name, "name"));
    let innerDiv: HTMLDivElement = document.createElement("div");
    innerDiv.appendChild(createSpan(_item.amount, "amount"));
    innerDiv.appendChild(createSpan(_item.comment, "comment"));
    innerDiv.appendChild(createSpan(_item.date, "date"));

    div.appendChild(innerDiv);

    let button: HTMLButtonElement = document.createElement("button");
    button.innerText = "Delete Entry";
    button.addEventListener("click", deleteEntry);
    div.appendChild(button);
    display.appendChild(div);
  }

  function createSpan(_content: string | number, _className: string): HTMLSpanElement {
    let span: HTMLSpanElement = document.createElement("span");
    span.innerText = _content.toString() + " ";
    span.classList.add(_className);
    return span;
  }

  async function sendEntry(): Promise<void> {
    console.log("Send order");
    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
    let formData: FormData = new FormData(form);

    let query: URLSearchParams = new URLSearchParams();
    query.set("command", "insert");
    query.set("collection", collection);
    query.set("data", JSON.stringify(formDataToJSON(formData)));
    let response: Response = await fetch(url + "?" + query.toString());
    let responseText: string = await response.text();
    console.log(responseText);

    updateEntries();
  }

  interface FormDataJSON {
    [key: string]: FormDataEntryValue | FormDataEntryValue[];
  }

  function formDataToJSON(_formData: FormData): FormDataJSON {
    let json: FormDataJSON = {};
    for (let key of _formData.keys())
      if (!json[key]) {
        let values: FormDataEntryValue[] = _formData.getAll(key);
        json[key] = values.length > 1 ? values : values[0];
      }
    return json;
  }

  async function updateEntries(): Promise<void> {
    let display: HTMLElement = <HTMLElement>document.querySelector("#display");
    display.innerText = "";

    let query: URLSearchParams = new URLSearchParams();
    query.set("command", "find");
    query.set("collection", collection);
    let response: Response = await fetch(url + "?" + query);

    let responseText: string = await response.text();
    displayData(responseText);
    console.log(responseText);
  }

  async function deleteEntry(_event: Event): Promise<void> {
    let button: HTMLButtonElement = <HTMLButtonElement>_event.target;
    let parent: HTMLElement = <HTMLElement>button.parentElement;
    let parentID: string = parent.id;

    let query: URLSearchParams = new URLSearchParams();
    query.set("command", "delete");
    query.set("collection", collection);
    query.set("id", parentID);
    let response: Response = await fetch(url + "?" + query);

    let responseText: string = await response.text();
    console.log(responseText);
    updateEntries();
  }
}
