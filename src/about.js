import restaurantTerrace from './img/restaurant_terrace.jpg';
import restaurantOldEating from './img/history_eating.jpg';
import restaurantOldGroup from './img/history_group.jpg';
import freshImageOne from './img/fresh1';
import freshImageTwo from './img/fresh2';
import freshImageThree from './img/fresh3';
import freshImageFour from './img/fresh4';
import freshImageFive from './img/fresh5';
import freshImageSix from './img/fresh6';


const createContentHeader = (imgSrc, imgAlt, headingText) => {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("content-header-container");
    
    const mainImage = document.createElement("img");
    mainImage.classList.add("main-content-img");
    mainImage.src = imgSrc;
    mainImage.alt = imgAlt;

    const mainHeading = document.createElement("h1");
    mainHeading.textContent = headingText;

    headerContainer.appendChild(mainImage);
    headerContainer.appendChild(mainHeading)

    return headerContainer;

};

const renderAbout = () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = '';

    //About History
    const createAboutHistory = () => {
        const historyContainer = document.createElement("div");
        historyContainer.classList.add("history-container");

        const ourHistory = document.createElement("div");
        ourHistory.classList.add("our-history");

        const ourHistoryHeading = document.createElement("h1");
        ourHistoryHeading.textContent = "Our History";

        const ourHistoryParagraphOne = document.createElement("p");
        ourHistoryParagraphOne.textContent = "Dieci Piatti was founded with a deep respect for Italian culinary traditions and a passion for creating a warm, welcoming atmosphere. Our journey began as a small family venture, inspired by a love for sharing authentic Italian flavors with our community. Over the years, our commitment to quality ingredients and traditional recipes has remained strong, and each dish we serve reflects our dedication to preserving the essence of Italian cuisine.";

        const ourHistoryImageOne  = document.createElement("img");
        ourHistoryImageOne.src = restaurantOldGroup;
        ourHistoryImageOne.alt = "Restaurant Founders old photo";

        const ourHistoryImageTwo  = document.createElement("img");
        ourHistoryImageTwo.src = restaurantOldEating;
        ourHistoryImageTwo.alt = "Eating in front of the house, old photo";

        const ourHistoryParagraphTwo = document.createElement("p");
        ourHistoryParagraphTwo.textContent = "From our beginnings, Dieci Piatti has grown into a beloved establishment, cherished for our fresh, homemade pasta and carefully curated Italian dishes. Our team brings together culinary expertise with a sense of family, crafting each plate with pride and authenticity. Today, Dieci Piatti stands as a bridge between past and present, offering an experience that captures both the timeless flavors of Italy and the comfort of a home-cooked meal.";

        ourHistory.appendChild(ourHistoryHeading);
        ourHistory.appendChild(ourHistoryParagraphOne)
        historyContainer.appendChild(ourHistory);
        historyContainer.appendChild(ourHistoryImageOne);
        historyContainer.appendChild(ourHistoryParagraphTwo);
        historyContainer.appendChild(ourHistoryImageTwo);

        return historyContainer;
    };
    //About Fresh Products
    const createAboutFresh = () => {
        const freshContainer = document.createElement("div");
        freshContainer.classList.add("fresh-container");

        const freshProducts = document.createElement("div");
        freshProducts.classList.add("fresh-products");

        const freshProductsHeading = document.createElement("h1");
        freshProductsHeading.textContent = "Daily Fresh Products";

        const freshProductsParagraph = document.createElement("p");
        freshProductsParagraph.textContent = "At Dieci Piatti, we believe that exceptional dishes begin with the finest ingredients. Every day, our team carefully selects fresh, locally-sourced produce, artisanal cheeses, and the highest quality meats to bring the authentic taste of Italy to your table. From our hand-rolled pasta to our house-made sauces, we are committed to using only the freshest ingredients to create meals that are as wholesome as they are delicious. This dedication to quality ensures that every bite at Dieci Piatti is a celebration of Italian culinary tradition."

        const freshProductsGallery = document.createElement("div");
        freshProductsGallery.classList.add("fresh-products-gallery");

        const images = [
            {
                src:freshImageOne
                alt: 
            },
            {
                src:freshImageTwo
                alt: 
            },
            {
                src:freshImageThree
                alt: 
            },
            {
                src:freshImageFour
                alt: 
            },
            {
                src:freshImageFive
                alt: 
            },
            {
                src:freshImageSix
                alt: 
            },
        ];

        images.forEach(image => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.alt;
            freshProductsGallery.appendChild(img);
        });

        return freshContainer;
    };
    //About Chef
    const createAboutChef = () => {

    };
    //About Team
    const createAboutTeam = () => {

    };

    const aboutHeader = createContentHeader(restaurantTerrace, "Restaurant Terrace", "ABOUT US");
    const aboutHistory = createAboutHistory();
    const aboutFresh = createAboutFresh();

    contentContainer.appendChild(aboutHeader);
    contentContainer.appendChild(aboutHistory);
    contentContainer.appendChild(aboutFresh);
};

export default renderAbout;
export { createContentHeader };