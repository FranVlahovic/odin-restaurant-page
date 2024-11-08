import { createContentHeader } from "./about";
import menuHeaderImage from './img/menu-header.jpg';
import carbonara from './img/home-carbonara.jpg';
import cacioepepe from './img/home-cacioepepe.jpeg';
import bolognese from './img/home-bolognese.jpg';
import arrabbiata from './img/arrabbiata.jpg';
import lasagna from './img/lasagna.jpg';
import norma from './img/norma.jpg';
import vongole from './img/vongole.jpg';
import orecchiette from './img/orecchiette.jpg';
import pesto from './img/pesto.jpg';
import truffle from './img/tartufo.jpg';

const renderMenu = () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = '';

    const createMenu = () => {

        const menuCards = document.createElement("div");
        menuCards.classList.add("menu-cards");
    
        const cards = [
            {   
                src: carbonara,
                alt: "Pasta Carbonara",
                name: "CARBONARA",
                price: "€12",
                text: "Pasta, guanciale, eggs, Pecorino Romano cheese, black pepper."
            },
            {   
                src: cacioepepe,
                alt: "Pasta Cacio e Pepe",
                name: "CACIO E PEPE",
                price: "€10",
                text: "Pasta, Pecorino Romano cheese, black pepper."
            },
            {   
                src: bolognese,
                alt: "Ragu Bolognese",
                name: "BOLOGNESE",
                price: "€15",
                text: "Pasta, ground beef and pork, onions, carrots, celery, tomato paste, red wine, milk, olive oil, salt, pepper."
            },
            {   
                src: arrabbiata,
                alt: "Pasta Arrabbiata",
                name: "ARRABBIATA",
                price: "€10",
                text: "Pasta, garlic, olive oil, red chili peppers, tomatoes, parsley."
            },
            {   
                src: lasagna,
                alt: "Lasagna",
                name: "LASAGNA",
                price: "€15",
                text: "Pasta, ground beef, tomatoes, ricotta cheese, mozzarella cheese, Parmesan cheese, béchamel sauce, onions, garlic, olive oil, salt, pepper."
            },
            {   
                src: norma,
                alt: "Pasta Norma",
                name: "NORMA",
                price: "€12",
                text: "Pasta, eggplant, tomatoes, ricotta salata cheese, garlic, basil, olive oil, salt, pepper."
            },
            {   
                src: vongole,
                alt: "Pasta Vongole",
                name: "VONGOLE",
                price: "€14",
                text: "Pasta, fresh clams, garlic, olive oil, white wine, parsley, lemon."
            },
            {   
                src: orecchiette,
                alt: "Pasta Orecchiette",
                name: "ORECCHIETTE",
                price: "€11",
                text: "Orecchiette pasta, turnip greens, garlic, anchovies, red chili flakes, olive oil, Pecorino Romano cheese."
            },
            {   
                src: pesto,
                alt: "Pasta Pesto",
                name: "PESTO",
                price: "€13",
                text: "Pasta, fresh basil, pine nuts, garlic, Parmesan cheese, Pecorino Romano cheese, olive oil, salt."
            },
            {   
                src: truffle,
                alt: "Pasta Truffle",
                name: "TRUFFLE",
                price: "€20",
                text: "Pasta, truffle oil, fresh truffles, Parmesan cheese, garlic, olive oil, salt, pepper."
            },



            

    
        ];
    
        cards.forEach(meal => {
            const card = document.createElement("div");
            card.classList.add("menu-card");
    
            const cardImage = document.createElement("img");
            cardImage.src = meal.src;
            cardImage.alt = meal.alt;
            
            const cardInfo = document.createElement("div");
            cardInfo.classList.add("card-info");

            const cardName = document.createElement("h3");
            cardName.textContent = meal.name;
    
            const cardPrice = document.createElement("span");
            cardPrice.textContent = meal.price;
    
            const cardText = document.createElement("p");
            cardText.textContent = meal.text;
    
            cardInfo.appendChild(cardName);
            cardInfo.appendChild(cardPrice);
            cardInfo.appendChild(cardText);
            card.appendChild(cardImage);
            card.appendChild(cardInfo);
            menuCards.appendChild(card);

        });

        return menuCards;
    
    };

    const menuHeader = createContentHeader(menuHeaderImage, "Vespa", "MENU");
    const menuMain = createMenu();

    contentContainer.appendChild(menuHeader);
    contentContainer.appendChild(menuMain);
};

export default renderMenu;
