# Conceitos Básicos de uma API REST

## APIs
*Visão Geral:*
Imaginando uma área de aluno, no navegador. Essa **Área de Aluno** foi feita utilizando algum sistema, framework e na grande maioria das vezes é feito dessa forma:
    - Os sites e aplicativos fazendo uma requisição ao servidor
    - O servidor tem um serviço rodando, para escutar as requisições e processar através das camadas de visualização, ou das **VIEWs**, ou algum processo que gera um **HTML**
    - O **HTML** é passado para o navegador
    - O navegador interpreta o **HTML**

O problema dessa situação é que não permite dividir isso em múltiplas plataformas:
    - Imaginando a situação anterior, 