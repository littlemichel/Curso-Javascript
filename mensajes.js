require('colors');

function mostrarMenu() {

    console.clear();
    console.log('----------------------------------'.green);
    console.log('      Selecione una opción'.green);
    console.log('----------------------------------\n'.green);

    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tareas Completas`);
    console.log(`${'4.'.green} Listar Tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir \n`);

    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione una opción: ', (opt) => {
        console.log({ opt });
        readline.close();
    });

}


module.exports = {
    mostrarMenu
}
