//objetos
const aluno1 = {
    nome: "Moises",
    sobrenome: "França"
}

const aluno2 = {
    nome: "Marcos",
    sobrenome: "Paulo"
}

const alunos = {aluno1, aluno2};
for (let i = 0; i < alunos.length; i++){
    console.log(alunos[i].nome);
}