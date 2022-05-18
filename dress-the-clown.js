  //? -    -   -   -   -  //
 //! JAVASCRIPT CARNIVAL //
//? -    -   -   -   -  //

console.log("Dress The Clown!")

//?/ Images Declaration >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// set all as 0.png
let imgHead = document.querySelector("#imgHead");
imgHead.setAttribute('src', '/assets/head0.png');

let imgBody = document.querySelector("#imgBody");
imgBody.setAttribute('src', '/assets/body0.png');

let imgShoes = document.querySelector("#imgShoes");
imgShoes.setAttribute('src', '/assets/shoes0.png');


//?/ Indexes >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let currentHeadIndex = 0;
let currentBodyIndex = 0;
let currentShoesIndex = 0;
let fullBodyIndex = 0;

//?/ A Function to check the keyboardEvent >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Verification and declaration of the rules to move: Left'37', right'39', Up'38' and Down'40' 
//call respectively function moveLeftRight() and moveUpDown()
document.onkeydown = checkKey;
function checkKey(e) {
     e = e || window.event;

    if (e.keyCode == '38') {
      moveUpDown(-1)
    }
    else if (e.keyCode == '40') {
      moveUpDown(1)
    }

    else if (e.keyCode == '37') {
      moveLeftRight(-1)
    }
     
    else if (e.keyCode == '39') {
      moveLeftRight(1)
    }
}

//?/ A Function to move Left and Right >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// range to control to dont move out of limit [5] images.
// using string concatenation
function moveLeftRight(slide){
  
  // Head >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   if(fullBodyIndex === 0){
    currentHeadIndex += slide

    if(currentHeadIndex < 0)
        currentHeadIndex = 5

    if(currentHeadIndex > 5)
        currentHeadIndex = 0

    imgHead.src = "/assets/head" + currentHeadIndex + ".png"
   }  
   
   // Body >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   if(fullBodyIndex === 1){
    currentBodyIndex += slide

    if(currentBodyIndex < 0)
        currentBodyIndex = 5

    if(currentBodyIndex > 5)
        currentBodyIndex = 0

    imgBody.src = "/assets/body" + currentBodyIndex + ".png"
   }  

  // Shoes >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
   if(fullBodyIndex === 2){
    currentShoesIndex += slide

    if(currentShoesIndex < 0)
        currentShoesIndex = 5

    if(currentShoesIndex > 5)
        currentShoesIndex = 0

    imgShoes.src = "/assets/shoes" + currentShoesIndex + ".png"
   }  

}


//?/ A Functio to move Up and Down >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// range to control to dont move out of limit[2] (head[0], body[1] and shoes[2]).
function moveUpDown(slide){
  fullBodyIndex += slide

  if (fullBodyIndex < 0)
      fullBodyIndex = 2

  if (fullBodyIndex > 2)
      fullBodyIndex = 0
      console.log(fullBodyIndex)
}



      

     



     




