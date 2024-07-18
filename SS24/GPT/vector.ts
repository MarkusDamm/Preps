// vector.ts

class Vector {
  x: number;
  y: number;

  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }

  scale(_factor: number): void {
      this.x *= _factor;
      this.y *= _factor;
  }

  add(_addend: Vector): void {
      this.x += _addend.x;
      this.y += _addend.y;
  }
}
