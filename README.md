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

Improvents

- Store the history and restore it so it does not get deleted with a restart of the application.

- Keyboard control with up and down arrows to allow for screen readers and ease of control

### Display components

Each Pokemon's page will have several display components to display various details about the Pokemon.

- Species

- Types

- Abilities

- Moves

- Sprites

- Evolution Chain

Improvements

- View all button on Moves as Pokemon have lots of moves so a user can click "View All" to expand or collapse the moves panel

- Normalize Sprite Names

- Evolution Chain improvemets to make it more readable when a pokemon has more than one evolution from a single current level

- Test components and hooks. Started to work on implementing tests but running into some babel ts-jest issues to get it running correctly. However here are some of the things that I would test: useFetch hook: make sure it returns errors states, loading and data correctly. Evolution chain: Make sure the utils function is correct, test that if the user is on a certain Pokemon's page, the link is not clickable. Page component rendering loader, 404 page correctly if loading and no data respectfully.

## Todos

- [ ] 404 Page

- [ ] Cashe the initial call to get the list of all the pokemon

- [ ] Error states for API errors

- [ ] Loaders

- [ ] Making some Typescript types be more specific

- [ ] Unit Tests

- [ ] Mobile responsiveness

- [ ] Favicon

- [ ] Look on Dribble for design inspiration
