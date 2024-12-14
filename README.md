# nestjs-user-management

Este é um projeto de gerenciamento de usuários desenvolvido com NestJS, TypeORM, PostgreSQL e PostGIS, destinado a ilustrar um exemplo de aplicação de API RESTful com rotas CRUD para gerenciamento de usuários e algumas para criação e listagem de pontos geográficos. O projeto também usa Docker para facilitar a execução e a configuração do ambiente de desenvolvimento.

## Tecnologias Utilizadas

- **NestJS**: Framework para construção de aplicações Node.js escaláveis.
- **TypeORM**: ORM (Object-Relational Mapping) para Node.js e TypeScript.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **PostGIS**: Extensão do PostgreSQL para suporte a dados geoespaciais.
- **Docker**: Ferramenta para criar, implantar e executar aplicações em contêineres.
- **Jest**: Framework para testes unitários.
- **Swagger**: Ferramenta para gerar documentação interativa da API, facilitando a visualização e o teste das rotas diretamente no navegador.

## Funcionalidades

- **CRUD de usuários**:
  - Criar um novo usuário.
  - Buscar um usuário por ID.
  - Atualizar um usuário existente.
  - Remover um usuário.
  
- **Persistência com banco de dados PostgreSQL**:
  - Tabelas para armazenar informações dos usuários e pontos de interesse com suporte a dados geoespaciais.

- **Testes de integração**:
  - Testes automatizados para as rotas de usuários.

## Documentação da API com Swagger

Para facilitar o entendimento e a interação com a API desenvolvida, utilizei o Swagger para gerar a documentação automática e interativa das rotas.

### Como acessar a documentação:

1. Após iniciar a aplicação, a documentação da API estará disponível em:  
   [http://localhost:3000/api](http://localhost:3000/api)

2. Na interface do Swagger, você poderá visualizar todas as rotas da API, incluindo as informações sobre os parâmetros e os tipos de resposta. Além disso, será possível testar cada endpoint diretamente pela interface, sem precisar usar ferramentas externas como o Postman.

## Como Iniciar a Aplicação

Para iniciar a aplicação e o banco de dados, siga os passos abaixo:

1. **Clonar o repositório**:
   Primeiro, clone o repositório para o seu computador:

   ```bash
   git clone https://github.com/seu-usuario/nestjs-user-management.git
   cd nestjs-user-management
   ```

2. **Instalar as dependências**:
   Após clonar o repositório, instale as dependências do projeto com o seguinte comando:

   ```bash
   npm install
   ```

3. **Configuração do Docker**:
   O projeto inclui um arquivo `docker-compose.yml` para configurar tanto o banco de dados PostgreSQL com a extensão PostGIS quanto o contêiner da API. Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

   Para rodar a aplicação e o banco de dados, execute o seguinte comando:

   ```bash
   docker compose up --build -d
   ```

   O parâmetro `--build` garante que o Docker reconstrua a imagem da aplicação, caso tenha ocorrido alguma modificação nas dependências ou no código. O parâmetro `-d` faz com que os containers sejam executados em segundo plano.

   Isso irá:

   - Iniciar o banco de dados PostgreSQL com a extensão PostGIS configurada.
   - Iniciar o servidor da API no contêiner Docker, expondo a aplicação na porta `3000`.

   **ATENÇÃO:** Após executar o comando `docker compose up --build -d`, pode demorar de **1 a 3 minutos** para que tudo fique pronto e você possa utilizar a aplicação. **Inclusive, o Swagger só ficará disponível após tudo estar pronto.**

   **Importante:** Caso ocorra algum erro relacionado a permissões de rede ou de acesso ao Docker, verifique se o Docker está rodando corretamente e se você tem permissões para executar comandos Docker.

   Isso irá:
   - Iniciar o banco de dados PostgreSQL com a extensão PostGIS configurada.
   - Iniciar o servidor da API no contêiner Docker, expondo a aplicação na porta 3000.

> **Mas depois deste tempo, quando tudo estiver pronto, o tempo de execução das rotas é rápido.**

4. **Acessar a documentação da API (Swagger)**:
   Após a aplicação e o banco de dados estarem em execução, a documentação da API estará disponível através do Swagger no seguinte endereço:

   ```
   http://localhost:3000/api
   ```

   No Swagger, você poderá visualizar todas as rotas da API e testar suas funcionalidades diretamente do navegador.

   **Atenção**: A documentação do Swagger estará disponível **somente depois que a aplicação e o banco de dados estiverem completamente iniciados**, o que pode levar de 1 a 3 minutos.

5. **Rodar os testes** (opcional):
   Para garantir que tudo está funcionando corretamente, você pode rodar os testes unitários com o seguinte comando:

   ```bash
   npm run test:unit
   ```

---

Agora, você pode usar a API e testar as rotas disponíveis, como a criação, leitura, atualização e remoção de usuários.

<details>
  <summary> Documentação do NestJS </summary>

  <p align="center">
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  </p>

  [circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
  [circleci-url]: https://circleci.com/gh/nestjs/nest

    <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
      <p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
  <a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
  <a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
    <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
      <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
    <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
  </p>
    <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
    [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

  ## Description

  [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

  ## Project setup

  ```bash
  $ npm install
  ```

  ## Compile and run the project

  ```bash
  # development
  $ npm run start

  # watch mode
  $ npm run start:dev

  # production mode
  $ npm run start:prod
  ```

  ## Run tests

  ```bash
  # unit tests
  $ npm run test

  # e2e tests
  $ npm run test:e2e

  # test coverage
  $ npm run test:cov
  ```

  ## Deployment

  When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

  If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

  ```bash
  $ npm install -g mau
  $ mau deploy
  ```

  With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

  ## Resources

  Check out a few resources that may come in handy when working with NestJS:

  - Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
  - For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
  - To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
  - Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
  - Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
  - Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
  - To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
  - Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

  ## Support

  Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

  ## Stay in touch

  - Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
  - Website - [https://nestjs.com](https://nestjs.com/)
  - Twitter - [@nestframework](https://twitter.com/nestframework)

  ## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

</details>