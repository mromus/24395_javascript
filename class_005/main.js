const ingrediente = {nombre: "tomate", cantidad: "2KG"}; // con CONST, fija el hecho que el objeto se mantenga como un objeto, en cuanto a LET, habilita que se pueda modificar
ingrediente.cantidad = "1KG";
console.log(ingrediente.cantidad);

/*function Ingrediente (nombre, cantidad, unidadDeMedida){
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.unidadDeMedida = unidadDeMedida; // el THIS lo que hace es darle nombre a la propiedad
    this.utilizarIngrediente = (cantidadAUsar) => {
        this.cantidad -= cantidadAUsar;
        console.log(`Se redujo la cantidad a ${this.cantidad} ${unidadDeMedida}`);
    };
}*/

class Ingrediente {
    constructor(nombre, cantidad, UnidadDeMedida){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.UnidadDeMedida = UnidadDeMedida;
    }
}

function utilizarIngrediente(cantidadAUsar){
    this.cantidad -= cantidadAUsar;
    console.log(`Se redujo la cantidad a ${this.cantidad} ${unidadDeMedida}`);
};

const ingrediente1 = new Ingrediente("Tomate", 2, "KG");
const ingrediente2 = new Ingrediente("Agua", 500, "ML");

//let cadena = "asd";

console.log(ingrediente1);
// alert(ingrediente1.nombre);
// console.log(ingrediente2["cantidad"]);
ingrediente1.Ingrediente(1);
console.log(Ingrediente);