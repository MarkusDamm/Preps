namespace TaskTest {
  document.addEventListener("DOMContentLoaded", hndLoad);

  function hndLoad(): void {
    document.querySelector("button")?.addEventListener("click", hndClick);
  }

  function hndClick(): void {
    console.log("handle Click");
    
    let input: HTMLInputElement = <HTMLInputElement>document.querySelector('input[type="date"]');
    console.log(input.value);
    input = <HTMLInputElement>document.querySelector('input[type="time"]');
    console.log(input.value);
  }
  
}