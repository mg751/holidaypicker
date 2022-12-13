let playerName;
let lobbyCode;
let continentChoice;

const lobbyForm = document.getElementById("lobbyform")
const lobbyFormBtn = document.getElementById("lobbyformbtn")
const continentForm = document.getElementById("continentform")
const continentFormBtn = document.getElementById("continentformbtn")
const countryForm = document.getElementById("countryform")
const lobbyCodeInput = document.getElementById("lobbycode");
const playerNameInput = document.getElementById("playername");
const continentRadioBtns = document.querySelectorAll("#continentform > fieldset div input");

lobbyFormBtn.addEventListener('click', chooseLobby);
continentFormBtn.addEventListener('click', chooseContinent);

lobbyForm.addEventListener('input', function() {
    if (lobbyCodeInput.value.length > 0 && playerNameInput.value.length > 0) {
        lobbyFormBtn.removeAttribute('disabled');
    } else {
        lobbyFormBtn.setAttribute('disabled', '');
    }
});


for (let radioBtn of continentRadioBtns) {
    radioBtn.addEventListener('input', function() {
        continentFormBtn.removeAttribute('disabled');
        continentChoice = radioBtn.value;
    }
)};

continentFormBtn.addEventListener('click', function() {

}   
);

function chooseLobby() {
    playerName = playerNameInput.value;
    lobbyCode = lobbyCodeInput.value;
    lobbyForm.classList.add("hidden");
    continentForm.classList.remove("hidden");
}


function chooseContinent() {
    continentForm.classList.add("hidden");
    countryForm.classList.remove("hidden");
}

