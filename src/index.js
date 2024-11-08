import "./styles.css";
import renderHome from "./home";
import renderAbout from "./about";
import renderGallery from "./gallery";
import renderMenu from "./menu";
import renderContact from "./contact";

renderHome();

const homeButton = document.querySelector("#home-button");
const aboutButton = document.querySelector("#aboutus-button");
const menuButton = document.querySelector("#menu-button")
const galleryButton = document.querySelector("#gallery-button");
const contactButton = document.querySelector("#contact-button");

const footerHomeButton = document.querySelector("#home-button-footer");
const footerAboutButton = document.querySelector("#aboutus-button-footer");
const footerMenuButton = document.querySelector("#menu-button-footer");
const footerGalleryButton = document.querySelector("#gallery-button-footer");
const footerContactButton = document.querySelector("#contact-button-footer");

export const scrollToTop = () => { 
    window.scrollTo({ top: 0, behavior: "instant" });
};

homeButton.addEventListener("click", () => { renderHome(); scrollToTop(); }); 

aboutButton.addEventListener("click", () => { renderAbout(); scrollToTop(); }); 

menuButton.addEventListener("click", () => { renderMenu(); scrollToTop(); });

galleryButton.addEventListener("click", () => { renderGallery(); scrollToTop(); }); 

contactButton.addEventListener("click", () => { renderContact(); scrollToTop(); }); 


footerHomeButton.addEventListener("click", () => { renderHome(); scrollToTop(); }); 

footerAboutButton.addEventListener("click", () => { renderAbout(); scrollToTop(); }); 

footerMenuButton.addEventListener("click", () => { renderMenu(); scrollToTop(); });

footerGalleryButton.addEventListener("click", () => { renderGallery(); scrollToTop();});

footerContactButton.addEventListener("click", () => { renderContact(); scrollToTop(); });