// main.ts

window.onload = () => {
  const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
      return;
  }

  // Himmel zeichnen
  ctx.fillStyle = 'skyblue';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Gebirge zeichnen
  drawMountains(ctx, canvas.width, canvas.height);

  // Wiese zeichnen
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 300, canvas.width, 300);

  // Ovalen Teich zeichnen
  ctx.fillStyle = 'blue';
  ctx.beginPath();
  ctx.ellipse(400, 450, 150, 75, 0, 0, 2 * Math.PI);
  ctx.fill();
};

function drawMountains(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
  const numberOfMountains = 5;
  const mountainWidth = canvasWidth / numberOfMountains;

  ctx.fillStyle = 'gray';

  for (let i = 0; i < numberOfMountains; i++) {
      const base1 = new Vector(i * mountainWidth, canvasHeight / 2);
      const base2 = new Vector((i + 1) * mountainWidth, canvasHeight / 2);
      const peak = new Vector(base1.x + (mountainWidth / 2), Math.random() * 150 + 50);

      ctx.beginPath();
      ctx.moveTo(base1.x, base1.y);
      ctx.lineTo(peak.x, peak.y);
      ctx.lineTo(base2.x, base2.y);
      ctx.closePath();
      ctx.fill();
  }
}
