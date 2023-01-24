console.log("tic tac toe");
let turn="X";
let isgameOver= false;
//change turn
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}
/*0 1 2
  3 4 5
  6 7 8*/

const checkWin=()=>{
    let boxTexts=document.getElementsByClassName('textt');
    let wins=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e=>{
        if((boxTexts[e[0]].innerText===boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText===boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won"
            isgameOver = true
    }    
})

}

//logic of game
let cells= document.getElementsByClassName("cell");
Array.from(cells).forEach(element=>{
    let boxText=element.querySelector('.textt');
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText=turn;
            turn= changeTurn();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
 
            }

        }

    })
})

//reset button onclick
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.textt');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    });
    turn="X";
    isgameOver=false;
    
        document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;

    

})
