//need to get elements
//need to write 'x' and  'o'
//need to check for winning conditions (create my own ai... chose difficulty, perfect)
//need to stop at winning condition/drawing
//need to restart game afresh

/*
winning conditions
123=x/o 
456=x/o
789=x/0
159=x/o
357=x/o
*/
/*
Drawing conditions
All fields field !won
*/

const startGamer=document.querySelector(".startGame")
const array=document.querySelectorAll(".cells")
// const value=document.querySelector("#0")
const header=document.querySelector("#header")
startGamer.addEventListener('click',startGame)

function startGame(){
    header.innerText="Player X has won";
    const x_value=document.createElement("p")
    //need to redo doms
}
function aiComputer(e){
    //how many combinations possible?
    //x then o or o then x
    //start with perfect ai
    //if 1=x then 9=0
    // array.addEventListener('click',conditions());
   

}
function conditions(){
    if(value===1){
        header.innerText="working"
        console.log('are we here?')
    }
}