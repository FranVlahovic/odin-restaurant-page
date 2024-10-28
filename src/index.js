import "./styles.css";
import renderHome from "./home";

renderHome();

const homeButton = document.querySelector("#home-button");

homeButton.addEventListener("click", renderHome());