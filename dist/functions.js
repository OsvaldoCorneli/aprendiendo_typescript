//LAS FUNCIONES EN TS
var sayHi = function (name) {
    console.log("Hello", name);
};
sayHi("Osvaldo");
function sayGoodBye(name) {
    console.log("adios", name);
}
sayGoodBye("Osvaldo");
function show() {
    console.log("Hola");
}
function show1() {
    console.log("Hola1");
    return 1; // sin esto como en la funcion show() ts se quejaria,
}
var response = show1(); //rensponse deberia valer 1
console.log(response);
function show2(name) {
    name.concat();
    return 4; // sigo retornando un numero porque eso me pide la funcion con ": number"
}
var response1 = {
    id: 1,
    name: "osvaldo",
    charge: "alumno",
    number: 13,
};
function show3(response1) {
    return 2;
}
function show4(_a) {
    var name = _a.name;
    console.log("El nombre es", name);
    return 3;
}
show4(response1);
