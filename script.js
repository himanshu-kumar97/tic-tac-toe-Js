let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true//playerX, playerO     // its indicate the trun of the player 

const winPatterns = [      //Winning patterns 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {           // create the function to reset the game 
     turnO = true;
     enableBoxes();                  // fun call 
     msgContainer.classList.add("hide");    //hise the msg container 
};

boxes.forEach((box) => {                   // add click and add text O and X
    box.addEventListener("click", () => {
      console.log("box was clocked");
       if(turnO){  //playerO
        box.innerText = "O";
        turnO = false;
       } else {  //playerX
          box.innerText = "X";
          turnO = true;
       }
       box.disabled = true;    // box disabled after the click

       checkWinner();
    });
});

const enableBoxes = () => {     // to enable the all boxes again after the reset the game 
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";      // to remove inner text 
    }
}



const disableBoxes = () => {        // to disable the value after the winner 
    for(let box of boxes) {
        box.disabled = true;        
    }
}

const showkWinner = (Winner) => {                            // to show the winner 
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {            // make a function to check the winner
    for( pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val!="") {         // box valuue should not to equal to empty 
            if(pos1Val == pos2Val && pos1Val== pos3Val) {         // check the value pos1, pos2, pos3 equal to or not 
                console.log("winner", pos1Val);
             showkWinner(pos1Val);

            }
        }

    }

};

newGameBtn.addEventListener("click", resetGame);    // trigger after click
resetBtn.addEventListener("click", resetGame);      // trigger after click