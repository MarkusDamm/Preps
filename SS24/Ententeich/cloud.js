"use strict";
var L09_Pond;
(function (L09_Pond) {
    class Cloud extends EventTarget {
        constructor(_x, _y) {
            super();
            this.x = _x;
            this.y = _y;
        }
        move() {
            this.x += 1;
            if (this.x > L09_Pond.crc2.canvas.width * 1.5) {
                this.x = -170;
            }
        }
        draw() {
            L09_Pond.crc2.save();
            // Ursprung Wolke 2
            L09_Pond.crc2.translate(this.x, this.y);
            // Wolke zeichnen
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(150, 0);
            L09_Pond.crc2.lineTo(0, 0);
            L09_Pond.crc2.ellipse(50, 0, 40, 30, 0, Math.PI, 0, false);
            L09_Pond.crc2.ellipse(100, 0, 60, 60, 0, Math.PI, 0, false);
            L09_Pond.crc2.ellipse(170, 0, 50, 30, 0, Math.PI, 0, false);
            L09_Pond.crc2.closePath();
            let cloudColor = "white";
            L09_Pond.crc2.fillStyle = cloudColor;
            L09_Pond.crc2.fill();
            // Setze den Ursprung zurück auf (0, 0)
            L09_Pond.crc2.restore();
        }
    }
    L09_Pond.Cloud = Cloud;
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=cloud.js.map