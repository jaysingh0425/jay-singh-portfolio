// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ================= TYPING EFFECT =================

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "BCA Student",
    "Programmer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    let currentWord = words[wordIndex];

    if (deleting === false) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1200);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 70 : 120
    );

}

typingEffect();


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your message has been received."
    );

    contactForm.reset();

});


// ================= NAVBAR AUTO CLOSE =================

const links =
    document.querySelectorAll(".nav-links a");


links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// ================= DARK / LIGHT MODE =================

const themeBtn =
    document.getElementById("theme-btn");


themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});