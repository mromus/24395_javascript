//var saludo = "Hello World"
// comentario
/*let fruta = "pera"
let fruta2 = "frutilla"
Comentario en block*/

var frutaDeVerduleria = 'pera'; //variable referenciales // buenas prácticas usar solo un lenguaje

const numeroVeinte = 20;

let numero = '30'; // comillas representan Strings, cadena de chars

let dni = 32000000;

let estoyDormido = false;

let numeroTreinta = 30;

let resultado = numeroVeinte + numeroTreinta + numero; // hizo la suma y concatenó el string

console.log(resultado);

let mensajeNavidenio = 'Feliz Navidad' //no se usan caracteres especiales

let nombre = prompt('Decime tu nombre!');

console.log(nombre + ' se la va a dar en la ' + frutaDeVerduleria + ' en Navidad.'); // acá, el "printf" va a mostrar el input que se le dio al prompt

console.log(`${frutaDeVerduleria} es muy rica y le gusta a ${nombre}`); // otra forma de hacer lo mismo

alert(mensajeNavidenio + ' ' + nombre);

console.log(numeroVeinte);

//numeroVeinte = 40;

console.log(numeroVeinte);

// parser

let entrada = prompt("Ingrese Un numero");

let salida = parseInt(entrada) + 20;

console.log(salida);