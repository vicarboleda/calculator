import {state} from './state.js';
import { chooseOperator, clearAll, clearEntry, deleteLastDigit, equalsOperation } from './actions.js';
import { showResult } from './display.js';

const keypad = document.querySelector('.keypad');

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
    chooseOperator(data.operator, event.target.textContent.trim());
  }
  else if(data.action !== undefined){
    switch(data.action){
      case 'equals':
        equalsOperation();
        break;
      case 'clear':
        clearAll();
        break;
      case 'clear-entry':
        clearEntry();
        break;
      case 'delete':
        deleteLastDigit();
        break;
    }
  }
})