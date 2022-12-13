const draggableForm = document.querySelector("#draggableform");
const draggableFormItems = document.querySelectorAll("#draggableform ol li");

let mouseXPos;
let mouseYPos;

window.addEventListener('mousemove', function (event) {
    mouseXPos = event.offsetX;
    mouseYPos = event.offsetY;
}
);


for (item of draggableFormItems) {
    item.addEventListener('mousedown', function () {
        // item.style.top = `${mouseYPos}px`; 
        this.style.display = "none";
    })
};

