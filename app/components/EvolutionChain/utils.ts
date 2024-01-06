import { Chain } from "./types";

// TODO clean up types so there is no any

export const normalizeEvolutionChain = (evolutionChain: Chain): any => {
  const { species, evolves_to } = evolutionChain;

  if (!evolves_to.length) {
    return [];
  }

  const evolutions = evolves_to.reduce((chain, evolution): any => {
    return [
      ...chain,
      {
        current: {
          name: species.name,
        },
        next: {
          name: evolution.species.name,
        },
      },
      ...normalizeEvolutionChain(evolution),
    ];
  }, []);

  return evolutions;
};
