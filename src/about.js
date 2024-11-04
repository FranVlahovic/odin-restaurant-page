import restaurantTerrace from './img/restaurant_terrace.jpg';
import restaurantOldEating from './img/history_eating.jpg';
import restaurantOldGroup from './img/history_group.jpg';
import freshImageOne from './img/fresh1.jpg';
import freshImageTwo from './img/fresh2.jpg';
import freshImageThree from './img/fresh3.jpg';
import freshImageFour from './img/fresh4.jpg';
import freshImageFive from './img/fresh5.jpg';
import freshImageSix from './img/fresh6.jpg';


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
        freshProductsParagraph.textContent = "At Dieci Piatti, we believe that exceptional dishes begin with the finest ingredients. Every day, our team carefully selects fresh, locally-sourced produce, artisanal cheeses, and the highest quality meats to bring the authentic taste of Italy to your table. From our hand-rolled pasta to our house-made sauces, we are committed to using only the freshest ingredients to create meals that are as wholesome as they are delicious. This dedication to quality ensures that every bite is a celebration of Italian culinary tradition."

        const freshProductsGallery = document.createElement("div");
        freshProductsGallery.classList.add("fresh-products-gallery");

        const images = [
            {
                src:freshImageOne,
                alt: "Tomato Harvest"
            },
            {
                src:freshImageTwo,
                alt: "Wheat farm"
            },
            {
                src:freshImageThree,
                alt: "Grape Collecting"
            },
            {
                src:freshImageFour,
                alt: "Fisherman with his fishing net"
            },
            {
                src:freshImageFive,
                alt: "Cows"
            },
            {
                src:freshImageSix,
                alt: "Mix of fresh vegetables"
            },
        ];

        images.forEach(image => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.alt;
            freshProductsGallery.appendChild(img);
        });

        freshProducts.appendChild(freshProductsHeading);
        freshProducts.appendChild(freshProductsParagraph);
        freshContainer.appendChild(freshProducts);
        freshContainer.appendChild(freshProductsGallery);

        return freshContainer;
    };

    const createAboutTeam = () => {
        const teamContainer = document.createElement("div");
        teamContainer.classList.add("team-container");

        const teamHeading = document.createElement("h1");
        teamHeading.textContent = "Our Team";

        const teamImage = document.createElement("img");
        teamImage.src = 
        teamImage.alt = "Restaurant Staff"

        const teamParagraph = document.createElement("p");
        teamParagraph.textContent = "Our team is the heart and soul of everything we do. Each member brings a unique blend of passion, skill, and dedication, ensuring that every dish we serve is a true reflection of Italian culinary tradition. From our talented chefs who craft exquisite pasta dishes, to our attentive service staff who create a warm and welcoming atmosphere, every individual plays a crucial role in our success. We believe that the strength of our team lies in our shared commitment to excellence, and it's this collective effort that makes dining at Dieci Piatti an unforgettable experience.";

        const chefContainer = document.createElement("div");
        chefContainer.classList.add("chef-container");

        const chefSubContainer = document.createElement("div");
        chefSubContainer.classList.add("chef-sub-container");

        const chefHeading = document.createElement("h1");
        chefHeading.textContent = "Chef Marco Rossi";

        const chefParagraph = document.createElement("p");
        chefParagraph.textContent = "Marco Rossi, our esteemed chef at Dieci Piatti, hails from the heart of Tuscany. Growing up in Montepulciano, he was inspired by his grandmother's traditional recipes and the rich culinary heritage of Italy. With over 20 years of experience in renowned kitchens, Chef Marco brings a passion for fresh, locally-sourced ingredients and innovative takes on classic dishes. His dedication to authenticity and quality transforms simple ingredients into unforgettable meals, making every dining experience at Dieci Piatti a celebration of Italian cuisine.";

        const chefImage = document.createElement("img");
        chefImage.src = 
        chefImage.alt = "Chef Image";

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