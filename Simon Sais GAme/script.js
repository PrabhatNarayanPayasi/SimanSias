let gameSequence = [];
let userSequence = [];
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"]
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("start");
        started = true;
        levelUp();
    }

})
//first step complete                           

function levelUp() {
    userSequence = [];
    level++;
    h2.innerText = `Level ${level}`
    let randomIndex = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomIndex];
    let randombtn = document.querySelector(`.${randomcolor}`);
    // console.log(randombtn)
    gameSequence.push(randomcolor);
    console.log(gameSequence)
    gameFlash(randombtn);
}



function checkAns(index) {
    // console.log("curr level",level);

    // let index = level-1;
    if (userSequence[index] == gameSequence[index]) {
        // console.log("Same Value");

        if (userSequence.length == gameSequence.length) {
            setTimeout(levelUp(), 1000);
        }
    }
    else {
        h2.innerHTML = ` Game Over ! Your score was <b>${level}</b> <br>press any key to start. `;

        // document.querySelector("body").style.backgroundColor = "red";


        // setTimeout(function () {
        //     document.querySelector("body").style.color = "black";
        // },150);
        reset();

    }
}
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 80)
};
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 80)

};


//                            step 2 complete for flashing button 


function btnPress() {
    // console.log("Button Was Pressed ");
    // console.log(this);
    let btn = this;
    userFlash(btn);
    let usercolor = btn.getAttribute("id");
    console.log(usercolor);
    userSequence.push(usercolor)
    checkAns(userSequence.length - 1);
}
let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns) {
    btn.addEventListener("click", btnPress)
}
function reset() {
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;

}
