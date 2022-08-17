//Global Variblies

//header
const header = document.querySelector("header");
const navLinks = document.querySelector("header .links");

//Contact Form
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submitBtn");

//RegEx
const nameRegEx = /^[A-Z][-a-zA-Z]+$/;
const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//Alerts
const nameAlert = document.querySelector("#nameAlert");
const emailAlert = document.querySelector("#emailAlert");
const messageAlert = document.querySelector("#messageAlert");

let lastScroll = window.scrollY;

//Program Events

//Form Events 
nameInput.addEventListener("input", nameValidation);

emailInput.addEventListener("input", emailValidation);

messageInput.addEventListener("input", messageValidation);

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(isEmpty) {
        submitBtn.setAttribute("disabled", "true");
    }else{
        submitBtn.setAttribute("disabled", "false");
    }
});

//Header Events 
window.addEventListener("scroll",function(){
    if(lastScroll < window.scrollY){
        header.classList.add("bg-dark");
        header.classList.remove("bg-transparent");
    }else {
        header.classList.remove("bg-dark");
        header.classList.add("bg-transparent");
    }
});


$(".nav-link").click(function(){
    let currentHref = $(this).attr("href");
    let currentOffSet = $(currentHref).offset().top;
    $(window).animate({scrollTop: currentOffSet},2000);
})



//Program Functions
function isEmpty(){
    if (nameInput.value == "" && emailInput.value == "" && messageInput.value == ""){
        return false; 
    } else {
        return true;
    }
}

function nameValidation(e) {
    nameTxt = e.target.value;
    if(nameRegEx.test(nameTxt)){
        nameAlert.classList.add("d-none");
        nameAlert.classList.remove("d-block");
        return true;
    }else {
        nameAlert.classList.add("d-block");
        nameAlert.classList.remove("d-none");
        return false;
    }
}

function emailValidation(e) {
    emailTxt = e.target.value;
    if(emailRegEx.test(emailTxt)){
        emailAlert.classList.add("d-none");
        emailAlert.classList.remove("d-block");
        return true;
    }else {
        emailAlert.classList.add("d-block");
        emailAlert.classList.remove("d-none");
        return false;
    }
}

function messageValidation(e) {
    let messageCount = e.target.value;
    let messageLength = messageCount.length;
    let maxValue = 150;
    let typedChar = maxValue - messageLength;
    if (typedChar == 0){
        messageInput.setAttribute("readonly","true");
        messageAlert.classList.add("d-block");
        messageAlert.classList.remove("d-none");
        messageAlert.innerHTML = `you reached available character for Message`;
    }else {
        messageAlert.classList.add("d-none");
        messageAlert.classList.remove("d-block");
    }
}

//Fire Function Of Typed.js
var typed = new Typed('.element', {
    strings: ["I'm a Simone Olivia.", "I'm a Freelancer.", "I'm a Photographer." ,"I'm a Designer."],
    typeSpeed: 150,
    loop: true,
    backSpeed: 80,
    backDelay: 70,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
});

//Fire Function Of Owl.js
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 2,
        loop: true,
    });
});