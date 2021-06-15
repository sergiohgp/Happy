# Happy_Web

# Happy_Backend

# Web service for the Happy App project

> Connecting people to Orphanages in the simplest way

<p align="center">
  <a href="https://www.linkedin.com/in/sergio-hg-pereira/" target="_blank" rel="noopener noreferrer">
    <img alt="Author" src="https://img.shields.io/badge/Author-sergiohgp-%23FF9000">
  </a>
  
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/sergiohgp/GoStack_GoBarber?color=%23FF9000">

  <a href="https://github.com/tiago-web/GoBarber-api/stargazers">
    <img alt="Stars" src="https://img.shields.io/github/stars/sergiohgp/GoStack_GoBarber?color=%23FF9000" />
   </a>

  <a href="https://github.com/tiago-web/GoBarber-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/sergiohgp/GoStack_GoBarber?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/sergiohgp/GoStack_GoBarber?color=%23FF9000">
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=GoStack_GoBarber&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fsergiohgp%2FGoStack_GoBarber%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

# :pushpin: Table of Contents

* [About the project](#smile-about-the-project)
* [Technologies](#rocket-technologies)
* [Getting Started](#checkered_flag-getting-started)
* [How to contribute](#thinking-how-to-contribute)
* [Found a bug? Missing a specific feature?](#hammer-issues)
* [License](#book-license)



# :smile: About the project

This web service provides everything needed to connect regular people to local Orphanages.

The users can find and track the location of Orphanages near them.

The Orphanages can register their information to be seen in the app.

To see the **API**, click here: [GoBarber Web](https://github.com/sergiohgp/Happy_Backend)<br />

# :rocket: Technologies

Technologies that I used to develop this API

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Multer](https://github.com/expressjs/multer)
- [TypeORM](https://typeorm.io/#/)
- [JWT-token](https://jwt.io/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Date-fns](https://date-fns.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Commitizen](https://github.com/commitizen/cz-cli)


# :checkered_flag: Getting Started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> PS: I recommend using docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/sergiohgp/Happy_Web.git && cd Happy_Web
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Once the services are running

# Run the web client service
$ yarn start

# Well done, project is started!
```

# :thinking: How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork sergiohgp/Happy_Web
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd Happy_Web

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

# :hammer: Issues

Feel free to file a new issue with a respective title and description on the [GoBarber-api](https://github.com/sergiohgp/Happy_Web/issues) repository. 
If you already found a solution to your problem, **i would appreciate to review your pull request**!


# :book: License

Released in 2020.
This project is under the [MIT license](https://github.com/sergiohgp/Happy_Web/blob/master/LICENSE).

---


Made by Sergio Pereira [LinkedIn](https://www.linkedin.com/in/sergio-hg-pereira) 🚀
