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
//TS ES PARA QUE COMO DESARROLLADORES PODAMOS ESCRIBIR UN CODIGO MAS CONTROLADO, pero todo se va a pasar
//a JS plano. 
//COMBINACION DE TIPOS
var combinacion = 2; // esta variable puede ser un string o nula;
combinacion === null || combinacion === void 0 ? void 0 : combinacion.toString(); // El operador ? pregunta si no es null antes de hacer el metodo;
var combinacion1;
var combinacion2;
var combinacion3;
// CLASE 4 TYPE ASSERTION
var message = "";
message.concat(); //CASTEARLAS Y CONVERTILAR EN TIPO
var message1 = 2;
message1.toFixed(); //AHORA COMO NUMERO
var messageUppercase = message; //OTRA SINTAXIS 
messageUppercase.toUpperCase();
