import { average, most } from './data.js';
import {Pokemon} from './data/pokemon/pokemon.js';


const mostAttackPokemon = most(Pokemon, 'base-attack');
const mostDefensePokemon = most(Pokemon, 'base-defense');
const mostStaminaPokemon = most(Pokemon, 'base-stamina');



const attackAverage = document.querySelector('#attack');
attackAverage.innerHTML = average(Pokemon, 'base-attack');

const defenseAverage = document.querySelector('#defense');
defenseAverage.innerHTML = average(Pokemon, 'base-defense');

const staminaAverage = document.querySelector('#stamina');
staminaAverage.innerHTML = average(Pokemon, 'base-stamina');

const mostAttack = document.querySelector('#most-attack');
mostAttack.innerHTML = renderMosted(mostAttackPokemon, 'base-attack');

const mostDefense = document.querySelector('#most-defense');
mostDefense.innerHTML = renderMosted(mostDefensePokemon, 'base-defense');

const mostStamina = document.querySelector('#most-stamina');
mostStamina.innerHTML = renderMosted(mostStaminaPokemon, 'base-stamina');


function renderMosted(pokemon, property) {
    return `
        <div class="pokemon-info">
            <span class="title">${pokemon.name}</span> 
            <img src="${pokemon.img}" width="120px"/>
            <span class="value">${pokemon.stats[property]}</span> 
        </div>
    `;
}