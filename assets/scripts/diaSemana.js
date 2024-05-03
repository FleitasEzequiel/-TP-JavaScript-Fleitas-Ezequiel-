let dia = parseInt(prompt("Ingrese un número del 1 al 7"))
switch (dia) {
    case 1:
        console.log("El día de la semana es Lunes")
        break;
    case 2:
        console.log("El día de la semana Martes")
    case 3:
        console.log("El día de la semana Miércoles")
    case 4:
        console.log("El día de la semana Jueves")
        break;
    case 5:
        console.log("El día de la semana Viernes")
        break;
    case 6:
        console.log("El día de la semana Sábado")
        break;
    case 7:
        console.log("El día de la semana Domingo")
        break;
    default:
        console.log("Valor no válido")
        break;
}