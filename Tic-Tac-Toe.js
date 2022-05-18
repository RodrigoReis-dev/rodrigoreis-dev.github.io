console.log('Welcome to Tic-Tac-Toe! Enjoy!');

//?/ create object with all cells and declare them as default null

//Defaults details:
const player1 = '👻'
const player2 = '🧟‍♀️'
let noughtsTurn = true
let gameIsOver 
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.getElementById('winningMessageText')
const cells = document.getElementsByTagName("TD");



// loop through cells
for(i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
  // cells[i].innerHTML = ''
}

//  create a variable for the clicked cell so I can do stuff with it
// //?/ Function event click
function cellClicked(e) {
  let cell = e.target
  // cells[e.target.id] = player
    console.log(e.target.id)
  // e.target.classList.add('simbol_' + player)
    console.log( 'i clicked on' + cell)
  let symbol 
  if (cell.innerHTML === '') {
    symbol = (noughtsTurn ? player1 : player2)
    cell.innerHTML = symbol
    switchPlayer()
    checkForWin(symbol)
  
  } 
}

function switchPlayer(){
  noughtsTurn = !noughtsTurn
}

function checkForWin(symbol){
// HORIZONTAL LINES //
  if (cells[0].innerHTML == symbol && cells[1].innerHTML == symbol && cells[2].innerHTML == symbol) {
  gameIsOver = true
  
  } else if (cells[3].innerHTML == symbol && cells[4].innerHTML == symbol && cells[5].innerHTML == symbol) {
  gameIsOver = true
 
  } else if (cells[6].innerHTML == symbol && cells[7].innerHTML == symbol && cells[8].innerHTML == symbol) {
  gameIsOver = true
  
  // VERTICAL LINES //

  } else if (cells[0].innerHTML == symbol && cells[3].innerHTML == symbol && cells[6].innerHTML == symbol) {
  gameIsOver = true
  
  } else if (cells[1].innerHTML == symbol && cells[4].innerHTML == symbol && cells[7].innerHTML == symbol) {
  gameIsOver = true
  
  } else if (cells[2].innerHTML == symbol && cells[5].innerHTML == symbol && cells[8].innerHTML == symbol) {
  gameIsOver = true
  
  // DIAGONAL LINES //

  } else if (cells[0].innerHTML == symbol && cells[4].innerHTML == symbol && cells[8].innerHTML == symbol) {
  gameIsOver = true
  
  } else if (cells[2].innerHTML == symbol && cells[4].innerHTML == symbol && cells[6].innerHTML == symbol) {
  gameIsOver = true
 
  } if (gameIsOver === true){
  window.alert(` ${symbol} ${symbol} ${symbol} >>> Game won. Please restart the game. <<< ${symbol} ${symbol} ${symbol}`);
 } 
}








  
  