const stepOneBtn = document.getElementById("steponebtn");
const stepOneForm = document.getElementById("continentform")

stepOneBtn.addEventListener('click', finishStepOne);


function finishStepOne() {
    stepOneForm.classList.add("hidden");
}




