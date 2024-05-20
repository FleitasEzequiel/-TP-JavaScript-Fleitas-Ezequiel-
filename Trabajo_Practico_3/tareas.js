let eleccion = 1;
let tareas = []
function aniadirTarea(nombre) { 
    switch (true) {
        case (nombre === ''):
            alert('No se puede agregar una tarea vacía.')
            break;
        case ((nombre.charAt(0) == ' ')):
            alert('No se puede agregar una tarea con espacios al principio.')
            break;
        case ((nombre.charAt(nombre.length - 1) == ' ')):
            alert('No se puede agregar una tarea con un espacio al final.')
            break;
        default:
            tareas.push(nombre)
            break;
    }}
function listarTareas(){
    if (tareas.length <= 0){
        alert('No hay tareas pendientes')
    }else{
    alert('Lista de Tareas: \n' + tareas.join('\n'))}
}
function editarTareas(nombre){
    if (tareas.includes(nombre)){
        let nuevoNombre = prompt("Escribir nuevo nombre para la tarea:");
        switch (true) {
            case (nuevoNombre === ''):
                alert('No se puede agregar una tarea vacía.')
                break;
            case ((nuevoNombre.charAt(0) == ' ')):
                alert('No se puede agregar una tarea con espacios al principio.')
                break;
            case ((nuevoNombre.charAt(nuevoNombre.length - 1) == ' ')):
                alert('No se puede agregar una tarea con un espacio al final.')
                break;
            default:
                alert('Se cambió la tarea ' + nombre + " --> " + nuevoNombre);
                tareas[tareas.indexOf(nombre)] = nuevoNombre;
                break;
    }
        }
        else{
            alert('No existe esa tarea')
        }
}

function eliminarTarea(nombre){
    if (tareas.includes(nombre)){
        alert('Se eliminó la tarea ' + nombre);
        tareas.splice(tareas.indexOf(nombre),1)
    } else{
        alert('No existe esa tarea')
    }}
while (eleccion !== 0){
    eleccion = parseInt(prompt(" 0-Salir \n 1- Escribir Tarea \n 2- Listar Tareas \n 3- Editar Tareas \n 4- Eliminar Tareas"));
    switch (eleccion) {
        case 0:
            alert("¡Hasta Pronto!");
            break;
        case 1:
            aniadirTarea(prompt("Escriba el nombre de la tarea a agregar:"));
            break;
        case 2:
            listarTareas();
            break;
        case 3:
            editarTareas(prompt("Nombre original de la tarea:"));
            break;
        case 4:
            eliminarTarea(prompt("Nombre de la tarea a eliminar:"));
            break;

        default:
            alert("Escriba alguna de las opciones anteriores")
            break;
    }
}