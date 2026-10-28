import {describe, test, expect} from 'vitest';
import { add, subtract, multiply, divide } from './operations';

describe('operations',() =>{
  test('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('should subtract two numbers', ()=>{
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(2, 4)).toBe(-2);
  });

  test('should multiply two numbers', ()=>{
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 1)).toBe(-1);
    expect(multiply(0, 2)).toBe(0);
  });

  test('should divide two numbers', () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(0, 5)).toBe(0);
    expect(() => divide(5, 0)).toThrow("No se puede dividir por 0");
  });
});