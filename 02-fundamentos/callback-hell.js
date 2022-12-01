// Variable asociada a una lista com objetos
const empleados = [
    {
        id: 1,
        nombre: "Pedro"
    },
    {
        id: 2,
        nombre: "Joaquim"
    },
    {
        id: 3,
        nombre: "El Pepe"
    }
];
// Variable asociada a una lista com objetos
const salarios = [
    {
        id:1,
        quantidade: 500
    },
    {
        id:2,
        quantidade:1000
    }
];
//Funcion para obtener el empleado, verificar existencia del empleado y retornar empleado o error
const getEmpleado = (id, callback ) => {
    const empleado = empleados.find( e => e.id === id);
    if (empleado){
        console.log(empleado);
        callback (null, empleado);
    } else {
        callback (`El empleado con id ${ id } no existe`);
    };
};
//Funcion para obtener el salario, verificar existencia del salario y retornar salario o error
const getSalario = ( id, callback ) => {
    const salario = salarios.find( e => e.id === id);
    if ( salario ) {
        console.log(salario);
        callback(null, salario);
    } else {
        callback(`Salario con id ${ id } no existe`);
    }
};

//const id = 2;
//const id = 3;
const id = 1;
//Funcion para imprimir los resultados de la anterior funcion, sea un error o um resultado
getEmpleado (id,  (err, empleado) => {
    console.log(empleado);
    if (err) {
        console.log('ERRO');
        return console.log(err);
    };
    console.log(id);
    //Funcion para imprimir los resultados de la anterior funcion, sea un error o um resultado
    getSalario (id, (err, salario) => {
        if (err) {
            console.log('ERROR');
            return console.log(err);
        }
        console.log('El empleado', empleado.nombre, 'tiene un salario de:', salario.quantidade);
    });
});

//Tuve aqui um problema anteriormente, pues no me salia el salario, al final descubri que estaba a utilizar el mismo nombre de variable
//tanto en la lista, como en la llamada del getSalario utilizaba la variable salario. Ahora solo quedo esta variable en la llamada de la funcion

