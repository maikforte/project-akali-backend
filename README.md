# Project SLEX

## Table of Contents
1. [Endpoints](#endpoints)
    - [Leaderboards](#get-/leaderboards/:region)
    - [Rarities](#get-/globals/rarities)
    - [Card Regions](#get-/globals/regions)
    - [Spell Speeds](#get-/globals/spell-speeds)
    - [Vocabulary Terms](#get-/globals/vocab-terms)
    - [Keywords](#get-/globals/keywords)
    - [Cards](#get-/cards)
1. [Testing](#testing)
1. [Linting](#linting)
1. [Quickstart](#quickstart)

### Endpoints
#### `GET /leaderboards/:region`
> List of LoR masters per region

*Available Regions*:
- americas
- asia
- europe
- sea

#### `GET /globals/rarities`
> List of currently available card rarities

#### `GET /globals/regions`
> List of currently available card regions

#### `GET /globals/spell-speeds`
> List of currently available Spell Speeds

#### `GET /globals/vocab-terms`
> List of vocabulary terms

#### `GET /globals/keywords`
> List of keywords

#### `GET /cards`
> List all available cards

*Pagination*:<br>
Each page contains 25 cards

*Example*:<br>
`GET /cards?page=1`

The endpoint also accepts query as long as it is a card property. I recommend that you use the nameRef as is it widely used and is not affected by different locale. Pagination is also accepted when querying with property.

*Example*:<br>
`GET /cards?regionRef=Ionia&attack=0&page=1`

### Testing
Unit testing is very very simple. The project uses [Mocha](https://mochajs.org/) - a very very simple and lightweight test framework that runs on Node and browser. [Chai](https://mochajs.org/) - for the assertion library

To run the test, simply navigate to the project folder and run `npm run test`

### Linting
Lint configuration is based-off of [AirBnB Lint Config](https://www.npmjs.com/package/eslint-config-airbnb) with the alteration of the indention set to `4 spaces`.

To run the lint, navigate to the project folder and run `npm run lint`
To fix some of the linting errors, run `npm run lint-fix`

### Quickstart
1. Fork the repo
1. Navigate to the project folder
1. Run `npm install`
1. Run `npm start`
1. Open your browser to `http://localhost:3000/hello-world` or `http://localhost:3000/hello-world/Michael`
