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