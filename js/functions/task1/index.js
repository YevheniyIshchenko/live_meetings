'use strict';

function getSenseOfLife() {
  return 42;
}

function getSquared(num) {
  return num * num;
}

// long option
const result = getSquared(4);
console.log(result);

// short option
console.log(getSquared(5));

//===================================

function greeting(age) {
  console.log('I am ' + age + ' yers old');
}

greeting(25);

const greetingResult = greeting(100);
console.log(greetingResult);

greeting();

let hello;
console.log(hello);

//==================================

const mult = (num1, num2) => {
  return num1 * num2;
};

const mult2 = (num1, num2) => num1 * num2;

//====================================

const greetingExpression = function (age) {
  console.log('I am ' + age + ' yers old');
};

greetingExpression(50);

//=======================================

const getSquared2 = (num = 0) => num * num;
