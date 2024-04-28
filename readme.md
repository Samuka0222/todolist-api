# API Rest para Lista de Tarefas

Esse é um projeto pessoal baseado no material do curso do JStack sobre autenticação. Decidi montar uma pequena API simples de uma aplicativo de lista de tarefas apenas para testar os conhecimentos que desenvolvi assistindo as primeiras lives da plataforma Jstack, desde configurar o linting para o projeto, como arquitetar um projeto desacoplado de framework, criar uma API com typescript que era algo que eu não tinha habilidade até o momento.
Estou muito satisfeito com o resultado, passei algumas horinhas enfrentando bugs, porém no final funcionou tudo certo 😅. Pretendo aperfeiçoar ainda mais essa API para finalizar meu primeiro projeto fullstack próprio e continuar evoluíndo sempre!

## Tecnologias e Ferramentas

### Base:
- Node.JS;
- Express;
- Typescript;
- Yarn
- .env

### Linting:
- Eslint
- Prettier
- Lint-staged
- Commitlinting
- Husky
- EditorConfig

### Banco de Dados:
- Prisma
- Sqlite 3

### Autenticação:
- Json Web Token
- Bcrypt.js

### Testar a API
- Insomnia

### Outras:
- Zod => Para verificação de formulários.

## Funcionalidade e como testar

Para testar essa API, primeiro baixe os arquivos da API e rode o comando:

```javascript
npm install
```

Após isso, crie o arquivo ".env" e adicione as seguintes váriaveis de ambiente:

```javascript
JWT_SECRET =
  "[insira qualquer string para usar como segredo]";
```

Agora precisamos fazer a migração do nosso banco de dados, então vamos rodar o comando:

```javascript
npx prisma dev --name gerar_tabelas_inicias
```

Com isso já deve estar tudo certo para testarmos nosso projeto.

### Sinta-se livre para deixar seu feedback, sugestões e reportar bugs!

---

# English version.

# To-do List API Rest

This is a personal project based on the material from the JStack course on authentication. I decided to put together a simple API for a to-do list application just to test the knowledge I developed watching the first live broadcasts of the JStack platform, from setting up linting for the project to architecting a decoupled framework project, creating an API with typescript which was something I didn't have the skill for until now.

I am very satisfied with the result, I spent a few hours dealing with bugs, but in the end everything worked out right 😅. I intend to further improve this API to finalize my first fullstack project of my own and continue to evolve always!

## Technologies and Tools

### Base:
- Node.JS;
- Express;
- Typescript;
- Yarn
- .env

### Linting:
- Eslint
- Prettier
- Lint-staged
- Commitlinting
- Husky
- EditorConfig

### Database:
- Prisma
- Sqlite 3

### Authentication:
- Json Web Token
- Bcrypt.js

### Testing the API:
- Insomnia

### Others:
- Zod => forms verification.

## Functionality and how to test

To test this API, first download the API files and run the command:

```terminal
npm install
```

After that, create the ".env" file and add the following environment variables:

```javascript
JWT_SECRET = "[secret]";
```

Now we need to configure our database, so let's run the command:

```terminal
npx prisma dev --name add_initial_tables
```

With that, everything should be ready to test our project.

### Feel free to leave your feedback and suggestions!
