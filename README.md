# Project Name

> Project description
Booking reservation system for Open Table Mock Site.
Allow users to select a date from a calendar, which will show available reservation times on that day.

## Related Projects

  - https://github.com/lmwy-labs/Main-Gallery
  - https://github.com/lmwy-labs/Main-Menu
  - https://github.com/lmwy-labs/Main-Reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Install node modules using npm install.

Initialize MySQL schema and generate dummy data for 100 restaurants.
```sh
npm run sql
npm run seed
```

Launch webpack and host server.
```sh
npm run build:dev
npm run start:dev
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

