var typed = new Typed('#element', {
  strings: ['Web Designer','Frontend-Developer','Web Developer'],
  typeSpeed: 50,
});

function redirect() {
  window.open("https://github.com/toufikunsure-4529", '_blank'); 
}

function downloadResume(){
  let pdfUrl='CV_2023070500361786.pdf';
  let link=document.createElement('a');
  link.href=pdfUrl;
  link.download='Toufik_Resume.pdf';
  link.target='_blank';
  link.click();
}