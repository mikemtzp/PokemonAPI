import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';
import pokemonCard from './modules/pokemonCard.js';
/* eslint-disable no-await-in-loop */

const pokedex = 157;



const getPokemon = async () =>{
  for (let i = 1; i < pokedex; i += 1) {
    const id = [i];
    pokemonCard(id);
  }
  const likebtn = document.querySelectorAll(".btnlike");
likebtn.forEach(btn =>{
  btn.addEventListener("click", addlike)
})
}

getPokemon();


function addlike(e){
  for(let i=1; i<=pokedex; i++){
    if(e.target.id === `lk${i}`){
      console.log("clicked")
        }
  }
  

// console.log("yea")

}

// e.target.parentNode.className