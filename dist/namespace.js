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
console.log(myOtherUser);
