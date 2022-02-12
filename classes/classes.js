"use strict";
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    static pruebaEstaitico() {
        return 34;
    }
    ;
}
let persona = new Persona("Waldo");
console.log(persona.getNombre());
console.log(Persona.pruebaEstaitico());
