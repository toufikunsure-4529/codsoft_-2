//STICKY NAV
let header=document.querySelector(".header")
window.addEventListener("scroll",()=>{
  if(window.scrollY>120){
    header.classList.add("sticky")
  }
  else {
    header.classList.remove("sticky");
}
})



//mobile nav bar code
let menu=document.querySelector("#menu-icon")
let navList=document.querySelector(".nav-list")
menu.onclick=()=>{
  menu.classList.toggle("bx-x") //bx-x is close outline class name dynamicaly added class naame
  navList.classList.toggle("active")
}

window.onscroll=()=>{
  menu.classList.remove("bx-x")
  navList.classList.remove("active")
}


//resume download function
function downloadResume() {
  let pdfUrl = 'Toufik _Resume.pdf';
  let link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Toufik_Resume.pdf';
  link.target = '_blank';
  link.click();
}
