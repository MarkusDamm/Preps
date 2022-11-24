"use strict";
var L08;
(function (L08) {
    document.addEventListener("DOMContentLoaded", hdlLoad);
    let canvas;
    let crc2;
    function hdlLoad(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        // drawPattern();
        drawOtherPattern();
        drawRec();
    }
    function drawRec() {
        let path = new Path2D();
        crc2.beginPath();
        path.rect(20, 20, 50, 50);
        crc2.fillStyle = "#0acf03";
        crc2.fillRect(20, 20, 50, 50);
        crc2.stroke(path);
    }
    function drawPattern() {
        let pattern = document.createElement("canvas").getContext("2d");
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    function drawOtherPattern() {
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
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
})(L08 || (L08 = {}));
//# sourceMappingURL=script.js.map