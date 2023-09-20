# Event Management System (Backend)

This is the repository for the Event Management System backend. This system allows you to manage events and hosts for various activities.


## Architecture

- Node
- Express
- Typescript
- Jest
- Postegres
- TypeORM
- SSE (Server-sent events)


## Table of Contents

- [Getting Started](#getting-started)

  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

- [Scripts](#scripts)

## Getting Started

To get started with the Event Management System backend, follow these steps:

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js
- Yarn (or npm)
- Docker
- Docker Compose

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/your-username/event-management.git
    ```
2. Install dependencies:
   ```sh
   yarn install
   ```
3. In the project root, run the following command to start the containers:
    ```sh
    docker-compose up -d
    ```
4. Start the development server (this will also run the seed script):
   ```sh
   yarn dev
   ```


## Scripts

- Run the development and seed the database:
    ```bash
    yarn dev
    ```

- Seed the database:
   ```sh
   yarn seed
   ```

- Create a new migration:
    ```sh
    yarn create-migration
    ```

- Run migration:
   ```sh
   yarn run-migration
   ```

- Revert migration:
   ```sh
   yarn revert-migration
   ```
   
- Run lint:
   ```sh
   yarn lint
   ```
- Run tests:
   ```sh
   yarn test
   ```