# Conceitos Básicos do JSON
É um formato de transição de troca de informações (pacote).

**É uma estrutura muito parecida com a estrutura de Objetos/Array**

É uma linguagem de comunicação entre serviços (máquinas).
Não serve para comunicar uma informação em formato audiovisual, com cores, textos, sublinhados. Essa responsabilidade é das bibliotecas do Front e a parte do Mobile. A parte do NodeJS fica somente para repassar a informação estrutural.

- Na parte do front, é possível trabalhar com as bibliotecas:
    - React
    - Angular
    - Vue

- Mobile
    - ReactJS
    - Ionic
    - Flutter

- NodeJS
    - ExpressJS
    - Adonis


## Como tudo acontece
[2-Rotas](../prints/2-rotas.png)
- A parte do front vai fazendo as requisições através de rotas (portas/endereços específicos abertos).
- A rota *Clientes* trata todas as informações de clientes.
- A rota é pra definir o contexto que se quer tratar.

[3-Como-as-rotas-se-parecem](../prints/3-como-as-rotas-se-parecem.png)
- Temos um endereço de serviço que (geralmente) é o **http, https://suapi.com.br, http://api.com/customers**
- GET http://api.com/customers - Capturar os clientes
- POST http://api.com/customers - Inputar, inserir clientes para dentro do serviço ou gravar dentro do banco de dados
- PUT http://api.com/customers/1 - Edição
- DELETE http://api.com/customers/1 - Apagar o cliente

- **Método HTTP**: identifica o que quero fazer com o domínio de informação (**GET, POST, PUT, DELETE**)
    - É possível criar uma função para todo mundo que solicitar um GET no costumers

- **Rota**: identifica a informação que eu quero pegar (nesse caso é a informação de http://api.com/**costumers**/1)
- **Parâmetro**: identifica os pormenores, como por exemplo o cliente 1 (http://api.com/customers/**1**)