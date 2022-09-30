require('colors');

const { mostrarMenu } = require('./Helpers/mensajes');

console.clear();

const main = async() => {
    console.log('Hola Mundo');
    mostrarMenu();
}

main();