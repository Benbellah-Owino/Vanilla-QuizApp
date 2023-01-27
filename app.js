const hundBtn = document.getElementById("hundred")
const sc = document.getElementById("score")
const dvrkMode = document.getElementById("dvrk");

var elements = document.querySelectorAll("*");
if (localStorage.getItem("mode") === "dark") {
    for (var i = 0; i < elements.length; i++) {
        if (!elements[i].classList.contains("nod")) {
            elements[i].classList.add("darkmode");
            dvrkMode.checked = true
        }
    }
} else if (localStorage.getItem("mode") === "light") {
    for (var i = 0; i < elements.length; i++) {
        if (!elements[i].classList.contains("nod")) {
            elements[i].classList.remove("darkmode");
            dvrkMode.checked = false
        }
    }
}
function openHundred() {

    window.open("hundred.html")
    window.close("landingpage.html")
}
function openTwenty() {

    window.open("twenty.html")
    window.close("landingpage.html")
}

let score = 100;
const checkMarks = document.querySelectorAll(".checkbox");


checkMarks.forEach(check => {
    if (check.checked) {
        score++;
        sc.textContent = score
        console.log(check)
    }

});


var elements = document.querySelectorAll("*");


dvrkMode.addEventListener("click", () => {
    if (dvrkMode.checked) {
        for (var i = 0; i < elements.length; i++) {
            if (!elements[i].classList.contains("nod")) {
                elements[i].classList.add("darkmode");
                localStorage.setItem("mode", "dark")
            }
        }
    } else if (!dvrkMode.checked) {
        for (var i = 0; i < elements.length; i++) {
            if (!elements[i].classList.contains("nod")) {
                elements[i].classList.remove("darkmode");
                localStorage.setItem("mode", "light")
            }
        }
    }
})


var slider = document.getElementById("slider");

slider.oninput = function () {
    // do something with the value of the slider
}
