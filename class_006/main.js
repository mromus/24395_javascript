class Persona {
    constructor(nombre, apellido, colorOjos, colorCabello, altura);
    this.nombre = nombre;
    this.apellido = apellido;
    this.colorOjos = colorOjos;
    this.colorCabello = colorCabello;
    this.altura = altura;
}

nombreCompleto(){
    return `${this.nombre} ${this.apellido}`;
}

darDinero(cantidad){
    this.dinero += cantidad;
}

const persona1 = new Persona("Elizabeth", "Lannet", "Azul", "Negro", 1.68);
const persona2 = new Persona("Luminis", "Flagrantis", "Marron", "Rubio", 1.69);
const persona3 = new Persona("Straslantic", "Flagrantis", "Verde", "Rubio", 1.76);
const persona4 = new Persona("Clara", "Olum", "Miel", "Rubia", 1.74);

const personas = [];
console.log(personas);
personas.push(persona1, persona2, persona3, persona4);

for(const elementoPersona of personas) {
    //elementoPersona va a valer personas[0] en la primera vuelta
    //elementoPersona va a valer personas[1] en la segunda vuelta
    //elementoPersona va a valer personas[2] en la tercera vuelta
    //elementoPersona va a valer personas[3] en la cuarta vuelta
    console.log(elementoPersona); //personas[]
}