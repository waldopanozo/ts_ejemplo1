interface Usuario{
    nombre_de_usuario:string;
    password:string;
    confirmar?:string;
}

let usuario1:Usuario = {nombre_de_usuario:"waldo",password:"clave"};

console.log(usuario1);
console.log(usuario1.nombre_de_usuario);

interface Abordar{
    abordarTransporte():void;
}

let avion:Abordar = {
    abordarTransporte: function(){
        console.log("Abordando");
    }
}

avion.abordarTransporte();