// В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas три отрезка разных цветов. Первый отрезок красного #e74c3c цвета, второй — зеленого #16a085 цвета, а третий — синего #2980b9 цвета.

ctx.beginPath();
ctx.moveTo(15,5);
ctx.lineTo(100,5);
ctx.strokeStyle = "#e74c3c";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(15,30);
ctx.lineTo(100,30);
ctx.strokeStyle = "#16a085";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(15,55);
ctx.lineTo(100,55);
ctx.strokeStyle = "#2980b9";
ctx.stroke();

// const getNumber = (max, min) => Math.floor(Math.random() * (max - min) + min);

// const getColor = () => {
//     const r = getNumber(256),
//           g = getNumber(256),
//           b = getNumber(256);
//     return `rgb(${r}, ${g}, ${b})`;
// }
// const drawLine = (c, x1, y1, x2, y2, color = "black") => {
//     c.beginPath();
//     c.strokeStyle = color;
//     c.moveTo(x1, y1);
//     c.lineTo(x2, y2);
//     c.stroke();
//     c.closePath();
// }