// for (let i = 1; i <= 10; i++) {
//     console.log("Saludos");
//     console.log(i);
// }

//1 lunes, 2 martes, 3 miercoles, 4 jueves, 5 viernes, 6 sabado, 7 domingo
// CONTINUE

// for (let = i = 1; i <= 7*3; i++) {
//     if (i == 6 || i == 7 || i == 13 || i == 14 || i == 20 || i == 21) {
//     continue;
//     }
//     console.log(`Hoy es el día ${i} y se trabaja`);
// }

//BREAK

// chofer de bondi, tiene que bajar 10 personas
// parada 1 se bajan 2 personas
// parada 2 se bajan 3 personas
// parada 3 se bajan 5 personas

// let pasajeros = 10;
// let primeraParada = 8;
// let segundaParada = 5;
// let terceraParada = 0;
// let colectivoRoto = false;

// for (let i = pasajeros; i >= 0; i--){
//     console.log(i);
//     if (i == primeraParada){
//         console.log(`Primera parada se bajan ${2}, quedan ${(pasajeros -= 2)}`);
//     } else if (i == segundaParada){
//         console.log(`Segunda parada se bajan ${3}, quedan ${(pasajeros -= 3)}`);
//         colectivoRoto = true;
//     } else if (i == terceraParada){
//     console.log(`Tercera parada se bajan ${5}, quedan ${(pasajeros -= 5)}`);
//     }

//     if (colectivoRoto){
//         console.log("Hay que arreglar el bondi");
//         break;
//     }
// }

//Contar una historia hasta FIN usando WHILE

// let entrada = prompt ("Contanos tu historia");
// //Repetimos con WHILE hasta que el usuario ingresa "FIN"
// while (entrada != "FIN"){
//     console.log(`${entrada}`);
//     //Volvemos a solicitar el dato. en la proxima iteracion evalua si no se escribió FIN
//     entrada = prompt ("siue contando tu historia");
// }


//DO WHILE

/* tenemos que hacer una mayonesa, y la receta dice que tenemos que batir 3 minutos
si bato de menos, no se hace
si bato de mas, se corta
si bato justo, habemos mayonesa


let continuarBatiendo = true;
let batidas = 0;

do{
    let preguntarBatir = prompt ('sigo batiendo? Y / N').toUpperCase();
    if(preguntarBatir == 'N'){
        if(batidas > 3){
            console.log('Se te cortó la mayonesa');
            continuarBatiendo = false;
        }
        else if(batidas == 3){
            console.log('Habemus Mayonesa!');
            continuarBatiendo = false;
        }
        else if(batidas < 3){
            console.log('no se hizo');
            continuarBatiendo = false;
    }
} else if ( preguntarBatir == 'Y'){
    batidas++;
    console.log(`Van ${batidas} batidas`);
} else {
    console.log(`ponete a batir`);
}
} while (continuarBatiendo);

*/

/* SWITCH
let mes = prompt ('ingresá el mes que naciste').toLowerCase();

switch(mes){
    case 'enero':
        console.log('Felicitaciones por cumplir en Enero');
        break;
    case 'febrero':
        console.log('Felicidades por cumplir en Febrero');
        break;
    default:
        console.log('No conozco todos los meses');
        break;

}*/

let cont = 0;
let condicional = true;
do {
    cont++;
    console.log(cont);
    if (cont == 10000){
        condicional = false;
    }
} while (condicional);