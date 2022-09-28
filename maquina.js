let productos = {};
productos = { opcao: 1, name : "Doritos", quantity : 2, price: 1.90 },
            { opcao: 2, name : "Ucal", quantity : 3 , price : 1.20 },
            { opcao: 3, name : "Cocacola", quantity : 4 , price : 1.00},
            { opcao: 4, name : "Twinx", quantity: 5, price : 0.80 };


console.table(productos);

console.info(productos.opcao);

console.log(productos.name);



for (let i in Object.values(productos.name)) {
  console.info("la clave es " + i);
};



console.log(Object.values(productos));














//paqueteria para leer consola (Detiene los procesos del programa)
/*const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});


readline.question("Seleccione una opcion: ", (selecao) => {
  console.log(productos[selecao]);
  readline.close();
});


var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});

*/