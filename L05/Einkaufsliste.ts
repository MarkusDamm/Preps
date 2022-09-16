namespace L05_Einkaufsliste {

  window.addEventListener("load", handleLoad);

  interface Item {
    name: string;
    amount: number;
    comment: string;
    date: string;
  }

  async function handleLoad(_event: Event): Promise<void> {

    let response: Response = await fetch("Data.json");
    let offer: string = await response.text();
    let items: Item[] = JSON.parse(offer);

    items.forEach(item => { displayItem(item); });

    let submit: HTMLInputElement = <HTMLInputElement>document.querySelector("input[type=submit]");
    submit.addEventListener("click", sendEntry);
  }

  function displayItem(_item: Item): void {
    let div: HTMLDivElement = document.createElement("div");
    div.classList.add("entry");
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
    // tslint:disable-next-line: no-any
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    await fetch("index.html?" + query.toString());
    alert("Order sent!");
  }
}