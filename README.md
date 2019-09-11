# Reservation System

> System for booking a calendar event by time. Allow users to select a date from a calendar, which will show available reservation times on that day.

## Related Projects

  - https://github.com/lmwy-labs/Main-Gallery
  - https://github.com/lmwy-labs/Main-Menu
  - https://github.com/lmwy-labs/Main-Reviews

## Table of Contents

1. [Usage](##1. Usage)
2. [Requirements](# 2.Requirements)
3. [Development](#3. Development)
4. [CRUD APIs](#4. CRUD APIs)

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

This component uses port 3003, with the global component name Reservation.

## 2. Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## 3. Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## 4. CRUD APIs

### Create a new item
Creates a new reservation for the given restaurant name, date, time, and number of people.

POST /api/restaurants/:rid/reservations.

#### Sample input:
```json
{
  "calendar_date": "2019-09-02",
  "calendar_time": "13:00:00",
  "num_reserved_seats": 3,
}
```
#### Returns
Returns the created reservation object if successful.

---
### Retrieve a reservation
Retrieves a list of available reservations times for the given restaurant name, date, time, and number of people.

GET /api/restaurants/:rid/reservations

#### Sample input:
```json
{
  "calendar_date": "2019-09-02",
  "calendar_time": "13:00:00",
  "num_reserved_seats": 3,
}
```
#### Returns
Returns the reservation object if successful.

---
### Update an existing reservation
Updates an existing reservation's party size for the given restaurant name. Provide either the date, time, or number of people to update. Provide one or all of the fields to update.

PUT /api/restaurants/:rid/reservations
```json
{
  "calendar_date": "2019-09-02",
  "calendar_time": "13:00:00",
  "num_reserved_seats": 3,
}
```

#### Returns
Returns sucess message if successful.

---
### Delete / DELETE - delete an item
Deletes the reservation given the restaurant name, reservation date, and time.

DELETE /api/restaurants/:rid/reservations
```json
{
  "calendar_date": "2019-09-02",
  "calendar_time": "13:00:00",
}
```

#### Returns
Returns sucess message if successful.