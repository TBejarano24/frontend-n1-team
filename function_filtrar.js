import { cursosConSofia, cursosConNotaMayorA8 } from './functions2.js';

const cursos = [
    {
        nombre: "Programación Web",
        profesor: "Kevin",
        estudiantes: [
            { nombre: "Ana", nota: 8 },
            { nombre: "Luis", nota: 6 },
            { nombre: "Sofía", nota: 9 },
            { nombre: "Carlos", nota: 7 }
        ],
    },
    {
        nombre: "Bases de Datos",
        profesor: "Diego",
        estudiantes: [
            { nombre: "Pedro", nota: 5 },
            { nombre: "Sofía", nota: 7 },
            { nombre: "Luis", nota: 4 },
            { nombre: "Ana", nota: 6 }
        ],
    },
    {
        nombre: "Diseño UX/UI",
        profesor: "Lucía",
        estudiantes: [
            { nombre: "Ana", nota: 10 },
            { nombre: "Pedro", nota: 6 },
            { nombre: "Valentina", nota: 9 },
            { nombre: "Carlos", nota: 10 }
        ],
    },
    {
        nombre: "Lógica de Programación",
        profesor: "Martín",
        estudiantes: [
            { nombre: "Luis", nota: 5 },
            { nombre: "Cristina", nota: 8 },
            { nombre: "Ricardo", nota: 9 },
            { nombre: "Sofía", nota: 6 }
        ],
    },
    {
        nombre: "JavaScript Intermedio",
        profesor: "Mariana",
        estudiantes: [
            { nombre: "Kevin", nota: 7 },
            { nombre: "Valentina", nota: 8 },
            { nombre: "Pedro", nota: 9 },
            { nombre: "Ana", nota: 10 }
        ],
    }
];

console.log("Mostrá solo los cursos donde Sofía está como estudiante.\n\n");
const cursosDeSofia = cursosConSofia(cursos);
console.log("Cursos donde Sofía es estudiante:", cursosDeSofia);

console.log("\nMostrá todos los cursos que tienen al menos un estudiante con nota mayor a 8.\n\n");
const cursosConNotasAltas = cursosConNotaMayorA8(cursos);
console.log("Cursos con al menos un estudiante con nota mayor a 8:", cursosConNotasAltas);