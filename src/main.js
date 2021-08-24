import { paginationData, getPokemonsByType, sortData, searchPokemons } from './data.js';
import {Pokemon} from './data/pokemon/pokemon.js';


let filters = { // los filtros que queremos pasar, como la pagina, el tipo y por orden
  page: 1,
  type: null,
  sort: null,
  search: null
}

// funcion que trae la data de acuerdo a los filtros y lanza el proceso de render con los parametros que pasemos
function init(filters) {
  const data = getData(filters); // nos trae la data segun lo que encuentre si hay filtro o no
  renderPokemons(data); // nos renderiza esa data
}

function getData(filters) { // retorna la data transformada segun los parametros que le pasemos en el objeto filters
  const dataPokemon = Pokemon; 
  let sortDataPokemons = [];
  let typedPokemons = [];
  let pagedPokemons = [];
  

  if (filters.sort) {// si viene el filtro de ordenar
    sortDataPokemons = sortData([...dataPokemon]);// llamo a mi funcion sort data(... para que no se mute nuestro objeto original, el tipo de dato obje y array tienes valores por referencia y no por valor.) mutabilidad en js
  } else {
    sortDataPokemons = dataPokemon;
  }

  if (filters.type) { // valida si vienen el filtro de tipo traigame el tipo seleccionado
    typedPokemons = getPokemonsByType([...sortDataPokemons], filters.type);//llamo a la función que me retorna los pokemones por tipo
  } else {
    typedPokemons = sortDataPokemons;// si filtro tipo es igual a null entonces dejo el objeto tal y como llego
  }

  if (filters.page) {  // valida si viene un filtro de paginacion
    pagedPokemons = paginationData([...typedPokemons], filters.page);// llamo a la funcion que me retorna los pokemones de la pagina correspondiente
  } else {
    pagedPokemons = typedPokemons; // si el filtro paginas es igual a null entoces deja el objeto tal y como llego
  }

  if (filters.search) {  // valida si viene un filtro de busqueda
    pagedPokemons = searchPokemons([...dataPokemon], filters.search);// llamo a la función que me retorna el pokemon segun busqueda
  }

  
  if (filters.type) {
    renderPaginator(typedPokemons.length); // nos crea las paginas en funcion de la cantidad de pokemones que nos retorne getdata
  } else if (filters.search) { // 
    renderPaginator(pagedPokemons.length); // nos crea las paginas en funcion de la cantidad de pokemons que nos retorne getdata
  } else {
    renderPaginator(sortDataPokemons.length); // nos crea las paginas en funcion de la cantidad de pokemons que nos retorne getdata
  } 

  return pagedPokemons;

}

function renderPokemons(pokemonsData) {
  const pokemons = pokemonsData;
  let html = '';

  if (pokemons.length === 0 && filters.search) { // si el filtro de busqueda no retorna ningun pokemon entonces se renderiza el siguiente parrafo
    html = `<p class="not-found">Pokémon no encontrado !</p>`;
  }

  pokemons.forEach(element => { // por cada pokemon encontrado va a renderizar cada card con la información de pokemon
    let types = ''; // se crea una variable donde guardare el bloque html que se creara por cada element.type
    element.type.forEach(el => { // por cada tipo de pokemon encontado renderiza el tipo sobre la tarjeta
      let type = `
        <div class="type ${el}">
          <span>${el}</span>
        </div>`;

      types += type; // el acumulador de todos los bloques
    });
    let htmlSegment =  // se crea una variable donde guardare el bloque html que se cree por cada pokemon
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

    html += htmlSegment; // acumulador de todos los bloques

  });
  const cards = document.querySelector("#cards"); // desde la constate cards estoy accediendo al elemento del dom que tiene por id cards
  if (cards) {
    cards.innerHTML = html; // inserto en ese elemento todas las cards 
  }
  
}

