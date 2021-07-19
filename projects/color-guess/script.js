const answer = document.getElementById('answer');
const answerColor = document.getElementById('answer-color');
const resetButton = document.getElementById('reset-game');
const rgbColor = document.getElementById('rgb-color');
const scoreboard = document.getElementById('score');

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function colorToAnswer() {
  answerColor.innerHTML = '';
  for (let index = 0; index < 6; index += 1) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    answerColor.appendChild(ball);
  }
}

function colorToGuess() {
  rgbColor.innerHTML = document.getElementsByClassName('ball')[
    Math.floor(Math.random() * 6)
  ].style.backgroundColor;

  rgbColor.innerHTML = rgbColor.innerHTML.substr(3);
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('ball')) {
    if (event.target.style.backgroundColor === `rgb${rgbColor.innerHTML}`) {
      let score = Number(scoreboard.innerHTML);
      score += 3;
      scoreboard.innerHTML = score;
      answer.innerHTML = 'Acertou!';
      answer.style.color = 'green';
      colorToAnswer();
      colorToGuess();
    } else {
      let score = Number(scoreboard.innerHTML);
      score -= 1;
      scoreboard.innerHTML = score;
      answer.innerHTML = 'Errou! Tente novamente!';
      answer.style.color = 'red';
    }
  }
});

resetButton.addEventListener('click', () => {
  colorToAnswer();
  colorToGuess();
  answer.innerHTML = 'Escolha uma cor';
  answer.style.color = '#212529';
});

window.onload = () => {
  colorToAnswer();
  colorToGuess();
};
