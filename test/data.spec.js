import { paginationData, getPokemonsByType, searchPokemons, average} from '../src/data.js';
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

