const renderHome = (() => {

    const contentContainer = document.querySelector("#content");

    const mainImage = document.createElement("img");
    mainImage.classList.add("home-restaurant");
    mainImage.src = "img/restaurant-main.jpg";
    mainImage.alt = "Pasta on fork";

    function createStory(){
        const homeStory = document.createElement("div");
        homeStory.classList.add("home-story");
    
        const storyContainer = document.createElement("div");
        storyContainer.classList.add("story-container");
    
        const storyHeading = document.createElement("h1");
        storyHeading.textContent = "OUR STORY";
    
        const storyParagraph = document.createElement("p");
        storyParagraph.textContent = "At Dieci Piatti, we bring the heart of Italy to every plate. Our journey began with a passion for authentic flavors and a love for sharing great meals with friends and family. From our fresh pasta to our slow-cooked sauces, each dish is crafted to celebrate tradition and taste.";
        
        const storyButton = document.createElement("button");
        storyButton.classList.add("learn-more-button");
        storyButton.textContent = "LEARN MORE";

        storyContainer.appendChild(storyHeading);
        storyContainer.appendChild(storyParagraph);
        storyContainer.appendChild(storyButton);

        homeStory.appendChild(storyContainer);

        return homeStory;
    }

    
})();