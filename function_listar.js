import { cursos } from './main.js';
console.log(cursos);


function listarCursos(cursos){

    for (let index = 0; index < cursos.length; index++) {
        
        const curso = cursos[index];
        console.log(`Curso: ${cursos[index].nombre}, Profesor: ${cursos[index].profesor}`)
    }
    
}


//Mostrar todos los nombres de los estudiantes (sin repetir).
function noRepetirEstudiantes(cursos){

 for (let i = 0; cursos.estudiantes[i].nombre.length;i++) {

   curso = cursos.estudiantes[i].nombre
    
   curso.map((estudiante) => {
    if (estudiante.nombre === estudiante.nombre){
        console.log(`Estudiante Duplicado: ${estudiante.nombre}`)
    }
    else {
        console.log(`Estudiante Normal: ${estudiante.nombre}`)
    }
   })
    
 }

  
}




export  {listarCursos, noRepetirEstudiantes}
