/*Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que
lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;
c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”.*/ 


function exercicio1() {

    const altura = Number(prompt('Digite a sua altura, utilizando o ponto: '))
    
    if(!altura) {
        alert('Você precisa informar a altura para continuar. Tente novamente!')
        return 
    }

    const peso = Number(prompt('Digite seu peso: '))

    if(!peso) {
        alert('Você precisa informar o peso para continuar. Tente novamente!')
        return
    }

    const imc = peso / (altura * altura);

    if(imc < 18.5) {
        document.write('Você está abaixo da faixa de peso ideal')

    } else if(imc > 24.99) {
        document.write('Você está acima da faixa de peso ideal')

    } else {
        document.write('Você está dentro da faixa de peso ideal')
    }
}


/*Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.*/


function exercicio2 () {

    const num1 = Number(prompt('Insira o primeiro valor:'));

    if(!num1) {
        alert('Você precisa inserir um número válido para continuar. Tente novamente')
        return
    }

    const num2 = Number(prompt('Insira o segundo valor:'));

    if(!num2) {
        alert('Você precisa inserir um número válido para continuar. Tente novamente')
        return   
    }

    const operacao =  prompt('Digite uma operação matemática (+, -, *, /, %, **)')

    if(!operacao) {
        alert('Você precisa inserir uma operação válida. Tente novamente')
        return
    }

    switch (operacao) {
        case '+':
            document.write(`Resultado é ${num1 + num2}`)
            break

        case '-':
            document.write(`Resultado é ${num1 - num2}`)
            break

        case '*':
            document.write(`Resultado é ${num1 * num2}`)
            break

        case '/':
            document.write(`Resultado é ${num1 / num2}`)
            break

        case '%':
            document.write(`Resultado é ${num1 % num2}`)
            break

        case '**':
            document.write(`Resultado é ${num1 ** num2}`)
            break

        default:
            document.write('Operador inválido')
        break;
    }

}


function exercicio4 () {
    
    document.write(`<h2> Multiplos de 3 </h2>`);
    for(let contador = 1; contador <= 250; contador++) {

        if(contador % 3 === 0) {
            document.write(`[${contador}],  `)
        }
    }


    document.write(`<h2> Multiplos de 5 </h2>`);
    for(let contador = 1; contador <= 250; contador++) {

        if(contador % 5 === 0) {
            document.write(`[${contador}],  `)
        }
    }
}


function exercicio9 () {
    let maior = 0;
    let menor = 999;
    
    for(let contador = 1; contador <= 15; contador++) {
        const altura = Number(prompt(`Informe a ${contador}* altura: `));

        if(!altura || altura < 0) {
            alert('Valor inválido. Tente novamente');
            return
        }


        if(altura > maior) {
            maior = altura
        }

        if(altura < menor) {
            menor = altura
        }
    }
    
    document.write(`<p>A maior altura informada é ${maior.toFixed(2)}</p>`);
    document.write(`<p>A menor altura é ${menor.toFixed(2)}</p>`);
}


function exercicio11 () {

    for(let contador = 30; contador >= 1; contador--) {
        
        const primo = verificaPrimo(contador)

        if(primo) {
            document.write(`[${contador}], `)
        } else {
            document.write(`${contador}, `)
        }
        
    }
}

function verificaPrimo (numero) {
    let divisores = 2; 
    
    for(let contador = 2; contador < numero; contador++) {

        if(numero % contador === 0) {
            divisores++
        }

    }    
        if(divisores > 2) {
            return false
        } else {
            return true
        }
    
}

function exercicio12 () {
    let soma = 0;
    let negativos = 0;
    let positivos = 0;


    for(let contador = 1; contador <= 10; contador++) {
        
        let numeroLido = Number(prompt(`Digite ${contador}* número: `))

        if(!numeroLido) {
            alert('Digite um número válido. Tente novamente')
            return
        }

        soma = soma + numeroLido;

        if(numeroLido < 0) {
            negativos++
        } else {
            positivos++
        }
    }

    let media = soma / 10;
    let percentualPositivos = (positivos / 10) * 100
    let percentualNegativos = (negativos / 10) * 100



    document.write(`<p>A média dos números lidos é ${media.toFixed(2)}</p>`)
    document.write(`<p>A quantidade de números positivos é ${positivos}, equivalente a ${percentualPositivos}% </p>`)
    document.write(`<p>A quantidade de números negativos é ${negativos}, equivalente a ${percentualNegativos}% </p>`)
}

