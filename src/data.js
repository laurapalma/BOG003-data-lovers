// estas funciones son de ejemplo

/* export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
 */
export const paginationData = (pokemons, page = 1) => {
  const size = 25;
  const lastPokemon = page * size;
  const firstPokemon = lastPokemon - (size - 1);

  const pagePokemons = pokemons.filter((pokemon, index) => {
    if (index >= firstPokemon && index <= lastPokemon) {
      return pokemon;
    }
  });

  return pagePokemons;
    
};




