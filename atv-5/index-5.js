/*Faça um algoritmo que leia a idade e peso de um atleta e imprima
a sua categoria, de acordo com a seguinte tabela: */


let idade = prompt('Digite a sua idade');

if (idade !== null) {
    idade = parseInt(idade.replace('.','').replace(',','.'));
}

if (!idade) {
    document.write('A idade é inválida. Tente novamente')
} else {
    let peso = prompt('Insira o seu peso');

    if (peso !== null) {
        peso = Number(peso.replace('.','').replace(',','.'));
    }

    if (!peso) {
        document.write('Peso inválido. Tente novamente');
    } else {
        if (idade <= 12) {
            document.write ('Categoria Infantil');
        } else if (idade >= 13 && idade <= 16 && peso <= 40) {
            document.write('Categoria Juvenil Leve');

        } else if (idade >= 13 && idade <= 16 && peso > 40) {
            document.write('Categoria Juvenil Pesado');

        } else if (idade >= 17 && idade <= 24 && peso <= 45) {
            document.write('Categoria Sênior Leve');

        } else if (idade >= 17 && idade <= 24 && peso > 45 && peso <= 60) {
            document.write('Categoria Sênior Médio');

        } else if (idade >= 17 && idade <= 24 && peso > 60) {
            document.write('Categoria Sênior Pesado');

        } else if (idade > 24) {
            document.write('Categoria Veterano');
        }
    } 
}