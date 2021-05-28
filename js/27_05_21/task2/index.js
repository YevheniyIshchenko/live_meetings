const students = ['Roman', 'Alex', 'Yulia', 'Olga', 'Vlad'];

//input:callback, object(optional)
//output: new aray

//callback
//input: element, index(optional), array(optional)
//output: new element

// function mapCallback(el) {
//    return `Hello, ${el}`;
// }

// const greeting = students.map(mapCallback);
// console.log(greeting);

// const greeting = students.map((el) => `Hello, ${el}`);
// console.log(greeting);

// const greeting = students
//   .filter((el) => {
//     if (el === 'Roman') {
//        return false;
//     }
//     return true;
//   })
//   .map((el) => {
//     return `Hello, ${el}`;
//   });
// console.log(greeting);

const greeting = students
  .filter((el) => el !== 'Roman')
  .map((el) => {
    return `Hello, ${el}`;
  });
console.log(greeting);


//========================================

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

//input:callback, initial acum value(number)(optional) 
//output: number

//Callback
//input: accumulator, element, index(optional), array(optional)
//output: number

// function reduceCallback(acc, element, index, array) {
//     console.log('STEP #' + index);
//     console.log('element #' + element);
//     console.log('acc #' + acc);
//     if (element > 100) {
//         acc += element;
//     }
//     return acc;
// }

// const transactionsSum = transactions.reduce(reduceCallback, 0);
// console.log(transactionsSum);

const bigTransactions = transactions.reduce((acc, element) => {
  if (element > 100) {
    acc.push(element);
  }
  return acc;
}, []);
console.log(transactions);