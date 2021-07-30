import {paginationData} from './data.js';


function loadPage(page) {
  renderPokemons(page);
}

async function getPokemonList(page) {
  const res = await fetch('./data/pokemon/pokemon.json');// asigno a la const res el resultado de llamar ese servicio(fetch) "await.. no me guarda nada en la const res hasta que fetch me responda"
  const jsonRes = await res.json(); // fetch da una respuesta sin formato se aplica el metodo json para que se convierta en un json.
  await renderPaginator(jsonRes.pokemon.length);
  const newPokemonList = paginationData(jsonRes.pokemon, page);
  return newPokemonList;//me retorna la propiedad pokemon ( array de los pokemons) 
}

async function renderPokemons(page) {
  const pokemons = await getPokemonList(page);
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
        <button type="button" onClick="loadPage(${i+1})">${i+1}</button>
      </div>`;

    htmlButtons += buttonPage;
  }
  
  const buttons = document.querySelector("#buttons");
  buttons.innerHTML = htmlButtons;
}


loadPage(1);



