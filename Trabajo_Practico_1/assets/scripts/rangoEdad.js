let edad = (prompt("Escriba edad."));
if (edad < 0 || edad > 120){ //Conocí casos de gente que vivió más de 100 años
    console.log("La edad introducida no es válida.")
}
else if (edad <= 12){
    console.log("Es un niño.")
}
else if (edad >= 13 && edad <= 19){
    console.log("Es un adolescente.")
}
else if (edad >= 20 && edad <= 59){
    console.log("Es un adulto")
}
else if (edad >= 60){
    console.log("Es un adulto mayor.")
}
else{
    console.log("No es un número.")
} ;