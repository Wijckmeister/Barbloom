// VARIABLES
/* MENU - MOBILE*/
let burger = document.querySelector(".burger");
let headmenumob = document.querySelector(".headmenumob");

let bgforarrow = document.querySelector(".bgforarrow");
let triangledown = document.querySelector(".triangledown");
let submenumob = document.querySelector(".submenumob");

let linksinmenusmob = document.querySelectorAll("table a");

let flowerslidersection = document.querySelector("#flowerslider");
/* MENU - MOBILE*/


/* MENU - FS*/
let opensubmenufs = document.querySelector(".opensubmenufs");
let submenufs = document.querySelector(".submenufs");

let linksinheadmenufs = document.querySelectorAll(".headmenufs a");

let linksinsubmenufs = document.querySelectorAll(".submenufs a");
/* MENU - FS*/


/* FLOWERSLIDER - ARROWS */
let flowerSliderArrowPointingLeft = document.querySelector(".pointingleft");
let flowerSliderArrowPointingRight = document.querySelector(".pointingright");
/* FLOWERSLIDER - ARROWS */


/* FORM */
let submitForm = document.querySelector("input.submit");
let divverstuurd = document.querySelector("div.verstuurd");
let legend = document.querySelector("legend");
let form = document.querySelector("form");
/* FORM */
// VARIABLES





// FUNCTIONS
/* MENU - MOBILE*/
function toggleHeadmenuMob() {
  if (headmenumob.classList.contains("invisible")) {
    burger.style.backgroundImage = "url(afbeeldingen/cross.svg)"
    headmenumob.classList.remove("invisible");
    flowerslidersection.style.margin = "34rem auto -3rem";
  } else {
    burger.style.backgroundImage = "url(afbeeldingen/burger.svg)"
    headmenumob.classList.add("invisible");
    flowerslidersection.style.margin = "8rem auto -3rem";
  }
}

function toggleSubmenuMob() {
  if (submenumob.classList.contains("invisible")) {
    triangledown.style.transform = "rotate(0deg)";
    submenumob.classList.remove("invisible");
    flowerslidersection.style.margin = "46rem auto -3rem";
  } else {
    triangledown.style.transform = "rotate(90deg)";
    submenumob.classList.add("invisible");
    flowerslidersection.style.margin = "34rem auto -3rem";
  }
}

function closeMenusMob() {
  burger.style.backgroundImage = "url(afbeeldingen/burger.svg)"
  headmenumob.classList.add("invisible");
  submenumob.classList.add("invisible");
  triangledown.style.transform = "rotate(90deg)";
  flowerslidersection.style.margin = "8rem auto -3rem";
}

function tooBigForHeadmenumob() {
  if (window.innerWidth > 1000) {
    headmenumob.classList.add("invisible");
    burger.style.backgroundImage = "url(afbeeldingen/burger.svg)"
  }
}
/* MENU - MOBILE*/


/* MENU - FS*/
function showSubmenuFS() {
  submenufs.classList.remove("invisible");
}

function closeSubmenuFS() {
  submenufs.classList.add("invisible");
}

function tooSmallForSubmenuFS() {
  if (window.innerWidth < 1000) {
    submenufs.classList.add("invisible");
  }
}
/* MENU - FS*/


/* FLOWERSLIDER - ARROWS */
function slideToTheLeft() {
  console.log("slideToTheLeft");
}

function slideToTheRight() {
  console.log("slideToTheRight");
}
/* FLOWERSLIDER - ARROWS */


/* FORM */
function formSent() {
  legend.innerHTML = "Bedankt voor je bericht, het wordt zo spoedig mogelijk behandeld!";
  divverstuurd.classList.add("invisible");
  form.style.height = "10rem";
}
/* FORM */
// FUNCTIONS





// EVENTS
/* MENU - MOBILE*/
burger.addEventListener("click", toggleHeadmenuMob);

bgforarrow.addEventListener("click", toggleSubmenuMob);

for (let i = 0; i < linksinmenusmob.length; i++) {
  linksinmenusmob[i].addEventListener("click", closeMenusMob);
}
window.addEventListener("resize", tooBigForHeadmenumob);
/* MENU - MOBILE*/


/* MENU - FS*/
opensubmenufs.addEventListener("mouseover", showSubmenuFS);

for (let i = 0; i < linksinheadmenufs.length; i++) {
  if (i === 1) {
    i++;
  }
  linksinheadmenufs[i].addEventListener("mouseover", closeSubmenuFS);
}

for (let i = 0; i < linksinsubmenufs.length; i++) {
  linksinsubmenufs[i].addEventListener("click", closeSubmenuFS);
}

window.addEventListener("resize", tooSmallForSubmenuFS);
/* MENU - FS*/


/* FLOWERSLIDER - ARROWS */
flowerSliderArrowPointingLeft.addEventListener("click", slideToTheLeft);
flowerSliderArrowPointingRight.addEventListener("click", slideToTheRight);
/* FLOWERSLIDER - ARROWS */


/* FORM */
submitForm.addEventListener("click", formSent);
/* FORM */
// EVENTS
