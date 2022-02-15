function Saludar(target:Function):void{
    target.prototype.saludos = function():void{
        console.log("Hey estamos con decoradores");
    }
}

@Saludar
class Saludo{
    constructor(){
        
    }
}

let saludo1 =  new Saludo();
saludo1.saludos();