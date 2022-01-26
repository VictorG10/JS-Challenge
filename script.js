// Challenge 1:Your Age in Days

function ageInDays() {
    var birthYear = prompt("what year were you born??");
    var ageInDayss =(2021 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("Your are " + ageInDayss + " days old");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById("ageInDays").remove();
}

// Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    image.src = "https://25.media.tumblr.com/2a6a6cb655bc42cd507d118f0532b645/tumblr_mmaop37PO01rml88qo1_400.gif";
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scrissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice);  
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        "rock": {"scissors": 1, "rock": 0.5, "paper": 0},
        "paper": {"rock": 1, "paper": 0.5, "scissors": 0},
        "scissors": {"paper": 1, "scissors": 0.5, "rock": 0},
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}


function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {"message": "You lost!", "color": "red"};
    } else if (yourScore === 0.5) {
        return {"message": "You tied!", "color": "yellow"};
    } else {
        return {"message": "You won!", "color": "green"};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scrissors": document.getElementById("scrissors").src
    }


    // let's remove all the images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scrissors").remove();


    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height = 160 width= 160 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height = 160 width= 160 style='box-shadow: 0px 10px 50px rgba(234, 38, 24, 1);'>"
    

    document.getElementById("flex-box-container-3-div").appendChild(humanDiv);
    document.getElementById("flex-box-container-3-div").appendChild(messageDiv);
    document.getElementById("flex-box-container-3-div").appendChild(botDiv);
}

// Challenege 4: Change the Color of All Buttons
var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i < all_buttons.length;  i++) {
    copyAllButtons.push(all_buttons[i].classList);
}

function buttonColorChange (buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonsRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset') {
        buttonsColorReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList(1));
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList(1));
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList(1));
        all_buttons[i].classList.add(copyAllButtons[1]);
    }
}

function randomColors() {
  let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'] 

  for (let i=0; i < all_buttons.length; i++){
      let randomNumber = Math.floor((Math.random) * 4 );
      all_buttons[i].classList.remove(all_buttons[i].classList(1));
      all_buttons[i].classList.add(choices[randomNumber]);
  }
    
}


