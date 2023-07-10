console.log('whatever');

const persona = {
    nombre: 'Tony',
    edad: 45, 
    clave: 'Iron Man'
};



const retornaPersona = ({nombre})=>((nombre)); 


//console.log(`${nombre2}, edad de ${edad} y clave ${clave}`);

const personaRetornada = retornaPersona(persona);

console.log(personaRetornada);

const usarContext = ({clave, edad}) => {

    return {
        nombreClave: clave,
        anios:edad,
        latlng:{lat: 12.4563, lng: 38.456}
    }
}

const avenger = usarContext(persona);

const {nombreClave, anios, latlng:{lat, lng}} = avenger;





console.log(nombreClave, anios, lat, lng);