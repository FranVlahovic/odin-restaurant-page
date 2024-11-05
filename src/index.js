import "./styles.css";
import renderHome from "./home";
import renderAbout from "./about";
import renderGallery from "./gallery";

renderHome();

const homeButton = document.querySelector("#home-button");
const aboutButton = document.querySelector("#aboutus-button");

const galleryButton = document.querySelector("#gallery-button");

const footerHomeButton = document.querySelector("#home-button-footer");
const footerAboutButton = document.querySelector("#aboutus-button-footer");

const footerGalleryButton = document.querySelector("#gallery-button-footer");

const scrollToTop = () => { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
};

homeButton.addEventListener("click", () => { renderHome(); scrollToTop(); }); 
aboutButton.addEventListener("click", () => { renderAbout(); scrollToTop(); }); 
galleryButton.addEventListener("click", () => { renderGallery(); scrollToTop(); }); 
footerHomeButton.addEventListener("click", () => { renderHome(); scrollToTop(); }); 
footerAboutButton.addEventListener("click", () => { renderAbout(); scrollToTop(); }); 
footerGalleryButton.addEventListener("click", () => { renderGallery(); scrollToTop();});