let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "green", "purple"];

let  started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btn = document.querySelectorAll(".btn");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
    });

    function btnFlash(btn) {
        btn.classList.add("flash");
        setTimeout(function() {
            btn.classList.remove("flash");
}, 250);
    }

    function levelUp() {
        level++;
        h2.innerText = `Level ${level}`;

        //random btn choose


        let randIdx = Math.floor(Math.random() * 4);
        let randColor = btns[randIdx];
        let randBtn = document.querySelector(`.${randColor}`);
        console.log(randIdx);
        console.log(randColor);
        console.log(randBtn);
        console.log(randBtn);
        btnFlash(randBtn);
    }


    function btnPress() {
        let btn = this;
        btnFlash(btn);
    }

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns) {
        btn.addEventListener("click", btnPress);
    }

