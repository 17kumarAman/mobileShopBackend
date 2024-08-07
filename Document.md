## API Endpoints

#### User Endpoints

1. User Registration

- URL: /users/register
- Method: POST

Request Body:

```bash
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30,
  "password": "securepassword"
}
```

Success Response:

```bash
{
  "_id": "64c1f1a2b3c4d56789abcdef",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30,
  "password": "securepassword",
  "cart": [],
  "createdAt": "2024-08-07T00:00:00.000Z",
  "updatedAt": "2024-08-07T00:00:00.000Z",
  "__v": 0
}

```

2. User Login

- URL: /users/login
- Method: POST

Request Body

```bash
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

Success Response

```json
{
  "message": "Login successful",
  "user": {
    "_id": "64c1f1a2b3c4d56789abcdef",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30,
    "cart": [],
    "createdAt": "2024-08-07T00:00:00.000Z",
    "updatedAt": "2024-08-07T00:00:00.000Z",
    "__v": 0
  }
}
```

3. Get All Users

- URL: /users
- Method: GET

Success Response

```json
[
  {
    "_id": "64c1f1a2b3c4d56789abcdef",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30,
    "password": "securepassword",
    "cart": [],
    "createdAt": "2024-08-07T00:00:00.000Z",
    "updatedAt": "2024-08-07T00:00:00.000Z",
    "__v": 0
  }
]
```

4. Get Single User

- URL: /users/:id
- Method: GET

Success Response

```json
{
  "_id": "64c1f1a2b3c4d56789abcdef",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 30,
  "password": "securepassword",
  "cart": [],
  "createdAt": "2024-08-07T00:00:00.000Z",
  "updatedAt": "2024-08-07T00:00:00.000Z",
  "__v": 0
}
```

5. Update User

- URL: /users/:id
- Method: PATCH

Request Body

```json
{
  "name": "Jane Doe",
  "age": 31
}
```

Success Response

```json
{
  "_id": "64c1f1a2b3c4d56789abcdef",
  "name": "Jane Doe",
  "email": "john.doe@example.com",
  "age": 31,
  "password": "securepassword",
  "cart": [],
  "createdAt": "2024-08-07T00:00:00.000Z",
  "updatedAt": "2024-08-07T00:00:00.000Z",
  "__v": 0
}
```

6. Delete User

- URL: /users/:id
- Method: DELETE

Success Response

```json
{
  "message": "User deleted successfully"
}
```

#### Mobile Endpoints

1. Add Mobile

- URL: /mobiles/add
- Method: POST

Request Body

```json
{
  "model": "iPhone 14",
  "brand": "Apple",
  "price": 999.99,
  "image": "https://example.com/images/iphone14.jpg",
  "age": 1
}
```

Success Response

```json
{
  "_id": "64c1f1a2b3c4d56789abcdef",
  "model": "iPhone 14",
  "brand": "Apple",
  "price": 999.99,
  "image": "https://example.com/images/iphone14.jpg",
  "age": 1
}
```

2. Get All Mobiles

- URL: /mobiles
- Method: GET

Success Response

```json
[
  {
    "_id": "64c1f1a2b3c4d56789abcdef",
    "model": "iPhone 14",
    "brand": "Apple",
    "price": 999.99,
    "image": "https://example.com/images/iphone14.jpg",
    "age": 1
  }
]
```

3. Get Single Mobile

- URL: /mobiles/:id
- Method: GET

Success Response

```json
{
  "_id": "64c1f1a2b3c4d56789abcdef",
  "model": "iPhone 14",
  "brand": "Apple",
  "price": 999.99,
  "image": "https://example.com/images/iphone14.jpg",
  "age": 1
}
```

4. Update Mobile

- URL: /mobiles/:id
- Method: PATCH

Request Body

```json
{
  "price": 899.99
}
```

Success Response

```json
{
  "_id": "64c1f1a2b3c4d56789abcdef",
  "model": "iPhone 14",
  "brand": "Apple",
  "price": 899.99,
  "image": "https://example.com/images/iphone14.jpg",
  "age": 1
}
```

5. Delete Mobile

- URL: /mobiles/:id
- Method: DELETE

Success Response

```json
{
  "message": "Mobile deleted successfully"
}
```

Cart Endpoints

### 1. Add Mobile to Cart

- **URL:** `/users/:userId/cart/add`
- **Method:** `POST`
- **Description:** Adds a mobile item to the user's cart.
- **Request Body:**

```json
{
  "mobileId": "64c1f1a2b3c4d56789abcdef",
  "quantity": 2
}
```

Success Response

```json
[
  {
    "_id": "64c1f1a2b3c4d56789abcdef",
    "mobileId": "64c1f1a2b3c4d56789abcdef",
    "quantity": 2
  }
]
```

- Error Responses:
  - 404 Not Found: User or Mobile not found.
  - 400 Bad Request: Invalid request data.

2. Get Cart Items

- URL: /users/:userId/cart
- Method: GET

Description: Retrieves all items in the user's cart.
Success Response:

```json
[
  {
    "_id": "64c1f1a2b3c4d56789abcdef",
    "mobileId": {
      "_id": "64c1f1a2b3c4d56789abcdef",
      "model": "iPhone 14",
      "brand": "Apple",
      "price": 999.99,
      "image": "https://example.com/images/iphone14.jpg",
      "age": 1
    },
    "quantity": 2
  }
]
```

- Error Responses:
  - 404 Not Found: User not found.
  - 500 Internal Server Error: Server error

3. Update Cart Item Quantity

- URL: /users/:userId/cart/:itemId
- Method: PATCH
- Description: Updates the quantity of a specific item in the user's cart.

Request Body:

```json
{
  "quantity": 3
}
```

Success Response

```json
[
  {
    "_id": "64c1f1a2b3c4d56789abcdef",
    "mobileId": {
      "_id": "64c1f1a2b3c4d56789abcdef",
      "model": "iPhone 14",
      "brand": "Apple",
      "price": 999.99,
      "image": "https://example.com/images/iphone14.jpg",
      "age": 1
    },
    "quantity": 3
  }
]
```

- Error Responses:
  - 404 Not Found: User or Cart item not found.
  - 400 Bad Request: Invalid request data.

4. Remove Mobile from Cart

- URL: /users/:userId/cart/:itemId
- Method: DELETE
- Description: Removes a specific item from the user's cart.

Success Response:

```json
{
  "message": "Item removed from cart"
}
```

- Error Responses:
  - 404 Not Found: User or Cart item not found.
  - 400 Bad Request: Invalid request data.

```typescript
This `README.md` provides an overview of your project, including setup instructions, development server information, and detailed API endpoints documentation. Adjust any specific details as necessary.
```
