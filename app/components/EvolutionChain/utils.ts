export const normalizeEvolutionChain = (evolutionChain) => {
  const { species, evolves_to } = evolutionChain;

  if (!evolves_to.length) {
    return [];
  }

  const evolutions = evolves_to.reduce((chain, evolution) => {
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
