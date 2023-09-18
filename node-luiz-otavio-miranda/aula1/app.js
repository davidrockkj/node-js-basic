// const mod1 = require('./mod1');
// console.log(mod1);




// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());




// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(mod1.falaNome());




// const { Pessoa } = require('./mod2');
// const p1 = new Pessoa('Luiz');
// console.log(p1);




const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod2');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));