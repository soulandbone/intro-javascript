console.log('whatever');

const saludar = function (nombre){
    return `Hola ${nombre}`;
}

const getUsuarioActivo = (nombre)=> ({
    uid: 'ABC567',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Gustavo');
console.log(usuarioActivo);