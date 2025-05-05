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


// js for my projects!!!
const personalProject = [
   {
    img: 'images/questionProject.png',
    link: 'https://multi-step-form-one-alpha.vercel.app/',
    name: 'Course Qiuzes',
    stack: 'HTML CSS JS',
    description: '[Ongoing]. This project is a simple quiz app that allows users to take quizzes on various topics. It was built using HTML, CSS, and JavaScript. The app features a user-friendly interface, multiple-choice questions, and instant feedback on answers. I created this project to practice my skills in web development and to provide a fun way for users to test their knowledge on different subjects.',
   },
   {
    img: 'images/kinematics-project-pic.png',
    link: 'https://kinematics-tutorials.vercel.app/',
    name: 'Kinematics Tutorials Website',
    stack: 'HTML CSS JS',
    description: 'I designed and developed a simple, user-friendly website to help students easily find and attend a specific tutorial session on Kinematics. The site provides clear information about the tutorial, including the topic focus, venue details, and a direct link to the location via Google Maps.'
   },
   {
    img: 'images/multistepProjectpicture.png',
    link: 'https://multi-step-form-one-alpha.vercel.app/',
    name: 'Advanced Multi-Step Form',
    stack: 'HTML CSS JS',
    description: 'An advanced Frontend Mentor challenge where I built a dynamic, accessible multi-step form with validation and state management using JavaScript.',
   }
];

const miniProject = [
  {
   img: 'images/todo-list-pic.png',
   link: 'https://ugochukwu111.github.io/todo-list/',
   name: 'Simple Todo List',
   stack: 'HTML CSS JS',
   description: 'This project is a basic task manager built with vanilla JavaScript. It helped me understand core concepts like DOM manipulation, event listeners, and working with localStorage to store tasks. It was a great way to strengthen my understanding of interactivity and state management in the browser.',
  },
  {
   img: 'images/interactive-color-game-pic.png',
   link: 'https://color-game-jet-eta.vercel.app',
   name: 'Interactive Color Game',
   stack: 'HTML CSS JS',
   description: 'A fun mini-game where players guess the correct color based on RGB values. I built this to sharpen my understanding of   DOM manipulation, event listeners, and random color generation using JavaScript. It helped me grasp core logic building,dynamic styling, and user interaction patterns in a hands-on way.',
  },
  {
   img: 'images/web3-project-img.png',
   link: 'https://ugochukwu111.github.io/web3newspage/',
   name: 'Project Web 3',
   stack: 'HTML CSS JS',
   description: 'A responsive Frontend Mentor challenge that sharpened my skills in layout, responsiveness, and translating Figma designs into clean, semantic HTML and CSS.',
  }
];

const collaborationProject = [
  {
   img: 'images/opencart-logo.png',
   link: 'https://github.com/21st-centuary-codes/Open-cart',
   name: 'Open-cart Website',
   stack: 'HTML CSS JS',
   description: '[Ongoing]. I am leading an ongoing project to develop an OpenCart eCommerce website, where I came up with the idea. My role is focused on the frontend, and I’m working with a team of developers to bring the site to life. The project involves collaboration through Git and GitHub, where I oversee version control and contribute to the overall design and development process. This experience has allowed me to strengthen my understanding of working with developers on a project and managing tasks efficiently.',
  }
];




function displayProject(projectName, projectContainer ){
let html = '';
projectName.forEach((project)=>{
    
    html += ` 
            <div >
              <div class="project-img">
                <img  loading="lazy" src="${project.img}" alt="project-img">
              </div>
              <div>
                <p>
                  <span><a class="project-name-link" target="_blank" href="${project.link}">${project.name}</a></span>
                  <span class="project-stack">Stack: &nbsp;${project.stack}</span>
                  ${
                    project.description
                  }
                  
                </p>
              </div>
            </div> `
})

document.querySelector(`${projectContainer}`).innerHTML = html;//.js-personal-projects-container
}

displayProject(personalProject, '.js-personal-projects-container');
displayProject(miniProject, '.js-mini-project-container');
displayProject(collaborationProject, '.js-collaboration-project-container');


// ==== ANIMATION
AOS.init({
  duration: 1000, // Duration of animations
  offset: 200, // Trigger animation when the element is 200px in view
  once: true, // Trigger animation only once
  easing: 'ease-in-out', // Easing for animation
});