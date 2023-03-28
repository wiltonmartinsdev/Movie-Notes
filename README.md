
# Movie Notes

- Este projeto consiste em desenvolver uma aplicação em Node.js onde o usuário possa cadastrar um filme de seu interesse passando as seguintes informações como: Nome, descrição, nota (que poderá ser de 1 a 5) e poderá também associar tags ao filme.

- Projeto proposto pelo programa de formação [Explorer](https://www.rocketseat.com.br/explorer) da [RocketSeat](https://www.rocketseat.com.br/).


## Instruções de uso do Movie Notes

- O Movie Notes é uma aplicação desenvolvida em Node.js.
- Foi utilizado o framework Express.js para auxiliar/facilitar na criação das rotas da aplicação.
- Foi utilizado como banco de dados o SQLite.
- Foi utilizado o Knex.js para as consultas sql.
- Foi utilizado o Insomnia para testar as rotas da aplicação, de forma opcional, poderá ser baixado no link abaixo:
    
    **[Insomnia](https://insomnia.rest/download)**
 
    
## Dependências do Projeto
- Para utilização do projeto, irá precisar instalar o Node.js que pode ser baixado no link abaixo.

    **[Node.js](https://nodejs.org/en)**

## Instalação
- Após instalar o Node.js e executar o projeto pela primeira vez, precisará digitar no terminal o comando abaixo, na raiz do projeto, para instalar as outras dependências como, express, sqlite, etc.

    **npm install**  


## Execução
- Após instalar todas as dependências necessárias do projeto, agora poderá executá-lo com os seguintes passos:

- Primeiro, se conectar com o banco de dados para criar as tabelas do projeto, digitando no terminal o comando abaixo:
    
    **npm run migrate**

- Segundo, para executar a aplicação digite no terminal o comando abaixo: 
    
    **npm run dev**

- Após esses comandos, o servidor irá ser iniciado e aparecerá a mensagem: **"Server is running on Port: 3333".**       
## Funcionalidades

- **Criar Usuário:** Passando os seguintes parâmetros no corpo da requisição.

    Rota: `POST /users`

    {

        "name:"username",

        "email":"email@email.com",

        "password":"123"

    }
    
    <img src=""/>

- **Atualizar Usuário:** Passando os seguintes parâmetros no corpo da requisição.

    Rota: `PUT /user/:id`

    {
        
        "name:"updateUserName",

        "email":"updateemail@email.com",

        "password":"123",

        "oldPassword":"123"

    }
    
    <img src=""/>

- **Criar Nota:** Podemos criar uma Nota com as informações do filme, com os seguintes parâmetros no corpo da requisição.

    Rota: `POST /notes/:user_id`

    {

        "title:"Título do filme",

        "description":"Descrição do Filme",

        "rating":"Avaliação do Filme",
        
        "tags":"Tags relacionadas ao Filme"

    }
    
    <img src=""/>

- **Mostrar uma Nota:** Podemos mostrar uma nota específica.
    
    Rota: `GET /notes/:id`
    
    <img src=""/>

- **Mostrar todas as Notas:** Podemos mostrar todas as notas.
    
    Rota: `GET /notes`
    
    <img src=""/>

- **Deletar todas as Notas:** Podemos deletar a nota cadastrada.
    
    Rota: `GET /notes:id`
    
    <img src=""/>

- **Mostrar todas as Tags:** Podemos mostrar todas as tags na seguinte rota.
    
    Rota: `GET /tags/:user_id`
    
    <img src=""/>


## Stack utilizada

**Back-end:** `Node.js`, `Express.js`, `Knex.js`, `SQLite`


## Licença
![GitHub](https://img.shields.io/github/license/wiltonmartinsdev/Movie-Notes)

## Status do Projeto
- Conforme com o que foi proposto para desenvolver o projeto ele encontra-se finalizado, mas podendo ser implementada novas funcionalidades.
## Aprendizados

- A cada novo projeto proposto no Explorer sempre há novos aprendizados, focados em nos levar a pensar fora da caixa e com isso sempre aprimorando cada vez mais o conhecimento adquirido no programa.

- Esse projeto foi muito desafiador, assim como todos, mas nesse especificamente eu tive o primeiro contato em desenvolver uma aplicação em back-end.

- Eu aprendi nesse projeto tecnologias novas como o node.js, express.js, sqlite, knex.js e como fazer criptografia da senha do usuário, validação de email.

- Tive muitas dificuldades no começo de entender como tudo funciona no back-end, assim como os métodos HTTP, como se conectar ao banco de dados e ao invés de usar direto o banco de dados usar uma Query Builder que no caso usamos o Knex.js.

- Mas praticando, pesquisando muito em outras fontes como no próprio fórum do explorer, google, youtube, stackoverflow, mdn web docs e revendo as aulas e realizando este projeto consegui entender a lógica e os conceitos aplicados no projeto.



