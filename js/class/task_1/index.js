/* eslint-disable max-classes-per-file, no-console */
class Sportsman {
  constructor(firstName) {
    console.log('before', this);
    this.firstName = firstName;
    console.log('after', this);
  }

  run() {
    console.log(`${this.firstName} is running`);
  }
  // swim() {
  //   console.log(`Hello swim`);
  // }
  // run() {
  //   setTimeout(function (){
  //     console.log(`${this.firstName} is running`);
  //   }, 3000);
  // }
}

class Swimmer extends Sportsman{
  constructor(firstName, swimStyle) {
    super(firstName);
    this.swimStyle = swimStyle;
    // console.log('swimmers this', this)
  }

  swim() {
    console.log(`${this.firstName} is swimming ${this.swimStyle}`)
  }

}

// test data
const obj = {
  firstName: 'Andrey',
};

console.log(obj);

const sportsMan1 = new Sportsman('John');
console.log(sportsMan1);
const sportsMan2 = new Sportsman('Anna');
sportsMan1.run();
sportsMan2.run();

const swimmer1 = new Swimmer('John', 'brasom');
const swimmer2 = new Swimmer('Anna', 'toporikom');

swimmer1.swim();
swimmer2.swim();

swimmer1.run();
swimmer2.run();

console.log(swimmer1);

