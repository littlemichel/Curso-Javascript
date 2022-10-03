const deadpool = {
    nombre: "Wade",
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
/*console.log(deadpool);
console.log(deadpool.getNombre());*/

//  Forma normal de sacar variables
//const nombre = deadpool.nombre
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

//  Desestruturacion
//const { nombre, apellido, poder, edad = 0} = deadpool;
//console.log(nombre, apellido, poder, edad);

//Funcion para cambiar una variable de un mapa e imprimir
function imprimeHeroe({nombre, apellido, poder, edad = 0}) {
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad);

}

//imprimeHeroe(deadpool);

//Lista de Heroes
const heroes = ['Deadpool', 'Superman','Batman'];

//Asignar valores de una lista (Desestruturacion)
//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

const[ , , h3 ] = heroes;

console.log(h3);

