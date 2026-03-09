const board = document.getElementById("board")
const message = document.getElementById("message")

let cells = ["","","","","","","","",""]
let gameOver = false

const win = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

function checkWin(){

for(let p of win){

let [a,b,c] = p

if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){

gameOver = true

if(cells[a] === "X"){

message.innerHTML = "You win ❤️"

document.querySelectorAll(".cell").forEach(c=>{
c.innerHTML="❤️"
})

}

}

}

}

function computerMove(){

if(gameOver) return

let empty = []

cells.forEach((c,i)=>{
if(c==="") empty.push(i)
})

let move = empty[Math.floor(Math.random()*empty.length)]

cells[move] = "O"
board.children[move].innerHTML="O"

}

function clickCell(i){

if(cells[i] !== "" || gameOver) return

cells[i] = "X"
board.children[i].innerHTML = "X"

checkWin()

setTimeout(computerMove,400)

}

for(let i=0;i<9;i++){

let cell = document.createElement("div")

cell.classList.add("cell")

cell.addEventListener("click",()=>clickCell(i))

board.appendChild(cell)

}
