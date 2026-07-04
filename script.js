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

if(letterIndex == currentWord.length){

setTimeout(erase,1800);

}else{

setTimeout(type,90);

}

}

function erase(){

currentLetters = currentWord.slice(0,--letterIndex);

typingText.textContent = currentLetters;

if(letterIndex==0){

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

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

