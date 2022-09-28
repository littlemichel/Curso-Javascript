let productos = {};

productos = { name : "Doritos", quantity : 2, price: 1.90 },
            { name : "Ucal", quantity : 3 , price : 1.20 },
            { name : "Cocacola", quantity : 4 , price : 1.00},
            { name : "Twinx", quantity: 5, price : 0.80 };


//paqueteria para leer consola (Detiene los procesos del programa)
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});


readline.question("Seleccione ")



var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});