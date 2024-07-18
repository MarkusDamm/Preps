namespace L08 {
  document.addEventListener("DOMContentLoaded", hndLoad);

  let canvas: HTMLCanvasElement;
  let crc2: CanvasRenderingContext2D;

  function hndLoad(_event: Event): void {
    canvas = document.querySelector("canvas")!;
    crc2 = canvas.getContext("2d")!;
    crc2.strokeStyle = "blue";
    drawCircles(20, 35, 45, 85, 30, 8, 10);
    crc2.strokeStyle = "red";
    drawCircles(200, 70, 85, 75, 30, 8, 4);
  }

  function drawCircles(_xStart: number, _yStart: number,
    _xDistance: number, _yDistance: number, _circleRadius: number,
    _circlesInRow: number, _amountRows: number): void {

    let yPos: number = _yStart;
    for (let row = 0; row < _amountRows; row++) {
      let xPos: number = _xStart;
      for (let circleInRow = 0; circleInRow < _circlesInRow; circleInRow++) {
        crc2.beginPath();
        crc2.arc(xPos, yPos, _circleRadius, 0, 360);
        xPos += _xDistance;
        crc2.stroke();
        crc2.closePath();

      }
      yPos += _yDistance;
    }
  }
}