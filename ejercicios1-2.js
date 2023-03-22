/* pasar las funciones a funcion flecha */

/* pasar los if a if: ternario */

/* concatenar con backstick - plantilla literal - (altGr+}o (alt96)) */


/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


/* function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
console.log(str)
}
devolverString("Cadena de texto") */

// funcion flecha
/* let devolverString2 = (str)=>{
  console.log(str)
}
devolverString2("Cadena de texto") */

let devolverString2 = str => str; console.log(devolverString2("Cadena de texto"));
/* 
function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
return(x+y);   // opcion con return
}
console.log(suma(10, 10)); */

//funcion flecha
let sumar = (x, y) => {
    console.log(x + y);
}
sumar(10, 10)

function resta(x, y) {
    // Resta "x" de "y" y devuelve el valor
    // Tu código:
    console.log(x - y);
}
resta(10, 5)

let resta = (x, y) => { console.log(x - y) };

function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    /*   console.log(x) */
    console.log(x * y);
}
multiplica(8, 4)

let multiplica = (x, y) => { console.log(x * y) };

/* console.log(x) */   // concepto de scope

function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    console.log(x / y);
}
divide(21, 7)

let divide = (x, y) => { console.log(x / y) };

function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:utilizar if y else
    if (x === y) {
        console.log(true);
    } else {
        console.log(false);
    }

    //if ternario
    (x === y) ? console.log(true) : console.log(false)

    /* console.log((x===y)); */
}
sonIguales(2, 2)

let donIguales = (x, y) => { (x === y) ? console.log(true) : console.log(false) };

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    /*   console.log(str1.length===String(str2).length);   */
    console.log(str1.length === str2.length);
}
tienenMismaLongitud("Hola", "1234")

let tienenMismaLongitud = (str1, str2) => { str1.length === str2.lengt };


function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    console.log(num < 90);
}
menosQueNoventa(89)

let menosQueNoventa = (num) => { console.log(num < 90) };


function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    console.log(num > 50);
}
mayorQueCincuenta(49)

let = mayorQueCincuenta = (num) => { console.log(num > 50) };


function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    console.log(x % y);
}
obtenerResto(22, 7)

let obtenerResto = (x, y) => { console.log(x % y) };


function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    console.log(num % 2 === 0);

}
esPar(10)

let esPar = (num) => { console.log(num % 2 === 0) };


function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    console.log(num % 2 !== 0)
    console.log(num % 2 === 1)
}
esImpar(1147)

let esImpar = (num) => { (num % 2 !== 0) ? console.log(true) : console.log(false) };


function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    console.log(Math.pow(num, 2));
}
elevarAlCuadrado(8)

let elevarAlCuadrado = (num) => { console.log(Math.pow(num, 2)) };


function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    console.log(Math.pow(num, 3));
}
elevarAlCubo(3)

let elevarAlCubo = (num) => { console.log(Math.pow(num, 3)) };

function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    console.log(Math.pow(num, exponent));
}
elevar(8, 2)

let elevar = (num, exponent) => { console.log(Math.pow(num, exponent)) };

function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    console.log(Math.round(num));
}
redondearNumero(6.3)

let redondearNumero = (num) => { console.log(Math.round(num)) };

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    console.log(Math.ceil(num));
}
redondearHaciaArriba(6.1)

let redondearHaciaArriba = (num) => { console.log(Math.ceil(num)) };

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
/* console.log(Math.trunc(Math.random()*10)) */;

    console.log(Math.random())
}
numeroRandom()

let numeroRandom = (first) => { console.log(Math.random) };

function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false

    if (numero > 0) {
        console.log("ES positivo");
    } else if (numero < 0) {
        console.log("ES Negativo");
    } else {
        console.log(false);
    }
    //if ternario
    (numero > 0) ? console.log("ES positivo") : (numero < 0) ? console.log("ES Negativo") : console.log(false);

}
esPositivo(-1)

