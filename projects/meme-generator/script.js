const textInput = document.getElementById('text-input');
const memeInsert = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImageContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');

textInput.addEventListener('keyup', () => { // Loads text
  memeText.innerText = textInput.value;
});

memeInsert.addEventListener('change', (event) => { // Loads image
  const image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
});

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const borderStyle = window.getComputedStyle(event.target, null).getPropertyValue('border'); // Gets frames border
    memeImageContainer.style.border = borderStyle; // Switches for class border style
  });
});

document.addEventListener('click', (event) => {
  if (event.target.classList.value.includes('presets-meme')) {
    memeImage.src = event.target.src;
  }
});
