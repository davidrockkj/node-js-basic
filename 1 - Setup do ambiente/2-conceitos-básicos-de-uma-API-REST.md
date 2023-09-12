# Conceitos Básicos de uma API REST

## APIs
*Visão Geral:*
[Área-do-Aluno](../prints/1-area-do-aluno.png)
Imaginando uma área de aluno, no navegador. Essa **Área de Aluno** foi feita utilizando algum sistema, framework e na grande maioria das vezes é feito dessa forma:
    - Os sites e aplicativos fazendo uma requisição ao servidor
    - O servidor tem um serviço rodando, para escutar as requisições e processar através das camadas de visualização, ou das **VIEWs**, ou algum processo que gera um **HTML**
    - O **HTML** é passado para o navegador
    - O navegador interpreta o **HTML**

O problema dessa situação é que não permite dividir isso em múltiplas plataformas.
Imaginando que preciso servir o mesmo conteúdo em um aplicativo:
    - Não dá para entender, em termo de programação, no **HTML**. Pois, ele é feito por uma estrutura visual
    - Em termos de dados que serão acessados, pouco importa se a informação é relevante e vai vir destacada como *negrito*
    - Com esse **HTML** vai ser difícil identificar um título, video a ser exibido, descrição da aula, ...
    - É a forma mais difícil de se capturar informações quando se está em um ambiente de múltiplos aplicativos

Por isso, faz-se necessário ter uma forma diferente de estrutura a informação. O formato mais utilizado, hoje, é o *JSON*.


## JSON
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