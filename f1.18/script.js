const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const spriteContainer = document.getElementById('sprite-container');
const pokemonTypes = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const fetchData = async () => {
    try {
        const pokemonNameOrID = searchInput.value.toLowerCase();

        const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrID}`);

        if (!response.ok) {
            throw new Error('Could not fetch Resource');
        }

        const data = await response.json();

        getPokemon(data);
    } catch (err) {
        resetDisplay();
        alert('Pokemon not found');
        console.log(`Pokemon not found: ${err}`);
    }
};
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetchData();
    resetDisplay();
})

const getPokemon = ({ name, id, sprites, stats, height, weight, types }) => {
    pokemonName.textContent = name;
    pokemonId.textContent = `#${id}`;
    pokemonWeight.textContent = `Weight: ${weight}`;
    pokemonHeight.textContent = `Height: ${height}`;

    spriteContainer.innerHTML = `
    <img id="sprite" src="${sprites.front_default}" alt="${name} front default sprite">
  `;

    pokemonTypes.innerHTML = types.map((obj) => {
        return `<span class="type ${obj.type.name}">${obj.type.name.toUpperCase()}</span>`
    }).join('');

    hp.textContent = stats[0].base_stat;
    attack.textContent = stats[1].base_stat;
    defense.textContent = stats[2].base_stat;
    specialAttack.textContent = stats[3].base_stat;
    specialDefense.textContent = stats[4].base_stat;
    speed.textContent = stats[5].base_stat;

}

const resetDisplay = () => {
    pokemonName.textContent = '';
    pokemonId.textContent = '';
    pokemonWeight.textContent = '';
    pokemonHeight.textContent = '';
    spriteContainer.innerHTML = '';
    pokemonTypes.innerHTML = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';
}