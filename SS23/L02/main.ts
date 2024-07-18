namespace L02 {
  window.addEventListener("load", hndLoad);

  function hndLoad(_event: Event): void {
    document.addEventListener("mousemove", hndMove);
    document.addEventListener("click", hndEvent);
    document.addEventListener("keyup", hndEvent);

    let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
    body.addEventListener("click", hndEvent);
    body.addEventListener("keyup", hndEvent);

    document.querySelectorAll("div").forEach(div => {
      div.addEventListener("click", hndEvent);
      div.addEventListener("keyup", hndEvent);
    });

    // body.addEventListener("CustomEvent", createCustomEvent);
    // let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    // button.addEventListener("click", createCustomEvent);

  }

  function hndMove(_event: MouseEvent): void {
    let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");

    span.style.top = Number(_event.clientY + 5).toString() + "px";
    span.style.left = Number(_event.clientX + 5).toString() + "px";

    span.innerText = "X-Position: " + Number(_event.clientX + 5) + " Y-Position: " + Number(_event.clientY + 5);
    span.innerText += " Target: " + _event.target;
  }

  function hndEvent(_event: Event): void {
    console.log(_event.type);

  }

  // function createCustomEvent(_event: Event): void {
  //   let customEvent: CustomEvent = new CustomEvent("CustomEvent");
  //   let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
  //   button.dispatchEvent(customEvent);
  // }

}