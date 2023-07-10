import {heroes, owners} from '../data/heroes.js';

//console.log(heroes);
//console.log(owners);

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
;

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);


//console.log(getHeroeById(4));
//console.log(getHeroesByOwner('DC'));


export{getHeroeById};