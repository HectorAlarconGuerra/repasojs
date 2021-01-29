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

// const persona = {
//   nombre: "Juan",
//   profesion: "Desarrollado Web",
//   edad: 500,
// };
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
// const aprendiendoJS = {
//     version:{
//       nueva: 'ES6+',
//       anterior: 'ES5'
//     },
//     frameworks: ['React', 'VueJS', 'AngularJS']
// }

// Destructuring es extraer valores de un objeto

//console.log(aprendiendoJS);

//versión anterior
// let version = aprendiendoJS.version.anterior;
// let framework = aprendiendoJS.frameworks[1];
// console.log(framework);

// Destructuring forma nueva
// let {anterior} = aprendiendoJS.version;
// console.log(anterior);

// Object literal enhancement

// const banda = 'Metalica';
// const genero = 'Heavy Metal';
// const canciones = ['Master of Pupptes', 'Seek & Dsetroy', 'Enter Sandman'];

// forma anterior
// const metalica = {
//   banda: banda,
//   genero: genero,
//   canciones: canciones
// }

// forma nueva

// const metalica = {banda, genero, canciones};

// console.log(metalica);

// métodos o funciones en un objeto

// const persona ={
//   nombre: 'Héctor',
//   trabajo: 'Desarrollador de aplicaciones móviles',
//   edad : 43,
//   musicaBinaural: true,
//   mostrarInformacion(){
//     console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
//   }
// }

// persona.mostrarInformacion();

// Arregls y .map

//const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];



//console.log(carrito);

// const appContenedor = document.querySelector('#app');
// //appContenedor.innerHTML=carrito;
// let html = '';
// carrito.forEach(producto => {
//   html += `<li>${producto}</li>`;
// })

// appContenedor.innerHTML = html;

// carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// carrito.map(producto =>{
//   return 'El producto es ' + producto;
// });

// const persona = {
//   nombre: 'Héctor',
//   profesion: 'Desarrollador aplicaciones móviles',
//   edad: 43

// }

// console.log(Object.keys(persona));

// const {nombre} = persona;

// console.log(nombre);

// Spread Operator
// let lenguajes = ['JavaScript', 'PHP', 'Python']

// let [ultimo] = [...lenguajes].reverse();

// console.log(lenguajes);
// console.log(ultimo);

// let frameworks = ['´ReactJS', 'Laravel', 'Django']

// //Unir los arreglos en uno solo

// //let combinacion = lenguajes.concat(frameworks);

// //let combinacion = [...lenguajes, ...frameworks]

// let nuevoArreglo = [...lenguajes]

// console.log(nuevoArreglo);

// function suma(a,b,c) {
//   console.log(a+b+c);
// }

// const numeros = [1,2,3];

// suma(...numeros)

//Métodos en arreglos

// const personas =[
//    {nombre: 'Juan', edad: 23, aprendiendo:'JavaScript' },
//    {nombre: 'Pablo', edad: 18, aprendiendo:'PHP' },
//    {nombre: 'Ale', edad: 21, aprendiendo:'Rect' },
//    {nombre: 'Ka', edad: 33, aprendiendo:'JS' },
//   ]

//   console.log(personas)

//   // mayores de 28

//   const mayores = personas.filter(persona =>{
//     return persona.edad > 18;
//   })

//   console.log(mayores);

//   //Que aprende ale y su edad
//   const alejandra = personas.find(persona => {
//     return persona.nombre === "Ale"
//   })

//   console.log('Alejandra esta aprendiendo: ' + alejandra.aprendiendo);

//   let total = personas.reduce((edadTotal, persona)=>{
// return edadTotal + persona.edad
//   },0);


//   console.log(total/personas.length);

//Promises

// const aplicarDescuento = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let descuento = true;
//     if (descuento) {
//       resolve('Descuento aplicado');

//     } else {
//       reject('No se pudo aplicar el descuento')
//     }
//   }, 3000);
// });

// aplicarDescuento.then(resultado =>{
//   console.log(resultado);
// }).catch(error => {
//   console.log(error);
// })

// const descargarUsuarios = cantidad => new Promise((resolve, reject)=>{
//   //pasar la cantidad a la api

//   const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

//   // llamado a ajax
//   const xhr = new XMLHttpRequest();

//   //abrir la conexión
//   xhr.open('GET',api,true)

//   // on load
//   xhr.onload = () => {
//     if(xhr.status === 200){
//       resolve(JSON.parse(xhr.responseText).results);
//     }else{
//       reject(Error(xhr.statusText));
//     }
//   }
//   //enviar
//   xhr.send()

// });

// descargarUsuarios(29)
//       .then(
//             miembros => imprimirHTML(miembros),
//             error => console.error(
//               new Error('Hubo un error' + error)
//             )
//       )

// function imprimirHTML(usuarios){
//   let html = '';
//   usuarios.forEach(usuario => {
//       html += `
//         <li>
//         Nombre: ${usuario.name.first} ${usuario.name.last}
//         País: ${usuario.nat}
//         Imagen:
//         <img src="${usuario.picture.medium}">
//         </li>
//       `;
//     });

//     const contenedorApp = document.querySelector('#app');
//     contenedorApp.innerHTML = html;
// }

// Escribir clases

// class Tarea {
//   constructor(nombre, prioridad){
//       this.nombre = nombre;
//       this.prioridad = prioridad
//   }
//   mostrar(){
//     console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
//   }
// }

// class ComprasPendientes extends Tarea{
//   constructor(nombre, prioridad, cantidad){
//      super(nombre, prioridad);
//      this.cantidad = cantidad;
//   }
//   mostrar(){
//     super.mostrar();
//     console.log(`y la cantidad ${this.cantidad}`);
//   }
//   hola(){
//     return 'hola';
//   }
// }

// // crear los objetos
// let tarea1 = new Tarea('Aprender JavaScript', 'Alta')
// let tarea2 = new Tarea('Prepara café', 'Alta')
// let tarea3 = new Tarea('Pasear al perro', 'Media')
// let tarea4 = new Tarea('Conocer a mis suegro', 'Baja')

// // console.log(tarea1.mostrar());
// // console.log(tarea2.mostrar());
// // console.log(tarea3.mostrar());
// // console.log(tarea4.mostrar());

// let compra1 = new ComprasPendientes('Jabon','Urgente', 3)
// compra1.mostrar();
// console.log(compra1.hola())
import {nombreTarea, crearTarea, tareaCompletada} from './tareas.js';


console.log(nombreTarea);

const tarea1 = crearTarea('Pasear al perro', 'Media');

console.log(tarea1);
tareaCompletada();