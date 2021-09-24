let readlineSync = require('readline-sync');
var nomePeca;
var pesoPeca =499;
var capacidade = 9;

nomePeca = readlineSync.question("Digite o nome da peça: ");
pesoPeca = readlineSync.question("Digite o pesoda peça: ");

if (pesoPeca > 100) {
    //condição verdadeira
    if (capacidade > 10){
        //condição verdadeira
console.log("Não Cadastrar, capacidade máxima atingida!!!");

    }else if(nomePeca.lenght < 3) {
        //condição falsa
console.log("Não Cadastrar, nome inválido!");
    }
}else {
    console.log("Peça cadastrada com SUCESSO!!!");
    //condição falsa
    console.log("Não Cadastrar, peso insuficiente");
}