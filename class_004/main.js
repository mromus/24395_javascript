/*
let saludo = 'hola que tal';
console.log(saludo);

let usuarioIngresado;
let contraseniaIngresada;

function solicitarCredenciales(){
    usuarioIngresado = prompt("Ingrese el Usuario");
    contraseniaIngresada = prompt("Ingrese contraseña");
}
/*
function solicitarCredenciales(usuario, contrasenia){
    usuarioIngresado = usuario
    contraseniaIngresada = contrasenia
}
*/
/*
function loginUsuario(usuario, contrasenia){
    if (usuario == "admin" && contrasenia == "asd123"){
        console.log("Ingreso Exitoso");
    } else {
        console.error("Credenciales incorrectas");
    }
}

function cambioDeContasenia(usuario) {
    if (usuario == "Pedro" || usuario == "Sora" || usuario == "Candela") {
        let solicitaContraseniaNueva = prompt("Ingrese nueva contrasenia");
        contraseniaIngresada = solicitaContraseniaNueva;
        return "Cambio de contrasenia exitoso";
    } else {
        return "Al usuario ingresado no se le puede cambiar la contrasenia";
    }
}

solicitarCredenciales();
loginUsuario(usuarioIngresado, contraseniaIngresada);

solicitarCredenciales();
console.log(cambioDeContasenia(usuarioIngresado));
*/

/*
function sumar(numero1, numero2){
    return numero1 + numero2;
    console.log(numero1)
}

console.log(sumar(5, 8));
console.log(sumar(5, 5));
console.log(sumar(12, 12));
*/
/*
const suma = function (numero1, numero2) {
    return numero1 + numero2;
};

console.log(suma(1, 2));
*/

// Manejo de DOM
/*
let boton = document.getElementById("botonSaludar");

boton.addEventListener("click", () =>{
    console.log("Hola");
});
*/

//agregar la primer letra al principio y final de la palabra
/*
function agregarLetra(palabra){
    let primeraLetra = palabra.substr(0, 2);
    return `${primeraLetra}${palabra}${primeraLetra}`;
}

console.log(agregarLetra("Banana"));
*/

/*
tenemos dos monos, si los dos, o ninguno sonrie estamos en problemas,
si estamos en problemas devolver TRUE
*/

function problemas(sonrisa1, sonrisa2) {
    if(
        (sonrisa1 == true && sonrisa2 == true) ||
        (sonrisa1 == false && sonrisa2 == false)
    ) {
        return true;
    } else 
    return false;
}