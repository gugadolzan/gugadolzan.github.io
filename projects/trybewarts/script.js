const senha = document.querySelector('#senha');
const loginEmail = document.querySelector('#email');
const botaoHeader = document.querySelector('#btnheader');
function verificaLogin() {
  const novaSenha = '123456';
  const novaEmail = 'tryber@teste.com';
  if (senha.value !== novaSenha || loginEmail.value !== novaEmail) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
botaoHeader.addEventListener('click', verificaLogin);

const inputRate = document.getElementById('input-rate');
function inputRateOptions() {
  for (let i = 1; i <= 10; i += 1) {
    const rateOption = document.createElement('label');
    rateOption.innerHTML = `<input type="radio" name="rate" id="${i}" value="${i}" checked />${i}`;
    inputRate.appendChild(rateOption);
  }
  const inputRateLabels = document.querySelectorAll('#input-rate label input');
  for (let i = 0; i < inputRateLabels.length; i += 1) {
    inputRateLabels[i].classList.add('form-check-input');
  }
}

const textArea = document.getElementById('textarea');
textArea.addEventListener('keyup', () => {
  document.getElementById('counter').innerHTML = textArea.maxLength - textArea.value.length;
});

const agreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

submitButton.disabled = true;

agreement.addEventListener('change', () => {
  if (agreement.checked === false) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
});

function returnFamilyValue() {
  const families = document.getElementsByName('family');
  for (let i = 0; i < families.length; i += 1) {
    if (families[i].checked) {
      return families[i].value;
    }
  }
}

function returnContentValue() {
  const contents = document.getElementsByName('content');
  let checkedContents = '';
  for (let i = 0; i < contents.length; i += 1) {
    if (contents[i].checked) {
      checkedContents += `${contents[i].value}, `;
    }
  }
  const lastCharacter = checkedContents.length - 2; // -2 to remove the last comma
  return checkedContents.substring(0, lastCharacter);
}

function returnRateValue() {
  const rates = document.getElementsByName('rate');
  for (let i = 0; i < rates.length; i += 1) {
    if (rates[i].checked) {
      return rates[i].value;
    }
  }
}

function formFilledStyle() {
  const form = document.getElementById('evaluation-form');
  form.classList.add('form-filled');
  const outputLabels = document.querySelectorAll('.form-filled p span');
  for (let i = 0; i < outputLabels.length; i += 1) {
    outputLabels[i].classList.add('form-label');
  }
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const form = document.getElementById('evaluation-form');
  const name = document.getElementById('input-name').value;
  const lastname = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = returnFamilyValue();
  const subj = returnContentValue();
  const rate = returnRateValue();
  const txt = document.getElementById('textarea').value;
  form.innerHTML = '';
  form.innerHTML += `<p><span>Nome:</span> ${name} ${lastname}</p>`;
  form.innerHTML += `<p><span>Email:</span> ${email}</p><p><span>Casa:</span> ${house}</p>`;
  form.innerHTML += `<p><span>Família:</span> ${family}</p><p><span>Matérias:</span> ${subj}</p>`;
  form.innerHTML += `<p><span>Avaliação:</span> ${rate}</p><p><span>Observações:</span> ${txt}</p>`;
  formFilledStyle();
  alert('Obrigado pela avaliação!');
});

window.onload = inputRateOptions;
