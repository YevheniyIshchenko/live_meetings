/* eslint-disable */


/*
globalLexEnv = {
   enviromentRecord:{
    message:'Test',
    weight: 50,
    ....
   },
   outerLexEnv: null


 }

 forLexEnv ={
  enviromentRecord:{
    index: 0,
    message : 'hello'
  },
  outerLexEnv: globalLexEnv
 }

createmessagerLexEnv = {
   enviromentRecord:{
    message:'Just learn it',
    setMessage: func
    ....
   },
   outerLexEnv: globalLexEnv
 }

 runLexEnv ={
  enviromentRecord:{
    ....
  }, 
  outerLexEnv: globalLexEnv
 }

*/

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

for (let index = 0; index < 5; index += 1){
  let message = 'hello';
  console.log(message);
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
const messanger2 = createMessenger();
messanger1.setSender('test')
messanger1.sendMessage('Dima');
messanger2.sendMessage('Andrey');
run();
