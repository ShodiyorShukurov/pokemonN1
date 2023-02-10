// GET ELEMENTS
let elPokoList = document.querySelector(".js-poko-list");


//! Fragment
const newPokeFragment = document.createDocumentFragment();
const newFilmFragment = new DocumentFragment();


for (let i = 0; i < pokemons.length; i++) {

    // Create element
    let newPokeItem = document.createElement("li");
    let newPokeNum = document.createElement("span");
    let newImgDiv = document.createElement("div");
    let newTextDiv = document.createElement("div");
    let newPokeImg = document.createElement("img");
    let newPokeTitle = document.createElement("h3");
    let newPokeType = document.createElement("span");
    let newDivAbout = document.createElement("div");
    let newPokeHeight = document.createElement("p");
    let newPokeWeight = document.createElement("p");
    let newPokeTime = document.createElement("time");

    // Add value
    newPokeNum.textContent = pokemons[i].num
    newPokeImg.src = pokemons[i].img;
    newPokeImg.alt = pokemons[i].name;
    newPokeImg.width = "157";
    newPokeImg.height = "157";
    newPokeTitle.textContent = pokemons[i].name;
    newPokeType.textContent = pokemons[i].type.join(", ");
    newPokeHeight.textContent = "Height: " + pokemons[i].height;
    newPokeWeight.textContent = "Weight: " + pokemons[i].weight;
    newPokeTime.textContent = pokemons[i].spawn_time;
    newPokeTime.setAttribute("datatime", `2023-02-06 ${pokemons[i].spawn_time}`);

    // Append elements
    newPokeItem.appendChild(newPokeNum);
    newImgDiv.appendChild(newPokeImg);
    newTextDiv.appendChild(newPokeTitle)
    newTextDiv.appendChild(newPokeType);
    newDivAbout.append(newPokeHeight, newPokeWeight);
    newTextDiv.appendChild(newDivAbout);
    newPokeItem.appendChild(newImgDiv);
    newPokeItem.appendChild(newTextDiv);
    newPokeItem.appendChild(newPokeTime);

    // Add element class
    newPokeItem.classList.add("poke-item__card");
    newPokeNum.classList.add("text-num")
    newImgDiv.classList.add("card_images");
    newTextDiv.classList.add("card__text");
    newPokeTitle.classList.add("card__title");
    newPokeType.classList.add("card__subtitle");
    newDivAbout.classList.add("card-abouts");
    newPokeHeight.classList.add("card-about");
    newPokeWeight.classList.add("card-about");
    newPokeTime.classList.add("time-text");

    // Parent element child append
    newPokeFragment.appendChild(newPokeItem);


};

elPokoList.appendChild(newPokeFragment);