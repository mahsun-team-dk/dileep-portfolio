// ======================================
// 1. SELECT HTML ELEMENTS
// ======================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const year = document.getElementById("year");


// ======================================
// 2. MOBILE MENU
// ======================================

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("show");
        menuBtn.setAttribute("aria-expanded", isOpen);
    });

    // Close menu after clicking a link
    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("show");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });

}


// ======================================
// 3. AUTOMATIC COPYRIGHT YEAR
// ======================================

if (year) {
    year.textContent = new Date().getFullYear();
}


// ======================================
// 4. HIGHLIGHT ACTIVE NAV LINK ON SCROLL
// ======================================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll("#navMenu a");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                navLinks.forEach(function (link) {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + entry.target.id
                    );
                });
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(function (section) {
        observer.observe(section);
    });

}
