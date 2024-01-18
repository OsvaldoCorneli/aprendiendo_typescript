let age = true; // INFERENCIA DE DATOS JAVASCRIPT SABE QUE TIPO DE DATOS ESTA ALMACENANDO

let age2 : number = 20; // estoy definiendo a la variable como numbre, si pongo otro tipo de datos TS se va a quejar.

// TIPOS PRINCIPALES DE DATOS.

let str: string = "STRING";
let num: number = 20;
let bool: boolean = true;
let Obj: Object = {};

let arr: string[] = ["array","string"];

let arrobj: Object[] = [{},{}];

//arrobj. //tenemos autocompletado

let anys: any = []

anys = 20
anys = "Hola"

//any podria ser cualquier tipo de datos.. se recomienda evitar el uso de ANY..


// TIPOS PRINCIPALES BASICOS II

function saludar(): void{
    console.log("Hola");
}  // VOID significa que no retorna nada.. 
 
let unk : unknown = true;
unk = 2;
unk = "Hola"   // TIPO DE DATO UNKNOWN es parecido al ANY pero el tipo de dato es desconocido, no deja completar con metodos
//porque no sabe que tipo de datos es. es menos poderoso porque no deja hacer lo que uno quiera.

let nul = null; // esta definido es NULO
let undef = undefined // aun no se a definido los dos representan datos vacios


//TS ES PARA QUE COMO DESARROLLADORES PODAMOS ESCRIBIR UN CODIGO MAS CONTROLADO, pero todo se va a pasar
//a JS plano. 





