# Uso básico de typescript **(TS)**
#### por: Waldo Panozo

## Empezando con typescript
----

Estoy trabajando con Ubuntu 20.04 entonces esto se hizo en la primera parte.

    sudo apt install node-typescript

# Parte 1

para compilar manualmente un archivo ts a js


    tsc funciones 


nos referimos al archivo funciones.ts
este compila  a un arhivo js


    tsc -init


esto inicializa un archivo tsconfig.json este lleva configuracion de la version de es5 por ejemplo.


    tsc -w

esto mantiene un watcher para ir compilando en tiempo real

# Parte 2

## **Ahora veremos variables en typescript**

es:

    let nombre:tipo = valor;


y constantes

    const NOMBRE:tipo = valor;

# Parte 3

## **Clases  y objetos**


como en java pero con lagunas variaciones en cuento a las declaraciones de funciones o metodos

    class static public private etc.

# Parte 4

## **Interfaces**

igualmente es parecido a java

se puede usar una interrogante al lado de una variable para decir que es opcional.


una interfaz es como un contrato que se debe respetar segun los parematros que requiere

tambine se peuden declarar parmetros de tipo void y funciones como en el archivo interfaces.ts

# Parte 5
## **Generics**

se peude trabajr con arreglos y definir parametros para el arreglo como tipos de datos

es muy simple Array<tipo_de_dato>

cunado se declara el tipo de dato no se puede asignar otro tipo de datos dentro del arreglo, y el acceso es similar a java arreglo[indice] 


# Parte 6
## **Manejo de modulos con servidor WebPack**

En este punto se empieza a utilizar export y el import, 

en este caso se crea una clase PersonaModulo en el archivo persona.ts delante del class se pone export class ......

y en el archivo modules.ts se pone import {nombreclase} from 'archivo' entonces se pude recien usar el modulo nuevo

pero para esto se requiere un servidor (webpack) o una tarea de compilacicon entre comillas pero se debe interpretar

en la terminarl

    npm install webpack-cli webpack-dev-server

se puede ver que se crea una carpeta node_modules donde se instalan las dependencias de node

tambien se crea el archivo package.json donde se puede ver los paquetes que se instlaaran o actualizaran

    npm install typescript ts-loader --save-dev

luego se instala typescript y le ts-loader que son necesarios para el uso de typescript a este nivel es necesario solo en el ambiente de desarrollo.

    npm init -y

se usa par ainicializar el uso, se puede ver la actualizacion en el archivo package.json

creamos el archivo en la raiz del proyecto webpack.config.js

    const path = require('path');

    module.exports = {
        entry: path.join(__dirname, '/classes/modules.ts'),
        output: {
            filename: './classes/modules.js',
            path: __dirname
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"]
        },
    };

se deben cambiar configuraciones segun el proyecto
luego se inicia el server

    npm start

con estas configuraciones ya deberia estar corriendo y puedes ver los resultados de los modulos.

# Parte 7
## **Funciones de flecha**

son funciones muy similares a las estandar, solo es una posibilidad de realizar llamdas de este tipo

de hecho se puede reducir mucho la creacion de fuciones ya que si el metodo es de solo una linea no se deben usar llaves etc.

    let sumaFlecha = (a:number, b:number) => a + b;

o de una manera mas larga, pero el resultado es el mismo

    let sumaFlecha = (a:number, b:number) => {
        return a+b;
    }