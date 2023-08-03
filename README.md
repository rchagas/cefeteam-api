# Codefet Api

## Requirements

<br/>

### Node.js v16.17 or newer

<a href="https://nodejs.org/en/" target="blank">
<img src="https://nodejs.org/static/images/logo.svg" height="50" alt="Node.js Logo" />

<div> https://nodejs.org/en/</div>
</a>
<br/>

### Nestjs

```
$npm i -g @nestjs/cli

or

$pnpm i -g @nestjs/cli
```

<a href="https://docs.nestjs.com" target="blank">
<img src="https://docs.nestjs.com/assets/logo-small.svg" height="50" alt="Node.js Logo" />
<div> https://docs.nestjs.com</div>
</a>
<br/>

### Docker v20.10.18 or newer

<a href="https://docs.docker.com/" target="blank">
<img src="https://www.docker.com/wp-content/uploads/2022/01/Docker-Logo-White-RGB_Horizontal-730x189-1.png.webp" height="50" alt="Node.js Logo" />
<div> https://docs.docker.com/</div>
</a>
<br/>

## Installation

Clone the project the repository with git clone

```
git@github.com:Codefet/codefet-api.git
```

<br/>

### Install pnpm package manager if do not installed

Using npm

```
$ npm install -g pnpm
```

or using node corepack

```bash
# Using node.js v16.13 or newer

$ corepack enable
```

This will automatically install pnpm on your system. However, it probably won't be the latest version of pnpm. To upgrade it, check what is the latest pnpm version and run:

```bash
$ corepack prepare pnpm@<version> --activate
```

or with Node.js v16.17

```bash
$ corepack prepare pnpm@latest --activate
```

docs: <a href="https://pnpm.io/installation" target="blank">https://pnpm.io/installation</a>

### Install dependencies

Use pnpm package manager to install dependencies of the project with the command

```bash
$ pnpm install

or

$ pnpm i
```

<br/>

### Database Config

Install Docker Compose tool

Doc Ref: <a href="https://docs.docker.com/compose/install/" target="blank">https://docs.docker.com/compose/install/</a>

You can edit and customize the `docker-compose.yml`. It was used a mariaDB docker container for development and this docker-compose file is available in the repository to test. \
For database config create an `.env` file and set the environment variable `DATABASE_URL` on it as described on the `.env.example` file using
your local db settings or `docker-compose.yml` file settings. \
\
**Warning:** Database user in .env file should be root or an user with permission for add, update and delete tables and databases.

Use compose command to run database

```bash
sudo docker compose up
```

To check if database is running use docker command

```bash
sudo docker ps
```

this should display a message like this

```bash
CONTAINER ID   IMAGE          COMMAND                  CREATED       STATUS       PORTS                                       NAMES
3582261a6277   mariadb:10.9   "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:3307->3306/tcp, :::3307->3306/tcp   db-mariadb-codefet
```

<br/>

### Run migrations

Use prisma command to run migrations and create the database.

```bash
pnpx prisma migrate dev
```

or custom script

```bash
pnpm run prisma:migrate
```

<br/>

### Seeding database

Seed your database with test data using

```bash
pnpx prisma db seed
```

or custom script

```bash
pnpm run prisma:seed
```

<br/>

You can test connection with prisma studio

```bash
pnpx prisma studio
```

## Running App

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

[MIT licensed](LICENSE).
