import { paginationData, getPokemonsByType } from './data.js';


let filters = { // los filtros que queremos pasar, como la pagina, el tipo y por orden
  page: 1,
  type: null,
  sort: null
}

// funcion que lanza el proceso de render con los parametros que pasemos
function init(filters) {
  const data = getData(filters); // nos trae la data segun lo que encuentre si hay filtro o no
  renderPokemons(data);
}

// retorna la data transformada segun los parametros que le pasemos
function getData(filters) {
  const dataPokemon = window.pokemon; // trae todos los pokemones
  let newDataPokemon = [];
  let typedPokemons = [];
  let pagedPokemons = [];


  if (filters.type) { // si vienen el filtro de tipo traigame el tipo seleccionado
    typedPokemons = getPokemonsByType(dataPokemon, filters.type);
  }

  if (filters.page) {  // valida si viene un filtro de paginacion
    if (filters.type) { // valida si ademas el filtro de paginacion venia con el filtro de tipo
      pagedPokemons = paginationData(typedPokemons, filters.page);
    } else {
      pagedPokemons = paginationData(dataPokemon, filters.page);
    }
  }

  if (filters.sort) { //valida si viene un filtro de ordenar
    if (pagedPokemons.length > 0) { // se valida si pagedPokemons no viene vacio quiere decir que ya fue modificado por alguno de los filtros
      newDataPokemon = sortData(pagedPokemons);
    } else { // si pagedPokemons no viene mayor que 0 quiere decir que la data no fue trnasformada y debemos ordenar la data original
      newDataPokemon = sortData(dataPokemon);
    }
  } else { // no paso por ninguno de los filtros
    if (pagedPokemons.length > 0) {
      newDataPokemon = pagedPokemons;
    } else {
      newDataPokemon = dataPokemon;
    }
  }

  if (typedPokemons.length > 0) {
    renderPaginator(typedPokemons.length); // nos crea las paginas en funcion de lo que nos retorne getdata
  } else {
    renderPaginator(dataPokemon.length); // nos crea las paginas en funcion de lo que nos retorne getdata
  }

  return newDataPokemon;
}

function renderPokemons(pokemonsData) {
  const pokemons = pokemonsData;
  let html = '';

  pokemons.forEach(element => {
    let types = '';
    element.type.forEach(el => {
      let type =
        `<div class="type ${el}">
                    <span>${el}</span>
                </div>`;

      types += type;
    });
    let htmlSegment =
      `<div class="card">
            <div class="card-header">
              <img src="${element.img}" alt="">
            </div>
            <div class="card-body">
              <span class="number item">${element.num}</span>
              <span class="name item">${element.name}</span>
              <div class="types item">
                ${types}
              </div>
            </div>
          </div>`;

    html += htmlSegment;

  });
  const cards = document.querySelector("#cards");
  cards.innerHTML = html;
}

function renderPaginator(size) {
  const pages = size / 25;
  let htmlButtons = '';

  for (let i = 0; i < pages; i++) {
    let buttonPage =
      `
      <div class="button-page">
        <button type="button" id="btn${i + 1}">${i + 1}</button>
      </div>`;

    document.addEventListener('click', (event) => {
      if (event.target && event.target.id === `btn${i + 1}`) {
        filters.page = i + 1;
        init(filters);
      }
    })

    htmlButtons += buttonPage;
  }

  const buttons = document.querySelector("#buttons");
  buttons.innerHTML = htmlButtons;
}

const types = document.querySelectorAll('#types button');
console.log(types);
types.forEach((item, index) => {
  item.id = `type${index + 1}`;

  item.addEventListener('click', () => {
    filters.page = 1;
    filters.type = item.dataset.type;
    init(filters);
  })
})

init(filters);


