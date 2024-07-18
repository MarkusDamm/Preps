namespace L09_Pond {
    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let clouds: Cloud[] = [];
    let backgroundImg: ImageData;

    function handleLoad(_event: Event): void {
        // Zugriff auf das Canvas-Element
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        for (let i: number = 0; i < 10; i++) {
            let cloud: Cloud = new Cloud(Math.random() * - 500, 50 + Math.random() * 200);
            // let cloud: Cloud = new Cloud(20 + 5 * i, 120 + 5 * i);
            clouds.push(cloud);
        }

        drawBackground();
        let image: HTMLImageElement = document.querySelector("img")!;
        drawSVG(image);
        // drawSVGWithPath("./Yogurth.svg");
        // let svgImage: CanvasImageSource = loadSVG("./Yogurth.svg");
        // crc2.drawImage(svgImage, 0, 0, 120, 300);
        backgroundImg = crc2.getImageData(0, 0, canvas.width, canvas.height);
        setInterval(animate, 40);
    }

    function animate(): void {
        crc2.putImageData(backgroundImg, 0, 0);
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
    
    function drawSVG(_img: HTMLImageElement) {
        crc2.drawImage(_img, 0, 0);
    }

    function drawBackground(): void {
        //Zeichnen der Elemente
        fillBackground();
        sun();
        lake();
        mountain();
    }

    // Hintergrund einfärben
    function fillBackground(): void {
        // Grünen Hintergrund zeichnen
        let grassColor: string = "#90E162";
        crc2.fillStyle = grassColor;
        crc2.fillRect(0, 0, 600, 600);

        // Blaues Rechteck zeichnen
        let skyColor: string = "#48BCE1";
        crc2.fillStyle = skyColor;
        crc2.fillRect(0, 0, 600, 250);
    }

    function sun(): void {
        // Mittelpunkt und Durchmesser des Kreises
        let centerX: number = 500;
        let centerY: number = 100;
        let radius: number = 40;

        // Kreis zeichnen
        crc2.beginPath();
        crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        crc2.closePath();

        // Farbe 
        let circleColor: string = "yellow"; // Gelbe Farbe
        crc2.fillStyle = circleColor;
        crc2.fill();

        // Sonnenstrahlen zeichnen
        let lineLength: number = 20;
        crc2.strokeStyle = "yellow";
        for (let i = 0; i < 8; i++) { //Schleife, um 8 Linien zu zeichnen
            let angle: number = (i / 8) * (2 * Math.PI); // Winkel für die Linie 1/8 von 365 Grad
            let startX: number = centerX + radius * Math.cos(angle);
            let startY: number = centerY + radius * Math.sin(angle);
            let endX: number = startX + lineLength * Math.cos(angle);
            let endY: number = startY + lineLength * Math.sin(angle);
            crc2.beginPath();
            crc2.moveTo(startX, startY);
            crc2.lineTo(endX, endY);
            crc2.stroke();
            crc2.closePath();
        }
    }

    function lake(): void {
        // Mittelpunkt und Größe der Ellipse
        let centerX: number = 400;
        let centerY: number = 400;
        let radiusX: number = 150;
        let radiusY: number = 75;

        // Ellipse zeichnen
        crc2.beginPath();
        crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        crc2.closePath();

        let lakeColor: string = "#4676E0";
        crc2.fillStyle = lakeColor;
        crc2.fill();
    }

    function mountain(): void {
        // Berg zeichnen
        crc2.beginPath();
        crc2.moveTo(200, 250);
        crc2.quadraticCurveTo(400, -40, 600, 250); // Bogen für den Berg
        crc2.closePath();

        let mountainColor: string = "#707070";
        crc2.fillStyle = mountainColor;
        crc2.fill();

        // 2. Berg zeichnen
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.quadraticCurveTo(150, 100, 370, 250); // Bogen für den Berg
        crc2.closePath();

        let mountainColorTwo: string = "gray";
        crc2.fillStyle = mountainColorTwo;
        crc2.fill();
    }
}







