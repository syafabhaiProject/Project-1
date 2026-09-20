/* =====================================
   MOBILE MENU
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


/* =====================================
   CLOSE MENU AFTER CLICK
===================================== */

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});


/* =====================================
   CURRENT YEAR
===================================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =====================================
   NAVBAR SHADOW WHEN SCROLLING
===================================== */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 5px 20px rgba(15, 23, 42, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =====================================
   SIMPLE IMAGE FALLBACK
===================================== */

const images = document.querySelectorAll("img");


images.forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.display = "none";

        if (image.parentElement) {

            image.parentElement.classList.add(
                "image-missing"
            );

        }

    });

});