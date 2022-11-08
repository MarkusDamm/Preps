namespace L04_Einkaufsliste {

  window.addEventListener("load", handleLoad);

  function handleLoad(_event: Event): void {
    loadContent(items);
    let submit: HTMLInputElement = <HTMLInputElement>document.querySelector("input[type='submit']");

    submit.addEventListener("click", createNewItem);
  }

  function loadContent(_items: Item[]): void {
    _items.forEach(item => {
      displayItem(item);
    });
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

  function createNewItem(_event: Event): void {
    let formData: FormData = new FormData(document.forms[0]);

    console.log(formData.get("Name"));
    console.log(formData.get("Date"));

    let newItem: Item = {
      name: formData.get("Name").toString(),
      amount: Number(formData.get("Amount")),
      comment: formData.get("Comment").toString(),
      date: formData.get("Date").toString()
    };

    console.log(newItem);
    document.forms[0].reset();
    displayItem(newItem);
  }

  function createSpan(_content: string | number, _className: string): HTMLSpanElement {
    let span: HTMLSpanElement = document.createElement("span");
    span.innerText = _content.toString() + " ";
    span.classList.add(_className);
    return span;
  }
}