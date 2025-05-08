![Preview](./screenshots/login.png)

## :page_with_curl: About

<details>

Full stack digital wallet application developed in Next.js and Node.js with TypeScript and built with Docker.

<br />

## :hammer_and_wrench: Stacks

- TypeScript
- React.js
- Next.js
- Node.js
- Express.js
- PortgreSQL
- Docker
- Docker Compose

## :hammer_and_wrench: Installation and execution

<details>

To run this application you need to have **Git**, **Docker**, **Node** and **Docker Compose** installed on your computer. Docker Compose needs to be version **2.5.0** or higher and Node version **16**.

In addition, to run the step-by-step commands below, your operating system must also have a **Bash terminal** installed. If you are using **Linux** or **macOS**, Bash is already installed by default. However, if your system is **Windows**, you may need to do install WSL- windows subsytem for linux

### 1. In the project root directory, run the command below in the terminal to install the dependencies

```sh
npm install
```

### 2. Start the application containers

```sh
npm run compose:up
```

By running the command above, three containers will be started:

- ng_frontend - mapped on the port 3000
- ng_backend - mapped on the port 3001
- ng_db - mapped on the port 3002

They are the front-end, back-end and the database, respectively. After the containers starts, you can enter the <http://localhost:3000> address in your browser to see the application running.

For Loggin in use

Username : kavin
password: admin123

username:xuxameneguel
password:Xuxuxu_xaxaxa_123

To stop the containers, run the command below:

```sh
npm run compose:down
```

<br />
</details>

## :books: API Documentation

<details>

With the application running, access the <http://localhost:3001/docs> address in your browser to see the API documentation implemented with Swagger UI.
<br />

</details>

![API documentation/Documentação da API](./screenshots/api-docs.png)

