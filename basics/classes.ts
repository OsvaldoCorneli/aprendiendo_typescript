// las clases no son exclusivos de TS , JS Y TS tienen la mismas clases.
// tanto JS y TS no son exactamente lenguajes orientados a objetos son multiparadigmas.

// una clase es algo parecido a una interfaz.

class Animal {
    name: "Generic animal"
    sayHi(){
        console.log("Grrr")
    }
}

const myAnimal: Animal = new Animal();
myAnimal.sayHi()

//la realidad es cuando empiece a modelar sus clases, van a ver algunos datos que necesitan manejar dentro de la clase
// pero no queremos que por fuera se modifiquen

class Animal2{
    name: "Generic Animal2"
    private age = 10; //logramos que age sea privado al poner myAnimal. No apareceria age "const myAnimal: Animal2 = new Animal2()"
    sayHi(){
        console.log("GRRR", this.age); // pero dentro de la clase si tenemos acceso a age
    }
}

//HERENCIA

// TODOS LOS PERROS SON ANIMALES PERO NO TODOS LOS ANIMALES SON PERROS, Ejemplo de HERENCIA

class Dog extends Animal {
    type: "Pastor aleman"
};

const myDog: Dog = new Dog();
// si hacemos myDog. nos aparecera los campos tanto de Animal como del extends de Dog

class Animal3 {
    public name: "Generic animal" // por defecto son public no hace falta poner
    private age: 10; // son privados unicamente se puede usar en la clase
    protected indentity = "111"; // es accesible a la clase y a su extencion. pero no desde el objeto
    sayHi(){
        console.log("Grrr")
    }
}

class Dog2 extends Animal3{
    type: "Pastor"
    sayHello(){
        //this. tengo acceso a protecte desde la extencion
    }
}

const myDog2: Dog2 = new Dog2();

//myDog2. No tengo acceso a protected

//METODO CONSTRUCTOR

class Animal4 {
    public name: "Generic animal" // por defecto son public no hace falta poner
    private age: 10; // son privados unicamente se puede usar en la clase
    protected indentity = "111"; // es accesible a la clase y a su extencion. pero no desde el objeto
    
    constructor() {} //todas las clases pueden tener acceso al metodo constructor.
    //¿Que es el constructor? 
    // El constructor en la funcion en si que representa el animal.
    // cuando nosotros hacemos el NEW es llamar al constructor de la clase

    sayHi(){
        console.log("Grrr")
    }
}
class Dog3 extends Animal4{
    type: "Pastor"
     
    constructor(){ // tenemos que declarar el super() si no se queja
     super() // aqui lo que dice es que tenemos que ejecutar todo lo que viene de la clase ANIMAL4
    }

    sayHello(){
        //this. tengo acceso a protecte desde la extencion
    }
}

//las Clases sirven para modelar cosas que van a estar en el exterior de una manera programatica