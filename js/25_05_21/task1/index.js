function sum(from, to, printer) {
    console.log(from);
    console.log(to);
    console.log(printer);
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
    }
     printer(sum);
}

function printResult(res) {
  console.log('Result is here: ' + res);
}

// function sentEmail(res) {
//   // ......
//   // ......
//   // ......
//   // ......
//   console.log('Result is here: ' + res);
// }


//test printResult

const number = 444;
printResult(number);


//test
const a = 5;
const b = 15;
const result = sum(5, 15, printResult);
console.log(result);
