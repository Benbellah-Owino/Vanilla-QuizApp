const hundBtn = document.getElementById("hundred")
const sc = document.getElementById("score")
const dvrkMode = document.getElementById("dvrk");

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
            elements[i].classList.add("darkmode");
        }
    } else if (!dvrkMode.checked) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove("darkmode");
        }
    }
})
