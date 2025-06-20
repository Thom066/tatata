/*
7. Un semáforo tiene tres colores. Dependiendo del color, se debe mostrar una
acción: avanzar, detenerse o esperar.
*/

let semaforo = prompt ("En que color esta el semaforo?\nSelecciona una opcion de 1 a 3\n 1. Verde\n 2. Amarillo\n 3. Rojo");

semaforo = Number(semaforo);
if(notaEstudiante < 1 || notaEstudiante > 3){
    alert("Opcion no valida");
}else if (semaforo == 1){
    alert("Avanzar");
}else if (semaforo == 2){
    alert("Detenerse")
}else{
    alert("Esperar")
}