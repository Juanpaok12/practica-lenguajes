// Ejercicio 1: variables
const nombre = "Juan Pablo";
const edad = 18;
console.log("Me llamo " + nombre + " y tengo " + edad + " años.");

// Ejercicio 2: funcion sumar
function sumar(a, b) {
    return a + b;
}
console.log(sumar(3, 4));

// Ejercicio 3: 
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Ejercicio 4:
const materias = ["Matemáticas", "Física", "Programación", "Inglés", "Análisis de sistemas"];
for (const materia of materias) {
    console.log(materia);
}

// Ejercicio 5:
const estudiante = {
    nombre: "Juan Pablo",
    ficha: 3388937,
    programa: "Análisis de sistemas"
};
    console.log(estudiante.nombre);
    console.log(estudiante.ficha);
    console.log(estudiante.programa);
