

let x = parseInt(prompt("Ingrese X"));
let y = parseInt(prompt("Ingrese Y"));
let z = parseInt(prompt("Ingrese Z"));

( x > y && x > z ) ? (document.getElementById("parrafo1").innerHTML = "X es mayor" ,
                      document.getElementById("parrafo4").innerHTML = "X es mayorrrr",
                      console.log("hola")): 
( y > x && y > z ) ? (document.getElementById("parrafo1").innerHTML = "Y es mayor",
                      document.getElementById("parrafo4").innerHTML = "Y es mayor",
                      console.log("hola")) : 
( z > x && z > y ) ? (document.getElementById("parrafo1").innerHTML = "Z es mayor",
                      document.getElementById("parrafo4").innerHTML = "Y es mayorrrr",
                      console.log("hola")) :
                     (document.getElementById("parrafo1").innerHTML = "X = Y = Z",
                      document.getElementById("parrafo4").innerHTML = "X === Y === Z",
                      console.log("hola"));
                     

if ( x > y && x > z ) document.getElementById("parrafo2").innerHTML = "X es mayor" 
else if ( y > x && y > z ) document.getElementById("parrafo2").innerHTML = "Y es mayor"
else if ( z > x && z > y ) document.getElementById("parrafo2").innerHTML = "Z es mayor";
else document.getElementById("parrafo2").innerHTML = "X = Y = Z";


if ( x > y && x > z ){
    document.getElementById("parrafo3").innerHTML = "X es mayor" 
} else if ( y > x && y > z ) {
    document.getElementById("parrafo3").innerHTML = "Y es mayor"
}else if ( z > x && z > y ){
    document.getElementById("parrafo3").innerHTML = "Z es mayor";
}else {
    document.getElementById("parrafo3").innerHTML = "X = Y = Z";
}

