//Yo pensé que era de órden ascendente y descendente, disculpe.
let numero1 = Number.parseFloat(prompt("Escriba el primer número"));
let numero2 = Number.parseFloat(prompt("Escriba el segundo número"));
let numero3 = Number.parseFloat(prompt("Escriba el tercer número"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
    console.log("No es posible organizar debido a que un dígito no es válido") //Validación de Datos
} else{
if (numero1 >= numero2 && numero1 >= numero3){
    if (numero2 >= numero3){
        console.log("El orden descendente de los números es " + numero1 + "," + numero2 + "," + numero3)
        console.log("El orden ascendente de los números es " + numero3 + "," + numero2 + "," + numero1)
    }
    else{
        console.log("El orden descendente de los números es " + numero1 + "," + numero3 + "," + numero2 );
        console.log("El orden ascendente de los números es " + numero2 + "," + numero3 + "," + numero1)
    }
}
else if (numero2 >= numero1 && numero2 >= numero3){
    if (numero1 >= numero3){
        console.log("El orden descendente de los números es " + numero2 + "," + numero1 + "," + numero3)
        console.log("El orden ascendente de los números es " + numero3 + "," + numero1 + "," + numero2)
    }
    else{
        console.log("El orden descendente de los números es " + numero2 + "," + numero3 + "," + numero1 );
        console.log("El orden ascendente de los números es " + numero1 + "," + numero3 + "," + numero2)
    }
}
else if (numero3 >= numero2 && numero3 >= numero1){
    if (numero2 >= numero1){
        console.log("El orden descendente de los números es " + numero3 + "," + numero2 + "," + numero1)
        console.log("El orden ascendente de los números es " + numero1 + "," + numero2 + "," + numero3)
    }
    else{
        console.log("El orden ascendente de los números es " + numero1 + "," + numero2 + "," + numero3 );
        console.log("El orden descendente de los números es " + numero3 + "," + numero2 + "," + numero1)
    }
}}