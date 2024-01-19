interface Person {
    name: string;
    age: number;
}

type Person1 ={
    name: string;
    age: number;
}

//de las dos formas se crea un tipo que va a crear una structura
// que mas podemos hacer con las interfaces, nos permiten extender funcionabilidad

interface Employee extends Person {
    charge: string;
}

const newEmployee: Employee = {
    name: "",
    age: 40,
    charge: "",
}

//tambien podria extender con Person1 son caracteristicas compartidas entre los dos

// se puede extender una interface de un tipo pero no un tipo de un tipo o un tipo de una interface:

// type Employee extends Person{}  ESTO NO SE PUEDE HACER

// como podria hacer un merge entre diferentes tipos

type User = {
    id: string;
}

type Admin = User & {token: string};

// const myAdmin : Admin = {

// } DE ESTA MANERA PUEDO EXTENDER UN TYPE DE OTRO TYPE. tambien podria unir a un type con un interface


type ServiceResponseToken = string | null | undefined | number
//este no se puede hacer con interfaces

type UserType = "admin" | "superUser" | 0 // los types son mucho mas especificos

const myUser: UserType = 0; //si en vez de 0 pongo un 5 u otro valor. se va a quejar
// estas funcionabilidades no tienen las interfaces

//¿que tienen las interfaces que no tengo los tipos?

interface Developer{
    name: string;
    stack: string[];
}
interface Developer {
    phone: string
}

const me: Developer = {
    name: "",
    stack: [],
    phone: ""
}
//typescript asume que las dos Developer son la misma
// se puede extender desde otra extructura de developer.

// Los types permiten especificar que tipo de datos especificos unidos o superespecificos podriamos usar

// las interfaces son mas generales y organizadas, proyectos basados en composicion. 