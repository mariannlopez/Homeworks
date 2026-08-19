// 1. Agregar o quitar elementos
    let colores = ["Rojo", "Azul"];

    // push(): Agrega uno o más elementos al final del array 
    colores.push("Amarillo");

    //pop(): Quitar y devolver el elemento del final del array
    colores.pop();

    //unshift(): Agrega uno o más elementos al inicio del array
    colores.unshift("Verde","Morado");

    //shift(): Quita y devuelve el elemento del inicio del array
    colores.shift();

    //splice(): Agrega o elimina elementos en cualquier posición
    let numeros = [1, 2, 3, 4, 5];
    numeros.splice(1, 2, "a", "b"); // desde índice 1, elimina 2, agrega "a","b"
    console.log("splice:", numeros); // [1, "a", "b", 4, 5]

    
//2. Buscar elementos
    let edades = [12, 45, 8, 30, 65];
    //find(): Devuelve el primer elemento que cumpla una condición
    edades.find( a => a > 18);

    //findIndex(): Devuelve el índice del primer elemento que cumpla una condición
    edades.findIndex(a => a > 18);

    //findLast(): Devuelve el último elemento que cumpla una condición
    edades.findLast(a => a > 18);

    //findLastIndex(): Devuelve el índice del último elemento que cumple
    edades.findLastIndex(a => a > 18);

    //indexOf(): índice de la primera coincidencia exacta en el arreglo
    edades.indexOf(30);

    //lastIndexOf(): Índice de la última coincidencia exacta
    edades.lastIndexOf(8);

    //includes(): Devuelve true/false si el array contiene el valor
    edades.includes(45);


    //3. Recorrer o iterar en el array
    let numbers = [1, 2, 3, 4, 5];

    //forEach(): Ejecuta una función por cada elemento
    numbers.forEach(n => n * 2);
 
    //map(): Crea un nuevo array transformando cada elemento
    let dobles = numbers.map(n => n * 2);
 
    //filter(): Crea un nuevo array con los elementos que cumplen la condición
    let pares = numbers.filter(n => n % 2 === 0);
 
    //reduce(): Reduce el array a un solo valor (de izquierda a derecha)
    let suma = numbers.reduce((acum, n) => acum + n, 0);
 
    //reduceRight(): Igual que reduce pero de derecha a izquierda
    let letras = ["a", "b", "c"];
    let concatenado = letras.reduceRight((acum, letra) => acum + letra, "");
 
    //every(): true si todos los elementos cumplen la condición
    numbers.every(n => n > 0);
 
    //some(): true si al menos uno cumple la condición
    numbers.some(n => n > 4);
 
 
//4. Transformar o combinar
    let a = [1, 2];
    let b = [3, 4];
 
    //concat(): Une dos o más arrays en uno nuevo
    a.concat(b);
 
    //flat(): "Aplana" arrays anidados en un solo nivel
    let anidado = [1, [2, 3], [4, [5, 6]]];
    anidado.flat(2);
 
    //flatMap(): Aplica map() y luego flat() en un solo paso
    let frases = ["hola mundo", "chau"];
    frases.flatMap(f => f.split(" "));
 
    //join(): Une los elementos en un string, separados por un caracter
    numbers.join(" - ");
 
    //slice(): Devuelve una copia parcial del array (no modifica el original)
    numbers.slice(1, 3);
 
    //reverse(): Invierte el orden del array (modifica el original)
    [...numbers].reverse();
 
    //sort(): Ordena el array (modifica el original)
    let desordenado = [5, 3, 8, 1];
    desordenado.sort((x, y) => x - y);
 
    //fill(): Rellena posiciones del array con un valor fijo
    [1, 2, 3, 4, 5].fill(0, 1, 3);
 
    //copyWithin(): Copia parte del array dentro de sí mismo
    [1, 2, 3, 4, 5].copyWithin(0, 3);
 
 
//5. Convertir a texto
    //toString(): Convierte el array en un string separado por comas
    numbers.toString();
 
    //toLocaleString(): Similar a toString, pero formatea según el idioma/región
    let precios = [1000, 2000];
    precios.toLocaleString("es-CO");
 
 
//6. Extras
    //at(): Devuelve el elemento en un índice (acepta negativos)
    numbers.at(-1);
 
    //entries(): Devuelve un iterador de pares [índice, valor]
    for (const [indice, valor] of numbers.entries()) {
    }
 
    //keys(): Devuelve un iterador de los índices del array
    for (const indice of numbers.keys()) {
    }
 
    //values(): Devuelve un iterador de los valores del array
    for (const valor of numbers.values()) {
    }
 
    //length: Propiedad (no función) que indica el tamaño del array
    numbers.length;
 
    //constructor: Referencia a la función que creó el array
    numbers.constructor.name;
 
    //Array.isArray(): Verifica si un valor ES un array
    Array.isArray(numbers);