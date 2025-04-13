

function changeBackground() {
  const colors = [
    "#f9f871",
    "#d1e7dd",
    "#f5c2c7",
    "#cfe2ff",
    "#d0bfff",
    "#fff3cd",
    "#ffc107",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
