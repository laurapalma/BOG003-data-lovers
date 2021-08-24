import { paginationData, getPokemonsByType, searchPokemons, average, most, sortData } from '../src/data.js';
import {Pokemon} from '../src/data/pokemon/pokemon.js';



describe('paginationData', () => {
  it('is a function', () => {
    expect(typeof paginationData).toBe('function');
  });

  it('returns 25 pokemons', () => {
    const pokemons = Pokemon;
    const pokemonsPage1 = paginationData(pokemons, 1);
    expect(pokemonsPage1.length).toBe(25);
  });

  it('for page 1, the first pokemon is "001"', () => {
    const pokemons = Pokemon;
    const pokemonsPage1 = paginationData(pokemons, 1);
    expect(pokemonsPage1[0].num).toBe("001");
  });

  it('for page 1, the last pokemon is "025"', () => {
    const pokemons = Pokemon;
    const pokemonsPage1 = paginationData(pokemons, 1);
    expect(pokemonsPage1[pokemonsPage1.length - 1].num).toBe("025");
  });
});


describe('getPokemonsByType', () => {
  it('is a function', () => {
    expect(typeof getPokemonsByType).toBe('function');
  });

  it('for type ghost must return 4 pokemons', () => {
    const pokemons = Pokemon;
    const type = "ghost";
    const pokemonsByType = getPokemonsByType(pokemons, type);
    expect(pokemonsByType.length).toBe(4);
  }); 
}); 


describe('searchPokemons', () => {
  it('is a function', () => {
    expect(typeof searchPokemons).toBe('function');
  });

  it('for name bulbasaur must return 1 pokemon', () => {
    const pokemons = Pokemon;
    const name = "bulbasaur";
    const searchPokemonsByName = searchPokemons(pokemons, name);
    expect(searchPokemonsByName.length).toBe(1);
  }); 
}); 


describe('average', () => {
  it('is a function', () => {
    expect(typeof average).toBe('function');
  });

  it('for base-attack must return total average is 154.72', () => {
    const pokemons = Pokemon;
    const totalBaseAttack = "base-attack";
    const totalAverage = average(pokemons, totalBaseAttack);
    expect(totalAverage).toBe("154.72");
  }); 
}); 

describe('average', () => {
  it('is a function', () => {
    expect(typeof average).toBe('function');
  });

  it('for base-defense must return total average is 140.22', () => {
    const pokemons = Pokemon;
    const totalBaseDefense = "base-defense";
    const totalDefense = average(pokemons, totalBaseDefense);
    expect(totalDefense).toBe("140.22");
  }); 
}); 

describe('average', () => {
  it('is a function', () => {
    expect(typeof average).toBe('function');
  });

  it('for base-stamina must return total average is 166.28', () => {
    const pokemons = Pokemon;
    const totalBaseStamina = "base-stamina";
    const totalStamina = average(pokemons, totalBaseStamina);
    expect(totalStamina).toBe("166.28");
  }); 
}); 


describe('most', () => {
  it('is a function', () => {
    expect(typeof most).toBe('function');
  });

  it('returm most attack pokemon', () => {
    const pokemons = Pokemon;
    const pokemonMostAttack = "base-attack";
    const totalMostAttack = most(pokemons, pokemonMostAttack);
    expect(totalMostAttack.stats["base-attack"]).toBe("300");
  }); 
}); 


describe('most', () => {
  it('is a function', () => {
    expect(typeof most).toBe('function');
  });

  it('returm most defense pokemon', () => {
    const pokemons = Pokemon;
    const pokemonMostDefense = "base-defense";
    const totalMostDefense = most(pokemons, pokemonMostDefense);
    expect(totalMostDefense.stats["base-defense"]).toBe("396");
  }); 
}); 


describe('most', () => {
  it('is a function', () => {
    expect(typeof most).toBe('function');
  });

  it('returm most stamina pokemon', () => {
    const pokemons = Pokemon;
    const pokemonMostStamina = "base-stamina";
    const totalMostStamina = most(pokemons, pokemonMostStamina);
    expect(totalMostStamina.stats["base-stamina"]).toBe("496");
  }); 
}); 


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returm must first pokemon by name abra', () => {
    const pokemons = Pokemon;
    const pokemonSortName = sortData(pokemons);
    expect(pokemonSortName[0].name).toBe("abra");
  }); 
}); 


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returm must last pokemon by name zubat', () => {
    const pokemons = Pokemon;
    const lastPokemonSortName = sortData(pokemons);
    expect(lastPokemonSortName[lastPokemonSortName.length -1].name).toBe("zubat");
  }); 
}); 


