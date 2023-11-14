//exercicio de manipulaão de array

//criar lista vazia
//add 5
//tirar o 1
//print

const lista = [];
lista.unshift("carros", "motos","navios","avioes","trens");
lista.shift();
console.log(lista);


//exercicio de manipulacao de array

//array de numeros 3 7 14 21 29 36 42
//encontrar o primeiro numero divisivel por 7

const numeros = [3,7,14,21,29,36,42];
const divisivel = numeros.find((num) =>(num%7==0, num>10));
console.log(divisivel);

//exercicio com filter

//array [5,10,15,20,25,30,35,40]
//criar novo array
//maiores que 20

const array = [5,10,15,20,25,30,35,40];
const arraynova = array.filter((num)=>(num>20));
console.log(arraynova);

//split(),  trim()
//string "bom dia, mundo"
//remover os espaços
//dividir em palavras


const frase = " Bom dia, mundo! ";
const palavras = frase.trim().split(" ");
console.log(palavras);

//startwith
//dada a string "O rato roeu a roupa do rei de roma"

const frase2 = "O rato roeu a roupa do rei de roma";
const start = frase2.startsWith("O");
const end = frase2.endsWith("a");