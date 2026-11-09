const screen = document.getElementById('screen');
const expression = document.getElementById('expression');

export function formatResult(number) {
  return Number(number.toPrecision(12));
};

export function showResult(value) {
  screen.textContent = value;
};

export function showError(message) {
  screen.textContent = message;
};

export function showExpression(text) {
  expression.textContent = text;
}