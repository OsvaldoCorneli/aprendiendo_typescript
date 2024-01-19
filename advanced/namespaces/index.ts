// asi usamos uso de namesSpaces.ts
//Uso de Namespace en Otro Archivo (index.ts):

//Utilizas /// <reference path="namespaces.ts" /> 
//para referenciar el archivo namespaces.ts desde index.ts. 
//Esto permite que el compilador de TypeScript conozca las definiciones de tipo del archivo
// referenciado.

/// <reference path="namespaces.ts" />

const myOtherUser2 = new DatabaseEntity.User("desde otro archivo") //Ahora si porte estoy exportando la clase User con export

console.log(myOtherUser2) 

//tenemos que crear otro script que ejecute los dos archivos
// en este caso "start:namespaces": "tsc advanced/namespaces/namespaces.ts advanced/namespaces/index.ts --outFile dist/namespaces.js && node dist/namespaces.js",

// Has creado un script npm (start:namespaces) 
// que compila tanto namespaces.ts como index.ts y 
// luego ejecuta el archivo resultante (dist/namespaces.js). 
// Esto es un enfoque común para trabajar con múltiples archivos en TypeScript.

// LOS NAMESPACES SON ALGO ANTICUADO AHORA ESTNA LOS MODULOS
