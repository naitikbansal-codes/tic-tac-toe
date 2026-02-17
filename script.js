let boxes = document.querySelectorAll(".boxes");
let turn1 = document.querySelector(".turn1");
let turn2 = document.querySelector(".turn2");
let msg = document.querySelector(".msg");
let resultMsg = document.querySelector("#result");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let clickMusic = new Audio("./sounds/click.mp3");
let victoryMusic = new Audio("./sounds/victory.mp3");
let turnX = true;
let winnerCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

reset.addEventListener("click", ()=>{
    boxes.forEach((box) => {
        box.disabled = false;
        box.classList.add("hover");
        box.textContent = "";
        msg.style.display = "none";
        box.classList.remove("winnerAnimation");
        clickMusic.play();
    });
});

newGame.addEventListener("click", ()=>{
    boxes.forEach((box) => {
        box.disabled = false;
        box.classList.add("hover");
        box.textContent = "";
        msg.style.display = "none";
        box.classList.remove("winnerAnimation");
        clickMusic.play();

    });
});




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.textContent = "X";
            box.style.color = "rgb(174, 51, 96)";
            turn1.classList.remove("shadow");
            turn2.classList.add("shadow");
            turnX = false;
        }
        else {
            box.textContent = "O";
            box.style.color = "rgb(80, 52, 182)";
            turn1.classList.add("shadow");
            turn2.classList.remove("shadow");
            turnX = true;
        }

        checkWinner();
        clickMusic.play();
    });
});

function checkWinner(){
    for(let condition of winnerCondition){
        let box1 = boxes[condition[0]].textContent;
        let box2 = boxes[condition[1]].textContent;
        let box3 = boxes[condition[2]].textContent;

        if(box1 !== "" && box2 !== "" && box3 !== ""){
            if(box1 === box2 && box2 === box3){
                showResult(box1);
                boxes.forEach((box) => {
                    box.classList.add("winnerAnimation");
                });
                boxes[condition[0]].classList.remove("winnerAnimation");
                boxes[condition[1]].classList.remove("winnerAnimation");
                boxes[condition[2]].classList.remove("winnerAnimation");

            };
        };
    };
};

function showResult(result){

    victoryMusic.play();

    boxes.forEach((box)=>{
        box.disabled = true;
        box.classList.remove("hover")
    });

    msg.style.display = "flex";
    resultMsg.textContent = result;

    if(result === "X"){
        resultMsg.style.color = "rgb(174, 51, 96)";
        turnX = true;
        turn1.classList.add("shadow");
        turn2.classList.remove("shadow");
    }
    else {
        resultMsg.style.color = "rgb(80, 52, 182)";
        turnX = false;
        turn1.classList.remove("shadow");
        turn2.classList.add("shadow");
    };
};