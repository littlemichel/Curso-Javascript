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
const { nombre, apellido, poder } = deadpool;

console.log(nombre, apellido, poder);