let eleccion = 1;
let tareas = []
function aniadirTarea(nombre) { 
    tareas.push(nombre)
}
function listarTareas(){
    alert('Lista de Tareas: ' + tareas)
}
function editarTareas(nombre){
    for (let i = 0; i < (tareas.length); i++ ){
        if (tareas[i].toUpperCase() == nombre.toUpperCase()) {
            console.log(tareas[i])
            tareas[i] = prompt("Escriba el nuevo nombre de la tarea")
        }
    } 

}
function eliminarTarea(nombre){
    for (let i = 0; i < (tareas.length); i++ ){
        console.log(tareas[i])
        if (tareas[i].toUpperCase() == nombre.toUpperCase()) {
            console.log(tareas[i])
            tareas.splice(nombre, 1)
        }
    } 

}
while (eleccion !== 0){
    eleccion = parseInt(prompt(" 0-Salir \n 1- Escribir Tarea \n 2- Listar Tareas \n 3- Editar Tareas \n 4- Eliminar Tareas"));
    switch (eleccion) {
        case 0:
            alert("Hasta Pronto")
            break;
        case 1:
            aniadirTarea(prompt("Escriba el nombre de la tarea a agregar"));
            break;
        case 2:
            listarTareas();
            break;
        case 3:
            editarTareas(prompt("Nombre original de la tarea"));
            break;
        case 4:
            eliminarTarea(prompt("Nombre de la tarea a eliminar"));
            break;

        default:
            alert("Escriba alguna de las opciones")
            break;
    }
}