import {add, subtract, multiply, divide} from './operations.js';
import {state} from './state.js';
import { formatResult, showResult, showError} from './display.js';

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
  }
})