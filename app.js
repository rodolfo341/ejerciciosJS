

let x = parseInt(prompt("Ingrese X"));
let y = parseInt(prompt("Ingrese Y"));
let z = parseInt(prompt("Ingrese Z"));


let mayor = ( x > y && x > z ) ? "El mayor es X" : 
            ( y > x && y > z ) ? "El mayor es Y" :
            ( z > x && z > y ) ? "El mayor es Z" :
                                 "Son todos iguales" ;

document.getElementById("parrafo2").innerHTML = mayor; 
