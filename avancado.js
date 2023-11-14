//Avançado de JavaScript

//Manipulação de Arrays

const frutas = ["acerola", "banana"];
frutas.unshift("laranja"); // adicionar laranja ao array

console.log(frutas);

frutas.shift(); // remove o primeiro elemento da array
console.log(frutas);

const numeros = [1,2,3,4,5,6,7,8,9];
//encontra o primeiro numero par do array
const numeroPar = numeros.find((num)=> num % 2 == 0);
console.log(numeroPar);

const numerosPares = numeros.filter((num) => num %2==0);
console.log(numerosPares); // 2, 4 ,6 ,8

//Manipulação de strings avançado
const frase = " Olá, mundo ";
console.log(frase);

const stringSemEspaços = frase.trim(); // remove espaços extras
console.log(stringSemEspaços);

const palavras = frase.trim().split(" "); // remove espaços extras e divide em palavras
console.log(palavras);

const frase2 = "Javascript é massa!";
console.log(frase2.startsWith("Java"));
console.log(frase2.endsWith("!"));

//Exceções e tratamento de erros
// const idade = 15;
// if (idade < 18){
//     throw new Error("Você deve ter pelo menos 18 anos.");
// }

// try{
//     const idade = 15;
//     if (idade < 18){
//             throw new Error("Você deve ter pelo menos 18 anos.");
//         }
// }catch(erro){
//       console.log(erro.message);
// }

//callbacks - funçao dentro de outra função

function comprimentar(nome, callback){
    console.log("Olá, " + nome);
    callback();
}

function mostrarSaudação(){
    console.log("Como você está?");
}

comprimentar("Maria", mostrarSaudação);

function mostrarMensagem(){
    console.log("Esta é uma mensagem após 3 segundos.");
}
setTimeout(mostrarMensagem, 3000);


//Promise - garante que dada as condicoes o codigo seja executado
const promessa = new Promise((resolve, reject) =>{
    const condicao = true;
    if (condicao){
        resolve("A condição é verdadeira.");
    } else {
        reject("A condição é falsa.")
    }
});

promessa
    .then((mensagem)=> console.log(mensagem))
    .catch((erro) => console.log(erro));

const promessa1 = Promise.resolve(3);
const promessa2 = new Promise((resolve, reject) => {setTimeout(resolve, 100, "foo")}); 
    

Promise.all([promessa1, promessa2]).then((valores)=> console.log(valores));

//ASYNC // AWAIT - executa sem interromper o fluxo do seu codigo

async function obterValor(){
    const promessa = new Promise((resolve, reject)=> {
        setTimeout(( ) =>resolve("Valor obtido"), 2000);
    });
    const Valor = await promessa;
    console.log(valor);}

obterValor();
async function obterValor(){
    try {
        const promessa = new Promise((resolve, reject) => 
            {setTimeout(()=> reject("Erro ao obter valor!"),2000);
        });

        const valor = await promessa;
        console.log(valor);
    } catch(erro){
        console.log(erro); //erro ao obter valor
    }
}

// JSON (Javascript Object Notation)

const objeto = {nome: "João", idade: 30}
const jsonString = JSON.stringify(objeto);
console.log(jsonString); // objeto com chave e valor

const jsonStrin2 = '{"nome":"João", "idade":30}';
const objeto2 = JSON.parse(jsonStrin2)
console.log(objeto2.nome);
