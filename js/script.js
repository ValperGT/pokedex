const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";
const $pokemonContainer = document.querySelector(".pokemon-container");
const $pokemonContainer2 = document.querySelector(".pokemon-container2");
const $pokemonInput = document.querySelector(".pokemon-input");
const $pokemonButton = document.querySelector(".pokemon-button");

$pokemonButton.addEventListener("click", () => {
    let pokemonExist;
    fetch(`${POKEMON_URL}${$pokemonInput.value.toLowerCase()}`)
        .then(response => {
            if(response.ok){
                pokemonExist = true;
                return response.json();
            }else{
                pokemonExist = false;
                alert("No such pokemon found");
            }
        })
        .then(pokemon => {
            if(pokemonExist){
                $pokemonContainer.classList.add("show");
                $pokemonContainer2.classList.add("show");
            }
            const pokemonTypes = [];
            pokemon.types.forEach(element =>{
                pokemonTypes.push(element.type.name);
            })
            $pokemonContainer.innerHTML = `
            <p class="pokemon-name">${pokemon.name}</p>
            <img width="200px" height="200px" src="${pokemon.sprites.front_default}" class="pokemon-image">
            <p>Hp: ${pokemon.stats[0].base_stat}</p>
            <p>Type: ${pokemonTypes}</p>
            `
        })
        .catch(error => console.log(error))
})