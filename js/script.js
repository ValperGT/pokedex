const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon/";
const $pokemonContainer = document.querySelector(".pokemon-container");
const $pokemonInput = document.querySelector(".pokemon-input");
const $pokemonButton = document.querySelector(".pokemon-button");

$pokemonButton.addEventListener("click", () => {
    fetch(`${POKEMON_URL}${$pokemonInput.value}`)
        .then(response => {
            if(response.ok){
                return response.json();
            }else{
                alert("No such pokemon found");
            }
        })
        .then(pokemon => {
            const pokemonTypes = []
            pokemon.types.forEach(element =>{
                pokemonTypes.push(element.type.name);
            })
            $pokemonContainer.innerHTML = `
            <p class="pokemon-name">${pokemon.name}</p>
            <p>Hp: ${pokemon.stats[0].base_stat}</p>
            <p>Type: ${pokemonTypes}</p>
            <img src="${pokemon.sprites.other.dream_world.front_default}" class="pokemon-image">
            `
        })
        .catch(error => console.log(error))
})