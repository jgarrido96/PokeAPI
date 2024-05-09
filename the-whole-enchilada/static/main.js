
async function fetchPokemon(event){
    event.preventDefault();
    const search = event.target.elements.search.value; 
    console.log(search)
    const result = await getPokemon(search)
    console.log(result)
    displayPokemon(result)
    
    
}

async function getPokemon(query){
    console.log(query)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    console.log(response)
    return await response.json()
}



async function displayPokemon(pokemon) {
    const types = pokemon.types.map(type => type.type.name).join(", ");
    const stats = pokemon.stats.map(stat => stat.base_stat);
    const html = `<div class="card">
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <h1>${pokemon.name}</h1>
                    <p>Type: ${types}</p>
                    <p>Stats: </P>
                    <ul>
                        <li>HP: ${stats[0]}</li>
                        <li>Attack: ${stats[1]}</li>
                        <li>Defense: ${stats[2]}</li>
                        <li>Special Attack: ${stats[3]}</li>
                        <li>Special Defense: ${stats[4]}</li>
                        <li>Speed: ${stats[5]}</li>
                    </ul>
                </div>`;

    const div = document.querySelector('.search');
    
    div.insertAdjacentHTML('beforeend', html);
}











async function fetchDefault(event){
    event.preventDefault();
    const search = event.target.elements.pokemon; 
    const result = await getDefaultPokemon(search)
    console.log(result)
    displayDefaultPokemon(result)
    
    
}

async function getDefaultPokemon(query) {
    // query.preventDefault();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    return await response.json()
}

async function displayDefaultPokemon(pokemon) {
    const types = pokemon.types.map(type => type.type.name).join(", ");
    const stats = pokemon.stats.map(stat => stat.base_stat);
    const html = `<div class="card">
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                    <h1>${pokemon.name}</h1>
                    <p>Type: ${types}</p>
                    <p>Stats: </P>
                    <ul>
                        <li>HP: ${stats[0]}</li>
                        <li>Attack: ${stats[1]}</li>
                        <li>Defense: ${stats[2]}</li>
                        <li>Special Attack: ${stats[3]}</li>
                        <li>Special Defense: ${stats[4]}</li>
                        <li>Speed: ${stats[5]}</li>
                    </ul>
                </div>`;

    const div = document.querySelector('.default');
    
    div.insertAdjacentHTML('beforeend', html);
}


