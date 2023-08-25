
var typed = new Typed('#element', {
  strings: ['Web Designer', 'Frontend-Developer', 'Web Developer'],
  typeSpeed: 50,
});

function redirect() {
  window.open("https:github.com/toufikunsure-4529", '_blank');
}

function downloadResume() {
  let pdfUrl = 'CV_2023070500361786.pdf';
  let link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Toufik_Resume.pdf';
  link.target = '_blank';
  link.click();
}


//  tab about section
var tablink = document.getElementsByClassName("tab-link");
var tabcontent = document.getElementsByClassName("tab-content");
function opentab(tabname) {
  for (tablinke of tablink) {
    tablinke.classList.remove("active-link");
  }
  for (tabcontente of tabcontent) {
    tabcontente.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}



