  //! -    -   -   -   -  //
 //* JAVASCRIPT CARNIVAL //
//! -    -   -   -   -  //

console.log("Inflate The Unicorn!")

//?/ find the three placeholder `<img>` tags and replace their `src=` elements to the `unicorn-0.png` image. Check that this has updated by reloading your browser.

let img1 = document.querySelector("#img1");
img1.setAttribute('src', '/assets/unicorn-0.png');

let img2 = document.querySelector("#img2");
img2.setAttribute('src', '/assets/unicorn-0.png');

let img3 = document.querySelector("#img3");
img3.setAttribute('src', '/assets/unicorn-0.png');



//?/ Declaration of Variables and create array of images.

let currentImg1Index = 1;
let currentImg2Index = 1;
let currentImg3Index = 1;

let imgSrcArray = [
  "/assets/unicorn-0.png",
  "/assets/unicorn-1.png",
  "/assets/unicorn-2.png",
  "/assets/unicorn-3.png",
];


//?/ Using the "onclick" method to call it, you will need to write a function that gets called every time you click on one of the unicorns.
//?/ Create an alert each image when ballon is full says "'Unicorn Number `X` says thank you!'"
//?/ Change de src of the images


//*Function to Inflate/Change src "Unicorn 1"
function swapImg1() {
  if(currentImg1Index === imgSrcArray.length) {
    currentImg1Index = 1;
  }   if (currentImg1Index === 3){
        alert('Unicorn Number `1` says thank you!')       
}
  document.getElementById("img1").src= imgSrcArray[currentImg1Index];
    currentImg1Index++;  
}


//*Function to Inflate/Change src "Unicorn 2"
function swapImg2() {

  if(currentImg2Index === imgSrcArray.length) {
    currentImg2Index = 1;
  }   if (currentImg2Index === 3){
        alert('Unicorn Number `2` says thank you!')
}

  document.getElementById("img2").src= imgSrcArray[currentImg2Index];
    currentImg2Index++;
}


//*Function to Inflate/Change src "Unicorn 3"
function swapImg3() {

  if(currentImg3Index === imgSrcArray.length) {
    currentImg3Index = 1;
  }   if (currentImg3Index === 3){
        alert('Unicorn Number `3` says thank you!')
}

  document.getElementById("img3").src= imgSrcArray[currentImg3Index];
    currentImg3Index++;
}