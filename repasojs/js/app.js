// crear variables

// variables con var
//var aprendiendo = "JavaScript";

// variables con const
//const aprendiendo = "JavaScripy";

//console.log(aprendiendo);

//let aprendiendo = "JavaScript";

//aprendiendo = true;

//console.log(aprendiendo);

// Scope

// var music = "Rock";

// if (music) {
//   var music = "Grunge";
//   console.log("dentro del if: ", music);
// }

// console.log("Fuera del IF", music);

// scope con let
//const music = "Rock";

//if (music) {
//  const music = "Grunge";
//  console.log("dentro del if: ", music);
//}

//console.log("Fuera del IF", music);

// Templete Strings

// const nombre = "Héctor";
// const trabajo = "Desarrollador Web";

// concatenar javascript
//console.log(`Nombre: ${nombre}, Trabajo:${trabajo}`);

// concatenar con múltiples líneas
//const contenedorApp = document.querySelector("#app");
// let html =
//   "<ul>" +
//   "<li> Nombre: " +
//   nombre +
//   "</li>" +
//   "<li> Trabajo: " +
//   trabajo +
//   "</li>" +
//   "</ul>";

// let html = `
//           <ul>
//             <li>Nombre: ${nombre}</li>
//             <li>Trabajo: ${trabajo}</li>
//           </ul>
// `;

// contenedorApp.innerHTML = html;

//Creando una función

//Function declaration
// function saludar(nombre) {
//   console.log("Bienvenido" + nombre);
// }

// saludar("Juan");

// //funcion expresión

// const cliente = function (nombreCliente) {
//   console.log("Mostrando datos del cliente: " + nombreCliente);
// };

// cliente("Juan");

// parametros por default en las funciones

// const actividad = function (
//   nombre = "Walter White",
//   actividad = "Enseñar Química"
// ) {
//   console.log(
//     `La persona ${nombre}, esta realizando la actividad ${actividad}`
//   );
// };

// actividad("Héctor", "Aprender JavaScript");

// actividad("Pedro", "Creando un sitio web");

// actividad();

// let viajando = (destino) => `Viajando a la ciudad de: ${destino}`;

// let viaje;
// viaje = viajando("Paris");
// viaje = viajando("Londres");
// viaje = viajando("Barcelona");

// console.log(viaje);

// Objetos

// Object Literal

// const persona2 = {
//   nombre: "Juan",
//   profesion: "Desarrollado Web",
//   edad: 500,
// };

// let nombrePersona = "Juan";
// let profesion = "Desarrollador web";

// console.log(nombrePersona);
// console.log(profesion);

// console.log(persona.nombre);
// console.log(persona.profesion);
// console.log(persona.edad);
// console.log(persona["edad"]);
//console.log(persona2);

//Objetos

const persona = {
  nombre: "Juan",
  profesion: "Desarrollado Web",
  edad: 500,
};
//console.log(persona);
// const mostrarCliente = mostrarInformacionTarea(
//   persona.nombre,
//   persona.profesion
// );
// console.log(mostrarCliente);

// // Object Constructor
// function Tarea(nombre, urgencia) {
//   this.nombre = nombre;
//   this.urgencia = urgencia;
// }
// //Agregar un prototype a tarea:
// Tarea.prototype.mostrarInformacionTarea = function () {
//   return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
// };

// // crear una nueva tarea
// const tarea1 = new Tarea("Aprender JavaScript y React", "Urgente");
// const tarea2 = new Tarea("Pasear al perro", "Media");
// console.log(tarea1);
// console.log(tarea1.mostrarInformacionTarea());
// console.log(tarea2);
// console.log(tarea2.mostrarInformacionTarea());

// Destructuring de objetos
const aprendiendoJS = {
    version:{
      nueva: 'ES6+',
      anterior: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

// Destructuring es extraer valores de un objeto

//console.log(aprendiendoJS);

//versión anterior
// let version = aprendiendoJS.version.anterior;
// let framework = aprendiendoJS.frameworks[1];
// console.log(framework);

// Destructuring forma nueva
let {anterior} = aprendiendoJS.version;
console.log(anterior);
