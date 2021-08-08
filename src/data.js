
export const paginationData = (pokemons, page = 1) => {
  const size = 25;
  const lastPokemon = page * size;
  const firstPokemon = lastPokemon - (size - 1);

  const pagePokemons = pokemons.filter((pokemon, index) => {
    if (index + 1 >= firstPokemon && index + 1 <= lastPokemon) {
      return pokemon;
    }
  });

  return pagePokemons;
    
};


export const getPokemonsByType = (pokemons, type) => {
  return pokemons.filter(item => item.type.includes(type));
}

export const sortData = (pokemons) => {
  return pokemons.sort(SortArray);
}

function SortArray(x, y) {
  if (x.name < y.name) {return -1;}
  if (x.name > y.name) {return 1;}
  return 0;
}