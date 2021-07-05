// 'use strict';

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,

  startTimer() {
    // input: func, number
    // output: number
    // lose context case #2
    this.intervalId = setInterval(() => {
      //   console.log(`CONTEXT of callback IS ${this}`);
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {
    return `${this.minsPassed}:${this.secondsPassed
      .toString()
      .padStart(2, '0')}`;
  },
  stopTimer() {
    // console.log(this);
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

// console.log(timer);

// lose context case #1
// const func = timer.startTimer;
// func();

// console.log(
//   [1, 5, 10, 19].filter(
//     function (el) {
//       console.log(this);
//       return el > 5;
//     }.bind(timer)
//   )
// );
