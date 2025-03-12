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
  
    
   }
}

