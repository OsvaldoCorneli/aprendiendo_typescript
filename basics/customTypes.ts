type Person = {
    name: string;
    code: string | number;
    description?: string
}

const newPersona: Person = {
    name: "Kevin",
    code: "H"
} //nos da la misma extructura como si fuese una interface
//los customtypes , estamos haciendo algo bastante parecido a interfaces, las diferencias son muy pocas
// como un standar se suele utilzar mas interfaces que tipos
// podemos declarar respuestas especificas con los tipos

type ServiceResponse = string | null | number | undefined;

type UserCharges = 'admin' | "normal" | "superUser"

const myUserType: UserCharges = "superUser" // si agrego un nombre distinto a los declarados en UserChanges TS se queja

let respone: ServiceResponse;


