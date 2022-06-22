const url = 'https://pokeapi.co/api/v2/pokemon/';
const pokedex = 10;

const createPopUp = (pokemon) => {
  const body = document.querySelector('body');
  const popup = document.createElement('div');
  popup.classList.add('popup-window');
  popup.innerHTML = `
  <section class="pokemon-info">
  <img class="pokemon-image" src=${pokemon.sprites.front_default}>
  <span class="closebtn"><i id=btn class="fa-solid fa-xmark close-button"></i></span>
  <h2 class="pokemon-name">${pokemon.name}</h2>
  <div class="pokemon-data">
  <p>Base experience: ${pokemon.base_experience}</p>
  <p>Height: ${pokemon.height}</p>
  <p>Weight: ${pokemon.weight}</p>
  </div>
  </section>
  <section class="pokemon-comments">
  <p class="section-title">Comments<span id="comments-counter"></span></p>
  <div class="comments"></div>
  </section>
  <form class="form">
  <p class="section-title">Add a comment</p>
  <input class="input" type="text" name="name" id="name" placeholder="Add your name">
  <input class="input" type="text" name="comment" id="comment" placeholder="Add your comment">
  <button id=${pokemon.id} class="add-comment-btn" type="button">Comment</button>
  </form>
  `;
  body.appendChild(popup);

  const close = document.querySelectorAll('.closebtn');
  close.forEach((e) => {
    e.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  });
};

const populatePopUp = async (id) => {
  const response = await fetch(url + id, {
    method: 'GET',
    header: {
      'content-type': 'application/json; charset: UTF-8',
    },
  });
  const pokemon = await response.json();
  createPopUp(pokemon);
};

const generatePopUp = (e) => {
  for (let i = 1; i <= pokedex; i += 1) {
    const id = [i];
    if (e.target.id === `comm${id}`) {
      populatePopUp(id);
    }
  }
};

const addPopUp = () => {
  const commentsBtn = document.querySelectorAll('.comments-btn');
  commentsBtn.forEach((e) => {
    e.addEventListener('click', generatePopUp);
  });
};

export { createPopUp, addPopUp };
