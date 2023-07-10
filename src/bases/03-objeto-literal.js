const persona = {
    nombre : 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 49213812832,
        lat: 14.3232,
        lng: 34.92452
    }
};

const persona2 = {...persona};
persona2.nombre= 'Peter';


console.log(persona2);