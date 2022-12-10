let playerName;
let lobbyCode;
const lobbyForm = document.getElementById("lobbyform")
const lobbyFormBtn = document.getElementById("lobbyformbtn")
const continentForm = document.getElementById("continentform")
const continentFormBtn = document.getElementById("continentformbtn")
const countryForm = document.getElementById("countryform")
const lobbyCodeInput = document.getElementById("lobbycode");
const playerNameInput = document.getElementById("playername");

lobbyFormBtn.addEventListener('click', chooseLobby);
continentFormBtn.addEventListener('click', chooseContinent);

lobbyForm.addEventListener('input', function() {
    if (lobbyCodeInput.value.length > 0 && playerNameInput.value.length > 0) {
        lobbyFormBtn.removeAttribute('disabled');
    } else {
        lobbyFormBtn.setAttribute('disabled', '');
    }
});


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

