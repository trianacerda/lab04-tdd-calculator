// import functions
// import Add function
import { add } from './calculations.js';

// reference needed DOM elements
//#add-num1, #add-num2, #add-answer, #add-btn
const addInput1 = document.getElementById('add-num1');
const addInput2 = document.getElementById('add-num2');
const addAnswerSpan = document.getElementById('add-answer');
const addBtn = document.getElementById('add-btn');

// set event listeners 
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)

addBtn.addEventListener('click', ()=>{
  console.log(addInput1.value)
  const add1 = Number(addInput1.value);
  const add2 = Number(addInput2.value);
  const answer = add(add1, add2);
  console.log(answer);
  addAnswerSpan.textcontent = answer;
  });


