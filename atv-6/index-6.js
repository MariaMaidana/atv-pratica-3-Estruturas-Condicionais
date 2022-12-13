/*Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro. */


let pedro = 150;
let lucas = 110;

let ano = 0;

while (pedro >= lucas) {
    pedro += 2;
    lucas += 3;

    ano++

    console.log(`<p>PEDRO: ${pedro.toFixed(2)}</p>`);
    console.log(`<p>LUCAS: ${lucas.toFixed(2)}</p>`);
    console.log(`<p>ANO: ${ano}</p>`)

    if (pedro === lucas) {
        document.write(`Altura igual: passaram-se ${ano} anos`);
    }

    if (pedro < lucas) {
        document.write(`<p>Lucas maior: passaram-se ${ano} anos</p>`);
    }
}