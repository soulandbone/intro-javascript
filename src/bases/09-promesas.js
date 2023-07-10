import { getHeroeById } from "./bases/08-imp-ex";

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () => {
//     const p1 = getHeroeById(2);
//     //resolve (p1);
//     reject('No se pudo encontrar al heroe');
//     } ,2000 )
// });

// promesa.then( (heroe) => {
//     console.log(heroe)
// }).catch(err => console.warn (err));



const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () => {
        const p1 = getHeroeById(id);
        if(p1 ){
            resolve (p1);
        
        }else{
            reject('The heroe could not be found');
        }
        
 
      
     
        } ,2000 )
    });

 
    
  
}

//getHeroeByIdAsync(11).then(heroe=> console.log(heroe)).catch(error => console.warn(error));
getHeroeByIdAsync(1).then(console.log).catch( console.warn);


