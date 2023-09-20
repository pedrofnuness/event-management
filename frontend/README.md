# Event Management System (Frontend)

This is the repository for the Event Management System frontend. This system allows you to manage events and hosts for various activities.


## Architecture

- NextJS
- React
- Typescript
- Jest
- Styled Components
- SSE (Server-sent events)


## Table of Contents

- [Getting Started](#getting-started)

  - [Installation](#installation)

- [Scripts](#scripts)

## Getting Started

To get started with the Event Management System frontend, follow these steps:

### Installation


1. Install dependencies:
   ```sh
   yarn install
   ```

2. Start the development server (this will also run the seed script):
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