
let boxes = document.querySelectorAll(".box");
let winnerDiv = document.querySelector(".new");
let mainDiv = document.querySelector(".Tic");
let winHeading = document.querySelector(".new h1");
let button1 = document.querySelector("#btn1");
let button2 = document.querySelector("#btn2");
let turnX = 0;
let click = 0;

let winSequence = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function disable() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function enable() {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

button1.addEventListener("click", function () {
    click = 0;
    button1.style.backgroundColor = "#E4DEBE";
    setTimeout(function () {
        button1.style.backgroundColor = "#E6BAA3";
    }, 300);
    winnerDiv.classList.add("hide");
    mainDiv.classList.remove("hide");
    enable();
});

button2.addEventListener("click", function () {
    click = 0;
    button2.style.backgroundColor = "#E4DEBE";
    setTimeout(function () {
        button2.style.backgroundColor = "#E6BAA3";
    }, 300);
    enable();
});

for (let box of boxes) {
    box.addEventListener("click", function () {
        if (!turnX) {
            box.innerText = "X";
            turnX = 1;
        }
        else {
            box.innerText = "O";
            turnX = 0;
        }
        click++;
        box.disabled = true;
        winner();
    });
}

function winner() {
    for (pattern of winSequence) {
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;
        if ((value1 != "") && (value2 != "") && (value3 != "")) {
            if ((value1 === value2) && (value2 === value3)) {
                console.log(`winner is ${value1}`);
                winHeading.innerHTML = `<b>Congratulations!</b> Winner is ${value1}`;
                disable();
                winnerDiv.classList.remove("hide");
                mainDiv.classList.add("hide");
                break;
            }
            else {
                if(click == 9){
                    draw();
                    break;
                }
            }
        }
    }
}

function draw() {
    console.log("Game is draw");
    winHeading.innerHTML = "Game <b>Draw!</b>";
    winnerDiv.classList.remove("hide");
    mainDiv.classList.add("hide");
}