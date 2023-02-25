// GET ELEMENTS
const elPokeList = document.querySelector(".js-poko-list");
const elPokeTemplate = document.querySelector(".js-template").content;

const elSearchForm = document.querySelector(".js-form");
const elSearchInput = elSearchForm.querySelector(".js-search-input");
const elSearchSelect = elSearchForm.querySelector(".js-poke-select");
const elFromCount = elSearchForm.querySelector(".js-from-count");
const elToCount = elSearchForm.querySelector(".js-to-count")
const elPokeSort = elSearchForm.querySelector(".js-poke-sort")

//! Fragment
const newFilmFragment = new DocumentFragment();


// GENERATED WEAK
const newArr = [];
function pushPoke() {
    pokemons.forEach((poke) => {
        poke.weaknesses.forEach((weak) => {
            if (!newArr.includes(weak)) {
                newArr.push(weak)
            }
        });
    });
    newArr.sort();
}

pushPoke()

function renderWeaknesses(_weak) {
    _weak.forEach((weak) => {
        const newOption = document.createElement("option");
        newOption.value = weak;
        newOption.textContent = weak;
        elSearchSelect.appendChild(newOption);
    })

}
renderWeaknesses(newArr)

//  RENDER FUNCTION
function renderPoke(_pokemons) {

    elPokeList.innerHTML = null;

    _pokemons.forEach((poke) => {

        const cloneNewTemp = elPokeTemplate.cloneNode(true);
        cloneNewTemp.querySelector(".js-poke-num").textContent = poke.id
        cloneNewTemp.querySelector(".js-poke-img").src = poke.img;
        cloneNewTemp.querySelector(".js-poke-img").alt = poke.name;
        cloneNewTemp.querySelector(".js-poke-title").textContent = "Name: " + poke.name;
        cloneNewTemp.querySelector(".js-poke-time").textContent = poke.spawn_time;
        cloneNewTemp.querySelector(".js-poke-type").innerHTML = `<p class="text-subtitle">Type: </p> ${poke.type.join(", ")}`;
        cloneNewTemp.querySelector(".js-poke-count").innerHTML = `<p class="text-subtitle">Candy count: </p> ${poke.candy_count}`;
        cloneNewTemp.querySelector(".js-poke-height").innerHTML = `<p class="text-subtitle">Height: </p> ${poke.height}`;
        cloneNewTemp.querySelector(".js-poke-weight").innerHTML = `<p class="text-subtitle">Weight: </p> ${poke.weight}`;
        cloneNewTemp.querySelector(".js-poke-weak").innerHTML = `<p class="text-subtitle">Weight: </p> ${poke.weaknesses.join(", ")}`;

        newFilmFragment.appendChild(cloneNewTemp);
    });

    elPokeList.appendChild(newFilmFragment);
}


function showSearchPoke(search) {
    const filterPokemon = pokemons.filter(
        (poke) =>
            String(poke.name).match(search) &&
            (elSearchSelect.value === "weaknesses" ||
                poke.weaknesses.includes(elSearchSelect.value)) &&
            (elFromCount.value === "" || poke.candy_count >= elFromCount.value) &&
            (elToCount.value === "" || poke.candy_count <= elToCount.value)
    )
    return filterPokemon;
}


function sortPokemons(pokemon, pokeType) {
    if (pokeType === "a-z") {
        pokemon.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            } else if (a.name < b.name) {
                return -1;
            } else {
                return 0;
            }
        })
    }
    if (pokeType === "z-a") {
        pokemon.sort((a, b) => {
            if (a.name < b.name) {
                return 1;
            } else if (a.name > b.name) {
                return -1;
            } else {
                return 0;
            }
        })
    }
    if (pokeType = "line-height") {
        pokemon.sort((a, b) => {
            return a.candy_count - b.candy_count
        })
    }
    if(pokeType = "heigh-line"){
        pokemon.sort((a,b)=>{
            return b.candy_count- a.candy_count
        })
    }
}
elSearchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const inputValue = elSearchInput.value.trim();
    const searchQuery = new RegExp(inputValue, "gi")
    const searchPoke = showSearchPoke(searchQuery);

    sortPokemons(searchPoke, elPokeSort.value)
    if (searchPoke.length > 0) {
        renderPoke(searchPoke);
    } else {
        elPokeList.innerHTML = `<div class="text-white text-center display-6">Not Pokemons</div>`
    }
})
renderPoke(pokemons);