// const array = [1, -2, 3, 4, 5];
// function positiveSum(arr) {
//   return arr.reduce((acc, el) => {
//     if (el > 0) {
//       acc += el;
//     }
//     return acc;
//   }, 0);
// }

// function positiveSum(arr) {
//   return arr.reduce((acc, el) => (el > 0 ? acc + el : acc), 0);
// }

// console.log(positiveSum(array));

// const obj = { Java: 10, Ruby: 80, Python: 65 };

// Algo
// 1. use arr.filter for  Object // Object.value > 60

// function myLanguages(results) {
//   const arr = Object.keys(results).filter((el) => results[el] > 60);
//   return arr;
// }

// console.log(myLanguages(obj));

// 1. create result arr
// 2. iterate numbers from 2 to integer/2
// 3. if integer % number === 0 => push in result arr
// 4. if result.lenght ? result : `${integer} is prime`

// function divisors(integer) {
//   const arr = [];
//   for (let i = 2; i <= integer / 2; i += 1) {
//     if (integer % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr.length === 0 ? `${integer} is prime` : arr;
// }

function divisors(integer) {
  const result = [];
  for (let index = 2; index <= integer / 2; index += 1) {
    if (integer % index === 0) {
      result.push(index);
    }
  }
  return !result.length ? `${integer} is prime` : result;
}

const test = divisors(12);
console.log(test);
