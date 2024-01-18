// Enums es un tipo de datos que nos permiten almacenar listas de valores estaticos

enum Users{
    NomralUser,
    PayedUser,
    AdminUser,
    MegaUser,
}

const myUser = Users.AdminUser; // myUser = 2 es lo mismo.

console.log(myUser); //Imprime dos porque es una lista numero 2;
//a grandes rasgos podemos ponerle a los numeros etiquetas que para el backend esta genial.

// enum Users{
//     NomralUser = 5,
//     PayedUser = 7,
//     AdminUser = 9,
//     MegaUser = 11, SE PUEDE AGREGAR EL VALOR DESEADO HASTA STRING; se puede almacenar de manera mas legible
// }

// Los enums son útiles para definir conjuntos fijos y predefinidos de valores
//  que pueden ser utilizados en tu código de manera más legible y mantenible.
//   En este caso, los enums proporcionan nombres descriptivos a los valores
//    asociados, lo que facilita la comprensión del código, especialmente cuando
//     se trabaja con conjuntos específicos de opciones como roles de usuario.

//probando


