# js
//conversao de tipos
const meuNumero = "1234";
const meuNumeroConvertido = Number(meuNumero);

console.log(typeof meuNumero);
console.log(typeof meuNumeroConvertido);

//MEDIA

let nota1 = 5;
let nota2 = 4;
let nota3 = 8;

let media = (nota1 + nota2 + nota3)/3;

if (media >= 6 ){
    console.log("Aprovado");
} else{
    console.log("Reprovado");
}

//Switch case

const fruta  =  "maçã";

switch (fruta){

    case "Banana":
        console.log("Banana é a fruta");
        break;
    case"Maçã":
        console.log("Maçã é a fruta");
        break;
    default:
        console.log("Não é a fruta");
}

// Estruturas de repetição


//contador, condição de limite, incremento

for (let i=10;i>=5;i=i-1){
    console.log("o valor de i é: " + i);
} 


console.log("SPACE");


for(let i=0; i<=10;i=i+1){
    console.log("O valor de i é: " + i);
}


//WHILE

let k = 10;

while(k>=0){
    console.log("O valor de k é: "+k);
    k--;
}

console.log("SPACE");

//Do While

let j = 0;

do {
    console.log("O valor de j é: " + j);
    j++;
}while(j<=5);


//Funções
//function nome(arg1, arg2, agr3)


function cumprimentar(nome, nome2){
    console.log("Olá " + nome + " " + nome2);
}

cumprimentar("Vitor", "Lôbo");

//arrow function

const testeArrow = () => console.log("Isso também é uma função");

testeArrow();

console.log("SPACE");

//array, lista


const numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);

console.log("SPACE");

numeros.push(6);
console.log(numeros);

console.log("SPACE");

numeros.pop();
numeros.pop();
console.log(numeros);


//strings
const minhaStringNova = "olá mundo, ";

//concatenação = +
const minhaString2 = minhaStringNova + "como vc está?";

console.log(minhaString2);

//interpolação

const minhaString3= `${minhaString2}como vc está?`
console.log(minhaString3);
