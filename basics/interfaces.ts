//INTERFACES

interface Person{
 name: string;
 code: string | number;
 charge: number;
 description?: string; // si le agrego el operador ? puede ser que venga o puede que no
 sayHello:() => string;
}

let person : Person = {
    name: 'Kevin',
    code: '01',
    charge: 1,
    description: "Hola",
    sayHello: () => "Hola" // una funcion que retorna un string, podria hacer mas cosas pero retorna un string
};



//person. cuando pongo punto me muestran metodos del Object


// let person = { Una solucion rapida es borrar el tipo de dato

let secondPerson: Person = {
    name: "",
    code: "",
    charge: 0,
    description: "", //SI pongo null se va a quejar al igual que si no le pongo ningun valor
    sayHello: () => "Hola"
};

let thirdPerson: Person = {
    name: "",
    code: "",
    charge: 0, //ya no necesito description porque es opcional.. por el operador ?
    sayHello: () => "Hola"
};

thirdPerson.description?.toLowerCase() // con ? primero verifica si existe y si no no ejecuta el metodo

