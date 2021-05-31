//input:num, num, ...numN
//output: number

function multiply(...args) {
  //preudo array
  // console.log(arguments);
  // for (let el of arguments) {
  //   console.log(el);
  // }
  const result = args.reduce((acc, el) => acc * el);
  console.log(args);
  return result;
}

console.log(multiply(2, 5, 10));

// =================

const array = [1, 4, 5, 6];
console.log(...array);

const arrayCopy = [...array];
console.log(arrayCopy);

//=============================

const arr = [4, 2, 3, 11, -22, -10];

//input: callback(optional)
//output: array

//callback
//input:element1, element2
//output: number

const sortRes = [...arr].sort((el1, el2) => {
  //el1 > el2
  //el1 === el2
  //el1 < el2
  return el1 - el2;
});

console.log(arr);
console.log(sortRes);


