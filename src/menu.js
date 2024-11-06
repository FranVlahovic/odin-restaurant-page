import { createContentHeader } from "./about";
import menuHeaderImage from './img/menu-header.jpg';
import carbonara from './img/home-carbonara.jpg';
import cacioepepe from './img/home-cacioepepe.jpeg';
import bolognese from './img/home-bolognese.jpg';
import arrabbiata from './img/arrabbiata.jpg';

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
