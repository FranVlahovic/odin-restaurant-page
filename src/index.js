import "./styles.css";
import renderHome from "./home";
import renderAbout from "./about";

renderHome();

const homeButton = document.querySelector("#home-button");
const aboutButton = document.querySelector("#aboutus-button");

const footerHomeButton = document.querySelector("#home-button-footer");
const footerAboutButton = document.querySelector("#aboutus-button-footer");

homeButton.addEventListener("click", renderHome);
aboutButton.addEventListener("click", renderAbout);

footerHomeButton.addEventListener("click", renderHome);
footerAboutButton.addEventListener("click", renderAbout);