// NAMESPACES
var DatabaseEntity;
(function (DatabaseEntity) {
    // aqui dentro vamos a poder variables, funciones, clases lo que queramos
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Osvaldo");
    console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
// imprime USer {name: "osvaldo"}
//que pasaria si quiero utilizar mi clase User fuera del namespaces. queremos 
//utilizar namespaces como mecanismo de agrupacion para poder usarlo en otros lados
// const myOtherUser = new User. //ESTO NO NOS DEJA AUTOCOMPLETAR
//const myOtherUser = new DatabaseEntity.User("OSvaldo 2") //aqui se sigue quejando porque tenemos que exportar
var myOtherUser = new DatabaseEntity.User("OSvaldo 2"); //Ahora si porte estoy exportando la clase User con export
console.log(myOtherUser); // me imprime "oSvaldo 2"
//ahora exportaremos a otro archivos en este caso index.ts
// asi usamos uso de namesSpaces.ts
/// <reference path="namespaces.ts" />
var myOtherUser2 = new DatabaseEntity.User("desde otro archivo"); //Ahora si porte estoy exportando la clase User con export
console.log(myOtherUser2);
//tenemos que crear otro script que ejecute los dos archivos
// en este caso 
