"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_module_1 = require("./utils.module");
//Otra sintaxis de importacion
// import * as Utils from "./utils.module";  // aqui estamos importando todo de module a una variable llamada utils.
var myNumber = 10 * utils_module_1.PI;
var myUser = { id: (0, utils_module_1.generateId)().toString(), name: "Osvaldo" };
//Estamos importando funciones y variables desde otro archivo
console.log({
    myNumber: myNumber,
    myUser: myUser
});
