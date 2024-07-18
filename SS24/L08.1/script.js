"use strict";
var L08;
(function (L08) {
    document.addEventListener("DOMContentLoaded", hndLoad);
    let canvas;
    let crc2;
    function hndLoad(_event) {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        crc2.strokeStyle = "blue";
        drawCircles(20, 35, 45, 85, 30, 8, 10);
        crc2.strokeStyle = "red";
        drawCircles(200, 70, 85, 75, 30, 8, 4);
    }
    function drawCircles(_xStart, _yStart, _xDistance, _yDistance, _circleRadius, _circlesInRow, _amountRows) {
        let yPos = _yStart;
        for (let row = 0; row < _amountRows; row++) {
            let xPos = _xStart;
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
})(L08 || (L08 = {}));
//# sourceMappingURL=script.js.map