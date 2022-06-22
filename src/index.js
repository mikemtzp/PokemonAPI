import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';


const row = document.querySelector('.row');
const url = "https://pokeapi.co/api/v2/pokemon/";

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

    console.log(pokemon);
    display(pokemon)
    // console.log(id + ' ' + pokemon.name);

}


function display(pokemon){
    const divCol = document.createElement("div");
    divCol.classList.add("col")
    
    divCol.innerHTML = `
    <img src=${pokemon.sprites.front_default}>
    
    <div class="top"><h3>${pokemon.name}</h3><span> <i class="like fa-solid fa-heart"></i> </span> </div>
    <button> Comment</button>
    <button> Reservation</button>

    
    `
    row.appendChild(divCol);

    
}

getPokemon();