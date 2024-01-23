interface Task{
    id?:number; //este muy dificilmente se pueda editar
    name?: string;
    description?: string;
} //muchas veces cuaando estamos trabajando en editar, siempre vamos a editar lo que se pueda editar
// vamos a hacer referencia al id pero no va a ser editado cuando mandamos algo a actualizar

function updateTask(id:string , task: Task){
    //
    console.log("")
}
const newTask = { name: "Osvaldo"} //solamente mando name  
updateTask("1", newTask) // typescript no se queja porque las propiedades de la interface son opionales
// al actualzar podriamos poner en las propiedades "?" para mencionar que es opcional name?: description?:

const myTask: Task = {} // "?" no es la manera mas optioma de hacerlo porque cuando creamos una nueva task , como se ve
// no va a haber ninguno problema, pero va a ser un error logico

// TS NOS BRINDA UN UTILITYtype PARTIAL. recibe un tipo de dato generico y nos devuelve una interface con todos los campos opcionales

interface Task1{
    id:number; //este muy dificilmente se pueda editar
    name: string;
    description: string;
} 

function updateTask1(id:string , task: Partial<Task1>){
    //
    console.log("")
}

const newTask1 = { name: "Osvaldo"}   //Ahora con Partial<task1> solamente nos toma el nombre, porque todos los campos son opcionales
updateTask("1", newTask1)

//REQUIRED<T> es la contraparte, te obliga a pasarle todos los datos

interface ToDo{
    id?: number;
    name?: string;
}

const myTodo: Required<ToDo> = { id: 1 , name: "osvaldo"} // si o si me pide ingresar los dos valores ID y NAME

//RECORDS<Keys, Types> para la creacion de objetos

//{key: value}

interface CatInfo{
    age: number;
    name: string;
}

type CatName = "Moi" | "baris" | "luffy" 

const cats: Record<CatName , CatInfo> = {
    Moi: {age: 2, name: ""},
    baris: {age: 2, name: ""},
    luffy: {age: 2, name: ""},
}

// si ingreso a cats. me aparecera la key y valor--

//PICK <T,Properties>

interface ToDo1{
    tittle: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<ToDo1, "tittle" | "completed">;

const otherTodo: TodoPreview = {tittle: "Hola", completed: false} //estamos creando una extension de ToDo1 sin modificar la interface original

// el opuesto de PICK .. OMIT<T, Properties>

type TodoOmitted = Omit<ToDo1, "description">
const todoOmitted: TodoOmitted = {tittle: "Hola", completed: false}


