/* ----- Navbar toggle ----- */

const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");

let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => {
    if(isNavbarExpanded){
        navbarToggle.setAttribute("aria-expanded", !isNavbarExpanded);
    }
    e.stopPropagation()
});
navbarMenu.addEventListener("click", toggleNavbarVisibility);

