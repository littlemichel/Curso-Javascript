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



const Salarios = [
    {
        id:1,
        salario: 500
    },
    {
        id:2,
        salario:1000
    },
    {
        id:3,
        salario:1500
    }
];

const getSalario = ( id ) => {
    const salario = salarios.find( (e) => { 
        return e.id === id
    })
};























const getEmpleado = (id) => {
    const empleado = empleados.find( (e) =>{
        return e.id === id
    })
}