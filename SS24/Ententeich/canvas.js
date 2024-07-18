"use strict";
var L09_Pond;
(function (L09_Pond) {
    window.addEventListener("load", handleLoad);
    let clouds = [];
    let backgroundImg;
    function handleLoad(_event) {
        // Zugriff auf das Canvas-Element
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L09_Pond.crc2 = canvas.getContext("2d");
        for (let i = 0; i < 10; i++) {
            let cloud = new L09_Pond.Cloud(Math.random() * -500, 50 + Math.random() * 200);
            // let cloud: Cloud = new Cloud(20 + 5 * i, 120 + 5 * i);
            clouds.push(cloud);
        }
        drawBackground();
        let image = document.querySelector("img");
        drawSVG(image);
        // drawSVGWithPath("./Yogurth.svg");
        // let svgImage: CanvasImageSource = loadSVG("./Yogurth.svg");
        // crc2.drawImage(svgImage, 0, 0, 120, 300);
        backgroundImg = L09_Pond.crc2.getImageData(0, 0, canvas.width, canvas.height);
        setInterval(animate, 40);
    }
    function animate() {
        L09_Pond.crc2.putImageData(backgroundImg, 0, 0);
        // drawBackground();
        for (let cloud of clouds) {
            cloud.move();
            cloud.draw();
        }
    }
    // function loadSVG(_path: string): CanvasImageSource {
    //     let image: HTMLImageElement = new Image(100, 100);
    //     image.src = _path;
    //     return image;
    // }
    // function drawSVGWithPath(_path: string) {
    //     let img = new Image(100, 100);
    //     img.src = _path;
    //     crc2.drawImage(img, 0, 0);
    // }
    function drawSVG(_img) {
        L09_Pond.crc2.drawImage(_img, 0, 0);
    }
    function drawBackground() {
        //Zeichnen der Elemente
        fillBackground();
        sun();
        lake();
        mountain();
    }
    // Hintergrund einfärben
    function fillBackground() {
        // Grünen Hintergrund zeichnen
        let grassColor = "#90E162";
        L09_Pond.crc2.fillStyle = grassColor;
        L09_Pond.crc2.fillRect(0, 0, 600, 600);
        // Blaues Rechteck zeichnen
        let skyColor = "#48BCE1";
        L09_Pond.crc2.fillStyle = skyColor;
        L09_Pond.crc2.fillRect(0, 0, 600, 250);
    }
    function sun() {
        // Mittelpunkt und Durchmesser des Kreises
        let centerX = 500;
        let centerY = 100;
        let radius = 40;
        // Kreis zeichnen
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        L09_Pond.crc2.closePath();
        // Farbe 
        let circleColor = "yellow"; // Gelbe Farbe
        L09_Pond.crc2.fillStyle = circleColor;
        L09_Pond.crc2.fill();
        // Sonnenstrahlen zeichnen
        let lineLength = 20;
        L09_Pond.crc2.strokeStyle = "yellow";
        for (let i = 0; i < 8; i++) { //Schleife, um 8 Linien zu zeichnen
            let angle = (i / 8) * (2 * Math.PI); // Winkel für die Linie 1/8 von 365 Grad
            let startX = centerX + radius * Math.cos(angle);
            let startY = centerY + radius * Math.sin(angle);
            let endX = startX + lineLength * Math.cos(angle);
            let endY = startY + lineLength * Math.sin(angle);
            L09_Pond.crc2.beginPath();
            L09_Pond.crc2.moveTo(startX, startY);
            L09_Pond.crc2.lineTo(endX, endY);
            L09_Pond.crc2.stroke();
            L09_Pond.crc2.closePath();
        }
    }
    function lake() {
        // Mittelpunkt und Größe der Ellipse
        let centerX = 400;
        let centerY = 400;
        let radiusX = 150;
        let radiusY = 75;
        // Ellipse zeichnen
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        L09_Pond.crc2.closePath();
        let lakeColor = "#4676E0";
        L09_Pond.crc2.fillStyle = lakeColor;
        L09_Pond.crc2.fill();
    }
    function mountain() {
        // Berg zeichnen
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.moveTo(200, 250);
        L09_Pond.crc2.quadraticCurveTo(400, -40, 600, 250); // Bogen für den Berg
        L09_Pond.crc2.closePath();
        let mountainColor = "#707070";
        L09_Pond.crc2.fillStyle = mountainColor;
        L09_Pond.crc2.fill();
        // 2. Berg zeichnen
        L09_Pond.crc2.beginPath();
        L09_Pond.crc2.moveTo(0, 250);
        L09_Pond.crc2.quadraticCurveTo(150, 100, 370, 250); // Bogen für den Berg
        L09_Pond.crc2.closePath();
        let mountainColorTwo = "gray";
        L09_Pond.crc2.fillStyle = mountainColorTwo;
        L09_Pond.crc2.fill();
    }
})(L09_Pond || (L09_Pond = {}));
//# sourceMappingURL=canvas.js.map