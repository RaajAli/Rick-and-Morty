const characterBar = document.getElementById("character-bar");
const charactersImage = document.querySelector("#image");
const charNames = document.querySelector("#name");
const charStatus = document.querySelector("#vote-count");
const charGender = document.querySelector("#gender");
const charSpecies = document.querySelector("#species");

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20")
      .then(response => response.json())
      .then(characters => {
          characters.forEach(objCharacters => showCharacter(objCharacters));
          displayCharacters(characters[0]);
        
        })});

        characterBar.addEventListener("mouseover", (event) => {
            event.target.style.color = "white";
        });
        characterBar.addEventListener("mouseout", (event) => {
                event.target.style.color = "yellow";
        });
        function showCharacter(objCharacter) {
            const img = document.createElement("span");
            img.textContent = objCharacter.name;
            img.addEventListener("click", (e) => displayCharacters(objCharacter));
            characterBar.append(img);
        }
        function displayCharacters(objCharacters) {
            charNames.setAttribute("data-id", objCharacters.id);
            charNames.textContent = objCharacters.name;
            charStatus.textContent = objCharacters.status;
            charGender.textContent = objCharacters.gender;
           charSpecies.textContent = objCharacters.species;
           charactersImage.src = objCharacters.image
           charactersImage.addEventListener('click', alertFunction);
        
        }
        function alertFunction() {
            alert("Likes")
           }
        document.querySelector("#votes-form").addEventListener("submit", (e) =>{
            e.preventDefault();
            let copyVotes = e.target.votes.value
            console.log(copyVotes);
            handleVotes(copyVotes);
        })
        function handleVotes(votesAdded, currentVotes = parseInt(document.querySelector("#vote").innerText)){
            currentVotes += parseInt(votesAdded);
            let voteDisplay = document.querySelector("#vote");
            voteDisplay.textContent = currentVotes;
            console.log(currentVotes);
        }
        document.querySelector("#reset-btn").addEventListener("click", (event) => {
            handleVotes(0, 0);
        })
