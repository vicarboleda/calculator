import {state} from './state.js';
import { formatResult, showError, showExpression, showResult } from './display.js';
import { operators } from './operations.js';

export function resetOperation(){
  state.previousValue = null;
  state.operator = null;
  state.operatorSymbol = '';
}

export function chooseOperator(operator, symbol) {  
  state.previousValue = state.currentValue;
  state.currentValue = '0';
  state.operator = operator;
  state.operatorSymbol = symbol;
  showExpression(`${state.previousValue} ${state.operatorSymbol}`);
}

export function equalsOperation() {
  if(state.previousValue === null || state.operator === null) return;

  const a = Number(state.previousValue);
  const b = Number(state.currentValue);
  const operatorFunction = operators[state.operator];
  const expression = `${state.previousValue} ${state.operatorSymbol} ${state.currentValue} =`;

  try {
    const result = operatorFunction(a, b);
    state.currentValue = String(formatResult(result));
    showExpression(expression);
    showResult(state.currentValue);
  } catch (error) {
    state.currentValue = '0';
    showExpression('');
    showError(error.message);
  }
    resetOperation();
}

export function clearAll(){
  state.currentValue = '0';
  resetOperation();
  showExpression('');
  showResult(state.currentValue);
}

export function clearEntry(){
  state.currentValue = '0';
  showResult(state.currentValue);  
}

export function deleteLastDigit(){
  const isSingleDigit = state.currentValue.length === 1;
  const isSingleNegativeDigit = state.currentValue.length === 2 && state.currentValue.startsWith('-');
  if (isSingleDigit || isSingleNegativeDigit) {
    state.currentValue = '0';
  } else {
    state.currentValue = state.currentValue.slice(0, -1);
  }  
  showResult(state.currentValue);
}