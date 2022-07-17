const link = document.querySelectorAll('.link');
const linkHoverReveal = document.querySelectorAll('.hover-reveal');
const linkImages = document.querySelectorAll('.hidden-img');


for(let i = 0; i < link.length; i++) {
  link[i].addEventListener('mousemove', (e) => {
    linkHoverReveal[i].style.opacity = 1;
    linkHoverReveal[i].style.transform = `transition(-100%, -50% ) rotate(5deg)`;
    linkImages[i].style.transform = 'scale(1, 1)';
    linkHoverReveal[i].style.left = e.clientX + "px";
  })
  
  link[i].addEventListener('mouseleave', (e) => {
    linkHoverReveal[i].style.opacity = 0;
    linkHoverReveal[i].style.transform = `transition(-50%, -50%) rotate(-5deg)`;
    linkImages[i].style.transform = 'scale(0.8, 0.8)';
  })
}





// window.addEventListener("resize",function(){
// if (window.matchMedia("(min-width:858px)").matches) {
// checkbtn.addEventListener("click", event =>{
//   console.log("stupid nigga")
// })

// }
// })

var a;
function show_hide() {
  if (a==1){
    document.getElementById('close2').style.display='block';
    return a=0;
  
  }
  else{
    document.getElementById('close2').style.display='none';
    return a=1;
  
  }
}

var b;
function show() {
  if (b==1){
    document.getElementById('close1').style.display='block';
    return b=0;
  
  }
  else{
    document.getElementById('close1').style.display='none';
    return b=1;
  
  }
}

var c;
function hide() {
  if (c==1){
    document.getElementById('close').style.display='block';
    // close.style.transition=' 5000';
    return c=0;
  
  }
  else{
    document.getElementById('close').style.display='none';
    // close.style.transition='5000';
    return c=1;
  
  }
}





