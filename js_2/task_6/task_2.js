// В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas два горизонтальных отрезка длиной 100.
// Координаты первого отрезка: точка 1: x = 100, y = 100; точка 2: x = 200, y = 100.
// Координаты второго отрезка: точка 1: x = 100, y = 150; точка 2: x = 200, y = 150.

ctx.beginPath();
ctx.moveTo(100, 100)
ctx.lineTo(200, 100)
ctx.stroke();
ctx.beginPath();
ctx.moveTo(100, 150)
ctx.lineTo(200, 150)
ctx.stroke();

