interface PersonInterface{
    name: string;
    code: string | number;
    charge: number;
    description?: string; 
    sayHello:() => string; // en cambio la interface me dice que el objeto va a tener una funcion llamada sayHello que retorna un string pero no podemos poner codigo
   }
   //en las interfaces son un modelo, me dicen que van a tener y nada mas 

   class PersonaClass {
   sayHello(){
    console.log("Grrr");
    fetch("...")
   }  
   }
   
   //las clases a demas de decirme que va a tener, me construye el objeto y puede tener dentro implementacion(codigo)

//    const personaOne: PersonInterface = {} //tendriamos que empezar a crear el objeto con todas sus propiedades

const personTwo: PersonaClass = new PersonaClass(); //tengo acceso a la palabra reservada new . y listo, el personTwo ya tiene acceso a la extructura
personTwo.sayHello();

// Las interfaces son como el esqueleto los planos para armar el objeto mientras que las clases
// son como una fabrica de objetos, te dan acceso a sus propiedades y puedes crear varios objetos en torno a ellas

//OTRA DIFERENCIA

interface PetInterface{
    sayHello: () => string
}

class PetClass{
    sayHello: ()=> "Hola"
}

class Dog implements PetInterface{ //implements nos obliga a cumplir con el contrato como por ejemplo la funcion que devuelve el string
    sayHello(){return "hola";}
}

class Cat extends PetClass{} // extends nos permite reutilizar codigo. estamos copiando y pegando lo que esta en PetClass

// Interfaz PersonInterface:

// La interfaz PersonInterface está bien definida. Específicamente, el uso de ? en description?: string indica que la propiedad description es opcional.
// Clase PersonaClass:

// La clase PersonaClass tiene un método sayHello y, como mencionas, también tiene implementaciones internas (en este caso, una llamada a fetch). Ten en cuenta que, en TypeScript, las clases pueden tener tanto métodos como propiedades.
// Uso de la Interface para Crear un Objeto:

// Tu comentario sobre la creación de un objeto con todas sus propiedades a través de la interfaz (const personaOne: PersonInterface = {}) refleja correctamente que, al utilizar una interfaz, se espera que el objeto cumpla con las propiedades definidas.
// Uso de Clase para Crear un Objeto:

// El ejemplo de crear un objeto con la clase (const personTwo: PersonaClass = new PersonaClass();) también es preciso, y destaca cómo una clase puede usarse como una fábrica para crear instancias de objetos.
// Diferencia entre Interfaces y Clases:

// Tu explicación sobre la diferencia entre interfaces y clases es clara y efectiva. Las interfaces proporcionan una estructura sin implementación, mientras que las clases ofrecen una implementación junto con la capacidad de crear instancias de objetos.
// Implementación de Interfaces y Herencia:

// La implementación de la interfaz PetInterface en la clase Dog es correcta. Además, señalas correctamente que implements obliga a la clase a cumplir con el contrato de la interfaz.
// Herencia de Clases:

// El uso de extends en Cat extends PetClass es una forma válida de heredar comportamiento de una clase a otra.