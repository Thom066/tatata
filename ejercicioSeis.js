/*
Un estudiante recibe una nota del 0 al 5. Crea condiciones para saber si reprueba,
aprueba o tiene excelente desempeño.
*/

let notaEstudiante = prompt("Ingrese su nota de 0.0 a 5.0: ")
notaEstudiante = parseFloat(notaEstudiante);

if (notaEstudiante < 0.0 || notaEstudiante > 5.0){
    alert("Nota no valida");
}else if(notaEstudiante < 3.0){
    alert("Reprobado");
}else if(notaEstudiante < 4.0){
    alert("Aprobado");
}else{
    alert("Excelente desempeño")
}

