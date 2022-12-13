/*
Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.
*/



let velocidade = prompt('Digite a velocidade do carro');

if (velocidade !== null) {
    velocidade = parseInt(velocidade.replace('.','').replace(',','.'));
}

if (!velocidade) {
    document.write('Velocidade inválida. Tente novamente');
} else {
    if (velocidade > 80) {
        const multa = 5;
        let valorMulta = (velocidade - 80) * multa;
        document.write('<p>Você foi multado</p>');
        document.write(`O valor da sua multa é de R$${valorMulta.toFixed(2)}`);
    } else {
        document.write('Sua velocidade estava dentro do esperado e você não receberá uma multa');
    }
}