const dataCreate = document.querySelector('[data-create]');
dataCreate.addEventListener('click', function () {
  const amount = document.querySelector('input').value;
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  createBoxes(amount);
  document.querySelector('input').value = '';
});

const dataDestroy = document.querySelector('[data-destroy]');
dataDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  let size = 30;
  let boxesHTML = '';
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesHTML += `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10;
  }

  boxesContainer.innerHTML = boxesHTML;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
