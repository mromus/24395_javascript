/*const ingrediente = {nombre: "tomate", cantidad: "2KG"}; // con CONST, fija el hecho que el objeto se mantenga como un objeto, en cuanto a LET, habilita que se pueda modificar
ingrediente.cantidad = "1KG";
console.log(ingrediente.cantidad);*/

function ingrediente (nombre, cantidad, unidadDeMedida){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.unidadDeMedida = unidadDeMedida; // el THIS lo que hace es darle nombre a la propiedad
    this.utilizarIngrediente = (cantidadAUsar) => {
        this.cantidad -= cantidadAUsar;
        console.log(`Se redujo la cantidad a ${this.cantidad} ${unidadDeMedida}`);
    };
}

const ingrediente1 = new ingrediente("Tomate", 2, "KG");
const ingrediente2 = new ingrediente("Agua", 500, "ML");

//let cadena = "asd";

console.log(ingrediente1);
// alert(ingrediente1.nombre);
// console.log(ingrediente2["cantidad"]);
ingrediente1.utilizarIngrediente(1);
console.log(ingrediente1);