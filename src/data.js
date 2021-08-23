
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

export const searchPokemons = (pokemons, input) => {
  return pokemons.filter(item => item.name === input);
}


export const average = (pokemons, property) => {
  const sum = pokemons.reduce((accum, item) => {
   return accum + parseInt(item.stats[property]);
  }, 0);
  const average = sum / pokemons.length;
  return average.toFixed(2);
}

export const most = (pokemons, property) => {
  let newItem = {};
  let counter = 0;

  pokemons.forEach(item => {
    if (parseInt(item.stats[property]) > counter) {
      counter = parseInt(item.stats[property]);
      newItem = {...item};
    }
  });
  return newItem;
}


function SortArray(x, y) {
  if (x.name < y.name) {return -1;}
  if (x.name > y.name) {return 1;}
  return 0;
}
