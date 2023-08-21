let show = true;

const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", function () {
    show = !show

    if (show) {
        input.type = "text";
    } else {
        input.type = "password";
    }


});