const mensaje: string = "HOLA"
const age2: number = 12;

//en algun momento vamos a necesitar que estos tipos de datos sean dinamicos..

// TIPO DE DATOS GENERICOS

interface MyInterface{
    field: string | number; // en este momento esta variable es dinamica

}

interface MyInterface1<T>{
    field: T; // en este momento tenemos una interfaces que tiene tipo de dato Generico y por lo tanto es dinamico;
    }

    const myValue: MyInterface1<number> ={ // le decimos que esta interface es number
        field: 2
    }

    const myValue1: MyInterface1<string> = { // le decimos que esta interface es string
        field: ""
    }

// los tipos de datos genericos se pueden aplicar a interfaces, funciones, a clases practicamente a todo
//CLASES

class Myclass<T> {
    field: T;
    constructor(field: T){
        this.field = field;
    }
}

const myField: Myclass<number> = new Myclass(2); //aqui estoy pasandole como tipo de dato un nomber
const myField1: Myclass<string> = new Myclass("ESTE MENSAJE") // Aqui le paso un string

//FUNCIONES

function getData<T>(id: number): Promise<T> | void{
}

//Example with classes

//tenemos una interface

interface UserResponse{
    id: number;
    name: string;
}

//ejemplo de una respuesta de un servidor

// {
//     data: ..,
//     status: 200,
//     code 1;
// }

//podriamos decir que data es de tipo interfaz usuarioResponse

interface UserResponseHTTP{
    data: UserResponse;
    status: 200,
    code: 1;
} // esto no es tan dinamico.. nosotros buscamos con TS codigo que es facil de mantener.

class HTTPresponse<T>{
    data: T;
    status: number;
    code: number;

constructor(data: T, status: number, code: number ){
    this.data = data;
    this.status = status;
    this.code = code
} 

} // estoy generando una clase para que pueda utilizarlo en una respuesta HTTP de manera generica

const fetchUSer = (): UserResponse =>{
    return {
        id: 1,
        name: "Osvaldo"
    };
}; //aqui genere una respuesta falsa de HTTP

const myUser = fetchUSer();
const res = new HTTPresponse(myUser, 200, 1);
console.log(res);

// 

class CRUD<T> {
    private items: T[];
    constructor(items: T[]){
        this.items = items
    }
addItem(item: T){
    this.items.push(item)
}

removeLastItem(){
     this.items.pop()
}

printItems(): T[]{
    return this.items;
}
}

const users: UserResponse[] = [
    {id: 1, name: "Osvaldo"},
    {id: 2, name: "Agustrina"},
    {id: 3, name: "Bruno"}
]

const userCRUD: CRUD<UserResponse> = new CRUD(users)
userCRUD.addItem({id: 4, name: "Tessy"});
console.log(userCRUD.printItems())