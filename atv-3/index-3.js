/*Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
a conta do usuário deve ser criada já com um saldo positivo. O
usuário precisa informar a quantidade de dinheiro que deseja
retirar, esse valor deve ser um número positivo, múltiplo de 5 e
menor do que o saldo. Cada saque eletrônico cobra uma taxa de
R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
certo com o saque, e se o usuário informar um valor maior que o
saldo deve ser informado ao usuário que o mesmo não tem dinheiro
suficiente em conta para realizar o saque.
OBS: Na verificação se o valor do saque é maior que o saldo deve
ser considerado e também contabilizado o valor da taxa a ser
cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
da taxa do saque não pode ser maior que o saldo disponível.*/



let saldo = 20000;

let saque = prompt ('Digite o valor que deseja retirar. Obrigatório ser múltiplo de 5');

if (saque !== null) {
    saque = Number(saque.replace('.','').replace(',','.'));
}

if (!saque) {
    document.write('O valor informado é inválido. Tente novamente')

} else if (saque > 0 && saque % 5 === 0) {
    const taxa = 4.50;
    let total = saque + taxa;
    let saldoFinal = saldo - total;
    if (total > saldo) {
        
        document.write('Saldo insuficiente.')
    } else {
        document.write(`O saldo da conta é de R$${saldoFinal.toFixed(2)}`)
    }

} else {
    document.write('Valor inválido')
}