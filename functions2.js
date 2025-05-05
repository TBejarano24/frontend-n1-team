export function cursosConSofia(cursos) {
    return cursos.filter(curso =>
        curso.estudiantes.some(estudiante => estudiante.nombre === "Sofía")
    );
}

export function cursosConNotaMayorA8(cursos) {
    return cursos.filter(curso =>
        curso.estudiantes.some(estudiante => estudiante.nota > 8)
    );
}