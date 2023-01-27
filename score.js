console.log("Hello")
const sc = document.getElementById("score")
const quests = document.getElementById("quiz_tab")
const submit = document.getElementById("submit");
const scorecard = document.getElementById("score_card")
const sc_sc = document.getElementById("sc_score")
const checkMarks = document.querySelectorAll(".checkbox");
const score_close = document.getElementById("close");
const topic = document.getElementById("topic");
const drop_nav = document.getElementById("mob_links");
const dvrkMode = document.getElementById("dvrk");


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

let active = false;
let arr = [];
let set = 0;
let state = [];

let color = true;

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

let arrc = [
    [
        "1.Been on a date?",
        "2.Held hands romantically?",
        "3.Been in a relationship?",
        "4.Kissed a non-family member?",
        "5.Kissed a non-family member on the lips?",
        "6.French kissed?",
        "7.French kissed in public?",
        "8.Kissed on the neck?",
        "9.Kissed horizontally?",
        "10.Given or received a hickey/ love-bite?",
    ],
    [
        "11.Kissed or been kissed on the breast?",
        "12.Kissed someone below the belt?",
        "13.Spent the night with a member of the perferred sex?",
        "14.Kissed for more than two hours consecutively?",
        "15.Undressed or been undressed by a MPS (member of the preferred sex)?",
        "16.Sent or received sexually explicit photographs?",
        "17.Engaged in sexually/ naughty activity over video chat?",
        "18.Showered with a member of the perferred sex?",
        "19.Had sexual intercourse?",
        "20.Ingested someone else's genital secretion?"
    ],
    [
        "21.Kicked a roommate out to commit a sexual act?",
        "22.Sex number lol?",
        "23.Played a game involving stripping?",
        "24.Had a pregnancy scare?",
        "25.Used a sex toy with a partner?",
        "26.Traveled 100 or more miles for the primary purpose of sexual intercourse?",
        "27.Had a sexual intercourse without a condom?",
        "28.Impregnated someone or been impregnated?",
        "29.Cheated on a significant other during a relationship?",
        "30.Danced with someone suggestively?",
        "31.Made love in a bed not belonging to you or your partner?"
    ],
    [
        "  1.Had the police called on you?",
        "2.Been put on disciplinary probation or suspended?",
        "3.Been sent to the office of a principal, dean or judicial affairs representative for a disciplinary infraction?",
        "4.Had the police question you?",
        "5.Urinated in public?",
        "6.Run from the police?",
        "7.Had the police handcuff you?",
        "8.Been arrested?",
        "9.Been convicted of a crime?",
        "10.Been convicted of a felony?",
        "11.Committed an act of vandalism?",
        "12.Committed an act of incest?"
    ],
    [
        " 1.Used a sex toy?",
        "2.Massaged or been massaged sensually?",
        "3.Seen or read pornographic material?",
        "4.Gone skinny-dipping?",
        "5.Masturbated?",
        "6. Masturbated to a picture or video?",
        "7.Been caught masturbating?",
        "8.Gone skinny-dipping?",
        "9.Purchased contraceptives?",
        "10.Gone through the motions of intercourse while fully dressed?"
    ],
    [
        "11.Fondled or had your butt cheeks fondled?",
        "12.Fondled or had your breasts fondled?",
        "13.Fondled or had your genitals fondled?",
        '14.Had or given "blue balls" a.k.a. edging?',
        "15.Climaxed due to someone else’s manipulation?",
        "16.Engaged in fellatio?",
        "17.Engaged in cunnilingus?",
        "18.Been walked in on while engaging in a sexual act?",
        "19.Seen a stripper?",
        "20.Had sexual intercourse with non-participating third party in the same room?"
    ],
    [
        "21.Had an STI (Sexually Transmitted Infections)?",
        "22.Had a Sexually transmitted infections (STIs) test due to a reasonable suspicion?",
        "23.Made love in 4 or more positions?",
        "24.Masturbated with an inanimate object?",
        "25.Had sexual intercourse 3 or more times in 1 night?",
        "26.Had sexual intercourse 10 or more times?",
        "27.Had sexual intercourse with a virgin?",
        "28.Had sexual intercourse in a motor vehicle?",
        "29.Had sexual intercourse in a swimming pool or hot tub?",
        "30.Masturbated while someone else was in the room?",
        "31.Had sexual intercourse while you or your partner's parents were in the same home?",
        "32.Had sexual intercourse with a partner with a 3 or more year age difference?",
        "33.Had a threesome?",
        "34.Had 2 or more distinct acts of sexual intercourse with 2 or more people within 24 hours?"
    ],
    [
        "1.Been drunk?",
        "2.Ingested alcohol in a non-religious context?",
        "3.Had severe memory loss due to alcohol?",
        "4.Used tobacco?",
        "5.Used marijuana?",
        "6.Used a drug stronger than marijuana?",
        "7.Used methamphetamine, crack cocaine, PCP, horse tranquilizers or heroin?",
        "8.Faked sobriety to parents or teachers?",
        "9.Played a drinking game?",
        "10.Had severe memory loss due to alcohol?"
    ],
    [
        "11.Gone streaking?",
        "12.Joined the mile high club?",
        "13.Attended an orgy?",
        '14.Participated in a "booty call" with a partner whom you were not in a relationship with?',
        "15.Been photographed or filmed during lovemaking by yourself or others?",
        "16.Had period sex?",
        "17.Had anal sex?",
        "18.Paid or been paid for a sexual act?",
        "19.Committed an act of voyeurism?",
        "20.Engaged in bestiality?",
        "21.Touched yourself?",
        "22.Given oral?",
        "23.Made love from behind?",
    ]
]

