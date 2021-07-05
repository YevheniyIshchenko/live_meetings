'use strict';
function printMessage(country, city) {
  console.log(this);
  console.log(
    `Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`
  );
}
const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};

// input: context, arguments
// output: function

// bind option 1
// const printMessageBinded = printMessage.bind(user);
// printMessage('Ukraine', 'London');

// bind option 2
// const printMessageBinded = printMessage.bind(user, 'Ukraine', 'London');
// printMessageBinded();

// bind option 3
// const printMessageBinded = printMessage.bind(user, 'Ukraine');
// printMessageBinded('London');

// input: -
// output: function
function myBind(func, context, ...args) {
  console.log(args);

  // input:  arg1, .... , argN
  // output: anything
  return function (...funcArgs) {
    console.log('func is called');

    // input: context, arg1, .... , argN
    // output: res of function
    return func.call(context, ...args, ...funcArgs);
  };
  // return  func.call(context, ...args);
}

// test data
function sum(c, d) {
  console.log('context is: ',  this);
  console.log('arguments is: ',  arguments);
  return this.a + this.b + c + d;
}

const context = {
  a: 100,
  b: 40,
};


// sum();

// 1
const sumBinded1 = myBind(sum, context, 10, 30);
console.dir(sumBinded1);
console.dir(sumBinded1());

// 2
const sumBinded2 = myBind(sum, context, 10);
console.dir(sumBinded2);
console.dir(sumBinded2(30));

// 3
const sumBinded3 = myBind(sum, context);
console.dir(sumBinded3);
console.dir(sumBinded3(10, 30));