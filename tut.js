console.log('Welconme to project-2!');

let win = document.getElementById('vijeta');
win.innerText = "";

let turn = "X";
let gameover = false;

const changeTurn = ()=>{
    if(turn == "X"){
        turn = "0";
    }
    else{
        turn = "X";
    }
}

// check winner
const checkwin = ()=>{
    let winArray = [ [0, 1, 2, 1], [3, 4, 5, 2], [6, 7, 8, 3], [0, 3, 6, 6], [1, 4, 7, 4], [2, 5, 8, 5], [0, 4, 8, 8], [2, 4, 6, 7] ];
    let textArray = document.getElementsByClassName('tex');

    winArray.forEach(each =>{
        if(textArray[each[0]].innerText != "" && textArray[each[0]].innerText == textArray[each[1]].innerText && textArray[each[1]].innerText == textArray[each[2]].innerText){
            gameover = true;
            document.getElementById(`line${each[3]}`).style.width = '300px';
            win.innerText = `"${turn}" WON!!`;
            document.getElementById('happygif').style.width = "200px";
        }
    })
}

// playing the game
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(elem =>{

    elem.addEventListener('click', ()=>{
        let boxtext = elem.querySelector('.tex');
        if(boxtext.innerText =="" && gameover==false){
            boxtext.innerText = turn;
        }
        checkwin();
        if(gameover == false){
            changeTurn();
            document.getElementsByClassName('turn')[0].innerText = `TURN FOR "${turn}"`;
        }
    })
})

// resetting the game
let reset = document.getElementById('btn');
reset.addEventListener('click', ()=>{

    let text = document.getElementsByClassName('tex');
    Array.from(text).forEach(elem2 =>{
        elem2.innerText = "";
    })
    let line = document.getElementsByClassName('line');
    Array.from(line).forEach(eachline =>{
        eachline.style.width = "0px";
    })
    
    win.innerText = "";
    document.getElementById('happygif').style.width = "0px"    
    turn = "X";
    document.getElementsByClassName('turn')[0].innerText = `TURN FOR "${turn}"`;
})