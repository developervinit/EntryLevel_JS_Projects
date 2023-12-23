let roll_btn = document.getElementById("roll-button");
let dice = document.getElementById("dice");
let dice_history_id = document.getElementById("roll-history");


let rollDice_Arr = [];

function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let randomHtmlEntity = getRandomDice(randomNumber);
    dice.innerHTML = randomHtmlEntity;
    rollDice_Arr.push(randomHtmlEntity); //for listing history
    displayRollDiceListing();
}

function getRandomDice(randomNumber){
    let randomDice = "&#9860;";

    if(randomNumber === 1){
        randomDice = "&#9856;";
    } else if (randomNumber === 2){
        randomDice = "&#9857;";
    } else if (randomNumber === 3){
        randomDice = "&#9858;";
    } else if (randomNumber === 4){
        randomDice = "&#9859;";
    } else if (randomNumber === 5){
        randomDice = "&#9860;";
    } else if (randomNumber === 6){
        randomDice = "&#9861;";
    }

    return randomDice;
}

function displayRollDiceListing(){
    dice_history_id.innerHTML = "";
    for(var i=0; i<rollDice_Arr.length; i++){
        let li = document.createElement("li");
        let htmlEntity = rollDice_Arr[i];
        li.innerHTML = `Roll: ${i+1} <span>${htmlEntity}</span>`;
        dice_history_id.appendChild(li);
    }
}

roll_btn.addEventListener("click", () => {
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");
        rollDice();
    }, 1000)
});
