//Funcion normal
// setTimeout( function(){
//     console.log('Hola mundo');
// }, 1000 );

//Funcion flecha
// setTimeout( () => {
//     console.log('Hola mundo');
// }, 1000 );

const getUsuarioByID = ( id, callback ) => {
    const usuario = {
        id, //este id utilizara el parametro de la funcion
        nombre: 'Fernando'
    }

    setTimeout( () => {
        callback(usuario)
    }, 1500 )
}

getUsuarioByID( 10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre);
});


