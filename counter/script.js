"use strict";

let counter = parseInt(localStorage.getItem('counterValue')) || 0;
const btn = document.querySelector("button");
const main = document.querySelector("main");

// Initial counter display
document.getElementById("counter").innerText = counter;

// Update background color on page load
updateBackgroundColor();

// click event 
main.addEventListener("click", incrementCounter);

// space or enter 
document.addEventListener("keydown", function (event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        incrementCounter();
    }
});

// reset button
btn.addEventListener("click", resetCounter);

// mousewheel event
document.addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
        incrementCounter();
    } else if (event.deltaY > 0 && counter > 0) {
        counter--;
    }
    updateCounterDisplay();
    updateBackgroundColor();
});

function incrementCounter() {
    counter++;
    updateCounterDisplay();
    updateBackgroundColor();
    saveCounterValue();
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
    main.style.backgroundImage = "linear-gradient(white, white)";
    saveCounterValue();
}

function updateCounterDisplay() {
    document.getElementById("counter").innerText = counter;
}

function updateBackgroundColor() {
    if (counter % 100 === 0) {
        main.style.backgroundImage = "linear-gradient(gold, gold)";
    } else {
        const colorPercentage = (counter % 100) / 100;
        const colorStop = Math.floor(colorPercentage * 100);
        main.style.backgroundImage = `linear-gradient(to right, gold ${colorStop}%, transparent ${colorStop}%)`;
    }
}

function saveCounterValue() {
    localStorage.setItem('counterValue', counter);
}
