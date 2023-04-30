
7/*
Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma.
*/

let gCelcius = parseInt(prompt("ingrese grados celcius"));

let gFerenhaid = ( gCelcius * ( 9 / 5 ) ) + 32;

document.getElementById("parrafo1").innerHTML = gCelcius + "C° son = " + gFerenhaid + " F°";

