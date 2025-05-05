
export default function calcularPromedio() {
  const curso = cursos.find(curso => curso.nombre === "Programación Web");

  const sumaNotas = curso.estudiantes.reduce((total, estudiante) => total + estudiante.nota, 0);
  const promedio = sumaNotas / curso.estudiantes.length;  // Calcular el promedio de notas
  
  return promedio;
}

const promedioWeb = calcularPromedio();
console.log(`El promedio de notas en Programación Web es: ${promedioWeb}`);