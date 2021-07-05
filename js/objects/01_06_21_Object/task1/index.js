const obj = {};
obj.name = 'Hello';
console.log(obj);

//========================

const newObj = new Object();
newObj.id = 1001;

console.log(newObj);

//===================
//1. add properties, build object
//2. filter object

//input: obj, key(number, string, etc), value(number, string, etc)
//output: obj
function addPropertyV1(obj, key, value) {
  // put your code here
  obj[key] = value;
  return obj;
}

//test data
const myObj = { address: 'Kyiv', count: 111 };
const key = 'personName';
const value = 'Denis';
addPropertyV1(myObj, key, value);
console.log(myObj);

const res1 = addPropertyV1(myObj, key, value);
console.log(res1);
console.log(myObj);

const res2 = addPropertyV1(
  { address: 'Kyiv', count: 111 },
  'personName',
  'Tom'
);
console.log(res2);

//==================

function addPropertyV2(obj, key, value) {
  //input: obj, ... sources
  //output: obj
  const suorceObj = { [key]: value };
  return Object.assign(obj, suorceObj);
}

const user2 = { name: 'Nastya', surname: 'Petrova' };
addPropertyV2(user2, 'userId', 5236);
console.log(user2);

//==========================
function addPropertyV3(obj, key, value) {
  //input: obj, ... sources
  //output: obj
  const suorceObj = { [key]: value };
  return Object.assign({}, obj, suorceObj);
}

const user3 = { name: 'Nastya', surname: 'Petrova', address: 'Kyiv' };
console.log(addPropertyV3(user3, 'userId', 5236));
console.log(user3);

// test data
const user4 = { name: 'Test', surname: 'Petrova', address: 'Kyiv' };
console.log(addPropertyV3(user4, 'address', 'Lviv'));
console.log(user4);

console.log('========================');
//V4
function addPropertyV4(obj, key, value) {
  const newObj = { ...obj, [key]: value };
  return newObj;
}

// test data
const user5 = { name: 'Boba', surname: 'Petrova', address: 'Kyiv' };
console.log(addPropertyV4(user5, 'address', 'Lviv'));
console.log(user5);
