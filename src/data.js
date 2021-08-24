
export const paginationData = (pokemons, page = 1) => { // declaramos la función paginationData y como parametro le pasamos los pokemons y la pagina 
  const size = 25; //declaramos una variable size, que es contiene la cantidad de pokemons para cada pagina
  const lastPokemon = page * size; // declaramos la variable lastPokemon que contendra  el numero del ultimo pokemon de cada pagina
  const firstPokemon = lastPokemon - (size - 1); // declaramos la variable firstPokemon que contendra el numero del primer pokemon de cada pàgina 
  const pagePokemons = pokemons.filter((pokemon, index) => { // la constante pagePokemon se guardara  los pokemons filtrados.
    if (index + 1 >= firstPokemon && index + 1 <= lastPokemon) { // si la posición index +1 es mayor o igual al primer pokemon y la posición index +1 es menor o igual al ultimo pokemon 
      return pokemon; // nos retorne pokemon que cumpla con la condición de estar en el rango entre el 1 y el ultimo
    }
  });

  return pagePokemons; // como resultado nos retornara todos los pokemons que esten en esa pagina
    
};


export const getPokemonsByType = (pokemons, type) => { // declaramos la función getPokemonsByType que recibe como parametros los pokemones y el tipo que se quiere filtrar
  return pokemons.filter(item => item.type.includes(type));// se le aplica el metodo filter a cada pokemon en el cual valida si  cualquera de sus elementos de la propiedad type esta incluida el parametro type
}

export const sortData = (pokemons) => { // declaramos la función sortData que recibe como parametro  los pokemons que queremos que ordene
  return pokemons.sort(SortArray); // nos retorna los pokemons ordenados alfabeticamente
}

export const searchPokemons = (pokemons, input) => { // declaramos la función searchPokemon que recibe como parametro los pokemons y el valor del input
  return pokemons.filter(item => item.name === input); // retorna lso pokemones filtados con la condición
}


export const average = (pokemons, property) => { // declaramos la función average que recibe como parametro los pokemons y una propiedad
  const sum = pokemons.reduce((accum, item) => { // en la constate sum guardamos la suma de la propiedad para cada pokemon pasada como parametro utilizando el metodo reduce 
   return accum + parseInt(item.stats[property]);
  }, 0);
  const average = sum / pokemons.length; // en la const average calculo el promedio de la propiedad pasada como parametro dividiendo sum entre pokemons.length
  return average.toFixed(2); // retorna el promedio y lo formateopara que solo imprima dos decimales 
}

export const most = (pokemons, property) => { // declaramos una funciòn most que recibe como parametro pokemons y propiedad estadistica
  let newItem = {}; // declaro la variable newItem donde se guardara el pokemon que cumpla con la condiciòn
  let counter = 0;//declaro la variable counter en 0 y ahí guardare el valor de la propiedad a comparar

  pokemons.forEach(item => { // itero los pokemosn con el metodo forEach
    if (parseInt(item.stats[property]) > counter) { //Valido si el valor en la propiedad que me llega como parametro es mayor que mi contador
      counter = parseInt(item.stats[property]);// de ser así a mi variable counter le asigno ese valor mayor
      newItem = {...item}; // le asigno a mi variable new item ese pokemon
    }
  });
  return newItem;
}


function SortArray(a, b) { // declaramos la función sortArray recibe como parametros a y b,Cuando compara dos valores, los envía a nuestra función de comparación y luego ordena los valores de acuerdo al resultado devuelto. 
  if (a.name < b.name) {return -1;} // si retorna -1 a se ordena antes que b
  if (a.name > b.name) {return 1;} // si retorna 1 b se ordena antes que a
  return 0; // si retorna 0 no hace nada
}
