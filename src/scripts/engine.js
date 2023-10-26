var cards = [
    "♨_♨",
    "♨_♨",
    "(•ˋ _ ˊ•)",
    "(•ˋ _ ˊ•)",
    "(⓿_⓿)",
    "(⓿_⓿)",
    "(✿◕‿◕✿)",
    "(✿◕‿◕✿)",
    "¯\_(ツ)_/¯",
    "¯\_(ツ)_/¯",
    "༼ つ ◕_◕ ༽つ",
    "༼ つ ◕_◕ ༽つ",
    "(☞ﾟヮﾟ)☞",
    "(☞ﾟヮﾟ)☞",
    "☜(ﾟヮﾟ☜)",
    "☜(ﾟヮﾟ☜)",
];

let openCards = [];

let shuffleCards = cards.sort(() => (Math.random() > 0.5 ? 2 : -1));


for (let i = 0; i < cards.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleCards[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    } else{
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }
    openCards = [];

    if(document.querySelectorAll(".boxMatch").length === cards.length){
        alert("Você venceu!")
    }
}