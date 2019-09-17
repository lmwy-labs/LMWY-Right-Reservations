### Create a new reservation
Creates a new reservation for the given restaurant_id, reservation_date, reservation_time, and party_size.

### **POST** /api/restaurants/reservations

#### Sample Input:
```json
POST /api/restaurants/1/reservations
{
  "reservation_datetime": "2019-09-02 13:00:00",
  "seats": 3,
}
```
#### Sample Output:
{
  "id": "123",
  "restaurant_id": "r1",
  "reservation_datetime": "2019-09-02 13:00:00",
  "seats": 3,
}

---
### Retrieve available times for restaurant
Retrieves a list of available reservation times for the given restaurant_id, reservation_date, reservation_time, and party_size.

### **GET** /api/restaurants/:restaurantId/availability/date={reservation_date}&time={reservation_time}&seats={party_size}

#### Sample Input:
GET /api/restaurants/1/availability/date=2019-09-12&time=19:00&seats=3

#### Sample Output:
```json
{
  ["19:00", "19:30", "20:00"]
}
```

---
### Update an existing reservation
Updates an existing reservation's party size given the reservation_id.

### **PATCH** /api/restaurants/:restaurantId/reservations/:reservationId

#### Sample Input:
```json
PATCH /api/restaurants/1/reservations/111
{
  "num_reserved_seats": 3,
}
```

#### Sample Output:
```json
{
  "reservation_id": 111,
  "seats": 3,
}
```

---
### Delete a reservation
Deletes the reservation given the reservation_id.

### **DELETE** /api/restaurants/:restaurantId/reservations/:reservationId
