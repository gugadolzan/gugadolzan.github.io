const input = document.getElementById('carta-texto');
const inputButton = document.getElementById('criar-carta');
const outputParagraph = document.getElementById('carta-gerada');
const wordCounter = document.getElementById('carta-contador');
const classes = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

function randomClasses(word) {
  for (let index = 0; index < classes.length; index += 1) {
    if (Math.random() < 0.5) { // 50/50 condition; for adding or not a class from the specific group
      word.classList.add(classes[index][Math.floor(Math.random() * (classes[index].length))]); // Adds a random class from classes array if previous condition is true
    }
  }
}

function printsLetter(outputArray) {
  for (let index = 0; index < outputArray.length; index += 1) {
    const outputLetter = document.createElement('span');
    outputLetter.innerText = outputArray[index];
    while (outputLetter.classList.length < 2) { // Condition for at least two classes
      randomClasses(outputLetter);
    }
    outputParagraph.appendChild(outputLetter);
  }
}

function generateLetter() {
  inputButton.addEventListener('click', () => {
    if (!input.value.trim()) { // .trim() removes beginning and endind whitespaces
      outputParagraph.innerText = 'Por favor, digite o conteúdo da carta.';
      wordCounter.innerText = 0;
    } else {
      outputParagraph.innerHTML = ''; // Clears past outputs
      const outputArray = input.value.trim().split(' '); // Turns input into array
      wordCounter.innerText = outputArray.length;
      printsLetter(outputArray);
    }
  });
}
generateLetter();

function generateSingleWordStyle() {
  document.addEventListener('click', (event) => { // Event Bubbling
    const element = event;
    if (element.target.classList.length >= 2) { // Condition for checking if is it a word - without creating a new class
      element.target.className = ''; // Clears style classes
      while (element.target.classList.length < 2) { // Condition for at least two classes
        randomClasses(element.target);
      }
    }
  });
}
generateSingleWordStyle();
