// las clases no son exclusivos de TS , JS Y TS tienen la mismas clases.
// tanto JS y TS no son exactamente lenguajes orientados a objetos son multiparadigmas.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// una clase es algo parecido a una interfaz.
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sayHi = function () {
        console.log("Grrr");
    };
    return Animal;
}());
var myAnimal = new Animal();
myAnimal.sayHi();
//la realidad es cuando empiece a modelar sus clases, van a ver algunos datos que necesitan manejar dentro de la clase
// pero no queremos que por fuera se modifiquen
var Animal2 = /** @class */ (function () {
    function Animal2() {
        this.age = 10; //logramos que age sea privado al poner myAnimal. No apareceria age "const myAnimal: Animal2 = new Animal2()"
    }
    Animal2.prototype.sayHi = function () {
        console.log("GRRR", this.age); // pero dentro de la clase si tenemos acceso a age
    };
    return Animal2;
}());
//HERENCIA
// TODOS LOS PERROS SON ANIMALES PERO NO TODOS LOS ANIMALES SON PERROS, Ejemplo de HERENCIA
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
;
var myDog = new Dog();
// si hacemos myDog. nos aparecera los campos tanto de Animal como del extends de Dog
var Animal3 = /** @class */ (function () {
    function Animal3() {
        this.indentity = "111"; // es accesible a la clase y a su extencion. pero no desde el objeto
    }
    Animal3.prototype.sayHi = function () {
        console.log("Grrr");
    };
    return Animal3;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog2.prototype.sayHello = function () {
        //this. tengo acceso a protecte desde la extencion
    };
    return Dog2;
}(Animal3));
var myDog2 = new Dog2();
//myDog2. No tengo acceso a protected
//METODO CONSTRUCTOR
var Animal4 = /** @class */ (function () {
    function Animal4() {
        this.indentity = "111"; // es accesible a la clase y a su extencion. pero no desde el objeto
    } //todas las clases pueden tener acceso al metodo constructor.
    //¿Que es el constructor? 
    // El constructor en la funcion en si que representa el animal.
    // cuando nosotros hacemos el NEW es llamar al constructor de la clase
    Animal4.prototype.sayHi = function () {
        console.log("Grrr");
    };
    return Animal4;
}());
var Dog3 = /** @class */ (function (_super) {
    __extends(Dog3, _super);
    function Dog3() {
        return _super.call(this) || this; // aqui lo que dice es que tenemos que ejecutar todo lo que viene de la clase ANIMAL4
    }
    Dog3.prototype.sayHello = function () {
        //this. tengo acceso a protecte desde la extencion
    };
    return Dog3;
}(Animal4));
//las Clases sirven para modelar cosas que van a estar en el exterior de una manera programatica
