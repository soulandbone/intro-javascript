const arreglo = [1,2,3,4];

let arreglo2 = [...arreglo,5];

let arreglo3 = arreglo2.map(function(x){
    return x*5;
});

console.log(arreglo3);