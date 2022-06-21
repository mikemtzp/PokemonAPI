import './style.css';
import '@fortawesome/fontawesome-free/js/all.js'
import createPopup from "./modules/comments-popup";

const row = document.querySelector('.row');
const url = "https://pokeapi.co/api/v2/pokemon/";
const commentsBtn = document.querySelectorAll('button.comments-btn')

let pokedex = 150;

function getPokemon(){
    for(let i = 1; i<pokedex; i++){
        let id = [i];
        pokemonCard(id)
    }
}

async function pokemonCard (id){
    const response = await fetch(url + id, {
        method: 'GET',
        header: {
            'content-type': 'application/json; charset: UTF-8'}
    })

    const pokemon = await response.json();

    // console.log(pokemon);
    display(pokemon)
    // console.log(id + ' ' + pokemon.name);
    
}


function display(pokemon){
    const divCol = document.createElement("div");
    
    divCol.innerHTML = `
    <img class='pokeimage' src=${pokemon.sprites.front_default}>
    <div> ${pokemon.id}</div>
    <button id=${pokemon.id} class="comments-btn" type="button">Comments</button>
    
    `
    row.appendChild(divCol);

    
}

getPokemon();

commentsBtn.forEach(e => {
  e.addEventListener('click', createPopup(pokemon))
});