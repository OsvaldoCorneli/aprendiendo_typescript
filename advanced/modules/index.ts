import { PI , generateId} from "./utils.module";
import { User as Person } from "./utils.module"; // Estamos cambian User por Person
//Otra sintaxis de importacion
// import * as Utils from "./utils.module";  // aqui estamos importando todo de module a una variable llamada utils.

const myNumber = 10 * PI; 

const myUser: Person = {id: generateId().toString() ,name:"Osvaldo"}

//Estamos importando funciones y variables desde otro archivo


console.log({
    myNumber,
    myUser
})


