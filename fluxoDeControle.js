const menu = 10;

switch(menu){
    case 1:
        console.log("Exercício 1 selecionado. executando...\n");
        ex1 (); 
        break;

    case 2: 
    console.log("Exercicio 2 selecionado. Executando...\n");
    ex2(); 
    break;

     case 3: 
    console.log("Exercicio 3 selecionado. Executando...\n");
    ex3(); 
    break;

     case 4: 
    console.log("Exercicio 4 selecionado. Executando...\n");
    ex4(); 
    break;

      case 5: 
    console.log("Exercicio 5 selecionado. Executando...\n");
    ex5(); 
    break;

    case 6: 
    console.log("Exercicio 6 selecionado. Executando...\n");
    ex6(); 
    break;

    case 7: 
    console.log("Exercicio 7 selecionado. Executando...\n");
    ex7();
    break;

     case 8: 
    console.log("Exercicio 8 selecionado. Executando...\n");
    ex8(); 
    break;

     case 9: 
    console.log("Exercicio 9 selecionado. Executando...\n");
    ex9(); 
    break;

    case 10: 
    console.log("Exercicio 10 selecionado. Executando...\n");
    ex10(); 
    break;
}

function ex1(){
  const nomes = ["Ygor", "Nicolas", "Ryan", "Ruan", "Miguel"];
  for (let nome of nomes){
        console.log(`nome: ${nome}`);
    }
}


function ex2(){
   const numeros = [1, 2, 3, 4, 5];

let soma = 0;
for (const numero of numeros) {
  soma += numero;
}
console.log("Total:", soma);
}



function ex3(){
     const pessoa = {
        nome: "Matheus", 
        idade: 17,
        cidade: "Sorocaba"
    };

    for (let chave in pessoa){
        console.log(`${chave}: ${pessoa[chave]}`);
    }
}



function ex4(){
    const pessoa = {
  nome: "Miguel",
  idade: 17,
  cidade: "Sorocaba",
  profissao: "Garçom"
};

let contador = 0;

for (let chave in pessoa) {
  contador++;
}

console.log("Total de propriedades:", contador);
}


//Médios

function ex5(){
  const nomes = ["Rafael", "Felipe", "Guilherme", "Gabriel"];
let resultado = "";

for (const nome of nomes) {
  if (resultado !== "") {
    resultado += ", ";
  }
  resultado += nome;
}

console.log(resultado);
}




function ex6(){
     const valores = [10, "Teste", true, null, undefined, { nome: "Murilo" }, [1, 2, 3]];

for (const valor of valores) {
  console.log(valor, "->", typeof valor);
}
}

function ex7(){
const pessoas = {
  Guilherme: 20,
  Rafael: 16,
  Gabriel: 12
};

for (let nome in pessoas) {
  pessoas[nome] += 1;
}

console.log(pessoas);
}


function ex8(){
    const objeto = {
  nome: "Gustavo",
  idade: 17,
  cidade: "Sorocaba"
};

const resultado = [];

for (let chave in objeto) {
  resultado.push(`${chave}: ${objeto[chave]}`);
}

console.log(resultado);
}


//Difíceis

function ex9(){
    const valores = [1, 2, 2, 3, 4, 4, 5, 1];

const unicos = new Set();

for (const valor of valores) {
  unicos.add(valor);
}

console.log("Quantidade de valores únicos:", unicos.size);
}



function ex10(){
    const frase = "O rato roeu a roupa do rei de roma";
    
    const contagem = {};

for (const letra of frase) {
  if (letra === " ") continue; // opcional: ignora espaços

  if (contagem[letra]) {
    contagem[letra]++;
  } else {
    contagem[letra] = 1;
  }
}

console.log(contagem);
}
