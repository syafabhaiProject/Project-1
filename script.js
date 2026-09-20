/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("show");

            const isOpen =
                navMenu.classList.contains("show");

            menuToggle.textContent =
                isOpen ? "✕" : "☰";

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Tutup menu"
                    : "Buka menu"
            );

        }
    );


    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove(
                        "show"
                    );

                    menuToggle.textContent =
                        "☰";

                    menuToggle.setAttribute(
                        "aria-label",
                        "Buka menu"
                    );

                }
            );

        }
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =====================================================
   NAVBAR SHADOW
===================================================== */

const navbar =
    document.querySelector(".navbar");


function updateNavbar() {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 8px 25px rgba(15, 23, 42, 0.08)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);

updateNavbar();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".quick-card, " +
        ".principal-photo, " +
        ".principal-info, " +
        ".gallery-card, " +
        ".stat-item, " +
        ".video-container, " +
        ".achievement-card, " +
        ".news-card, " +
        ".service-card"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "reveal-show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

            observer.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal-show"
            );

        }
    );

}


/* =====================================================
   IMAGE FALLBACK
===================================================== */

const images =
    document.querySelectorAll("img");


images.forEach(
    function (image) {

        image.addEventListener(
            "error",
            function () {

                image.style.display =
                    "none";

                const parent =
                    image.parentElement;


                if (parent) {

                    parent.classList.add(
                        "image-missing"
                    );

                }

            }
        );

    }
);


/* =====================================================
   SMOOTH SCROLL
===================================================== */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior:
                            "smooth",
                        block:
                            "start"
                    });

                }

            }
        );

    }
);


/* =====================================================
   VIDEO PLACEHOLDER CHECK
===================================================== */

const videoFrame =
    document.querySelector(
        ".video-container iframe"
    );


if (videoFrame) {

    const videoURL =
        videoFrame.getAttribute("src");


    if (
        videoURL &&
        videoURL.includes("VIDEO_ID")
    ) {

        console.info(
            "Video YouTube belum diatur. " +
            "Ganti VIDEO_ID pada index.html " +
            "dengan ID video YouTube."
        );

    }

}