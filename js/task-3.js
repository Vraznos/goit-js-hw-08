const input = document.getElementById(`name-input`);
const output = document.getElementById(`name-output`);
input.addEventListener(`input`, ev => {
  const inputResult = ev.target.value.trim();
  output.textContent = inputResult || `Anonymous`;
});
