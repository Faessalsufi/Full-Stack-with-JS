// Generate a random color

const randomColor = () => {
  const hexValues = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
};

let colorChange;

const changeBgColor = () => {
  document.body.style.backgroundColor = randomColor();
};

const startChangingColor = () => {
  if (!colorChange) {
    colorChange = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = () => {
  clearInterval(colorChange);
  colorChange = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
