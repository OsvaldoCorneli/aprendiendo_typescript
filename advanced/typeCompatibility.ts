// case 1

// interface Pet {
//     name:string;
// }

// class Dog1 {
//     name: string;
// }

// let pet: Pet;

// pet = new Dog1();

// case 2

// interface Pet{
//     name: string
// }

// let pet: Pet;

// let dog = {name: "lassie", owner: "rudd wheatherwax"}

// pet = dog

// console.log(pet) //se imprimiria owner tambien aunque no este definido en la interface pero pet.owner daria error

// CASE 3

//interface Pet{
    //     name: string
    // }


// let dog = {name: "Lassie", owner: "rudd"};
// function greet(pet: Pet){
//     console.log("Hello", pet.name);
// }

// greet(dog); //OK
//TODOS ESTOS SON CASOS DE INTERFACES;

//CASE 4

// enum Status{
//     ready,
//     waiting
// }

// enum Color{
//     Red,
//     Blue,
//     Green,
// }

// let stat = Status.ready
// stat = Color.Green; // ERROR INCOMPATIBLES ENTRE SI Status Color.


// CASE 5:

// class Animal{
//     feet: number;
//     constructor(name:string, numFeet: number){}
// }

// class Size{
//     feet: number;
//     constructor(numFeet: number)
// }

// let a: Animal;
// let s; Size
// a = s; //OK
// s = a; //OK


//CASE 6

// interface Empty<T> {}
// let x: Empty<number>;
// let y: Empty<string>
// x=y // ok, because y matches structure of x


//CASE 7


// interface Empty<T> {
// data: T;   
//}
// let x: Empty<number>; // {data: number}
// let y: Empty<string>  // {data: string }
// x=y // Error,  because x and y are not compatible
