import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';

let list = data.pokemon;
console.log(data.pokemon)
const container = document.querySelector('.container');

function drawPokemons(list) {
    container.innerHTML = ""
    list.forEach((pokemon) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <img src="${pokemon.img}" />
        <h3>${pokemon.name}</h3>
        <p>${pokemon.id}</p>`
            ;
        container.appendChild(div);
    });
}

const formulario = document.querySelector("#mySearch");


formulario.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredPoke = list.filter((pokemon) => {
        return (
            pokemon.name.toLowerCase().includes(searchString)
        )
    });

    drawPokemons(filteredPoke)

})



let typeFilterButtons = document.querySelectorAll('.boton_personalizado');
typeFilterButtons.forEach((btn) => btn.addEventListener('click', filterBichos));

function filterBichos(event) {
    let id = event.target.id;
    let filteredList = filterByType(id);
    console.log(filteredList);
    drawPokemons(filteredList)
}

function filterByType(type) {
    return data.pokemon.filter(pokemon => pokemon.type.includes(type))
}




