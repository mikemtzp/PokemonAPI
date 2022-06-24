import { addLike } from './add-likes.js';

const row = document.querySelector('.row');

function display(pokemon) {
  const divCol = document.createElement('div');
  divCol.classList.add('col');
  divCol.innerHTML = `
    <img src=${pokemon.sprites.front_default}>
    <div class="top"><h3>${pokemon.name}</h3><div data-id="${pokemon.id}" class="test1"><i class="like fa-solid fa-heart"></i></div><span id="like${pokemon.id}" class="likes-number"></span></div>
    <button id=comm${pokemon.id} class="comments-btn" type="button">Comment</button>    
    `;
  row.appendChild(divCol);
}

const loadLikeBtn = () => {
  const likeBtn = document.querySelectorAll('.test1');
  likeBtn.forEach((e) => {
    e.addEventListener('click', () => {
      addLike(e.dataset.id);
    });
  });
};

export { display, loadLikeBtn };
