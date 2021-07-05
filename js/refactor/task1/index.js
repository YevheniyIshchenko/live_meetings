// const withdraw = (clients, balances, client, amount) => {
//   //put your code here
//   let clientBalances = balances[clients.indexOf(client)];
//   if (amount <= clientBalances) {
//     clientBalances -= amount;
//     balances[clients.indexOf(client)] = clientBalances;
//     return clientBalances;
//   } else {
//     return -1;
//   }
// };

// option 1
// after refactoring
const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (clientBalance < amount) {
    return -1;
  }
  balances[index] -= amount;
  return balances[index];
};

//option 2
// very bad
// const withdraw = (clients, balances, client, amount) => {
//   let rest = 0;

//   // dont use
//   clients.forEach((name, index) => {
//     //very bad
//     if (name === client) {
//       rest = balances[index] - amount;
//     }
//   });
//   if (rest < 0) {
//     return -1;
//   }
//   return rest;
// };

// option 2

//example 1:

const bal = [1400, 87, -6];

//input
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(bal);

//output
//37
//и массив balances должен быть [1400, 37, -6]

//example 2:

//input
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

//output
//-1
//и массив balances должен быть [1400, 87, -6]
