# Estudando de caso em java (spring boot) com angular 19 AgendaApiJavaAngula (CRUD)

AgendaApiJavaAngula

Este projeto representa uma aplicação completa, dividida em dois componentes principais: uma API RESTful desenvolvida em Java e uma interface de usuário web construída com Angular. A arquitetura visa demonstrar a integração entre um backend robusto e um frontend moderno, utilizando padrões de desenvolvimento atuais.
Tecnologias Empregadas

O projeto AgendaApiJavaAngula é desenvolvido utilizando um stack tecnológico diversificado, refletindo a natureza de uma aplicação full-stack:

    Java (microserviço) spring boot: 
        Linguagem principal para o desenvolvimento do backend (API).
    Angular
        TypeScript: Linguagem de programação para o desenvolvimento do frontend (Angular).
        HTML: Utilizado para a estruturação das páginas web na interface do usuário.
        CSS: Empregado para a estilização e design visual da aplicação web.

Esta combinação indica uma abordagem comum para aplicações modernas, onde Java é utilizado para a lógica de negócio e persistência de dados no servidor, e Angular/TypeScript para uma experiência de usuário rica e dinâmica no cliente.
Estrutura do Projeto

A organização do projeto é modular, separando claramente o backend do frontend em diretórios distintos, o que facilita o desenvolvimento e a manutenção independente de cada parte:

    Api/projetoAgendaApi:
    Este diretório contém todo o código-fonte da API RESTful. Desenvolvido em Java, este módulo é responsável por:
        Expor os endpoints da API para comunicação com o frontend.
        Implementar a lógica de negócio principal.
        Gerenciar a persistência de dados (interação com o banco de dados).
        Provavelmente utiliza frameworks como Spring Boot para simplificar o desenvolvimento da API.

    Web/projetoAngendaWeb:
    Este diretório hospeda o código-fonte da aplicação web frontend. Desenvolvido com Angular (utilizando TypeScript, HTML e CSS), este módulo é responsável por:
        A interface de usuário e a experiência do usuário (UX).
        Fazer requisições à API para obter e enviar dados.
        Apresentar os dados de forma interativa para o usuário.
        Gerenciar o estado da aplicação no cliente.

    README.md:
    Este arquivo, localizado na raiz do projeto, fornece uma visão geral e informações essenciais sobre o projeto.

Esta estrutura promove a organização e a colaboração em equipes, permitindo que desenvolvedores de backend e frontend trabalhem de forma mais autônoma.
