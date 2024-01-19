//INTERFACES
var _a;
var person = {
    name: 'Kevin',
    code: '01',
    charge: 1,
    description: "Hola",
    sayHello: function () { return "Hola"; } // una funcion que retorna un string, podria hacer mas cosas pero retorna un string
};
//person. cuando pongo punto me muestran metodos del Object
// let person = { Una solucion rapida es borrar el tipo de dato
var secondPerson = {
    name: "",
    code: "",
    charge: 0,
    description: "", //SI pongo null se va a quejar al igual que si no le pongo ningun valor
    sayHello: function () { return "Hola"; }
};
var thirdPerson = {
    name: "",
    code: "",
    charge: 0, //ya no necesito description porque es opcional.. por el operador ?
    sayHello: function () { return "Hola"; }
};
(_a = thirdPerson.description) === null || _a === void 0 ? void 0 : _a.toLowerCase(); // con ? primero verifica si existe y si no no ejecuta el metodo
