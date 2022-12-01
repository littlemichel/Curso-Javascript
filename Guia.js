//          Variables

//Variables de constantes não podem ser consideraveis
const numero1 = 1
//Variables de let podem ser modificadas
let e = 0

//Inicio de varias variaveis
let a = 10,
    b = 20,
    c = "Hola ",
    d = "Spiderman",
    x = a + b;

//Suma do valor das variaveis
const saludo = c + d


//            Lista de variveis
const heroes = ['Deadpool', 'Superman','Batman'];


//Lista com objetos que tem varios valores
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


//      Console logs - Imprimir no Terminal





//              Contruccion de Funciones
//Funcion antigua (solo utilizar cuando sea estrictamente nesecario)
function sumar1 (a,b){
    return a + b;
};

//Funcion larga
const sumar2 = (a, b) => {
    return a + b;
};

const sumar = (a, b) => a + b;
const saludar = ( ) => 'Hola Mundo';








//               For
// imprimir la tabla del 5
//i++ va sumando un numero al valor
// Esta funciona tiene dentro la misma contruccion de variable

for (let i = 0; i <= 10; i++){
    console.log(`5 x ${i} = ${i * 5}`)
};


