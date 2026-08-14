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



/* ===============================
   SCROLL PROGRESS BAR
=============================== */

const progressBar = document.getElementById("progress-bar");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const docHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress =
            docHeight > 0
                ? (scrollTop / docHeight) * 100
                : 0;

        progressBar.style.width = `${progress}%`;

    });

}


/* ===============================
   BACK TO TOP BUTTON
=============================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

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

}
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

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });
}
/* ===============================
   DARK / LIGHT MODE
=============================== */

const themeToggle = document.querySelector(".theme-toggle");

if(themeToggle){

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark-mode");
        themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    themeToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            themeToggle.innerHTML='<i class="fa-solid fa-sun"></i>';
            localStorage.setItem("theme","dark");

        }else{

            themeToggle.innerHTML='<i class="fa-solid fa-moon"></i>';
            localStorage.setItem("theme","light");

        }

    });

}

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

/* ===============================
   ANIMATED STATS COUNTER
=============================== */

const counters = document.querySelectorAll(".counter");
const statsSection = document.querySelector(".stats");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 150) {

        counters.forEach(counter => {

            const target = +counter.dataset.target;
            const speed = 50;

            const updateCounter = () => {

                const current = +counter.innerText;

                const increment = Math.ceil(target / speed);

                if (current < target) {

                    counter.innerText = current + increment;

                    setTimeout(updateCounter, 30);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

        counterStarted = true;

    }

}

window.addEventListener("scroll", startCounter);
window.addEventListener("load", startCounter);

/* ===============================
   PROJECT FILTER
=============================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const show =
                filter === "all" ||
                card.dataset.category === filter;

            if (show) {

                card.style.display = "block";

                requestAnimationFrame(() => {
                    card.classList.remove("hide");
                    card.classList.add("show");
                });

            } else {

                card.classList.remove("show");
                card.classList.add("hide");

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);

            }

        });

    });

});


