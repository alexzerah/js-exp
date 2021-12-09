const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

const options = {
    // headers: {'Access-Control-Allow-Origin ': '*'},
}

let pokeName, pokeSprite, pokeId, desc

fetch(url, options).then((response) => response.json()
    )
    .then(function(d) {
        console.log(d);

        if (d.weight > 50) {
            desc = 'Ditto is' + d.weight + 'kg.'
        } else {
            desc = 'Ditto is not big enough.'   
        }

        pokeName = d.name;
        pokeSprite = d.sprites.front_default;
        pokeId = d.id;

        divPokeName = document.querySelector("#pokeName");
        divPokeName.innerText = pokeName;
        divPokeSprite = document.querySelector("#pokeSprite");
        divPokeSprite.setAttribute("src", pokeSprite);
        divPokeId = document.querySelector("#pokeId");
        divPokeId.innerText = desc;

        return d
})

function fetchNext() {
    pokeSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
    divPokeSprite = document.querySelector("#pokeSprite");
    divPokeSprite.setAttribute("src", pokeSprite);
    console.log(divPokeSprite)
}

const nextPokemon = document.querySelector('#nextPokemon');
nextPokemon.addEventListener('click', fetchNext)