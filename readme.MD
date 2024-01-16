Passo a passo para rodar o projeto:

1. Instale o [Node.js](https://nodejs.org/en/download/)
2. execute o comando `npm install` na pasta raiz do projeto
3. execute o comando `npx jest --init` na pasta raiz do projeto
4. Responda as perguntas conforme abaixo:
    - Would you like to use Jest when running "test" script in "package.json"? `yes`
    - Would you like to use Typescript for the configuration file? `no`
    - Choose the test environment that will be used for testing `node`
    - Do you want Jest to add coverage reports? `no`
    - Automatically clear mock calls and instances between every test? `yes`
5. execute o comando `npm test` na pasta raiz do projeto para iniciar os testes