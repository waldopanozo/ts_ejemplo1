let suma = function(a:number, b:number){
    return a+b;
}

console.log(suma(5,5));

/*
convertimos la funciona normal en una funcion flecha
*/

let sumaFlecha = (a:number, b:number) => a + b;

console.log(sumaFlecha(9,23));

var obtenerNombre = function(){
    return "Waldo Panozo sin flecha";
}

console.log(obtenerNombre());

let obtenerNombreFlecha = () => "Waldo Panozo con flecha";

console.log(obtenerNombreFlecha());