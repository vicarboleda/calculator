const screen = document.getElementById('screen');

export function formatResult(number) {
  return Number(number.toPrecision(12));  
};

export function showResult(value) {
  screen.textContent = value;
};

export function showError(message) {
  screen.textContent = message;
};