# Conceitos Básicos Sobre o NodeJS

## O que é o NodeJS?

Imagine o ambiente a seguir:
    - Site e aplicativo
        - Pessoa que fica utilizando esses sistemas (usuário)
    - Servidor
        - Banco de dados
        - Serviços
        - Código

    Os sites e aplicativos se conectam ao servidor.
    O servidor, recebe as requisições desses sites e aplicativos.
    
    REQUISIÇÕES: Pedidos de conteúdo que se solicita através de um protocolo.

    Basicamente, o usuário está vendo o conteúdo através do Frontend, que faz uma requisição ao servidor (Backend - com as regras de negócio) para acessar mais conteúdos.
    


## JavaScript no Backend
- Execução no servidor
    - Já existe um serviço no javascript para interpretar essas requisições e processar a linguagem

- O node.js é uma plataforma
    - Que utiliza a linguagem JavaScript para executar o programado

- Contexto do servidor
    - Existe o javascript do Frontend, que é o que roda o web, mobile e até mesmo o desktop
    - Existe o javascript do Backend, que roda no contexto do servidor, seguindo a regra de negócio, consultado o banco de dados

- Utiliza o mesmo sistema (motor) do Google Chrome (V8)

- Comunidade impressionante
    - Em quantidade de pessoas
    - Em quantidade de bibliotecas disponíveis

- Mesma linguagem (ponta a ponta)
    - Usando a mesma linguagem tanto na parte do Front como no Backend



## Pacote de Instalação
- NPM (Node Package Manager)
    - É um gerenciador de pacotes
    - Gerencia as bibliotecas auxiliares (terceiros)
    - Permite disponibilizar minhas bibliotecas

- Yarn
    - Mesmo propósito: instalar pacotes; utilizam o mesmo banco de pacotes; mesmo código
    - Velocidade de execução e desenvolvimento maiores que o NPM
        - Funcionalidades interessantes (workspaces)



## Principais Características do NodeJS
- Call Stack (camada de Pilha de Execução)
    - Conta com a ajuda de um *Event Loop*
        - Motor de execução em looping infinito que roda o seguinte: **"Existem funções para eu executar?"**
        - Tem o comportamento do **Last IN, first OUT** (LIFO)
        - *Arquitetura Event Loop*
            - Eventos (rota, ...)
            - Call Stack

        - *Single Thread*
            - Não importa se temos processadores com multiplos núcleos. Ele roda em uma única thread
            - **LibUV** - biblioteca feita em C++ que permite roda threads em background ()

        - *I/O não bloqueante*
            - Imaginando que eu fiz uma requisição pra uma listagem de clientes. Pra fazer isso, é preciso ir no banco de dados, fazer algumas coisas. Enquanto estou aguardando a resposta do banco de dados, da consulta, o sistema está parado (PHP é um dos exemplos de linguagem que bloqueiam).
            - Demora milisegundos, mas é prejudicial quando se tem um servidor com muitas requisições
            - Isso o torna ideal para situações **Real time** e **Chats**

    - As chamadas são empilhadas na fila de execução e o motor processa tudo para executar da maneira mais rápida possível



## Frameworks
- Básicos
    - ExpressJS
        - Flexível (Sem arquitetura fechada; Sem padrão fechado)
        - Microserviços (Possível de fazer coisas mínimas)

- Opinativos
    - AdonisJS
        - Arquitetura mais opinativa, algo preestabelecido, ORM (conectar um banco de dados e criar tabelas sem precisar manipular muito SQL)
    
    - NestJS