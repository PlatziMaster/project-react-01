function useLevelDraw(canv, percent) {
  const canvas = canv;
  canvas.width = 115;
  canvas.height = 115;

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const drawCanvas = (
    ctx,
    centerX,
    centerY,
    radius,
    startAngle,
    endAngle,
    colorDC,
  ) => {
    ctx.fillStyle = colorDC;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
  };

  const drawLevelSkill = (percentLS, canvasLS, colorLS) => {
    const ctx = canvasLS.getContext('2d');
    const totalValue = 100;
    const startAngle = (90 * Math.PI) / 180;

    const sliceAngle = (2 * Math.PI * percentLS) / totalValue;
    drawCanvas(
      ctx,
      canvasLS.width / 2,
      canvasLS.height / 2,
      Math.min(canvasLS.width / 2, canvasLS.height / 2),
      startAngle,
      startAngle + sliceAngle,
      colorLS,
    );
  };

  drawLevelSkill(percent, canvas, getRandomColor());
}

export default useLevelDraw;
