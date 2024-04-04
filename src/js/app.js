//STICKY NAV
let header = document.querySelector(".header")
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    header.classList.add("sticky")
  }
  else {
    header.classList.remove("sticky");
  }
})



//mobile nav bar code
let menu = document.querySelector("#menu-icon")
let navList = document.querySelector(".nav-list")
menu.onclick = () => {
  menu.classList.toggle("bx-x") //bx-x is close outline class name dynamicaly added class naame
  navList.classList.toggle("active")
}

window.onscroll = () => {
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


const validateForm = () => {
  let name = document.getElementById("name").value
  let phone = document.getElementById("phone").value
  let msg = document.getElementById("msg").value
  let errorMsg = document.getElementById("errorMsg")
  let submitBtn = document.getElementById("submitBtn")

  if (name.trim() === '' || phone.trim() === '' || msg.trim() === '') {
    errorMsg.textContent = 'Please fill in all fields'
    return false
  }

}

setInterval(() => {
  let num = new Date()
  date.textContent = num
}, 1000)


//Signup Data Store Google sheet App Script
const scriptURL = 'https://script.google.com/macros/s/AKfycbxRmHt1gNBSsU7seMFOuKG_sYQPUBirh8KXWoNOIhVfEwCwOCaZ-jfEqbDFc-Y-8ZgD/exec';
const form = document.forms['formdata'];

const submitBtn = document.getElementById("submitBtn"); // Assuming there's a submit button with id="submitBtn"

form.addEventListener('submit', e => {
  e.preventDefault();


  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        alert(`Thank you! We will contact you as soon as possible`);
        window.location.reload();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
      alert(`Error:. ${error.message}`);
    });

  submitBtn.disabled = true;
  submitBtn.innerText = 'Please wait...';
});
