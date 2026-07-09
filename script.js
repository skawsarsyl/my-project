alert("Script Loaded Successfully");

const words = [

"SEO Specialist",

"Technical SEO",

"Keyword Research",

"Website Optimization",

"Digital Marketing"

];

let wordIndex = 0;

let letterIndex = 0;

let currentWord = "";

let currentLetters = "";

const typingText = document.getElementById("typing-text");

function type(){

if(wordIndex >= words.length){

wordIndex = 0;

}

currentWord = words[wordIndex];

currentLetters = currentWord.slice(0,++letterIndex);

typingText.textContent = currentLetters;

if(letterIndex === currentWord.length){

setTimeout(erase,1800);

}else{

setTimeout(type,90);

}

}

function erase(){

currentLetters = currentWord.slice(0,--letterIndex);

typingText.textContent = currentLetters;

if(letterIndex===0){

wordIndex++;

setTimeout(type,250);

}else{

setTimeout(erase,45);

}

}

document.addEventListener("DOMContentLoaded",type);

/* ===============================
   Back To Top Button
=============================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ===============================
   Scroll Reveal
=============================== */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();



/* ===============================
   Active Navigation
=============================== */

const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.nav-links a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }

    });

}, {
    root: null,
    rootMargin: "-100px 0px -55% 0px",
    threshold: 0
});

document.querySelectorAll("section[id]").forEach(section => {
    observer.observe(section);
});

/* ===============================
   MOBILE MENU
=============================== */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuToggle.innerHTML = navMenu.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

/* ===============================
   DARK / LIGHT MODE
=============================== */

const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {

        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem("theme", "light");

    }

});

/* ===============================
   SCROLL PROGRESS BAR
=============================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});

/* ===============================
   ANIMATED SKILL BARS
=============================== */

const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress-bar");

let skillsAnimated = false;

function animateSkills() {

    if (skillsAnimated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 150;

    if (sectionTop < triggerPoint) {

        progressBars.forEach(bar => {

            const targetWidth = getComputedStyle(bar)
                .getPropertyValue("--target-width");

            bar.style.width = targetWidth;

        });

        skillsAnimated = true;

    }

}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);




