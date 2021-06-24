// IMPORT MODULES under test here:
import { add, sub, mul, divd } from '../calculations.js';

const test = QUnit.test;

// ADD
test('test adding', (expect) => {
  
    const expected = 5;
    
    const actual = add(2, 3); 

    expect.equal(actual, expected);
});

// SUB
test('test subtracting', (expect) => {
   
    const expected = 5;
    
    const actual = sub(8, 3);

    expect.equal(actual, expected);
});

// MUL
test('test multiplying', (expect) => {
   
    const expected = 25;
    
    const actual = mul(5, 5);

    expect.equal(actual, expected);
});

// DIVD
test('test dividing', (expect) => {
   
    const expected = 5;
    
    const actual = divd(20, 4);

    expect.equal(actual, expected);
});