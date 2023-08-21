let dark = false;

const button = document.querySelector(".toggleButton");

button.addEventListener("click", function () {
    dark = !dark;
    if (dark) {
        document.body.classList.add("black");
        document.body.classList.remove("white");
        button.classList.add("blackButton");
        document.title = "Good Night";
    }
    else {
        document.body.classList.remove("black");
        document.body.classList.add("white");
        button.classList.remove("blackButton");
        document.title = "Good Morning";
    }
});