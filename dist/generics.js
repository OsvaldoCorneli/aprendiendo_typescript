var mensaje = "HOLA";
var age2 = 12;
var myValue = {
    field: 2
};
var myValue1 = {
    field: ""
};
// los tipos de datos genericos se pueden aplicar a interfaces, funciones, a clases practicamente a todo
//CLASES
var Myclass = /** @class */ (function () {
    function Myclass(field) {
        this.field = field;
    }
    return Myclass;
}());
var myField = new Myclass(2); //aqui estoy pasandole como tipo de dato un nomber
var myField1 = new Myclass("ESTE MENSAJE"); // Aqui le paso un string
//FUNCIONES
function getData(id) {
}
var HTTPresponse = /** @class */ (function () {
    function HTTPresponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HTTPresponse;
}()); // estoy generando una clase para que pueda utilizarlo en una respuesta HTTP de manera generica
var fetchUSer = function () {
    return {
        id: 1,
        name: "Osvaldo"
    };
}; //aqui genere una respuesta falsa de HTTP
var myUser = fetchUSer();
var res = new HTTPresponse(myUser, 200, 1);
console.log(res);
// 
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Osvaldo" },
    { id: 2, name: "Agustrina" },
    { id: 3, name: "Bruno" }
];
var userCRUD = new CRUD(users);
userCRUD.addItem({ id: 4, name: "Tessy" });
console.log(userCRUD.printItems());
