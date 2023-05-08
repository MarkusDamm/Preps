namespace L08 {
  document.addEventListener("DOMContentLoaded", hdlLoad);

  let canvas: HTMLCanvasElement;
  let crc2: CanvasRenderingContext2D;
  // interface Vector2 { x: number, y: number };

  function hdlLoad(_event: Event): void {
    canvas = <HTMLCanvasElement>document.querySelector("canvas");
    crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
    drawPattern(); //
    drawOtherPattern();
    drawRectangles(10);
  }

  function getRandomValue(_min: number, _max: number, _hasDecimals: boolean = true): number {
    let value: number = Math.random() * (_max - _min);
    value += _min;
    if (!_hasDecimals) {
      value = Math.floor(value);
    }
    return value;
  }

  function drawRectangles(_amount: number): void {
    for (let i: number = 0; i < _amount; i++) {
      let x: number = getRandomValue(0, canvas.width);
      let y: number = getRandomValue(0, canvas.width);
      let w: number = getRandomValue(0, canvas.width);
      let h: number = getRandomValue(0, canvas.width);
      drawRec(x, y, w, h, createRandomColor());
    }
  }
  /**
   * Draws a rectangle at the given position with the given color
   * @param _x X-Position
   * @param _y Y-Position
   * @param _w Width
   * @param _h Heidth
   * @param _c color
   */
  function drawRec(_x: number, _y: number, _w: number, _h: number, _c: string): void {
    crc2.save();
    let path: Path2D = new Path2D();
    crc2.beginPath();
    path.rect(_x, _y, _w, _h);

    crc2.fillStyle = _c;
    crc2.fillRect(_x, _y, _w, _h);
    crc2.stroke(path);
    crc2.restore();
  }

  function drawPattern(): void {
    crc2.save();
    let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");
    pattern.canvas.width = 80;
    pattern.canvas.height = 20;

    pattern.fillStyle = createRandomColor();
    pattern.fillRect(0, 0, canvas.width / 2, canvas.height);
    pattern.moveTo(0, 10);
    pattern.lineTo(10, 10);
    pattern.lineTo(20, 0);
    pattern.lineTo(30, 0);
    pattern.lineTo(40, 10);
    pattern.lineTo(30, 20);
    pattern.lineTo(20, 20);
    pattern.lineTo(10, 10);

    pattern.fillStyle = createRandomColor();
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
    crc2.restore();
  }

  function drawOtherPattern(): void {
    crc2.save();
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

    pattern.fillStyle = createRandomColor();
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

    pattern.fillStyle = createRandomColor();
    pattern.fill(path);


    crc2.fillStyle = <CanvasPattern>crc2.createPattern(pattern.canvas, "repeat");
    crc2.fillRect(0, 0, canvas.width, canvas.height);
    crc2.restore();
  }

  function createRandomColor(): string {
    let color: string = "rgb(";
    let i: number = 0;
    while (i < 3) {
      let value: number = Math.random() * 256;
      value = Math.floor(value);
      color += value;
      if (i == 2) { color += ")"; }
      else { color += ", " }
      i++;
    }
    return color;
  }
}