let esPositivo = (numero) => { (numero > 0) ? console.log("Es Positivo") : (numero < 0) ? console.log("Es Negativo") : console.log(false) };

function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    console.log(str + "!");
}
agregarSimboloExclamacion("Hoy llueve")

let agregarSimboloExclamacion = (str) => { console.log(`${str} !`) };

function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
    // Tu código:
    console.log("Hola como estas " + nombre + " " + apellido);
    console.log(`Hola como estas ${nombre} tu apellido es ${apellido}`);
}
combinarNombres("Gustavo", "Ballas")

let combinarNombres = (nombre, apellido) => { console.log(`Hola como estas ${nombre} tu apellido es ${apellido}`) };

function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    console.log("Hola " + nombre);
}
obtenerSaludo("Martin")

let obtenerSaludo = (nombre) => { console.log(`Hola ${nombre}`) };

function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un cuadrado teniendo su altura y ancho
    // Tu código:
    console.log(ancho * alto);
}
obtenerAreaRectangulo(5, 3)

let obtenerAreaRectangulo = (alto, ancho) => { console.log(alto * ancho) };

function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    console.log(lado * 4);
}
retornarPerimetro(4)

let retornarPerimetro = (lado) => { console.log(lado * 4) };

function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    console.log((base * altura) / 2);
}
areaDelTriangulo(10, 8)

let areaDelTriangulo = (base, altura) => { console.log((base * altura) / 2) };

function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. 
    //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    console.log(euro * 1.20);

}
deEuroAdolar(20)

let deEuroAdolar = (euro) => { console.log(euro * 1.2) };

function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
    //Escribe tu código aquí
    /*  letra = letra.toLowerCase() */
    if (letra.length !== 1) {
        console.log("dato incorrecto ingresaste mas de un caracter");
    } else if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        console.log("ingreaste la letra " + letra + " ES VOCAL")
    } else {
        console.log("ingreaste la letra " + letra + " NO ES VOCAL")
    }

}
esVocal("A")

let esVocal = (letra) => { (letra.lengt !== 1) ? console.log("Dato incorrecto ingresaste mas de 1 caracter") : (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") ? console.log(`ingresaste la letra ${letra} Es Vocal`) : console.log(`ingresaste la letra ${letra} No es Vocal`) };

// Resolucion de esVocal con una expresion regular.

// otros Metodos para el ultimo ejercicio (con ayuda externa)

function esVocal2(letra) {
    if (letra.length !== 1) {
        console.log("Error: Ingresa una única letra");
        return "Error: Ingresa una única letra";
    }

    let vocal = /[aeiou]/i.test(letra); // Lo que se encuentra entre barras es una expresion regular se utiliza para realizar funciones de busqueda y reemplazo de conincidencia de patrones de texto. Aqui lo que estoy buscando es una vocal la "i" cumple la funcion de ignorar si son minusculas o mayusculas, a la expresion se le aplica el metodo test() para verficar si hay una coincidencia devolviendo un true o false. La coincidencia la asigno a la variable vocal. aqui esta en ingles bien explicado https://www.w3schools.com/js/js_regexp.asp

    if (vocal) {
        console.log("La letra ingresada es una vocal");
        return;
    } else {
        console.log("La letra ingresada no es una vocal");
        return;
    }
}
let vocal = ""; // declaro la variable
let esVocal = (letra) => { (letra.length !== 1) ? (console.log(`Error debes ingresar solo 1 letra`)) : (vocal = /[aeiou]/i.test(letra)) ? (console.log(`La letra ${letra} es una vocal`)) : (console.log(`La letra ${letra} no es una vocal`)) };

//En caso de querer usar el metodo includes() de array es preciso primero en convertir en minusculas o mayusculas los valores de la variable con el metodo toLowerCase()
letra = letra.toLowerCase();
vocal = letra.includes('a', 'e', 'i', 'o', 'u');