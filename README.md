# ts_ejemplo1
Empezando con typescript
----

Estoy trabajando con Ubuntu 20.04 entonces esto se hizo en la primera parte.

<code>sudo apt install node-typescript</code>

<h1>Parte 1</h1>

para compilar manualmente un archivo ts a js

<code>
tsc funciones 
</code>

nos referimos al archivo funciones.ts
este compila  a un arhivo js

<code>
tsc -init
</code>

esto inicializa un archivo tsconfig.json este lleva configuracion de la version de es5 por ejemplo.

<code>
tsc -w 
</code>

esto mantiene un watcher para ir compilando en tiempo real

<h1>Parte 2</h1>

Ahora veremos variables en typescript

es:

<code>let nombre:tipo = valor;</code>


y constantes

<code>const NOMBRE:tipo = valor;</code>