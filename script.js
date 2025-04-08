let toggleBtnEl = document.getElementById('toggle-btn');
let sideBarEl = document.getElementById('side-bar');

function toggleSideBar(){
  sideBarEl.classList.toggle('close')
  toggleBtnEl.classList.toggle('rotate')

  Array.from(sideBarEl.getElementsByClassName('show')).forEach(ul=>{
    ul.classList.remove('show');
     ul.previousElementSibling.classList.remove('rotate')
   })
}

function toggleSubMenu(button){
   button.nextElementSibling.classList.toggle('show');
   button.classList.toggle('rotate');

   if (sideBarEl.classList.toggle('close')){
    sideBarEl.classList.toggle('close')
    toggleBtnEl.classList.toggle('rotate')
    
   }
}

// theme js
//geting current theme
let darkmode = localStorage.getItem('darkmode');

const themeBtn = document.querySelector('.theme-icons-cont')

themeBtn.addEventListener('click', () =>{
  darkmode = localStorage.getItem('darkmode')
  darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
});

function enableDarkmode(){
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

function disableDarkmode(){
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if (darkmode === 'active') enableDarkmode()



// my header hide and shoe on scroll
const navbar = document.getElementById("header");
let scrollTimeout;

window.addEventListener("scroll", () => {
  // Show navbar on scroll
  navbar.style.opacity = "1";
  navbar.style.pointerEvents = "auto";

    // If at the very top of the page, keep navbar visible
    if (window.scrollY === 0) {
      clearTimeout(scrollTimeout);
      return; // Exit early — don't set fade-out timeout
    }

  // Clear previous timeout
  clearTimeout(scrollTimeout);

  // Hide again after 1.5 seconds of no scroll
  scrollTimeout = setTimeout(() => {
    navbar.style.opacity = "0";
    navbar.style.pointerEvents = "none";
  }, 1500);
});
