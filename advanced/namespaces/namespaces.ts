// NAMESPACES

namespace DatabaseEntity{ //palabra reservada namespace
// aqui dentro vamos a poder variables, funciones, clases lo que queramos

export class User{
    constructor(public name: string){


    }
}

const myUser = new User("Osvaldo")
console.log(myUser)
}

// imprime USer {name: "osvaldo"}
//que pasaria si quiero utilizar mi clase User fuera del namespaces. queremos 
//utilizar namespaces como mecanismo de agrupacion para poder usarlo en otros lados

// const myOtherUser = new User. //ESTO NO NOS DEJA AUTOCOMPLETAR

//const myOtherUser = new DatabaseEntity.User("OSvaldo 2") //aqui se sigue quejando porque tenemos que exportar

const myOtherUser = new DatabaseEntity.User("OSvaldo 2") //Ahora si porte estoy exportando la clase User con export

console.log(myOtherUser) // me imprime "oSvaldo 2"

//ahora exportaremos a otro archivos en este caso index.ts

