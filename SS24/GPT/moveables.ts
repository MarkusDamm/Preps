// moveables.ts

abstract class Moveables {
  position: Vector;
  velocity: Vector;
  size: Vector;

  constructor(position: Vector, velocity: Vector, size: Vector) {
      this.position = position;
      this.velocity = velocity;
      this.size = size;
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;

  move(time: number): void {
      const offset = new Vector(this.velocity.x, this.velocity.y);
      offset.scale(time);
      this.position.add(offset);
  }

  public update(ctx: CanvasRenderingContext2D, time: number): void {
      this.move(time);
      this.draw(ctx);
  }
}
