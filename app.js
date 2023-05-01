
/*
Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no
*/

let num = prompt("Ingrese un número");

( num % 5 === 0 && num % 11 === 0 ) 
? document.getElementById("parrafo1").innerHTML = "Es divisible por 5 y 11" 
: document.getElementById("parrafo1").innerHTML = "No es divisible por 5 y 11";


if ( num % 5 === 0 && num % 11 === 0) {
    document.getElementById("parrafo2").innerHTML = "Es divisible por 5 y 11";
}else{
    document.getElementById("parrafo2").innerHTML = "No es divisible por 5 y 11";
}

