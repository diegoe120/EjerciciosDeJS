/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */

//opcional ForEach (ojo tambien document.write)

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

/* b)Eduardo es descalificado y se elimina del concurso */

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */

// Punto 1
clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"];

// Punto 2

function mostrarClasificacion() {
    clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"];
    for (let i = 0; i <= clasificaciones.length; i++) {
        console.log(clasificaciones[i]);
    }
};
mostrarClasificacion()

//Usando ForEach (ojo tambien document.write)

// function mostrarClasificacion() {
//     clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"];
//     clasificaciones.forEach(e => document.write(` listado clasificacion : ${e} <br>`));
// }
// mostrarClasificacion()

// Punto 3

clasificaciones = ["Marcos", "Franco", "Agostina", "Leon", "Juan Cruz", "Eduardo"];
/* a)Leon adelanta a Agostina */
clasificaciones[2] = "Leon";
clasificaciones[3] = "Agostina";
// aqui tambien podria haber utilizado splice() clasificaciones.splice(2, 2, "Leon", "Agostina")
/* b)Eduardo es descalificado y se elimina del concurso */
clasificaciones.pop();
/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */
clasificaciones.splice(1, 0, "Julieta", "Martina");
/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */
clasificaciones.unshift("Alicia");

console.log(clasificaciones)

function mostrarClasificacion() {

    clasificaciones.forEach(e => document.write(` listado clasificacion : ${e} <br>`));
}
mostrarClasificacion(clasificaciones)