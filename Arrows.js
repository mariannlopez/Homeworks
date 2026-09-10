// Regular functions: Representan la forma tradicional de declarar funciones en JavaScript, su valor depende exclusivamente de como y donde sea invocada la función de tiempo de ejecución.
let numero = 0;
function verficarPar(numero) {
    if(numero % 2 === 0){
        return (`El número ${numero} es par`)
    }else{
        return (`El numero ${numero} es impar`)
    }  
}

//Arrow functions: Tienen una sintaxis compacta con el operador =>, se puede escribir menos código y omite el return.
const verificarPar = numero => console.log(numero % 2 === 0 ? `El número ${numero} es par` : `El número ${numero} es impar`);


/*Principales diferencias:
Las funciones regulares definen this según cómo se invocan, mientras que las funciones flecha no tienen su propio this y lo heredan del contexto donde fueron escritas.
Las funciones regulares cuentan con el objeto interno arguments para acceder a los parámetros reciblers, mientras que las funciones flecha carecen de él y requieren el uso del operador rest.
*/