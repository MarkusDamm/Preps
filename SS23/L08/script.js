"use strict";
var L08;
(function (L08) {
    document.addEventListener("DOMContentLoaded", hdlLoad);
    let canvas;
    let crc2;
    // interface Vector2 { x: number, y: number };
    function hdlLoad(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawPattern(); //
        drawOtherPattern();
        drawRectangles(10);
    }
    function getRandomValue(_min, _max, _hasDecimals = true) {
        let value = Math.random() * (_max - _min);
        value += _min;
        if (!_hasDecimals) {
            value = Math.floor(value);
        }
        return value;
    }
    function drawRectangles(_amount) {
        for (let i = 0; i < _amount; i++) {
            let x = getRandomValue(0, canvas.width);
            let y = getRandomValue(0, canvas.width);
            let w = getRandomValue(0, canvas.width);
            let h = getRandomValue(0, canvas.width);
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
    function drawRec(_x, _y, _w, _h, _c) {
        crc2.save();
        let path = new Path2D();
        crc2.beginPath();
        path.rect(_x, _y, _w, _h);
        crc2.fillStyle = _c;
        crc2.fillRect(_x, _y, _w, _h);
        crc2.stroke(path);
        crc2.restore();
    }
    function drawPattern() {
        crc2.save();
        let pattern = document.createElement("canvas").getContext("2d");
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.restore();
    }
    function drawOtherPattern() {
        crc2.save();
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        let path = new Path2D();
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        crc2.restore();
    }
    function createRandomColor() {
        let color = "rgb(";
        let i = 0;
        while (i < 3) {
            let value = Math.random() * 256;
            value = Math.floor(value);
            color += value;
            if (i == 2) {
                color += ")";
            }
            else {
                color += ", ";
            }
            i++;
        }
        return color;
    }
})(L08 || (L08 = {}));
//# sourceMappingURL=script.js.map