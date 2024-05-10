let numero = parseInt(prompt("Escriba su número"));
switch (Math.abs(numero % 2)) {
    case 0:
        console.log("Sú número es par")
        break;
    case 1:
        console.log("Su número es impar")
        break;
    default:
        console.log("Cáracter no permitido.")
        break;
}