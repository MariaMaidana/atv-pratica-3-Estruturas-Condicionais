/*Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).*/


let multiplicando = prompt('Insira o número que será multiplicado');

if (multiplicando !== null) {
    multiplicando = parseInt(multiplicando.replace('.','').replace(',','.'));
}

if (!multiplicando) {
    document.write('O valor informado é inválido');
} else {
    let quantidade = prompt('Digite a quantidade de vezes que esse número fará a multiplicação');

    if(quantidade !== null) {
        quantidade = parseInt(quantidade.replace('.','').replace(',','.'));
    }

    if (!quantidade) {
        document.write('O valor informado é inválido');
    } else {
        for (let contador = 1; contador <= quantidade; contador++) {
            document.write(`<p>${multiplicando} * ${contador} = ${contador * multiplicando}</p>`);
        }
    }      
}    
    
