let item = ["🤫", "🤑", "🥰", "😜", "😎", "😉", "😇", "🥶", "😍"];

let items = [...item, ...item];

let shuffledItems = items.sort(() => Math.random() - 0.5);

let elemnt = document.querySelector(".game");

let Inverted = [];

let done = [];

let paper = new Audio("paper.mp3");

let win = new Audio("win.mp3");


shuffledItems.forEach((item) => {
    card = document.createElement("div");
    card.classList.add("item",);
    card.innerHTML = item;

    elemnt.appendChild(card);
})

document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", fun)
})


function fun(item) {
    paper.play();
    item.target.classList.add("active");
    if (Inverted.length < 2) {
        Inverted.push(item);
        console.log(Inverted.length);
    }
    if (Inverted.length == 2) {
        document.getElementById("no_click").classList.add("no_click");
        if (Inverted[0].target.innerHTML == Inverted[1].target.innerHTML) {
            done.push(Inverted[0].target, Inverted[1].target);
            Inverted = [];
            if (done.length == items.length) {
                win.play();
                setTimeout(() => {
                    alert("You win");
                }, 1000);
            }
            removeEvent();
            setTimeout(() => {
                document.getElementById("no_click").classList.remove("no_click");
            }, 1400);

        } else {
            setTimeout(() => {
                Inverted[0].target.classList.remove("active");
                Inverted[1].target.classList.remove("active");
                Inverted = [];
            }, 1000);
            setTimeout(() => {
                document.getElementById("no_click").classList.remove("no_click");
            }, 1400);
        }
    }


}

function removeEvent() {
    done.forEach((item) => {
        item.removeEventListener("click", fun);
    })
}



function reset() {
    window.location.reload();
}