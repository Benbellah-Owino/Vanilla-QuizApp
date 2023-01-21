console.log("Hello")
const sc = document.getElementById("score")
const quests = document.getElementById("quiz_tab")

const checkMarks = document.querySelectorAll(".checkbox");

let arr = [];
let set = 0;
let state = [];

for (let x = 0; x < 10; x++) {
    arr.push([])
}

let track = 1
for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
        arr[a][b] = `${track} Hello there my name is Batman`
        track++;
    }
}




//Quizlets
function createQuizlets(id) {
    const div = document.createElement("div");
    div.id = `{quizlet${id}}`;

    div.classList.add("quizlets_inactive")
    quests.appendChild(div);
    state.push(div)
    return div;
}

// Function to create the quiz titles
function createQuizeTiles(question, div) {
    const node = document.createElement("div")
    node.classList.add("quiz_card")

    const text = document.createElement("p")
    text.classList.add("quiz_title")
    text.textContent = question
    node.appendChild(text)

    const cb = document.createElement("input")
    cb.type = "checkbox"
    cb.classList.add("checkbox")
    cb.addEventListener("change", () => {
        if (cb.checked) {
            sc.innerHTML = parseInt(sc.innerHTML) - 1;
        } else {
            sc.innerHTML = parseInt(sc.innerHTML) + 1;
        }
    })
    node.appendChild(cb)

    div.appendChild(node)
}
let div1 = createQuizlets(0);

div1.classList.remove("quizlets_inactive")

//Adding the quiz 
for (let i = 0; i < 10; i++) {
    createQuizeTiles(arr[0][i], div1);
}


// Filling other divs
for (let k = 1; k < 10; k++) {
    let dv = createQuizlets(k);
    for (let i = 0; i < 10; i++) {
        createQuizeTiles(arr[k][i], dv);
    }
}

console.log[state]
//Navigating


function nextPage() {

    if (set != 9) {
        let st = set
        state[st--].classList.add("quizlets_inactive")
        set++;
        // while (quests.lastChild) {
        //     quests.removeChild(quests.lastChild);
        // }
        state[set].classList.remove("quizlets_inactive")
        console.log(state[set])
        console.log("next")
        console.log(set)

    }
}
function previousPage() {

    if (set != 0) {
        let st = set
        state[st++].classList.add("quizlets_inactive")
        set--;
        // while (quests.lastChild) {
        //     quests.removeChild(quests.lastChild);
        // }
        state[set].classList.remove("quizlets_inactive")
        console.log(state[set])
        console.log("next")
        console.log(set)

    }
}

checkMarks.forEach(check => {
    check.addEventListener("change", () => {
        if (check.checked) {
            sc.innerHTML = parseInt(sc.innerHTML) - 1;
        } else {
            sc.innerHTML = parseInt(sc.innerHTML) + 1;
        }
    })
});

function update() {
    checkMarks.forEach(check => {
        if (cb.checked) {
            sc.innerHTML = parseInt(sc.innerHTML) - 1;
        } else {
            sc.innerHTML = parseInt(sc.innerHTML) + 1;
        }
    })
}


