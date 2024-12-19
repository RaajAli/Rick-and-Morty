const characterBar = document.getElementById("character-bar");
const charactersImage = document.querySelector("#image");
const cuteNames = document.querySelector("#name");
const statusChar = document.querySelector("#vote-count");
const genderChar = document.querySelector("#gender");
const speciesChar = document.querySelector("#species");

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5")
      .then(response => response.json())
      .then(characters => {
          characters.forEach(objCharacters => showCharacter(objCharacters));
          //console.log(characters[0])
          displayCharacters(characters[0]);
        
        })});