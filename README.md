# Customer Management

Simple customer management API built with NodeJS, ExpressJS, Sequelize and JWT authentication.

Using this API you'll be able to create users that manage customers and each customer can have phones and addresses.

## Requirements

- NodeJS (9.x)
- Yarn (1.3.2)

After you have installed those two requirements, clone the repository and run:

```
yarn install
```

to install application dependencies and run:

```
node index.js
```

to run application. It will be available on `localhost:3000`


## API

API base path is `localhost:3000/api/`

---

### Authentication

**Endpoint:** /api/auth  
**Method:** POST  
**Body:**
```
{
  "user": {
    "email": "john@example.com",
    "password": "supersecret"
  }
}
```

#### Response

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsdWNhcy5kaWFzQHJlZGVhbHVtbmkuY29tIiwibmFtZSI6Ikx1Y2FzIFJhbW9zIiwiY3JlYXRlZF9hdCI6IjIwMTctMTEtMTJUMDE6NTM6MDguNjg...Xt3Gg"
}
```

#### Errors

**E-mail not found:**  
```
{
  "errors": {
    "user": {
      "not_found": "Usuário não encontrado"
    }
  }
}
```

**Incorrect password:**  
```
{
  "errors": {
    "user": {
      "password": "Senha incorreta"
    }
  }
}
```

**JWT Failed:**  
```
{
  "errors": {
    "token": {
      "unavailable": "Não foi possível gerar o token"
    }
  }
}
```

---

### Users

**Endpoint:** /api/users  
**Method:** POST  
**Body:**
```
{
  "user": {
    "email": "john@example.com",
    "password": "supersecret",
    "name": "John Doe"
  }
}
```

#### Response

```
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "updated_at": "2017-11-16T23:59:22.336Z",
    "created_at": "2017-11-16T23:59:22.336Z"
  }
}
```

---

### Customers

**Endpoint:** /api/customers  
**Method:** POST  
**Body:**
```
{
  "customer": {
    "name": "John Doe"
  }
}
```

#### Response

```
{
  "customer": {
    "id": 1,
    "name": "John Doe"
  }
}
```

**Endpoint:** /api/customers  
**Method:** PUT  
**Query:** customer_id  
**Body:**
```
{
  "customer": {
    "name": "Doe John"
  }
}
```

Example: `localhost:3000/api/customers?customer_id=1`

#### Response

```
{
  "customer": {
    "id": 1,
    "name": "Doe John"
  }
}
```

**Endpoint:** /api/customers  
**Method:** DELETE  
**Query:** customer_id

Example: `localhost:3000/api/customers?customer_id=1`

**Endpoint:** /api/customers  
**Method:** GET  
**Response:**
```
{
  "customers": [
    {
      "id": 1,
      "name": "John Doe"
    }
  ]
}
```

---

### Phones

**Endpoint:** /api/customers/:customer_id/phones  
**Method:** POST  
**Body:**
```
{
  "phone": {
    "area_code": 12,
    "number": "999998888"
    "description": "Mobile" (optional)
  }
}
```

#### Response

```
{
  "phone": {
    "id": 1,
    "area_code": 12,
    "number": "999998888"
    "description": "Mobile" (optional)
  }
}
```

**Endpoint:** /api/customers/:customer_id/phones  
**Method:** PUT  
**Query:** phone_id  
**Body:**
```
{
  "phone": {
    "area_code": 12,
    "number": "988889999"
    "description": "Celular" (optional)
  }
}
```

Example: `localhost:3000/api/customers/1/phones?phone_id=1`

#### Response

```
{
  "phone": {
    "id": 1,
    "area_code": 12,
    "number": "988889999"
    "description": "Celular"
  }
}
```

**Endpoint:** /api/customers/:customer_id/phones  
**Method:** DELETE  
**Query:** phone_id  

Example: `localhost:3000/api/customers/1/phones?phone_id=1`

**Endpoint:** /api/customers/:customer_id/phones  
**Method:** GET  
**Response:**
```
{
  "phones": [
    {
      "id": 1,
      "area_code": 12,
      "number": "988889999",
      "description": "Mobile"
    }
  ]
}
```

---

### Addresses

**Endpoint:** /api/customers/:customer_id/addresses  
**Method:** POST  
**Body:**
```
{
  "address": {
    "zipcode": "12220720",
		"street": "Great street",
		"neighborhood": "Nice neighborhood",
		"number": "1",
		"complement": "Ap 1", (optional)
		"city": "São José dos Campos",
		"description": "Home" (optional)
  }
}
```

#### Response

```
{
  "address": {
    "id": 1,
    "zipcode": "12220720",
		"street": "Great street",
		"neighborhood": "Nice neighborhood",
		"number": "1",
		"complement": "Ap 1",
		"city": "São José dos Campos",
		"description": "Home"
  }
}
```

**Endpoint:** /api/customers/:customer_id/addresses  
**Method:** PUT  
**Query:** address_id  
**Body:**
```
{
  "address": {
    "zipcode": "12220720",
		"street": "Bad street",
		"neighborhood": "Nice neighborhood",
		"number": "1",
		"complement": "Ap 1", (optional)
		"city": "São José dos Campos",
		"description": "Work" (optional)
  }
}
```

Example: `localhost:3000/api/customers/1/addresses?address_id=1`

#### Response

```
{
  "address": {
    "id": 1,
    "zipcode": "12220720",
		"street": "Bad street",
		"neighborhood": "Nice neighborhood",
		"number": "1",
		"complement": "Ap 1",
		"city": "São José dos Campos",
		"description": "Work"
  }
}
```

**Endpoint:** /api/customers/:customer_id/addresses  
**Method:** DELETE  
**Query:** address_id  

Example: `localhost:3000/api/customers/1/addresses?address_id=1`

**Endpoint:** /api/customers/:customer_id/addresses  
**Method:** GET  
**Response:**
```
{
  "addresses": [
    {
      "id": 1,
      "zipcode": "12220720",
  		"street": "Great street",
  		"neighborhood": "Nice neighborhood",
  		"number": "1",
  		"complement": "Ap 1", (optional)
  		"city": "São José dos Campos",
  		"description": "Home" (optional)
    }
  ]
}
```

---

### Search

**Endpoint:** /api/search  
**Method:** GET  
**Query:** phone  
**Response:**
```
{
  "customers": [
    {
      "id": 4,
      "name": "John Doe",
      "created_at": "2017-11-12T03:05:57.696Z",
      "updated_at": "2017-11-12T03:06:17.983Z",
      "user_id": 1,
      "phones": [
        {
          "id": 2,
          "number": "988889999",
          "area_code": "12",
          "description": "Celular",
          "created_at": "2017-11-12T19:21:07.055Z",
          "updated_at": "2017-11-12T19:21:07.055Z",
          "customer_id": 4
        }
      ],
      "addresses": [
        {
          "id": 1,
          "zipcode": "12220720",
      		"street": "Great street",
      		"neighborhood": "Nice neighborhood",
      		"number": "1",
      		"complement": "Ap 1", (optional)
      		"city": "São José dos Campos",
      		"description": "Home" (optional)
        }
      ]
    }
  ]
}
```
