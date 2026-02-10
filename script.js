// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const headerText = document.getElementById("header-text");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const body = document.querySelector("body");

// Click Envelope
headerText.style.display = "none";
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
        body.style.backgroundImage = 'url("bg2.jpg")';
    },50);
});

// Logic to move the NO btn

// noBtn.addEventListener("mouseover", () => {
//     const min = 200;
//     const max = 200;

//     const distance = Math.random() * (max - min) + min;
//     const angle = Math.random() * Math.PI * 2;

//     const moveX = Math.cos(angle) * distance;
//     const moveY = Math.sin(angle) * distance;

//     noBtn.style.transition = "transform 0.3s ease";
//     noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
// });

// Logic to make YES btn to grow

let yesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {

    switch(yesScale){
        case 1:
            headerText.style.display = "block";
            headerText.style.transform = `scale(1.6)`;
            break;
        case 3:
            headerText.textContent = "Are you sure?";
            headerText.style.transform = `scale(1.8)`;
            break;
        case 5:
            headerText.textContent = "Are you 100% sure?";
            headerText.style.transform = `scale(2)`;
            break;
        case 7:
            headerText.textContent = "Maan jaa yr!!";
            headerText.style.transform = `scale(2.5)`;
            break;
        default:
            break;
    }

    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
    headerText.style.display = "none";
});