/*
    Autor: Brian Valdivieso
    Descripcion: Prueba técnica Redradix


    The objetive is as simple as writing a function that recives an integer `n` and returns an array from `1` to `n` where:

    - Multiples of 3 have been replaced with `Fizz`
    - Multiples of 5 have been replaced with `Buzz`
    - Multiples of both have been replaced with `FizzBuzz`

    fizzBuzzToN(0) // => []
    fizzBuzzToN(5) // => [1,2,'Fizz', 4, 'Buzz']
    fizzBuzzToN(15) // => [1,2,'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
*/


//Función para calcular el array que se solicita en el enunciado
function calculoArray(n){
    
    let resultado = []; //Variable que almacena el resultado final

    //Hacemos una iteración de n veces para analizar cada elemento
    for(let i=1;i<=n;i++){
        let valor="Undefined"; //variable para controlar cada item 
        
        //Si el valor es múltiplo de 3 y 5 (resto=0)
        if(i%3==0 && i%5==0){
            valor="FizzBuzz";
        }else if(i%3==0){
            //Si el valor es múltiplo de 3
            valor="Fizz";
        }else if(i%5==0){
            //Si el valor es múltiplo de 5
            valor="Buzz";
        }else{
            //Por defecto el valor es el número de la iteración
            valor = i;
        }      
    
        resultado.push(valor); //añadimos el item al array final
    }
    
    //devolvemos el resultado
    return resultado;
}

let n = 16;
const resultado = calculoArray(n);

console.log("Resultado: ", resultado);