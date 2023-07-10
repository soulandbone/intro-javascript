//console.log('whatever');

const personajes = ['Goku', 'Vegeta', 'Trunks'];

//const [,,p2] = personajes;

// const retornaArreglo = ()=>{
//     return ['ABC', 123];
// }

// const [letras,numeros] = retornaArreglo();
// console.log(letras);

//Tarea, 
//1.el primer valor del arr se llamara nombre
//2. se llamara setNombre

const usarState = (valor) => {
     return [valor, ()=>{console.log('Hola Mundo')}];
}

const arr = usarState('nombre');

const [nombre, setearNombre] = arr;

console.log(nombre);
setearNombre();

//setearNombre();

