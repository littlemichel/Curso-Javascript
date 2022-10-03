//Funcion normal
// setTimeout( function(){
//     console.log('Hola mundo');
// }, 1000 );

//Funcion flecha
// setTimeout( () => {
//     console.log('Hola mundo');
// }, 1000 );

const getUsuarioByID = ( id ) => {
    const usuario = {
        id, //este id utilizara el parametro de la funcion
        nombre: 'Fernando'
    }

    setTimeout( () => {
        console.log(usuario)
    }, 1500)
}

getUsuarioByID( 10, () => {
    console.log('Hola mundo')
});