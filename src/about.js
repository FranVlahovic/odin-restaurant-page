import restaurantTerrace from './img/restaurant_terrace.jpg';

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
        ourHistoryParagraphOne.textContent = ".";

        const ourHistoryImageOne  = document.createElement("img");
        ourHistoryImageOne.src = ".";
        ourHistoryImageOne.alt = ".";

        const ourHistoryImageTwo  = document.createElement("img");
        ourHistoryImageTwo.src = ".";
        ourHistoryImageTwo.alt = ".";

        const ourHistoryParagraphTwo = document.createElement("p");
        ourHistoryParagraphTwo.textContent = ".";

        ourHistory.appendChild(ourHistoryHeading);
        ourHistory.appendChild(ourHistoryParagraphOne)
        historyContainer.appendChild(ourHistory);
        historyContainer.appendChild(ourHistoryImageOne);
        historyContainer.appendChild(ourHistoryImageTwo);
        historyContainer.appendChild(ourHistoryParagraphTwo);

        return historyContainer;
    };
    //About Fresh Products
    const createAboutFresh = () => {

    };
    //About Chef
    const createAboutChef = () => {

    };
    //About Team
    const createAboutTeam = () => {

    };

    const aboutHeader = createContentHeader(restaurantTerrace, "Restaurant Terrace", "ABOUT US");
    const aboutHistory = createAboutHistory();

    contentContainer.appendChild(aboutHeader);
    contentContainer.appendChild(aboutHistory);
};

export default renderAbout;
export { createContentHeader };