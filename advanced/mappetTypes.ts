// los mappetTypes son crear tipos de manera dinamica basandonos en otro tipos o interfaces.

interface Person {
 name: string;
 age: number;
}

// interface GetPerson{
//     getName: () => string;
//     getAge: () => number   
// }
                             //EJEMPLOS

// interface User{}
// interface GetterUser{}   

// CON CADA INTERFACE QUE SE CREE SE VA A TENER QUE CREAR OTRA INTERFACE QUE CONTENGA EL PREFIJO GET
// Y QUE DEVUELVA FUNCIONES QUE TE VAN A DEVOLVER LA PRIMERA INTERFACE.
// ESTO ES TEDOCIO Y DIFICIL DE MANTENER. PARA ESTO EXISTE LOS TIPOS MAPEADOS

type Getter<T> = {
    //key: value
    [property in keyof T as `get${Capitalize<string & property>}`]:()=>T[property]; //recibiremos Person y sus dos propiedades, nosotros deveriamo poder cada propiedad uno por name y uno por age
    //cada propiedadd que esten dentro de los keys del tipo que le estoy mandando
     // SE devuelve una funcion que va a devolver el tipo de dato de T[property]
} 

type GetPerson = Getter<Person>; // si nos fijamos GetPerson ya devuelve las propiedades de Person como la funcion del ejemplo de arriba

//OTRO EJEMPLO

interface Animal {
    id: string;
    name: string;
    type: number;
    isAdopted: boolean
}

type GetAnimal = Getter<Animal>



// Los Mapped Types (o tipos mapeados) en TypeScript son una característica poderosa que te 
// permite transformar un tipo existente en otro tipo, generando nuevas propiedades o modificando las existentes.
// Los Mapped Types son especialmente útiles para crear tipos de manera dinámica, basándose en la estructura de otros tipos.

// A continuación, te proporcionaré una breve teoría sobre Mapped Types:

// Sintaxis Básica:
// La sintaxis básica de un Mapped Type es la siguiente:

// typescript
// Copy code
// type NuevoTipo = {
//   [PropiedadExistente in TipoExistente]: NuevoTipoDePropiedad;
// };
// PropiedadExistente: Es el nombre de una propiedad existente en el tipo original.
// TipoExistente: Es el tipo de la propiedad existente.
// NuevoTipoDePropiedad: Es el nuevo tipo que se asignará a la propiedad en el nuevo tipo.
// Iterando sobre Propiedades:
// Puedes utilizar keyof para iterar sobre las propiedades de un tipo existente:

// typescript
// Copy code
// type NuevoTipo = {
//   [Propiedad in keyof TipoExistente]: NuevoTipoDePropiedad;
// };
// Modificando Propiedades:
// Puedes aplicar modificadores a las propiedades existentes:

// typescript
// Copy code
// type NuevoTipo = {
//   [Propiedad in keyof TipoExistente]: TipoExistente[Propiedad] | null;
// };
// En este ejemplo, todas las propiedades del nuevo tipo serán del tipo original o nulo.

// Restricciones y Filtros:
// Puedes aplicar restricciones o filtros a las propiedades que deseas incluir en el nuevo tipo:

// typescript
// Copy code
// type NuevoTipo = {
//   [Propiedad in keyof TipoExistente as Condicion ? Propiedad : never]: TipoExistente[Propiedad];
// };
// En este caso, solo se incluirán las propiedades que cumplan con una condición específica.

// Ejemplo Práctico - Mapped Type Básico:
// Supongamos que tienes un tipo Persona y deseas crear un nuevo tipo PersonaOpcional donde todas las propiedades 
// son opcionales:

// typescript
// Copy code
// type Persona = {
//   nombre: string;
//   edad: number;
//   direccion: string;
// };

// type PersonaOpcional = {
//   [Propiedad in keyof Persona]?: Persona[Propiedad];
// };
// Ejemplo Práctico - Mapped Type con Filtro:
// Supongamos que deseas crear un nuevo tipo que incluya solo las propiedades de tipo number de otro tipo:

// typescript
// Copy code
// type SoloNumeros<T> = {
//   [Propiedad in keyof T as T[Propiedad] extends number ? Propiedad : never]: T[Propiedad];
// };

// type TipoConSoloNumeros = SoloNumeros<Persona>;
// Estos son solo ejemplos básicos, pero los Mapped Types pueden ser bastante flexibles y útiles 
// en situaciones más complejas. ¡Espero que esta teoría te ayude a entender mejor los tipos mapeados en TypeScript!