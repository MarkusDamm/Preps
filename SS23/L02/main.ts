namespace L02 {
  window.addEventListener("load", hndLoad);

  function hndLoad(_event: Event): void {
    window.addEventListener("mousemove", hndMove);
    let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    button.addEventListener("click", createCustomEvent);
    document.addEventListener("CustomEvent", hndEvent);
    
    let body: HTMLBodyElement = <HTMLBodyElement>document.querySelector("body");
    body.addEventListener("CustomEvent", createCustomEvent);
  }

  function hndMove(_event: MouseEvent): void {    
    let span: HTMLSpanElement = <HTMLSpanElement>document.querySelector("span");
    
    span.style.top = Number(_event.clientY + 15 ).toString() + "px";
    span.style.left = Number(_event.clientX + 15).toString() + "px";
  }

  function createCustomEvent(): void {
    let customEvent: CustomEvent = new CustomEvent("CustomEvent");
    let button: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button");
    button.dispatchEvent(customEvent);
  }

  function hndEvent(_event: Event): void {
    console.log(_event.type);
    
  }
}