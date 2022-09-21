let elList = document.querySelector(".list");
let elBtnPokemon = document.querySelector(".btn__pockemon");
let elBtnMovies = document.querySelector(".btn__movies");
let elBtnRandom = document.querySelector(".btn__random");
let elBtnClear = document.querySelector(".btn__clear");


let pokemonArray = pokemons.slice(0, 30);
let moviesArray = movies.slice(0, 30);

elList.classList.add("list-unstyled");
elBtnPokemon.classList.add("btn-outline-primary");
elBtnMovies.classList.add("btn-outline-info");
elBtnRandom.classList.add("btn-outline-success")
elBtnClear.classList.add("btn-outline-danger");


elBtnPokemon.addEventListener("click", function() {
   renderPokemons(pokemonArray);
   console.log(elBtnPokemon);

})

elBtnMovies.addEventListener("click", function() {

   renderMovies(moviesArray);

   console.log(elBtnMovies);

})

elBtnRandom.addEventListener("click", function() {

   console.log(elBtnRandom);

})

elBtnClear.addEventListener("click", function() {

   console.log(elBtnClear);

})

function renderPokemons(array) {


   elList.innerHTML = null;

   for (const item of array) {
      
      let newLi = document.createElement("li");
      let newImg = document.createElement("img");
      newImg.src =  item.img;
      newImg.width = "200"

      let newH3 = document.createElement("h3");
      newH3.textContent = item.name

      newLi.appendChild(newImg);
      newLi.appendChild(newH3);

      elList.appendChild(newLi);

      console.log(item);
      
   }

}


function renderMovies(array) {


   elList.innerHTML = null;

   for (const item of array) {
      
      let newLi = document.createElement("li");
      let newImg = document.createElement("img");
      newImg.src =  `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`
      newImg.width = "200"

      let newH3 = document.createElement("h3");
      newH3.textContent = item.Title

      newLi.appendChild(newImg);
      newLi.appendChild(newH3);

      elList.appendChild(newLi);

      console.log(item);
      
   }

}

