  //! -    -   -   -   -  //
 //* JAVASCRIPT CARNIVAL //
//! -    -   -   -   -  //

console.log("Whack-a-Mole!")

//?/ There are three things we will need to make this game work, however as with all coding tasks there is more than one way to go about it:
//* The ability to store or get references to the cells in the HTML table.

const timeLeft = document.querySelector('#timeLeft')
const score = document.querySelector('#score')
const mole = document.querySelector('.mole')
let actualTimer = 60
let time = null
let clickMole
let result = 0
let audio = new Audio("/assets/whack-audio.wav");
let highScore

//create Array with all cells of board
const holesBoard = document.getElementsByTagName('TD');
//create Array of another Array
let holesBoardArr = Array.from(holesBoard)


//?/ A function foreach to randomly select which cell should show the mole.
//first removing mole of all cells/holes
//random array.length
// add mole again
// declaration let clickMole to randomHole.id
function randomHole() {
    holesBoardArr.forEach(hole => {
      hole.classList.remove('mole')
  })
  
  let randomHole = holesBoardArr[Math.floor(Math.random() * 25)]
  randomHole.classList.add('mole')

  clickMole  = randomHole.id
}

//?/ A function forEach with addEventListenner on click
//each hole declared as null and onClick the result++
//?/reproduce sound onClick on mole  
holesBoardArr.forEach(hole => {
  hole.addEventListener('mousedown', () => {
    if (hole.id === clickMole) {
      audio.play();  
      result++
      score.textContent = result
      clickMole = null
     } 
  })
})

//?/ A fuction to set timer Interval
function moleSpoting() {
  time = setInterval(randomHole, 550)
}
moleSpoting()

//?/ A Function to Countdown of timer

function countDownTimer() {
  actualTimer--
  timeLeft.textContent = actualTimer

  if(actualTimer === 0) {
    clearInterval(countDownTimerId)
    clearInterval(time)
    alert('G.A.M.E. O.V.E.R!!! Final Score: ' + result)
  }
}
let countDownTimerId = setInterval(countDownTimer, 1000)




















