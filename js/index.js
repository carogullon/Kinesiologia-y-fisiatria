//Bienvenida al paciente 
let nombreIngresado = prompt("Ingrese su nombre");
let apellidoIngresado = prompt("Ingrese su apellido");
if ((nombreIngresado !="") && (apellidoIngresado !="")){
	alert("Bienvenido/a " + nombreIngresado + " " + apellidoIngresado + " a nuestra página web de kinesiología");
}



//Servicio que el paciente quiere contratar: RPG, stretching o FKT y devuelve la cantidad de sesiones al mes que tiene para usar //
// Valores de las sesiones: 
//RPG sale $1500 cada sesión. sin posibilidad de descuento.
//Stretching: sale $3200 al mes. Si paga 3 meses juntos se le hace el 15% de descuento.
//FKT: tratamiento que lo cubre la obra social. No todas, apara saber si cubre mandar un mensaje al whatsapp.//

const rpg = "RPG";
const stretching = "stretching";
const fkt = "Kinesiologia";
let presupuestoRpg = 1500;
let presupuestoStretching =3400;
function descuento(presupuestoStretching) {
    let descuentoServ = alert("En lugar de $3200 te quedaría $ " + presupuestoStretching * 0.85 + " por mes");
}
console.log(descuento);



let servicio = prompt(nombreIngresado +" Le gustaría reservar un turno de: RPG, Stretching, o Kinesiología?");
if (servicio.toUpperCase() === "RPG") {
    alert ("Podes reservar 4 sesiones por mes (una vez por semana): lunes miercoles o viernes de 8 a 14 hs.");
	let condicionRpg = prompt("Te interesa? Escriba SI o NO para salir");
    if (condicionRpg.toUpperCase() === "SI"){
        alert("Cada sesión sale $1500. Se realiza 1 vez por semana o cada quince días.")
        console.log("1 sesión de RPG sale: $1500");
    }
    else if (condicionRpg.toUpperCase() === "NO") {
        alert("Gracias por visitarnos! Podes continuar viendo las novedades de nuestra página");
    }
}else if (servicio.toUpperCase() === "STRETCHING") {
    alert ("Podes reservar 8 sesiones por mes: martes y jueves de 16 a 20 hs");
        if (true){
            alert("Cada sesión sale $400, al mes $3200. Si pagas 3 meses juntos se aplica un 15%OFF");
            const tresMeses = prompt("Desea abonar 3 meses juntos? Ingrese SI o NO");
                if ((tresMeses.toUpperCase() !="NO") || (tresMeses.toUpperCase() === "SI")) {
                    descuento(presupuestoStretching);  
                }
        }
}else if (servicio.toUpperCase() === "KINESIOLOGIA") {
    alert ("Podes reservar 8 sesiones al mes: martes y jueves de 8 a 13 hs. Comunicate al Whatsapp para ver si tu prepaga cubre el tratamiento sugerido.");
} else {
    alert ("Error en los datos ingresados. Por favor intentelo nuevamente.")
}

//Datos de pacientes ingresados//
let Paciente = (nombreIngresado + apellidoIngresado);

class DatosDePaciente {
    constructor(nombre, apellido, patologia, tratamiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.patologia = patologia;
    this.tratamiento = tratamiento;
    this.decir = function () { console.log("Gracias! Tus datos ingresados son los siguientes " + this.nombre + " " + this.apellido + " " + this.patologia + " " + this.tratamiento)}
    }
}
const paciente1 = new DatosDePaciente ("Juan", "Suarez", "tendinopatia aquileana", "kinesiologia");
const paciente2 = new DatosDePaciente ("Alejo", "Traiani", "posquirurgico LCA", "kinesiologia");
const paciente3 = new DatosDePaciente ("Claudia", "Perez", "escoliosis", "rpg");


paciente1.decir();
console.log(paciente1);
paciente2.decir ();
console.log(paciente2);
paciente3.decir ();
console.log(paciente3);


const listadoPacientes = [
    {id:1, nombre: "Juan", apellido: "Suarez", patologia:"tendinopatia aquileana"},
    {id:2, nombre: "Alejo", apellido: "Traiani", patologia:"posquirurgico ruptura LCA"},
    {id:3, nombre: "Claudia", apellido: "Perez", patologia:"escoliosis"},
];

console.log(listadoPacientes);
listadoPacientes.push({id:4, nombre: "Gabriel", apellido: "Debuchy", patologia:"Desgarro cuadriceps"});

for (const paciente of listadoPacientes) {
    console.log(paciente.patologia);
}


//DOM

let padre = document.getElementsByClassName("padreServ");
let padreServ = ["RPG", "stretching", "mobility"];

for(const hijoServ of padreServ) {
    let listaServ = document.createElement("listaServ");
    listaServ.innerHTML = padreServ;
    padre.appendChild(listaServ);
} 

const reservaTurno  = [ {id: 1, nombre:"mobility", veces:"2 veces por semana", precio:3200},
                        {id:2, nombre: "mobility", veces:"3 veces por semana", precio:2880},
                        {id:3, nombre:"rpg", veces:"1 vez por semana", precio:1500},
]


reservaTurno.forEach(el =>{
    let contenedor = document.querySelector("#reservaTurno");
        contenedor.innerHTML += `<h3> ID: ${el.id} </h3>
                                <p>Nombre: ${el.nombre}</p>
                                <p>Veces: ${el.veces} </p>
                                <p>Precio: ${el.precio} </p>`;
});


