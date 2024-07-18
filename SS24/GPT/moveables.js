"use strict";
// moveables.ts
class Moveables {
    constructor(position, velocity, size) {
        this.position = position;
        this.velocity = velocity;
        this.size = size;
    }
    move(time) {
        const offset = new Vector(this.velocity.x, this.velocity.y);
        offset.scale(time);
        this.position.add(offset);
    }
    update(ctx, time) {
        this.move(time);
        this.draw(ctx);
    }
}
//# sourceMappingURL=moveables.js.map