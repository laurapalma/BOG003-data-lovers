import { paginationData, getPokemonsByType, sortData, searchPokemons } from './data.js';


let filters = { // los filtros que queremos pasar, como la pagina, el tipo y por orden
  page: 1,
  type: null,
  sort: null,
  search: null
}

// funcion que lanza el proceso de render con los parametros que pasemos
function init(filters) {
  const data = getData(filters); // nos trae la data segun lo que encuentre si hay filtro o no
  renderPokemons(data);
}

// retorna la data transformada segun los parametros que le pasemos
function getData(filters) {
  const dataPokemon = window.pokemon; // trae todos los pokemones
  let sortDataPokemons = [];
  let typedPokemons = [];
  let pagedPokemons = [];
  let searchedPokemons = [];

  if (filters.sort) {// si viene el filtro de ordenar
    sortDataPokemons = sortData([...dataPokemon]);// llamo a mi funcion sort data
  } else {
    sortDataPokemons = dataPokemon;
  }

  if (filters.type) { // si vienen el filtro de tipo traigame el tipo seleccionado
    typedPokemons = getPokemonsByType([...sortDataPokemons], filters.type);
  } else {
    typedPokemons = sortDataPokemons;
  }

  if (filters.page) {  // valida si viene un filtro de paginacion
    pagedPokemons = paginationData([...typedPokemons], filters.page);
  } else {
    pagedPokemons = typedPokemons;
  }

  if (filters.search) {  // valida si viene un filtro de busqueda
    pagedPokemons = searchPokemons([...dataPokemon], filters.search);
  }

  
  if (filters.type) {
    renderPaginator(typedPokemons.length); // nos crea las paginas en funcion de lo que nos retorne getdata
  } else if (filters.search) {
    renderPaginator(pagedPokemons.length); // nos crea las paginas en funcion de lo que nos retorne getdata
  } else {
    renderPaginator(sortDataPokemons.length); // nos crea las paginas en funcion de lo que nos retorne getdata
  } 

  return pagedPokemons;

}

function renderPokemons(pokemonsData) {
  const pokemons = pokemonsData;
  let html = '';

  if (pokemons.length === 0 && filters.search) { // si el array es vacio
    html = `<p class="not-found">Pokémon no encontrado !</p>`;
  }

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
  if (cards) {
    cards.innerHTML = html;
  }
  
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
  if (buttons) {
    buttons.innerHTML = htmlButtons;
  }
  
}

const types = document.querySelectorAll('#types button');

types.forEach((item, index) => {
  item.id = `type${index + 1}`;

  item.addEventListener('click', () => {
    filters.page = 1;
    filters.type = item.dataset.type;
    const tag =
      `<span>${item.dataset.type} 
      <button id="tag-${item.dataset.type}">X</button>
    </span>`;

    const selectedFilters = document.querySelector("#selected-filters");
    selectedFilters.innerHTML = tag;

    document.addEventListener('click', (event) => {
      if (event.target && event.target.id === `tag-${item.dataset.type}`) {
        filters.type = null;
        filters.page = 1;
        selectedFilters.innerHTML = '';
        init(filters);
      }
    })


    init(filters);
  })
})


const sortOption = document.querySelector('#sort');

if (sortOption) {
  sortOption.addEventListener('change', (event) => {
    if (event.target.value === 'name') {
      filters.sort = true;
      init(filters);
    } else {
      filters.sort = null;
      init(filters);
    }
  });
}




const inputSearch = document.querySelector('#search');

inputSearch.addEventListener('input', () => {
  console.log(inputSearch.value);
  filters.search = inputSearch.value;
  init(filters);
});


init(filters);