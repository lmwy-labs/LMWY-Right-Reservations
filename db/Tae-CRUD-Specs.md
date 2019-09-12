### Create a new reservation
Creates a new reservation for the given restaurant name, date, time, and number of people.

POST /api/restaurants/:restaurantId/reserve

#### Sample input:
```json
POST /api/restaurants/1/reserve
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

GET /api/restaurants/:restaurantId

#### Sample input:
```json
GET /api/restaurants/1
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

PUT /api/restaurants/:restaurantId/reserve
```json
PUT /api/restaurants/1/reserve
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

DELETE /api/restaurants/:restaurantId/reserve
```json
DELETE /api/restaurants/1/reserve
{
  "calendar_date": "2019-09-02",
  "calendar_time": "13:00:00",
}
```

#### Returns
Returns sucess message if successful.