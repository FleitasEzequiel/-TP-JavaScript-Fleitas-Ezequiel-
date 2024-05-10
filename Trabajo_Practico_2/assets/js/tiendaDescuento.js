let cantidad = parseInt(prompt("Ingrese la cantidad de productos a llevar"));
let precio = parseInt(prompt("Ingrese el precio individual del producto"))
let precioCantidad = precio * cantidad;
let precioTotal;
if ((cantidad < 1) && (precio < 1)){ "Ingrese un valor mayor a 1"}
else{
if (precioCantidad >= 20000){
    precioTotal = precioCantidad - (precioCantidad / 4);
    console.log("Se aplica un descuento del 25% (",(precioCantidad/4),")")
    console.log("Son ",cantidad, "unidades por $", precio," menos el descuento del 25% (", (precioCantidad/4), ")El precio total es: $", precioTotal)
}
else {
    console.log("No se aplica el descuento");
    console.log("Son ",cantidad, " por $", precio,", el precio total es: $", precioCantidad)

}}