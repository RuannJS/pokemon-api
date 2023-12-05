# Pokemon Go Data API

_This NodeJS API has been developed with the goal of importing and providing access to Pokemon Go data stored in an Excel file. It follows RESTful practices to deliver a practical, fast, and automated experience for users._

# Technologies Used

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [Jest](https://jestjs.io/)

# Pokemon Go API Documentation

## Pokemons Endpoints

### Get All Pokemons

Endpoint: `/pokemons`

**Method:** `GET`

**Query Parameters:**

- `limit` (string): Limit the number of Pokemons returned.
- `skip` (string): Skip the specified number of Pokemons in the list.

**Response:**

- Returns a list of all Pokemons based on the specified limit and skip parameters.

### Get Pokemons by Generation

Endpoint: `/pokemons/generation/:generation`

**Method:** `GET`

**Parameters:**

- `generation` (string): The generation number of Pokemons.

**Response:**

- Returns a list of Pokemons belonging to the specified generation.

### Get Pokemons by Evolution Stage

Endpoint: `/pokemons/evolution/:stage`

**Method:** `GET`

**Parameters:**

- `stage` (string): The evolution stage of Pokemons.

**Response:**

- Returns a list of Pokemons belonging to the specified evolution stage.

### Get Max Evolution Pokemons

Endpoint: `/pokemons/evolved/:boolean`

**Method:** `GET`

**Parameters:**

- `boolean` (string): Flag to filter evolved or non-evolved Pokemons.

**Response:**

- Returns a list of Pokemons based on the specified evolution status.

### Get Pokemons with the Same Family ID

Endpoint: `/pokemons/family/:familyID`

**Method:** `GET`

**Parameters:**

- `familyID` (string): The Family ID of Pokemons.

**Response:**

- Returns a list of Pokemons with the specified Family ID.

### Get Pokemons with Crossed Gen Evolutions

Endpoint: `/pokemons/crossgen`

**Method:** `GET`

**Response:**

- Returns a list of Pokemons with crossed-generation evolutions.

### Get Pokemons by Type (1 or 2)

Endpoint: `/pokemons/types/:type`

**Method:** `GET`

**Parameters:**

- `type` (string): The type (1 or 2) of Pokemons.

**Response:**

- Returns a list of Pokemons based on the specified type.

### Get Pokemons by Main Type (Type 1)

Endpoint: `/pokemons/maintype/:type`

**Method:** `GET`

**Parameters:**

- `type` (string): The main type (Type 1) of Pokemons.

**Response:**

- Returns a list of Pokemons based on the specified main type.

### Get Legendary Pokemons

Endpoint: `/pokemons/legendary`

**Method:** `GET`

**Response:**

- Returns a list of Legendary Pokemons.

---

Feel free to use these endpoints to interact with the Pokemon Go API and retrieve relevant Pokemon data.

### Get Pokemons by Total Stats

Endpoint: `/pokemons/stats/:order`

**Method:** `GET`

**Parameters:**

- `order` (string): Order of sorting, either 'desc' or 'asc'.
- `min` (string): Minimum total stats value (optional).
- `max` (string): Maximum total stats value (optional).

**Response:**

- Returns a list of Pokemons based on the specified total stats order, with optional filtering by minimum and maximum values.

### Get Pokemons by Attack (ATK)

Endpoint: `/pokemons/atk/:order`

**Method:** `GET`

**Parameters:**

- `order` (string): Order of sorting, either 'desc' or 'asc'.
- `min` (string): Minimum ATK value (optional).
- `max` (string): Maximum ATK value (optional).

**Response:**

- Returns a list of Pokemons based on the specified ATK order, with optional filtering by minimum and maximum values.

### Get Pokemons by Defense (DEF)

Endpoint: `/pokemons/def/:order`

**Method:** `GET`

**Parameters:**

- `order` (string): Order of sorting, either 'desc' or 'asc'.
- `min` (string): Minimum DEF value (optional).
- `max` (string): Maximum DEF value (optional).

**Response:**

- Returns a list of Pokemons based on the specified DEF order, with optional filtering by minimum and maximum values.

### Get Pokemons by Stamina (STA)

Endpoint: `/pokemons/sta/:order`

**Method:** `GET`

**Parameters:**

- `order` (string): Order of sorting, either 'desc' or 'asc'.
- `min` (string): Minimum STA value (optional).
- `max` (string): Maximum STA value (optional).

**Response:**

- Returns a list of Pokemons based on the specified STA order, with optional filtering by minimum and maximum values.

### Get Pokemon by Name

Endpoint: `/pokemons/name/:name`

**Method:** `GET`

**Parameters:**

- `name` (string): The name of the Pokemon.

**Response:**

- Returns information about a specific Pokemon based on its name.
