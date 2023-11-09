//exercicio 1 - crie um script JS que imprima ola mundo

console.log("Olá mundo");


//exercicio 2 - conversao de tipo
//dado o valor de uma string "1234", converta em numero e exiba o tipo da variavel no console.
const meuNumero = "1234";
const meuNumeroConvertido = Number(meuNumero);

console.log(typeof meuNumero);
console.log(typeof meuNumeroConvertido);

//exercicio 3 - manipulaçao de strings
//dado uma string "javascript é massa", escreva um codigo que conte quantos caracteres a string possui

const minhastring = "javascript é massa";
const numeroDeString = minhastring.length; 
const numeroDePalavras = minhastring.split(" ").length;

console.log(numeroDeString);
console.log(numeroDePalavras);



//exercicio 4 - declare uma variavel chamada numero e atribua um valor

const numero = -369;

if (numero > 0){
    console.log("O númeuro é positivo.");
} else if(numero < 0){
    console.log("O número é negativo.");
} else{
    console.log("O número é zero");
}


//exercicio 5 - crie uma array com 10 numeros de 1 a 10

const numeros = [1,2,3,4,5,6,7,8,9,10];
c = 0;
for (c=0;c<=numeros.length;c++){
    console.log(numeros[c]*2);
}


//exercicio 6 - array 
const frutas = ["morangos","acerolas", "amoras"];
const stringf = "Eu gosto de ";


console.log(stringf + frutas[0]);

console.log("   ");

for(i=0; i<frutas.length;i++){
    console.log(stringf + frutas[i]);
}

// exercicio 7 - declarar array com 5 numeros e usar laço for
// e calcular soma multiplicação raiz e potencia de todos os elementos
const num = [1,2,3,4,5];
let soma=0;
for (i=0;i<num.length;i++){
    soma= soma + num[i];
    console.log(soma);
    
}
let mult= 1;
for (i=0;i<num.length;i++){
    mult= mult *num[i];
    console.log(mult);
    
}

console.log(Math.sqrt(soma));
console.log(Math.pow(soma,2));

//exercicio 8 - array com palavras de uma frase
//usar laço for
//mas apenas se a palavra tiver mais de 3 letras


const frases = ["esta", "é", "uma", "frase", "de", "exemplo"];
for (i=0;i<frases.length;i++){
    if(frases[i].length>3){
        console.log("a palavra da array tem mais de 3 letras - "+ frases[i]);
    } else{
        console.log("a palavra da array nao possui mais de 3 letras - " + frases[i]);
    }
}
