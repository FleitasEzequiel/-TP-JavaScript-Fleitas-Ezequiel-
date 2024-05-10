let nota1 = parseInt(prompt("Ingrese la nota del primer Promedio"));
let nota2 = parseInt(prompt("Ingrese la nota del segundo Promedio"));
let nota3 = parseInt(prompt("Ingrese la nota del tercer Promedio"));
if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
    console.log("Uno de los promedios no tiene un valor válido")
}
if ((nota1 < 0 || nota1>10) || (nota2 <0 || nota2>10) || (nota3<0 || nota3> 10)){
    console.log("Uno de los promedios no tiene un valor válido")
}
else{
let promedio = (nota1 + nota2 + nota3) / 3;
switch (Math.round(promedio)) {  
        case (1) || (2) || (3):
            console.log("NOTA INSUFICIENTE")
            break;
        case (4) || (5):
            console.log("NOTA REGULAR")
            break;
        case (6) || (7):
            console.log("NOTA BUENA")
            break;
        case (8) || (9):
            console.log("NOTA MUY BUENA")
            break;
        case 10:
            console.log("NOTA SOBRESALIENTE")
            break;
        default:
            console.log("ERROR");
            break;
}console.log("Su promedio es: ", promedio)}