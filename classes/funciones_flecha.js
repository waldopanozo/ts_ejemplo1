"use strict";
let suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 5));
/*
convertimos la funciona normal en una funcion flecha
*/
let sumaFlecha = (a, b) => a + b;
console.log(sumaFlecha(9, 23));
var obtenerNombre = function () {
    return "Waldo Panozo sin flecha";
};
console.log(obtenerNombre());
let obtenerNombreFlecha = () => "Waldo Panozo con flecha";
console.log(obtenerNombreFlecha());
