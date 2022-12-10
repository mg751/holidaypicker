const lobbyForm = document.getElementById("lobbyform")
const lobbyFormBtn = document.getElementById("lobbyformbtn")
const continentForm = document.getElementById("continentform")
const continentFormBtn = document.getElementById("continentformbtn")
const countryForm = document.getElementById("countryform")
const lobbyCode = document.getElementById("lobbycode");
const playerName = document.getElementById("playername");

lobbyFormBtn.addEventListener('click', chooseLobby);
continentFormBtn.addEventListener('click', chooseContinent);

lobbyForm.addEventListener('input', function() {
    if (lobbyCode.value.length > 0 && playerName.value.length > 0) {
        lobbyFormBtn.removeAttribute('disabled');
    } else {
        lobbyFormBtn.setAttribute('disabled', '');
    }
});


function chooseLobby() {
    lobbyForm.classList.add("hidden");
    continentForm.classList.remove("hidden");
}


function chooseContinent() {
    continentForm.classList.add("hidden");
    countryForm.classList.remove("hidden");
}

