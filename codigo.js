
 const rotate = (image) =>{
  const rotateAngle = 360;
    image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
  //rotateAngle = rotateAngle; 
}
const ver = (n) => {
  document.getElementById("article"+n).style.display="block"
  }
const ocultar = (n) =>{
  setTimeout(() => {
  document.getElementById("article"+n).style.display="none"
  }, 3000
  );
}




/*window.onload= function rotate(image) {
  image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
  rotateAngle = rotateAngle;
}*/

//window.onload = load;