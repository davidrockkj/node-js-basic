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
