"use strict";
// vector.ts
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    scale(_factor) {
        this.x *= _factor;
        this.y *= _factor;
    }
    add(_addend) {
        this.x += _addend.x;
        this.y += _addend.y;
    }
}
//# sourceMappingURL=vector.js.map