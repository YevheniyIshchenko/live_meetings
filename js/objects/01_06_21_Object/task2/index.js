// input: array, array
// output: object

// 1. Learn requirement
// 2. Create step by step algo (& input/output for functions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

//algo
//1. create new object
//2. iterate arrays & add key - value to the object

// function buildObject(keysList, valuesList) {
//   const obj = {};

//   for (let index = 0; index < keysList.length; index += 1) {
//     const key = keysList[index];
//     const value = valuesList[index];

//     console.log(`key is ${key}`);
//     console.log(`value is ${value}`);
//     Object.assign(obj, { [key]: value });
//   }
//   return obj;
// }

// option 2
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     console.log(`Step ${index}`);
//     console.log('acc is', acc);
//     const value = valuesList[index];
//     return Object.assign(acc, { [key]: value });
//   }, {});
// }

//option 3
// function buildObject(keysList, valuesList) {
//   return keysList.reduce(
//     (obj, key, index) => ({ ...obj, [key]: valuesList[index] }),
//     {}
//   );
// }

// option 4

function buildObject(keysList, valuesList) {
    return keysList.reduce(
      (obj, key, index) => ({ ...obj, [key]: valuesList[index] }),
      {}
    );
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);
console.log(result);


const someObj = { name: 'Bob', address: 'Ukraine', age: 56}

// keys
// input: object
// output: array of strings
// Object.keys();


// value
// input: object
// output: array 
// Object.values();

// entries
// input: object
// output: array of [key, value]