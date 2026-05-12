const menu = 15;

switch (menu) {
    case 1:
        console.log("Exercício 1 selecionado. Executando... \n");
        positivo();
        break;
    case 2:
        console.log("Exercício 2 selecionado. Executando... \n");
        parImpar();
        break;
    case 3:
        console.log("Exercício 3 selecionado. Executando... \n");
        turno();
        break;
    case 4:
        console.log("Exercício 4 selecionado. Executando... \n");
        maior();
        break;
    case 5:
        console.log("Exercício 5 selecionado. Executando... \n");
        ternario();
        break;
    case 6:
        console.log("Exercício 6 selecionado. Executando... \n");
        menuu();
        break;
    case 7:
        console.log("Exercício 7 selecionado. Executando... \n");
        enquanto();
        break;
    case 8:
        console.log("Exercício 8 selecionado. Executando... \n");
        regressiva();
        break;
    case 9:
        console.log("Exercício 9 selecionado. Executando... \n");
        umADez();
        break;
    case 10:
        console.log("Exercício 10 selecionado. Executando... \n");
        soma();
        break;
    case 11:
        console.log("Exercício 11 selecionado. Executando... \n");
        arrayFor();
        break;
    case 12:
        console.log("Exercício 12 selecionado. Executando... \n");
        arrayForOf();
        break;
    case 13:
        console.log("Exercício 13 selecionado. Executando... \n");
        objetoForIn();
        break;
    case 14:
        console.log("Exercício 14 selecionado. Executando... \n");
        breakEx();
        break;
    case 15:
        console.log("Exercício 15 selecionado. Executando... \n");
        continueEx();
        break;
    case 16:
        console.log("Exercício 16 selecionado. Executando... \n");
        nota();
        break;
    case 17:
        console.log("Exercício 17 selecionado. Executando... \n");
        tabuada();
        break;
    case 18:
        console.log("Exercício 18 selecionado. Executando... \n");
        contarNumeros();
        break;
    case 19:
        console.log("Exercício 19 selecionado. Executando... \n");
        palindromo();
        break;
    case 20:
        console.log("Exercício 20 selecionado. Executando... \n");
        menuLoop();
        break;
}

function positivo(){
    const numero = 25;
    if(numero > 0){
        console.log("Positivo");
    }
}

function parImpar(){
    const numero = 15;
    if(numero % 2 === 0){
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
}

function turno(){
    const letra = "M";
    if(letra === "M"){
        console.log("Bom dia");
    } else if(letra === "T"){
        console.log("Boa tarde");
    } else if(letra === "N"){
        console.log("Boa noite");
    } else {
        console.log("Inválido");
    }
}

function maior(){
    const a = 10, b = 20;
    if(a > b){
        console.log(a);
    } else {
        console.log(b);
    }
}

function ternario(){
    const numero = -5;
    console.log(numero >= 0 ? "Positivo" : "Negativo");
}

function menuu(){
    const opcao = 2;
    switch(opcao){
        case 1:
            console.log("Início");
            break;
        case 2:
            console.log("Sobre");
            break;
        case 3:
            console.log("Sair");
            break;
    }
}

function enquanto(){
    let i = 1;
    while(i <= 5){
        console.log(i);
        i++;
    }
}

function regressiva(){
    let i = 5;
    do{
        console.log(i);
        i--;
    } while(i >= 1);
}

function umADez(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}

function soma(){
    let total = 0;
    for(let i = 1; i <= 10; i++){
        total += i;
    }
    console.log(total);
}

function arrayFor(){
    const arr = [1,2,3,4];
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

function arrayForOf(){
    const nomes = ["Ana","João","Maria"];
    for(const nome of nomes){
        console.log(nome);
    }
}

function objetoForIn(){
    const pessoa = {nome:"Ana", idade:20, cidade:"SP"};
    for(const chave in pessoa){
        console.log(chave, pessoa[chave]);
    }
}

function breakEx(){
    for(let i = 1; i <= 10; i++){
        if(i === 5){
            break;
        }
        console.log(i);
    }
}

function continueEx(){
    for(let i = 1; i <= 10; i++){
        if(i === 7){
            continue;
        }
        console.log(i);
    }
}

function nota(){
    const n = 7.5;
    if(n < 6){
        console.log("Reprovado");
    } else if(n < 8){
        console.log("Recuperação");
    } else {
        console.log("Aprovado");
    }
}

function tabuada(){
    const n = 5;
    for(let i = 1; i <= 10; i++){
        console.log(n * i);
    }
}

function contarNumeros(){
    const arr = [1,"a",2,true,3];
    let count = 0;
    for(const item of arr){
        if(typeof item === "number"){
            count++;
        }
    }
    console.log(count);
}

function palindromo(){
    const palavra = "arara";
    let invertida = "";
    for(let i = palavra.length - 1; i >= 0; i--){
        invertida += palavra[i];
    }
    console.log(palavra === invertida);
}

function menuLoop(){
    let opcao = 1;
    while(opcao !== 3){
        switch(opcao){
            case 1:
                console.log("Início");
                break;
            case 2:
                console.log("Sobre");
                break;
        }
        opcao++;
    }
    console.log("Sair");
}