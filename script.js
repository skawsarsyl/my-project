const words = [

"SEO Specialist",

"Technical SEO",

"Keyword Research",

"On-page SEO",

"HTML Learner",

"CSS Learner",

"Git & GitHub"

];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing-text");

function type(){

currentWord = words[wordIndex];

if(isDeleting){

typing.textContent = currentWord.substring(0,letterIndex--);

}else{

typing.textContent = currentWord.substring(0,letterIndex++);

}

let speed = isDeleting ? 60 : 120;

if(!isDeleting && letterIndex === currentWord.length){

speed = 1200;

isDeleting = true;

}

else if(isDeleting && letterIndex === 0){

isDeleting = false;

wordIndex++;

if(wordIndex===words.length){

wordIndex=0;

}

}

setTimeout(type,speed);

}

type();