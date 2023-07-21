
# RocketNotes

- Este projeto consiste em desenvolver uma aplicação de ponta a ponta, ou seja, iremos desenvolver nossa aplicação Front-end em React.js e o Back-end em Node.js. 
- O usuário poderá cadastrar uma nota de qualquer assunto de seu interesse.



## Stack utilizada
- React.js: Uma biblioteca JavaScript para criar interfaces de usuário.
- Styled-components: Uma biblioteca que permite escrever CSS em JavaScript para estilizar componentes React.
- Node.js: Um ambiente de tempo de execução JavaScript que permite executar código JavaScript fora do navegador.
- Express: Um framework para Node.js que simplifica a criação de aplicativos da web e APIs.
- Cors: Um middleware que adiciona cabeçalhos CORS (Cross-Origin Resource Sharing) às solicitações e respostas HTTP.
- Axios: Uma biblioteca para fazer requisições HTTP no navegador e no Node.js.
- JWT (JSON Web Tokens): Uma forma segura de transmitir informações entre partes como um objeto JSON.
- SQLite e Knex.js: Um banco de dados SQL leve e uma biblioteca query builder para Node.js.

  **Front-end** `React.js`, `Styled-Component`

  **Back-end** `Node.js`, `Express.js`, `Cors`, `Axios`, `JWT`, `SQLite`, `Knex.js`



## Pré-requesitos
- Node.js instalado na máquina.
- NPM (Node Package Manager) para instalar as dependências.
- Esse repositório é o Back-end da aplicação e para o correto funcionamento, em ambiente local, precisamos rodar em conjunto com o repositório Front-end da aplicação. Acesse o link abaixo para ter acesso ao repositório Front-end da aplicação: https://github.com/wiltonmartinsdev/RocketNotes-Back-end
## Instalação

- Clone o repositório: git clone https://github.com/seu-usuario/sistema-gerenciamento-tarefas.git
- Acesse o diretório do projeto: cd sistema-gerenciamento-tarefas
- Com o Node.js e npm instalado na máquina, quando for executar o projeto pela primeira vez, precisará digitar no terminal o comando abaixo, na raiz do projeto, para instalar as dependências do projeto tanto do front-end quanto do back-end.

        cd frontend
        npm install

        cd ../backend
        npm install
- Configuração do Banco de Dados: O banco de dados SQLite já está configurado com o projeto e não requer mais etapas de configuração.

    
## Variáveis de Ambiente

- Renomeie o arquivo .env.example para .env no diretório backend e configure as variáveis de ambiente necessárias.


## Execução da Aplicação
- Após instalar todas as dependências necessárias do projeto, agora poderá executá-lo com os seguintes passos:

- Primeiro, se conectar com o banco de dados para criar as tabelas do projeto, digitando no terminal o comando abaixo:

        npm run migrate

- Segundo, para executar a aplicação digite no terminal o comando abaixo:

        npm run dev
        
        Após esses comandos, o servidor irá ser iniciado e aparecerá a mensagem: "Server is running on Port: 3333" informando que o servidor esta sendo executado na porta 3333.






- Inicie o servidor Back-end:

        cd backend
        npm dev run 
- Inicie o servidor Front-end:

        cd frontend
        npm dev run 
## Licença
![GitHub](https://img.shields.io/github/license/wiltonmartinsdev/Movie-Notes)


## Status do Projeto
- Conforme com o que foi proposto para desenvolver o projeto ele encontra-se finalizado, mas podendo ser implementada novas funcionalidades.
## Aprendizados

- A cada novo projeto proposto no Explorer sempre há novos aprendizados, focados em nos levar a pensar fora da caixa e com isso sempre aprimorando cada vez mais o conhecimento adquirido no programa.

- Esse projeto foi muito desafiador, assim como todos, mas nesse especificamente eu tive o primeiro contato em desenvolver uma aplicação completa indo do Front-end ao Back-end.

- Eu aprendi nesse projeto tecnologias novas como o React.js, Styled-Component, Node.js, Express.js, Cors, Axios, JWT, Sqlite, Knex.js e como fazer criptografia da senha do usuário, validação de email, etc.

- Tive muitas dificuldades no começo de entender como tudo funciona, de como o front-end se comunica com back-end usando cors, axios, jwt. E no React entender como é o funcionamento de propriedades e componontes, entender os Hooks, jsx e no back-end, assim como os métodos HTTP, como se conectar ao banco de dados e ao invés de usar direto o banco de dados usar uma Query Builder que no caso usamos o Knex.js. Então, foi foram muitos aprendizados e desafios.

- Mas praticando, pesquisando muito em outras fontes como no próprio fórum do explorer, google, youtube, stackoverflow, mdn web docs, chatGPT e revendo as aulas e realizando este projeto consegui entender a lógica e os conceitos aplicados no projeto.

