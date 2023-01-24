const hundBtn = document.getElementById("hundred")
const sc = document.getElementById("score")
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