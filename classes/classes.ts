class Persona{
    private nombre;
    constructor(nombre:string){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre:string){
        this.nombre = nombre;
    }
    static pruebaEstaitico():number{
        return 34;
    };
}

let persona = new Persona("Waldo");
console.log(persona.getNombre());
console.log(Persona.pruebaEstaitico());