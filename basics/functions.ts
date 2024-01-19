//LAS FUNCIONES EN TS

const sayHi = (name) =>{
console.log("Hello", name)

};

sayHi("Osvaldo")

function sayGoodBye(name){
 console.log("adios", name)
}

sayGoodBye("Osvaldo")

function show(){ //show tiene void . tipo void significa que no retorna nada
    console.log("Hola")
}

function show1(): number{ // le estamos diciendo al a funcion que debe retornar un numero
   console.log("Hola1")
   return 1; // sin esto como en la funcion show() ts se quejaria,
}

const response = show1() //rensponse deberia valer 1

console.log(response)

function show2(name: string): number{ // le estoy diciendo que la variable es de tipo string
 name.concat()
 return 4 ; // sigo retornando un numero porque eso me pide la funcion con ": number"
}


const response1 = {
    id: 1,
    name: "osvaldo",
    charge: "alumno",
    number: 13,
}

function show3(response1: {id,name,charge,number}):number{ //puedo hacer destructuring en la variable
  return 2;

}

function show4({name}: {id,name,charge,number}):number{ //podemos decir que vamos a utilizar del destructuring
  console.log("El nombre es", name)
  return 3;
}

show4(response1) //aqui llamamos a la funcion que me imprime name y retorna un 3. tambien se puede usar el spread operation

// otro caso podriamos decir que la variable es del tipo de una interface

//function show({id, ...other}: interface):string{
    //aqui estamos diciendo que la variable es del tipo de interface que returno un string la funcion
    // y usamos spread operation para definir las otras
    // console.log("El id es", id) //Aqui imprimimos el id
    //console.log("otros datos", other) //aqui se imprimiran los otros datos como objeto en este caso
    //return "HOLA" //retorno el string
//}