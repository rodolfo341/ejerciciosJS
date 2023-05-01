

let palabra = prompt("Ingrese una palabra");

let letra = palabra.charAt(0);
let esNumero = false;


( letra === "1" ) ? esNumero = true :
( letra === "2" ) ? esNumero = true :
( letra === "3" ) ? esNumero = true :
( letra === "4" ) ? esNumero = true :
( letra === "5" ) ? esNumero = true :
( letra === "6" ) ? esNumero = true :
( letra === "7" ) ? esNumero = true :
( letra === "8" ) ? esNumero = true :
( letra === "9" ) ? esNumero = true :
( letra === "0" ) ? esNumero = true :
                    esNumero = false;

( esNumero === true) ? document.getElementById("parrafo1").innerHTML = "Primer caracter es número"
: document.getElementById("parrafo1").innerHTML = "Primer caracter es letra"; 




