/* =========================================================
   SMAN 5 BOGOR
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNavigation = document.getElementById("mainNavigation");

if (menuToggle && mainNavigation) {

    menuToggle.addEventListener("click", () => {

        mainNavigation.classList.toggle("open");

        const isOpen =
            mainNavigation.classList.contains("open");

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    // Tutup menu ketika link diklik
    const navigationLinks =
        mainNavigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNavigation.classList.remove("open");

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================================
   TICKER
   =========================================================
   
   Kita hanya menulis teks ticker SATU KALI di HTML.
   JavaScript akan membuat salinannya agar animasi
   dapat looping tanpa terlihat putus.
   ========================================================= */

const tickerTrack =
    document.querySelector(".ticker-track");

const tickerContent =
    document.querySelector(".ticker-content");

if (tickerTrack && tickerContent) {

    // Hindari membuat clone berkali-kali
    if (!tickerTrack.querySelector(".ticker-content.clone")) {

        const tickerClone =
            tickerContent.cloneNode(true);

        tickerClone.classList.add("clone");

        tickerTrack.appendChild(tickerClone);

    }

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const animatedElements = document.querySelectorAll(
    ".quick-card, " +
    ".principal-card, " +
    ".about-grid, " +
    ".achievement-card, " +
    ".news-card, " +
    ".video-wrapper, " +
    ".service-card, " +
    ".cta-content"
);

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach((element, index) => {

        // Sedikit delay antar card
        if (
            element.classList.contains("quick-card") ||
            element.classList.contains("achievement-card") ||
            element.classList.contains("news-card") ||
            element.classList.contains("service-card")
        ) {

            element.style.transitionDelay =
                `${(index % 4) * 0.08}s`;

        }

        observer.observe(element);

    });

} else {

    // Fallback kalau browser tidak mendukung
    animatedElements.forEach((element) => {

        element.classList.add("show");

    });

}


/* =========================================================
   SCROLL TO TOP
   ========================================================= */

const scrollTopButton =
    document.getElementById("scrollTop");

if (scrollTopButton) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                scrollTopButton.classList.add("show");

            } else {

                scrollTopButton.classList.remove("show");

            }

        },
        {
            passive: true
        }
    );


    scrollTopButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   CHATBOT BUTTON
   ========================================================= */

const chatbotButton =
    document.getElementById("chatbotButton");

if (chatbotButton) {

    chatbotButton.addEventListener(
        "click",
        () => {

            /*
             * Untuk sekarang chatbot belum dibuat.
             *
             * Nanti ketika folder chatbot sudah siap,
             * bagian ini bisa diarahkan ke:
             *
             * window.location.href =
             * "chatbot/index.html";
             */

            const chatbotPage =
                "chatbot/index.html";

            /*
             * Cek apakah halaman chatbot tersedia.
             * Kalau belum ada, jangan langsung mengarahkan
             * pengguna ke halaman 404.
             */

            fetch(chatbotPage, {
                method: "HEAD"
            })
            .then((response) => {

                if (response.ok) {

                    window.location.href =
                        chatbotPage;

                } else {

                    showChatbotNotice();

                }

            })
            .catch(() => {

                showChatbotNotice();

            });

        }
    );

}


/* =========================================================
   CHATBOT NOTICE
   ========================================================= */

function showChatbotNotice() {

    const existingNotice =
        document.querySelector(".chatbot-notice");

    if (existingNotice) {
        return;
    }


    const notice =
        document.createElement("div");

    notice.className =
        "chatbot-notice";


    notice.innerHTML = `
        <strong>🤖 Chatbot SMAN 5</strong>
        <p>Fitur chatbot sedang dalam tahap pengembangan.</p>
        <button type="button">Tutup</button>
    `;


    /*
     * Styling langsung supaya fitur ini tetap
     * bekerja walaupun belum ada CSS khusus.
     */

    Object.assign(
        notice.style,
        {
            position: "fixed",
            right: "25px",
            bottom: "85px",
            zIndex: "2000",
            width: "280px",
            padding: "18px",
            borderRadius: "16px",
            background: "#ffffff",
            color: "#172033",
            boxShadow:
                "0 15px 40px rgba(15,23,42,.18)",
            border:
                "1px solid #e2e8f0"
        }
    );


    const paragraph =
        notice.querySelector("p");

    Object.assign(
        paragraph.style,
        {
            margin: "8px 0 12px",
            color: "#64748b",
            fontSize: "13px"
        }
    );


    const closeButton =
        notice.querySelector("button");

    Object.assign(
        closeButton.style,
        {
            border: "none",
            background: "#16a34a",
            color: "#ffffff",
            padding: "8px 14px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "700"
        }
    );


    closeButton.addEventListener(
        "click",
        () => {

            notice.remove();

        }
    );


    document.body.appendChild(notice);


    /*
     * Hilangkan otomatis setelah beberapa detik.
     */

    setTimeout(() => {

        if (notice.isConnected) {
            notice.remove();
        }

    }, 5000);

}


/* =========================================================
   IMAGE ERROR HANDLING
   =========================================================
   
   Kalau gambar tidak ditemukan, kita tambahkan
   class placeholder supaya layout tetap rapi.
   ========================================================= */

const images =
    document.querySelectorAll("img");

images.forEach((image) => {

    image.addEventListener(
        "error",
        () => {

            const parent =
                image.parentElement;

            if (!parent) {
                return;
            }

            parent.classList.add(
                "image-placeholder"
            );

            image.style.display =
                "none";

        }
    );

});


/* =========================================================
   CURRENT PAGE NAVIGATION
   ========================================================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


if (currentPage) {

    const navLinks =
        document.querySelectorAll(
            ".main-navigation a"
        );


    navLinks.forEach((link) => {

        const linkPage =
            link.getAttribute("href")
                ?.split("/")
                .pop()
                .toLowerCase();


        /*
         * Jangan mengubah active secara otomatis
         * untuk halaman index karena HTML sudah
         * menentukan active.
         */

        if (
            currentPage !== "index.html" &&
            currentPage !== ""
        ) {

            link.classList.remove("active");

            if (
                linkPage === currentPage
            ) {

                link.classList.add("active");

            }

        }

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            !mainNavigation ||
            !menuToggle
        ) {
            return;
        }


        const clickedInsideMenu =
            mainNavigation.contains(
                event.target
            );

        const clickedToggle =
            menuToggle.contains(
                event.target
            );


        if (
            !clickedInsideMenu &&
            !clickedToggle &&
            mainNavigation.classList.contains("open")
        ) {

            mainNavigation.classList.remove(
                "open"
            );

            menuToggle.textContent = "☰";

        }

    }
);


/* =========================================================
   YEAR AUTO UPDATE
   ========================================================= */

const footerYear =
    document.querySelector(
        ".footer-bottom p"
    );

if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.innerHTML =
        footerYear.innerHTML.replace(
            /©\s*\d{4}/,
            `© ${currentYear}`
        );

}


/* =========================================================
   PAGE READY
   ========================================================= */

document.documentElement.classList.add(
    "js-ready"
);

console.log(
    "SMAN 5 Bogor website loaded successfully."
);