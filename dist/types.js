var age = true; // INFERENCIA DE DATOS JAVASCRIPT SABE QUE TIPO DE DATOS ESTA ALMACENANDO
var age2 = 20; // estoy definiendo a la variable como numbre, si pongo otro tipo de datos TS se va a quejar.
// TIPOS PRINCIPALES DE DATOS.
var str = "STRING";
var num = 20;
var bool = true;
var Obj = {};
var arr = ["array", "string"];
var arrobj = [{}, {}];
//arrobj. //tenemos autocompletado
var anys = [];
anys = 20;
anys = "Hola";
//any podria ser cualquier tipo de datos.. se recomienda evitar el uso de ANY..
// TIPOS PRINCIPALES BASICOS II
function saludar() {
    console.log("Hola");
} // VOID significa que no retorna nada.. 
var unk = true;
unk = 2;
unk = "Hola"; // TIPO DE DATO UNKNOWN es parecido al ANY pero el tipo de dato es desconocido, no deja completar con metodos
//porque no sabe que tipo de datos es. es menos poderoso porque no deja hacer lo que uno quiera.
var nul = null; // esta definido es NULO
var undef = undefined; // aun no se a definido los dos representan datos vacios
