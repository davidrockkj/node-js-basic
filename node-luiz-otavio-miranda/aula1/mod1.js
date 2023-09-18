// Criando variáveis
const nome = 'Luiz';
const sobrenome = 'Ferreira';

// Criando função que fala NOME e SOBRENOME
const falaNome = () => nome + ' ' + sobrenome;

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';

// console.log(exports);