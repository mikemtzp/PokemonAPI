const url = "https://pokeapi.co/api/v2/pokemon/";
let pokedex = 10;

const generatePopUp = (e) => {
  for (let i = 1; i <= pokedex; i++) {
    let id = [i];
    if (e.target.id === `comm${id}`) {
      populatePopUp(id);
      console.log(e.target.id);
    }
  }
};

const populatePopUp = async (id) => {
  let response = await fetch(url + id, {
    method: "GET",
    header: {
      "content-type": "application/json; charset: UTF-8",
    },
  });
  const pokemon = await response.json();
  createPopUp(pokemon);
};

const createPopUp = (pokemon) => {
  const body = document.querySelector("body");
  const popup = document.createElement("div");
  popup.classList.add("popup-window");
  popup.innerHTML = `
  <section class="pokemon-info">
  <img src=${pokemon.sprites.front_default}>
  <span class="closebtn"><i id=btn class="fa-solid fa-xmark close-button"></i></span>
  
  <h2 class="pokemon-name">${pokemon.name}</h2>
  <div class="pokemon-data">
  <p>Base experience: ${pokemon.base_experience}</p>
  <p>Height: ${pokemon.height}</p>
  <p>Weight: ${pokemon.weight}</p>
  </div>
  </section>
  <section class="pokemon-comments">
  <h3>Comments<span id="comments-counter">(1)</span></h3>
  <div class="comments"></div>
  </section>
  <form class="form">
  <h3>Add a comment</h3>
  <input class="input" type="text" name="name" id="name" placeholder="Add your name">
  <input class="input" type="text" name="comment" id="comment" placeholder="Add your comment">
  <button id=${pokemon.id} class="add-comment-btn" type="button">Comment</button>
  </form>
  <div id="blurry"></div>
  `;
  body.appendChild(popup);

  const close = document.querySelectorAll(".closebtn");
  close.forEach(e => {
    e.addEventListener("click", () => {
    popup.style.display = "none";
  });
})
};

export { createPopUp, generatePopUp };
