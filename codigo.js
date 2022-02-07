
 const rotate = (image) =>{
  const rotateAngle = 360;
    image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
  //rotateAngle = rotateAngle; 
}
const ver = (n) => {
  document.getElementById("article"+n).style.display="block"
  }
const ocultar = (n) =>{
  
  document.getElementById("article"+n).style.display="none"
  
}

const ocultar2 = (n) =>{
  setTimeout(() => {
  document.getElementById("article"+n).style.display="none"
  }, 10000
  );
}

// let x = document.getElementsByClassName("conocenos-img");
// x.addEventListener("mouseover", functionOcultar);
// x.addEventListener("click", functionVer);
// x.addEventListener("mouseout", myThirdFunction);


// function functionOcultar() {
//   document.getElementByClassName("conocenos-img").style.display="none"
// }

// function functionVer() {
//   document.getElementByClassName("conocenos-img").style.display="block"
// }

// function myThirdFunction() {
//   document.getElementById("demo").innerHTML += "Moused out!<br>";
// }


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


/*window.onload= function rotate(image) {
  image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
  rotateAngle = rotateAngle;
}*/

//window.onload = load;