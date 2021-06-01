const mapArrayElements = (arr, callback) => {
  // put you code here
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    const callbackRes = callback(arr[index], index, arr);
    res.push(callbackRes);
  }
  return res;
};

function call(el) {
  return el + 5;
}

//test

let arr = [0, 2, 3, 34, 676, 35, 765, 345];

console.log(mapArrayElements(arr, call));
console.log(arr);
