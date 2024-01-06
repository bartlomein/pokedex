# Bart Tyrpien's Pokedex

## Installation

Clone the repo and in the project root run

```
npm install
```

## Running the project

After the dependencies have been installed run the following in the project root

```
npm run dev
```

## Description

This is a Pokedex app using the PokeAPI v2 https://pokeapi.co/docs/v2

A user can go to the homepage and search for a Pokemon in the search bar up top or directly go to a specific pokemon's page by going to

```
http://localhost:3000/pokemon/{pokemonName}
```

### Search

The Search component searches through the list of all the pokemon and once one is clicked it will route the user to that pokemons page.

I have implemented an initial call to get the list of all the pokemon which speeds up the search process for the user and eliminates misspellings.

Improvements on this would be to cache the initial pokemon list in localstorage so it only gets called once every few days.

### Search History

The search history component shows on each pokemon's page. It will store each click on a selection inside the search component inside of a Redux store and display it to the user. Each item in the history can be clicked to go back to that page but it will not affect the history. Only searching and clicking on an item in the search will affect it.

Improvents would be to store the history and restore it so it does not get deleted with a restart of the application.

### Display components

Each Pokemon's page will have several display components to display various details about the Pokemon.

- Species

- Types

- Abilities

- Moves

- Sprites

- Evolution Chain

## Todos

- [ ] 404 Page

- [ ] Cashe the initial call to get the list of all the pokemon

- [ ] Error states for API errors

- [ ] Loaders

- [ ] Making some Typescript types be more specific

- [ ] Unit Tests

- [ ] Mobile responsiveness

- [ ] Favicon
