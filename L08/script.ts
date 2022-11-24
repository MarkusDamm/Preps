namespace L08 {
  document.addEventListener("DOMContentLoaded", hdlLoad);

  let canvas: HTMLCanvasElement;
  let crc2: CanvasRenderingContext2D;

  function hdlLoad(_event: Event): void {
    canvas = <HTMLCanvasElement>document.querySelector("canvas");
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    // drawPattern();
    drawOtherPattern();
    drawRec();
  }

  function drawRec(): void {
    let path: Path2D = new Path2D();
    crc2.beginPath();
    path.rect(20, 20, 50, 50);

    crc2.fillStyle = "#0acf03";
    crc2.fillRect(20, 20, 50, 50);
    crc2.stroke(path);

  }

  function drawPattern(): void {
    let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
    pattern.canvas.width = 80;
    pattern.canvas.height = 20;

    pattern.fillStyle = "#fec";
    pattern.fillRect(0, 0, canvas.width / 2, canvas.height);
    pattern.moveTo(0, 10);
    pattern.lineTo(10, 10);
    pattern.lineTo(20, 0);
    pattern.lineTo(30, 0);
    pattern.lineTo(40, 10);
    pattern.lineTo(30, 20);
    pattern.lineTo(20, 20);
    pattern.lineTo(10, 10);

    pattern.fillStyle = "#111";
    pattern.fillRect(canvas.width / 2, 0, canvas.width, canvas.height);
    pattern.moveTo(40, 10);
    pattern.lineTo(50, 10);
    pattern.lineTo(60, 0);
    pattern.lineTo(70, 0);
    pattern.lineTo(80, 10);
    pattern.lineTo(70, 20);
    pattern.lineTo(60, 20);
    pattern.lineTo(50, 10);

    pattern.stroke();

    crc2.fillStyle = <CanvasPattern>crc2.createPattern(pattern.canvas, "repeat");
    crc2.fillRect(0, 0, canvas.width, canvas.height);
  }

  function drawOtherPattern(): void {
    let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
    pattern.canvas.width = 40;
    pattern.canvas.height = 20;

    let path: Path2D = new Path2D();
    path.moveTo(0, 10);
    path.lineTo(10, 0);
    path.lineTo(20, 0);
    path.lineTo(30, 10);
    path.lineTo(20, 20);
    path.lineTo(10, 20);
    path.lineTo(0, 10);

    pattern.fillStyle = "blue";
    pattern.fill(path);

    pattern.stroke(path);

    path = new Path2D();
    path.moveTo(20, 0);
    path.lineTo(30, 10);
    path.lineTo(20, 20);
    path.lineTo(40, 20);
    path.lineTo(40, 10);
    path.lineTo(40, 0);
    path.lineTo(20, 0);

    path.moveTo(0, 0);
    path.lineTo(0, 10);
    path.lineTo(10, 0);
    path.lineTo(0, 0);
    
    path.moveTo(0, 20);
    path.lineTo(10, 20);
    path.lineTo(0, 10);
    path.lineTo(0, 20);

    pattern.fillStyle = "grey";
    pattern.fill(path);


    crc2.fillStyle = <CanvasPattern>crc2.createPattern(pattern.canvas, "repeat");
    crc2.fillRect(0, 0, canvas.width, canvas.height);


  }
}