/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */


// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Pedro";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 34;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


function devolverString(str) {
    // "Return" la string provista: str
    // Tu código:

    console.log(str)
    return str;
}
devolverString("Cadena de texto")


function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    let resultadoSuma = x + y;
    console.log(resultadoSuma);
    return resultadoSuma;
}
suma(2, 3)

function resta(x, y) {
    // Resta "x" de "y" y devuelve el valor
    // Tu código:
    let resultadoResta = x - y;
    console.log(resultadoResta);
    return resultadoResta;
}

function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    let resultadoMultiplicar = x * y;
    console.log(resultadoMultiplicar);
    return resultadoMultiplicar;
}

function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    let resultadoDividir = x / y;
    console.log(resultadoDividir);
    return resultadoDividir;
}

function sonIguales(x, y) {
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:utilizar if y else
    if (x === y) {
        resultadoSonIguales = "Felicitaciones las variables son iguales "
    } else {
        resultadoSonIguales = "Las variables son distintas"
    };
    console.log(resultadoSonIguales)
    return resultadoSonIguales;
}
sonIguales("2", 2)

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if ((typeof str1 !== "string") || (typeof str2 !== "string")) {
        resultadoDeML = "las variables tienen que ser cadenas de caracteres"
        console.log(resultadoDeML);
        return false;
    }

    if (str1.length === str2.length) {
        resultadoML = "Felicitaciones las variables tienen la misma longitud";
        console.log(resultadoML)
        return true;
    } else {
        resultadoML = "Las variables tienen distinta longitud";
        console.log(resultadoML)
        return false;
    };
}
tienenMismaLongitud("12345", "34678")

function menosQueNoventa(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que noventa
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num <= 90) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false;
    }
}
menosQueNoventa(91)

function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:
    if (num > 50) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false;
    }
}
mayorQueCincuenta(51)

function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y"
    // Tu código:
    resto = (x % y);
    console.log(resto);
    return resto;
}
obtenerResto(12, 5)


function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    let resto = (num % 2);
    if (resto === 0) {
        console.log(`El numero ${num} es par`);
        return true;
    } else {
        console.log(`El numero ${num} es impar`);
        return false;
    }
}
esPar(4);
esPar(7);


function esImpar(num) {
    // Devuelve "true" si "num" es impar
    // De lo contrario, devuelve "false"
    // Tu código:
    let resto = (num % 2);
    if (resto !== 0) {
        console.log(`El numero ${num} es impar`);
        return true;
    } else {
        console.log(`El numero ${num} es par`);
        return false;
    }
}
esImpar(9);
esImpar(4);

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    // Con Math
    //let resultado = (Math.pow(num, 2));
    let resultado = (num * num);
    console.log(resultado);
    return resultado;
}
elevarAlCuadrado(9)

function elevarAlCubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    // Tu código:
    let resultado = (Math.pow(num, 3));
    console.log(resultado);
    return resultado;
}
elevarAlCubo(2);
elevarAlCubo(3);

function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    let resultado = (Math.pow(num, exponent));
    console.log(resultado);
    return resultado;
}

function redondearNumero(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    // Tu código:
    let resultado = (Math.round(num));
    console.log(resultado);
    return resultado;
}

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    // Tu código:
    let resultado = (Math.ceil(num));
    return resultado;
}

function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    //Pista: investigá qué hace el método Math.random()
    let resultado = (Math.random());
    return resultado;
}

function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    let resultado = (Math.sign(numero));
    resFinal = (resultado === 1) ? "ess positivo" : (resultado === -1) ? "ess negativo" : "false";
    console.log(resFinal);
    if (numero > 0) {
        console.log("Es positivo");
    } else if (numero < 0) {
        console.log("es negativo");
    } else {
        console.log("false");
        return false;
    }

    return resultado;
}
esPositivo(0)

function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "hello world" pasaría a ser "hello world!"
    // Tu código:
    resultado = `${str}!`;
    console.log(resultado);
    return resultado;
}
agregarSimboloExclamacion("hola mundo")

function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
    // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
    // Tu código:
    if ((nombre === "Bruce") && (apellido === "Wayne")) {
        document.write("Im Batman! ");
    } else {
        document.write(` Hola soy ${nombre}, ${apellido} `);
    }
}
combinarNombres("Bruce", "Wayne")
combinarNombres("Diego", "E")

function obtenerSaludo(nombre) {
    // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
    // "Martin" -> "Hola Martin!"
    // Tu código:
    // saludo = `Hola ${nombre}!`;
    saludo = "hola " + nombre + "!";
    console.log(saludo);
    return saludo;
}
obtenerSaludo("David")

function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un cuadrado teniendo su altura y ancho
    // Tu código:
    area = (alto * ancho);
    console.log(area);
}
obtenerAreaRectangulo(4, 6)

function retornarPerimetro(lado) {
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    perimetro = lado * 4;
    console.log(perimetro);
}
retornarPerimetro(4)

function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    area = (base * altura) / 2;
    console.log(area);
}
areaDelTriangulo(4, 6)

function deEuroAdolar(euro) {
    //Supongamos que 1 euro equivale a 1.20 dólares. 
    //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    const dolar = 1.2;
    conversion = euro * dolar;
    console.log(conversion);
}
deEuroAdolar(10)

function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
    //Escribe tu código aquí
    letra = letra.toLowerCase();
    if (letra.length !== 1) {
        console.log("Dato Incorrecto, solo se puede ingresar 1 caracter");

    } else if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        console.log("es vocal");
    } else {
        console.log("dato incorrecto");
    };

}
esVocal("e")

// otros Metodos para el ultimo ejercicio (con ayuda externa)

function esVocal2(letra) {
    if (letra.length !== 1) {
        console.log("Error: Ingresa una única letra");
        return "Error: Ingresa una única letra";
    }

    let vocal = /[aeiou]/i.test(letra);

    if (vocal) {
        console.log("La letra ingresada es una vocal");
        return;
    } else {
        console.log("La letra ingresada no es una vocal");
        return;
    }
}
let vocal = "";
let esVocal = (letra) => { (letra.length !== 1) ? (console.log(`Error debes ingresar solo 1 letra`)) : (vocal = /[aeiou]/i.test(letra)) ? (console.log(`La letra ${letra} es una vocal`)) : (console.log(`La letra ${letra} no es una vocal`)) };


esVocal2("e")