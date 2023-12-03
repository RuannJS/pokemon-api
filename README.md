# Pokemon Go Data API

_This NodeJS API has been developed with the goal of importing and providing access to Pokemon Go data stored in an Excel file. It follows RESTful practices to deliver a practical, fast, and automated experience for users._

# Pokemon Go API Documentation

## Pokemons Endpoints

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
