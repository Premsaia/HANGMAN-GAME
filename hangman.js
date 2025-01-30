let keyboard = document.querySelector(".keyboard");
let hintVar = document.querySelector(".hint");
let unorderList = document.querySelector(".word");
let attempts = document.getElementById("attempts");
let imageSource = document.getElementById("imagesource")
let uncorrectCount = 0;
let loseWord = document.getElementById("loseWord");
let winnerWord = document.getElementById("winnerWord")
let maxCount = 6;
let correctLetters = [];
let lose = document.querySelector(".lose");
let win = document.querySelector(".win");
let {word,hint} = wordList[Math.floor(Math.random()*wordList.length)]
hintVar.innerHTML = hint;
loseWord.innerHTML = `The Correct Word Was : ${word}`;
winnerWord.innerHTML = `${word}`;


const playAgain = ()=>{
    lose.classList.remove("blockList");
    win.classList.remove("blockList");
    window.location.reload()
}

const clickedEvent = (button,clickedLetter) =>{
    if(word.includes(clickedLetter)){
       [...word].forEach((letter,index)=>{
        if(letter === clickedLetter){
            correctLetters.push(clickedLetter);
            console.log(correctLetters);
            unorderList.querySelectorAll("li")[index].innerText = letter;
            unorderList.querySelectorAll("li")[index].classList.add("guessed")
        }
       })
    }
    else{
        
        if(uncorrectCount <maxCount){
            uncorrectCount++;
            if(uncorrectCount === maxCount){
                lose.classList.add("blockList")
            }
            imageSource.src = `./images/hangman-${uncorrectCount}.svg`
            attempts.innerHTML = `${uncorrectCount} / ${maxCount}`
        }
    }
    if(word.length === correctLetters.length){
        win.classList.add("blockList")
    }
    button.disabled =true;
    
}

for(let i=97; i<123; i++){
    let button = document.createElement("button");
    button.classList.add("keyboardButton");
    button.innerHTML = String.fromCharCode(i).toLocaleUpperCase();
    keyboard.appendChild(button);
    button.addEventListener("click",e => clickedEvent(e.target,String.fromCharCode(i)))
}

let wordLength = word.length;
for(let j=0; j<wordLength;j++){
    let listItem = document.createElement("li");
    listItem.classList.add("letter");
    unorderList.appendChild(listItem);
}