let arr_topics = [
    "Part 1: Relationship",
    "Part 2: Rule violation",
    "Part 3: physical life",
    "Part 4: Bad addiction"
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

    cb.addEventListener("change", () => {
        if (cb.checked) {
            sc.innerHTML = parseInt(sc.innerHTML) - 1;
        } else {
            sc.innerHTML = parseInt(sc.innerHTML) + 1;
        }
    })
    if (color === true) {
        node.classList.add("quiz_col1");
        text.classList.add("quiz_col1");
        cb.classList.add("checkbox2")

    } else if (color === false) {
        node.classList.add("quiz_col2");
        text.classList.add("quiz_col2");
        cb.classList.add("checkbox")
    };
    color = !color
    node.appendChild(cb)


    div.appendChild(node)

}
let div1 = createQuizlets(0);

topic.textContent = arr_topics[0];
div1.classList.remove("quizlets_inactive")


//Adding the quiz 
for (let i = 0; i < arrc[0].length; i++) {
    createQuizeTiles(arrc[0][i], div1);
}


for (let x = 1; x <= arrc.length; x++) {
    let div = createQuizlets(x);
    if (x != arrc.length) {
        for (let y = 0; y < arrc[x].length; y++) {
            createQuizeTiles(arrc[x][y], div);
        }
    }
}

console.log(state)


function nextPage() {

    if (set != 9) {
        let st = set
        state[st--].classList.add("quizlets_inactive")
        set++;
        if (set < 3) {
            topic.textContent = arr_topics[0];
        }
        else if (set == 3) {
            topic.textContent = arr_topics[1];
        } else if (set > 3 && set < 7) {
            topic.textContent = arr_topics[2];
        }
        else {
            topic.textContent = arr_topics[3];
        }
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
        if (set < 3) {
            topic.textContent = arr_topics[0];
        }
        else if (set == 3) {
            topic.textContent = arr_topics[1];
        } else if (set > 3 && set < 7) {
            topic.textContent = arr_topics[2];
        }
        else {
            topic.textContent = arr_topics[3];
        }
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

const sc_text = document.getElementById("sc_text");

//Submit

submit.addEventListener("click", () => {
    console.log("clicked")
    let scoreCount = sc.textContent;
    sc_sc.innerHTML = parseInt(sc.textContent);
    let text

    if (scoreCount >= 0 && scoreCount <= 8) {
        text = "You are pure.Few individuals fit into this group.";
    }
    else if (scoreCount >= 9 && scoreCount <= 44) {
        text = "You are severely compromised in your purity, thus. You may have used harmful substances that lead to addiction, spent time behind bars, or engaged in public physical bonding.";
    }
    else if (scoreCount >= 45 && scoreCount <= 76) {
        text = "Your innocence has been compromised, therefore. You've experienced multiple instances of terrible addiction behavior and / or legal issues."
    }
    else if (scoreCount >= 77 && scoreCount <= 93) {
        text = "Implies that you are generally pure. You most likely moved down so more or committed to a loved one."
    }
    else if (scoreCount >= 94 && scoreCount <= 97) {
        text = "It indicates are comparatively pure. Maybe you've kissed or held hands with someone."
    }
    else if (scoreCount >= 98 && scoreCount <= 100) {
        text = "You are as pure. Few individuals fit into this group."
    }

    sc_text.textContent = text

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