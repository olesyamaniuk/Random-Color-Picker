function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l;
  
  l = (max + min) / 2;

  if (max === min) {
    h = s = 0; 
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

const bodyElement = document.body;
const colorSpanHex = document.querySelector('.color-hex');
const colorSpanRgb = document.querySelector('.color-rgb');
const colorSpanHsl = document.querySelector('.color-hsl');
const changeColorButton = document.querySelector('.change-color');

bodyElement.style.backgroundColor = '#ffffff';
colorSpanHex.textContent = 'HEX: #ffffff';
colorSpanRgb.textContent = 'RGB: rgb(255, 255, 255)';
colorSpanHsl.textContent = 'HSL: hsl(0, 0%, 100%)';

changeColorButton.addEventListener('click', function () {
  const randomHexColor = getRandomHexColor();
  const randomRgbColor = hexToRgb(randomHexColor);
  const randomHslColor = hexToHsl(randomHexColor);

  bodyElement.style.backgroundColor = randomHexColor;

  changeColorButton.style.backgroundColor = randomHexColor;

  colorSpanHex.textContent = `HEX: ${randomHexColor}`;
  colorSpanRgb.textContent = `RGB: ${randomRgbColor}`;
  colorSpanHsl.textContent = `HSL: ${randomHslColor}`;
});

function getTextColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
  return brightness > 186 ? 'black' : 'white'; 
}

changeColorButton.addEventListener('click', function () {
  const randomHexColor = getRandomHexColor();
  const randomRgbColor = hexToRgb(randomHexColor);
  const randomHslColor = hexToHsl(randomHexColor);

  bodyElement.style.backgroundColor = randomHexColor;

  changeColorButton.style.backgroundColor = randomHexColor;
  changeColorButton.style.color = getTextColor(randomHexColor); 

  colorSpanHex.textContent = `HEX: ${randomHexColor}`;
  colorSpanRgb.textContent = `RGB: ${randomRgbColor}`;
  colorSpanHsl.textContent = `HSL: ${randomHslColor}`;
});


