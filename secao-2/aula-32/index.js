const nome01 = 'Nelsijan';
const sobrenome01 = 'Silva';
const idade = 36;

const pessoa1 = {
    nome: 'Nelsijan',
    sobrenome: 'Silva',
    idade: 36,
};

console.log(pessoa1.nome);

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa2 = criaPessoa('Rosa', 'Silva', 52);
console.log(pessoa2.nome);