let cantidad = parseInt(prompt("Ingrese la cantidad de productos a llevar"));
let precio = parseInt(prompt("Ingrese el precio individual del producto"))
let precioCantidad = precio * cantidad;
let precioTotal;
if (isNaN(cantidad) || isNaN(precio)){
    console.log("Ingrese un valor válido")
} else{if ((cantidad < 1) || (precio < 1)){ "Ingrese un valor mayor a 1"}
else{
if (cantidad >= 10 && precioCantidad >= 20000){
    precioTotal = precioCantidad - (precioCantidad * 0.15);
    console.log("Se aplica un descuento del 15% (",(precioCantidad*0.15),")");
    console.log("Son ",cantidad, " por $", precio,"(", precioCantidad,") menos el descuento del 15% (", (precioCantidad*0.15),"el precio total es: $", precioTotal)
}
else {
    console.log("No se aplica el descuento");
    console.log("Son ",cantidad, " por $", precio,", el precio total es: $", precioCantidad)
}}}