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



const salarios = [
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

9
const getEmpleado = (id) => {
    const empleado = empleados.find( e => e.id === id)
    return empleado;
};


const getSalario = ( id, callback ) => {
    const salario = salarios.find( e => e.id === id)
    
    if ( salario ) {
        callback(salario);
    } else {
        callback(`Salario con id ${ id } no existe`);
    }    
};

getSalario (10, (salario) => {
    console.log(salario);
});

//console.log(getSalario(10, salario));