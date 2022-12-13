/*Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM! */




let num1 = prompt('Digite um valor inteiro e positivo');

if (num1 !== null) {
    num1 = parseInt(num1.replace('.','').replace(',','.'));
}

if (!num1) {
    document.write('O número informado é inválido');

} else {
    for (let controle = 0; controle <= num1; controle++) {
        document.write();
        if(controle < num1) {
            document.write(` ${controle}, `);
        } else if (controle === num1) {
            document.write(`${controle}, FIM!`);
        }
    }
}