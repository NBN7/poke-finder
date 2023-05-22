const input = document.querySelector("input");
const searchBtn = document.querySelector("button");
const h4 = document.querySelector("h4");
const img = document.querySelector("#poke-img");

let pokemonName, pokemonImg;

searchBtn.addEventListener("click", () =>{
    if (input.value.trim() === ""){

    }
    else{
        let pokemon = input.value.toLowerCase();
        let result = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        result
          .then((response) => response.json())
          .then((data) => {
            pokemonName = data.forms[0].name;
            pokemonImg = data.sprites.front_default;
            h4.textContent = pokemonName;
            img.src = pokemonImg
          });
    }
})

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
       if (input.value.trim() === ""){

    }
    else{
        let pokemon = input.value.toLowerCase();
        let result = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        result
          .then((response) => response.json())
          .then((data) => {
            pokemonName = data.forms[0].name;
            pokemonImg = data.sprites.front_default;
            h4.textContent = pokemonName;
            img.src = pokemonImg
          });
    } 
    }
})