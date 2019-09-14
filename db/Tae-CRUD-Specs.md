### Create a new reservation
Creates a new reservation for the given restaurant_id, reservation_date, reservation_time, and party_size.

### **POST** /api/restaurants/reservations

#### Sample Input:
```json
POST /api/restaurants/1/reservations
{
  "calendar_date": "2019-09-02",
  "calendar_time": "13:00:00",
  "num_reserved_seats": 3,
}
```
#### Sample Output:
{
  "id": "123",
  "restaurant_id": "r1",
  "calendar_date": "2019-09-02",
  "calendar_time": "13:00:00",
  "num_reserved_seats": 3,
}

(1) Insert new reservation record.
INSERT INTO reservations (restaurant_id, reservation_datetime, party_size) values (...)
(2) Update reservation booking capacity for the time slot
UPDATE restaurant_availability
SET time_slot_total_reserved = ${currentTotal + reservedPartySize}
WHERE restaurant_id = 123

---
### Retrieve available times for restaurant
Retrieves a list of available reservation times for the given restaurant_id, reservation_date, reservation_time, and party_size.

### **GET** /api/restaurants/:restaurantId/availability/date={reservation_date}?time={reservation_time}?partySize={party_size}

#### Sample Input:
GET /api/restaurants/1/availability/date=2019-09-12?time=19:00?partySize=3

#### Sample Output:
```json
{
  ["19:00", "19:30", "20:00"]
}
```

<!-- SELECT time_slot FROM reservation_availability
WHERE time_slot = ${requestedDateTime}
AND time_slot_total_available > ${partySize} + t2.time_slot_total_reserved
\/\/\/
(SELECT time_slot_total_reserved FROM reservation_availability
WHERE time_slot = ${requestedDateTime}) as t2 -->

---
### Update an existing reservation
Updates an existing reservation's party size given the reservation_id.

### **PUT** /api/restaurants/:restaurantId/reservations/:reservationId

#### Sample Input:
```json
PUT /api/restaurants/1/reservations/111
{
  "num_reserved_seats": 3,
}
```

#### Sample Output:
```json
{
  "reservation_id": 111,
  "num_reserved_seats": 3,
}
```

---
### Delete a reservation
Deletes the reservation given the reservation_id.

### **DELETE** /api/restaurants/:restaurantId/reservations/:reservationId
