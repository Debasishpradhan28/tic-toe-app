let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgcontain = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

const patterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener ("click",() =>{      
        if (turn) {
         box.innerText = "O";
         turn = false;                        
        } else {
         box.innerText = "X";
         turn = true;
        }
        box.disabled = true; 
        
        checkWinner();
    });
});

const disabledBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enbledBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
  msg.innerText = `congratulations, Winner is ${winner}`;
  msgcontain.classList.remove("hide");
  disabledBox();
}

const checkWinner = () => {
    for(pattern of patterns){
    
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){               
                showWinner(pos1);
            }
        }

    }
};

const resetGame = () => {
    turn = true;
    enbledBox();
    msgcontain.classList.add("hide");
}

newbtn.addEventListener("click",resetGame);
btn.addEventListener("click",resetGame); 