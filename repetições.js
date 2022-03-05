let numeroAlunos = 5;

let listaAlunos = ["Carlos", "Henrique", "Marina", "Simone", "Guilherme", "Gabriela", "Luan", "Deise", "Eliane", "Adriane", "Ana", "Letícia"];

let contador = 0;

for (let contador = 0; contador < listaAlunos.length; contador++) {

    if (contador == 0) {
        console.log(contador + ": Zero: " + listaAlunos[contador]);     //concatenação(união de string com number)
    } else if (contador % 2 == 1) {
         console.log(`${contador}: Ímpar: ${listaAlunos[contador]}`);    //interpolação
    } else {
        console.log(contador + ": Par: " + listaAlunos[contador]);
    }
}

// while (contador < listaAlunos.length) {

//     if (contador == 0) {
//         console.log(contador + ": Zero: " + listaAlunos[contador]);
//     } else if (contador % 2 == 1) {
//         console.log(`${contador}: Ímpar: ${listaAlunos[contador]}` );
//     } else {
//         console.log(contador + ": Par: " + listaAlunos[contador]);
//     }

//     contador++;
// }


//ctrl+;=comentar todos caracteres selecionados;
//shift+alt+F= formatar o código;