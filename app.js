import { add, sub, mul, divd } from './calculations.js';

//ADD
const addInput1 = document.getElementById('add-num1');
const addInput2 = document.getElementById('add-num2');
const addAnswerSpan = document.getElementById('add-answer');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', ()=>{
    //console.log(addInput1.value);
    const add1 = Number(addInput1.value);
    const add2 = Number(addInput2.value);
    const answer = add(add1, add2);
    addAnswerSpan.textContent = answer;
    console.log(answer);
});

//SUB
const subInput1 = document.getElementById('sub-num1');
const subInput2 = document.getElementById('sub-num2');
const subAnswerSpan = document.getElementById('sub-answer');
const subBtn = document.getElementById('sub-btn');

subBtn.addEventListener('click', ()=>{
    //console.log(subInput1.value);
    const sub1 = Number(subInput1.value);
    const sub2 = Number(subInput2.value);
    const answer = sub(sub1, sub2);
    subAnswerSpan.textContent = answer;
    console.log(answer);
});

//MUL
const mulInput1 = document.getElementById('mul-num1');
const mulInput2 = document.getElementById('mul-num2');
const mulAnswerSpan = document.getElementById('mul-answer');
const mulBtn = document.getElementById('mul-btn');

mulBtn.addEventListener('click', ()=>{
    //console.log(subInput1.value);
    const mul1 = Number(mulInput1.value);
    const mul2 = Number(mulInput2.value);
    const answer = mul(mul1, mul2);
    mulAnswerSpan.textContent = answer;
    console.log(answer);
});

//DIVD
const divdInput1 = document.getElementById('divd-num1');
const divdInput2 = document.getElementById('divd-num2');
const divdAnswerSpan = document.getElementById('divd-answer');
const divdBtn = document.getElementById('divd-btn');

divdBtn.addEventListener('click', ()=>{
    //console.log(subInput1.value);
    const divd1 = Number(divdInput1.value);
    const divd2 = Number(divdInput2.value);
    const answer = divd(divd1, divd2);
    divdAnswerSpan.textContent = answer;
    console.log(answer);
});
