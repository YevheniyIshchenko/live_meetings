//input: arr, callback
//output: new arr

//callback
//input: element, index(optional), array(optional)
//output: boolean

//algo
//1. create new array
//2.iterate arry, apply callback for each element
//3. if - true, push result to new arr
//4.

const filterArrayElements = (arr, callback) => {
  // put you code here
  const res = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    const callbackRes = callback(arr[index], index, arr);
    if (callbackRes) {
      res.push(el);
    }
  }
  return res;
};

//test

let arr = [0, 2, 3, 34, 676, 35, 765, 345];

(el) => el > 0;

function test(el) {
  return el > 0;
}

console.log(
  filterArrayElements([0, 2, 34, -676, 35, -765, 34], (el) => el > 0)
);

// test 2
function call(el) {
  if (el > 5) {
    return true;
  }
}

console.log(filterArrayElements(arr, call));