function renderPaginator(size) { // recibe como parametro el tamaño del array de pokemones 
  const pages = size / 25; // define cuantas paginas se crearan de acuerdo al tamaño del array de pokemones
  let htmlButtons = ''; // se crea una variable donde guardare el bloque html de botones que se creara por cada pagina

  for (let i = 0; i < pages; i++) {
    let buttonPage = // es la variable para creear cada boton
      `
      <div class="button-page">
        <button type="button" id="btn${i + 1}">${i + 1}</button>
      </div>`;

    document.addEventListener('click', (event) => { // es una escuchador del evento click para cada boton que ejecutara la funcion init con el nuevo filtro de pagina
      if (event.target && event.target.id === `btn${i + 1}`) { // valida si se hizo click encima del boton de pagina 
        filters.page = i + 1;// si es asi filters.page asignele el valor de esa pagina
        init(filters);// ejecuto de nuevo la funcion init con esa nueva actualizacion del objeto filter
      }
    })

    htmlButtons += buttonPage; // es el acumulador de todos los botones
  }

  const buttons = document.querySelector("#buttons");// desde la constate buttons estoy accediendo al elemento del dom que tiene por id buttons
  if (buttons) {
    buttons.innerHTML = htmlButtons; // estoy inyectando en ese elemento todos los botones
  }
  
}

const types = document.querySelectorAll('#types button');// desde la constate types estoy accediendo al elemento del dom que tiene por id types button

types.forEach((item, index) => { // itera cada uno de los botones de tipo y les pone un id
  item.id = `type${index + 1}`;

  item.addEventListener('click', () => { // un escuchador del evento click a cada uno de los botones
    filters.page = 1; // al dar click a un boton de tipo modifico filters,page para que me traiga la pagina 1
    filters.type = item.dataset.type; // modifico filters.type para que me traiga solo los pokemons de ese tipo
    const tag = // renderizo el nombtre del filtro que he creado 
      `<span>${item.dataset.type} 
      <button id="tag-${item.dataset.type}">X</button>
    </span>`;

    const selectedFilters = document.querySelector("#selected-filters");// desde la constate selectedFilters estoy accediendo al elemento del dom que tiene por id selected-filters

    selectedFilters.innerHTML = tag; // en ese elemento inserto el nombre del filtro

    document.addEventListener('click', (event) => { // creo un escuchador del evento click
      if (event.target && event.target.id === `tag-${item.dataset.type}`) { // valido si el cilck es sobre el elemento que contiene el nombre del filtro que he creado
        filters.type = null; // si hay click sobre ese elemento modifico filters.type como null
        filters.page = 1; // modifico filters .page para tarer la pagina 1 
        selectedFilters.innerHTML = ''; //inyecto vacio en el elemento html donde se pone el nombre del filtro que he seleccionado
        init(filters);// ejecuto la funcion init con los nuevos filtros
      }
    })


    init(filters); //al darle click a cada boton de tipo se ejecuta la función init con el filtro del tipo
  })
})


const sortOption = document.querySelector('#sort');// desde la constate sortOption estoy accediendo al elemento del dom que tiene por id sorts

if (sortOption) {
  sortOption.addEventListener('change', (event) => { //creo un escuchador de evento change  
    if (event.target.value === 'name') { // si el elemento donde sucede el evento tiene como valor name 
      filters.sort = true;// active filters.sort
      init(filters);// ejecute la funcion init con la actualizacion de ese nuevo filtro
    } else {
      filters.sort = null; // si el evento change se desactiva 
      init(filters); // ejecute la funcion init con la actualiación de ese nuevo filtro
    }
  });
}


const inputSearch = document.querySelector('#search');// desde la constate inputSearch estoy accediendo al elemento del dom que tiene por id search


inputSearch.addEventListener('input', () => { // creo un escuchador del evento input para el buscador
  console.log(inputSearch.value);
  filters.search = inputSearch.value; 
  init(filters);// ejecuto la funcion init con la actualización de ese nuevo filtro
});


init(filters);