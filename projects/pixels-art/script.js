const pixelBoardSection = document.getElementById('pixel-board');

function createPixelBoard(numberImput) {
  for (let lines = 0; lines < numberImput; lines += 1) {
    const line = document.createElement('div');
    for (let columns = 0; columns < numberImput; columns += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      line.appendChild(pixel);
    }
    pixelBoardSection.appendChild(line);
  }
}
createPixelBoard(5);

document.querySelector('.color').classList.add('selected'); // Selects first div color as selected color for usage (black color)

function selectColor() {
  const colorPalette = document.getElementById('color-palette');
  function select(event) {
    document.querySelector('.selected').classList.remove('selected'); // Removes the class from selected color
    event.target.classList.add('selected'); // Adds the class for selected/clicked color
  }
  colorPalette.addEventListener('click', select);
}
selectColor();

function paint() {
  function painting(event) {
    const element = event;
    if (event.target.classList.value.includes('pixel')) { // Verifies if is it a valid pixel (and not an external pixel)
      const pincelColor = document.querySelector('.selected').style.backgroundColor;
      element.target.style.backgroundColor = pincelColor;
    }
  }
  pixelBoardSection.addEventListener('click', painting);
}
paint();

function clearBoard() {
  const clearButton = document.getElementById('clear-board');
  function whiteBoard() {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
  clearButton.addEventListener('click', whiteBoard);
}
clearBoard();

function inputValidation(inputValue) {
  if (inputValue < 5) {
    return 5;
  }
  if (inputValue > 50) {
    return 50;
  }
  return inputValue;
}

function insertBoardRange() {
  const inputButton = document.getElementById('generate-board');
  function boardRange() {
    const inputValue = document.getElementById('board-size').value;
    if (!inputValue) {
      alert('Board inválido!');
    } else if (inputValue > 0) {
      pixelBoardSection.innerHTML = '';
      createPixelBoard(inputValidation(inputValue));
    }
  }

  inputButton.addEventListener('click', boardRange);
}
insertBoardRange();

function generateRandomColor() {
  const randomColor = [];
  for (let index = 0; index < 3; index += 1) { // Generates values for rgb
    randomColor.push(Math.round(Math.random() * 255));
  }
  return `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
}

function setRandomColor() {
  // document.getElementsByClassName('color')[5].style.backgroundColor
  const color = document.getElementsByClassName('color');
  color[0].style.backgroundColor = 'rgb(0, 0, 0)'; // Sets first color as black
  for (let index = 1; index < color.length; index += 1) {
    color[index].style.backgroundColor = generateRandomColor();
  }
}
setRandomColor();
