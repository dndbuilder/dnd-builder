# NestJS API

This is a NestJS API project that extends ESLint and TypeScript configurations from the shared packages in the monorepo.

## Description

The API is built using [NestJS](https://nestjs.com/), a progressive Node.js framework for building efficient and scalable server-side applications.

## Installation

```bash
pnpm install
```

## Running the app

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## Test

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

## Configuration

This project extends ESLint and TypeScript configurations from the shared packages in the monorepo:

- ESLint: `@repo/eslint-config`
- TypeScript: `@repo/typescript-config`
