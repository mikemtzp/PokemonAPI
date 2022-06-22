import './style.css';
import '@fortawesome/fontawesome-free/js/all.js'
import { generatePopUp } from "./modules/comments-popup";

const row = document.querySelector('.row');
const url = "https://pokeapi.co/api/v2/pokemon/";
let pokedex = 10;

async function getPokemon() {
    for(let i = 1; i<pokedex; i++) {
        let id = [i];
        await pokemonCard(id)
    }
    const commentsBtn = document.querySelectorAll('.comments-btn')
    commentsBtn.forEach (e => {
        e.addEventListener('click', generatePopUp) 
})
}

async function pokemonCard (id){
    const response = await fetch(url + id, {
        method: 'GET',
        header: {
            'content-type': 'application/json; charset: UTF-8'}
    })

    const pokemon = await response.json();

    display(pokemon)
}

function display(pokemon){
    const divCol = document.createElement("div");
    
    divCol.innerHTML = `
    <img class='pokeimage' src=${pokemon.sprites.front_default}>
    <div>${pokemon.id}</div>
    <button id=comm${pokemon.id} class="comments-btn" type="button">Comments</button>
    `;
    row.appendChild(divCol);   

}

getPokemon();
