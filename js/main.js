import {operators} from './operations.js';
import {state} from './state.js';
import { formatResult, showResult, showError, showExpression} from './display.js';

const keypad = document.querySelector('.keypad');

function resetOperation() {
  state.previousValue = null;
  state.operator = null;
  state.operatorSymbol = '';
}

keypad.addEventListener('click', (event)=>{
  const data = event.target.dataset;

  if(data.number !== undefined){
    const digit = data.number;

    if(state.currentValue === '0'){
      state.currentValue = digit;
    } else{
      state.currentValue += digit;
    }
    showResult(state.currentValue);

  } else if(data.operator !== undefined){
    
    state.previousValue = state.currentValue;
    state.currentValue = '0';
    state.operator = data.operator;
    state.operatorSymbol = event.target.textContent.trim();
    showExpression(`${state.previousValue} ${state.operatorSymbol}`);
  } 
  else if(data.action === 'equals'){
      if(state.previousValue === null || state.currentValue === null) return;

      const a = Number(state.previousValue);
      const b = Number(state.currentValue);
      const operatorFunction = operators[state.operator];
      const expression = `${state.previousValue} ${state.operatorSymbol} ${state.currentValue} =`;

      try{
        const result = operatorFunction(a , b);
        state.currentValue = String(formatResult(result));
        showExpression(expression);
        showResult(state.currentValue);
      } catch(error){
        state.currentValue = '0';
        showExpression('');
        showError(error.message);
      }
      resetOperation();
    }
    
})