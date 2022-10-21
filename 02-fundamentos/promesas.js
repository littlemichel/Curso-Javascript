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
        salario: 500
    },
    {
        id:2,
        salario:1000
    }
];
//Funcion para obtener el empleado, verificar existencia del empleado y retornar empleado o error
const getEmpleado = (id, callback ) => {
    const empleado = empleados.find( e => e.id === id)
    if (empleado){
        callback (null, empleado);
    } else {
        callback (`El empleado con id ${ id } no existe`);
    };
};
//Funcion para obtener el salario, verificar existencia del salario y retornar salario o error
const getSalario = ( id, callback ) => {
    const salario = salarios.find( e => e.id === id)?.salario;
    if ( salario ) {
        callback(null, salario);
    } else {
        callback(`Salario con id ${ id } no existe`);
    }
};


get




