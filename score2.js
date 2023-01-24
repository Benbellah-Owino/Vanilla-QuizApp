console.log("Hello")
const sc = document.getElementById("score")
const quests = document.getElementById("quiz_tab")
const submit = document.getElementById("submit");
const scorecard = document.getElementById("score_card")
const sc_sc = document.getElementById("sc_score")
const checkMarks = document.querySelectorAll(".checkbox");
const score_close = document.getElementById("close");
const topic = document.getElementById("topic")

const drop_nav = document.getElementById("mob_links");

let active = false;
let set = 0;
let state = [];



let track = 1


let arrc = [[

    "1.Been on a date?",
    "2.Kissed a non-family member?",
    "3.Given or received a hickey/ love-bite?",
    "4.Spent the night with a member of the perferred sex?",
    "5.Showered with a member of the perferred sex?",
    "6.Had a pregnancy scare?",
    "7.Urinated in public?",
    "8.Masturbated?",
    "9.Held hands romantically?",
    "10.Been put on disciplinary probation or suspended?",
], [
    "11.Been arrested ?",
    "12.Been convicted of a crime ?",
    "13.Seen or read pornographic material ?",
    "14.Climaxed due to someone else’s manipulation ?",
    "15.Had an STI(Sexually Transmitted Infections) ?",
    "16.Had sexual intercourse 10 or more times ?",
    "17.Been drunk ?",
    "18.Had severe memory loss due to alcohol ?",
    "19.Attended an orgy ?",
    "20.Faked sobriety to parents or teachers ?",
]]


let arr_topics = [

]



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
let div2 = createQuizlets(1);



div1.classList.remove("quizlets_inactive")

//Adding the quiz 
for (let i = 0; i < arrc[0].length; i++) {
    createQuizeTiles(arrc[0][i], div1);
}
for (let i = 0; i < arrc[1].length; i++) {
    createQuizeTiles(arrc[1][i], div2);
}




function nextPage() {

    if (set != 1) {
        let st = set
        state[st--].classList.add("quizlets_inactive")
        set++;

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



//Submit

submit.addEventListener("click", () => {
    let netScore = parseInt(sc.textContent);
    let stp1 = netScore / 20;
    let final = stp1 * 100;
    sc_sc.innerHTML = final;
    scorecard.style.display = "flex"
})

score_close.addEventListener("click", () => {
    location.reload();
})



const nav_btn = document.getElementById("mob_lin")


function dropNav() {

    console.log(drop_nav.classList)
    if (active == false) {
        console.log("Conains a")
        active = !active;
        drop_nav.classList.add("mobile_links_active")
        drop_nav.classList.remove("mobile_links")

    } else if (active == true) {
        active = !active;
        drop_nav.classList.add("mobile_links")
        drop_nav.classList.remove("mobile_links_active")

    }

}

nav_btn.addEventListener("click", dropNav)