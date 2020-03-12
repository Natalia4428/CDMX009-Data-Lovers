import data from './data/pokemon/pokemon.js';



let list = data.pokemon;



// nodos
const container = document.querySelector('#container');

function drawPokemons(list) {
    // dibujar
    list.forEach((poke) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <img src="${poke.img}" />
        <h1>${poke.name}</h1>
        <h2>${poke.id}<h2>
        <p>${poke.type}<p>

    `;
        container.appendChild(div);
    });
}
const electricType = list.filter((p) => p.type.includes('Electric'));
console.log(electricType);
const fireType = list.filter((p) => p.type.includes('Fire'));
console.log(fireType);

list.map((p) => console.log(p.name));
list.map((p) => console.log(p.type));


let pokemonTags = [];
for (let i = 0; i < list.length; i++) {
    if (list[i].num === "015") {
        pokemonTags.push(list[i].name);
    }
}
console.log(pokemonTags);


drawPokemons(electricType);
drawPokemons(fireType);
//document.getElementById("search").addEventListener("onclick", drawPokemons(pokemonTags));