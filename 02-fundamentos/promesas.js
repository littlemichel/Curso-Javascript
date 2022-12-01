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
        //Las promesas sirven para ordenar las funciones
        const promesa = new Promise((resolve, reject) => {
        if (empleado) {
            resolve(empleado);
        } else {
            reject()
        }});
} 


getEmpleado(id)
    .then ( empleado => console.log(empleado));




