import mainImageSrc from './img/restaurant-main.jpg';
import bologneseImage from './img/home-bolognese.jpg';
import cacioepepeImage from './img/home-cacioepepe.jpeg';
import carbonaraImage from './img/home-carbonara.jpg';
import reservationImage from './img/home-reservation.jpg';

const renderHome = () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = '';

    const mainImage = document.createElement("img");
    mainImage.classList.add("home-restaurant");
    mainImage.src = mainImageSrc;
    mainImage.alt = "Pasta on fork";

    //Story Section
    const createStory = () => {
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
    //Featured Section
    const createFeatured = () => {
        const homeFeatured = document.createElement("div");
        homeFeatured.classList.add("home-featured");

        const featuredHeading = document.createElement("h1");
        featuredHeading.textContent = "AUTHENTIC COUSINE";

        const featuredContainer = document.createElement("div");
        featuredContainer.classList.add("featured-container");

        const images = [
            {
                src: bologneseImage,
                alt: "Pasta Bolognese"
            },
            {
                src: cacioepepeImage,
                alt: "Pasta Cacio e Pepe"
            },
            {
                src: carbonaraImage,
                alt: "Pasta Carbonara"
            }
        ];

        images.forEach(image => {
            const img = document.createElement("img");
            img.src = image.src;
            img.alt = image.alt;
            featuredContainer.appendChild(img);
        });

        const featuredButton = document.createElement("button");
        featuredButton.classList.add("view-all");
        featuredButton.textContent = "VIEW ALL";

        homeFeatured.appendChild(featuredHeading);
        homeFeatured.appendChild(featuredContainer);
        homeFeatured.appendChild(featuredButton);

        return homeFeatured;

    }
    //Reviews Section
    const createReviews = () => {
        const homeReviews = document.createElement("div");
        homeReviews.classList.add("home-reviews");

        const reviewsHeading = document.createElement("h1");
        reviewsHeading.textContent = "CUSTOMER TESTIMONIALS";

        const customerCards = document.createElement("div");
        customerCards.classList.add("customer-cards");

        const cards = [
            {
                name: "Hailey Bieber",
                date: "December 25, 2021",
                text: "Dieci Piatti offers an experience like no other! The flavors are authentic, the atmosphere is cozy, and I felt like I was in Italy. Absolutely worth every bite!"
            },
            {
                name: "Massimo Bottura",
                date: "January 11, 2022",
                text: "As a chef, I'm always looking for genuine Italian cuisine, and Dieci Piatti delivers! Every dish was a masterpiece, made with passion and precision. Highly recommend!"
            },
            {
                name: "Jeremy Clarkson",
                date: "August 24, 2024",
                text: "I don't usually rave about food, but Dieci Piatti has changed that! Incredible pasta and the best carbonara I’ve had outside of Italy. A must-visit for any foodie!"
            }
        ];

        cards.forEach(person => {
            const card = document.createElement("div");
            card.classList.add("customer-card");

            const cardName = document.createElement("h3");
            cardName.textContent = person.name;

            const cardDate = document.createElement("span");
            cardDate.textContent = person.date;

            const cardReview = document.createElement("p");
            cardReview.textContent = person.text;

            card.appendChild(cardName);
            card.appendChild(cardDate);
            card.appendChild(cardReview);
            customerCards.appendChild(card);
        });

        homeReviews.appendChild(reviewsHeading);
        homeReviews.appendChild(customerCards);
        return homeReviews;
    }
    //Reservation Section

    const createReservations = () => {
        const homeReservation = document.createElement("div");
        homeReservation.classList.add("home-reservation");

        const reservationsImage = document.createElement("img");
        reservationsImage.classList.add("home-reservation-img");
        reservationsImage.src = reservationImage;
        reservationsImage.alt = "Reserved Table";

        const reservationContainer = document.createElement("div");
        reservationContainer.classList.add("reservation-container");

        const reservationHeading = document.createElement("h1");
        reservationHeading.textContent = "RESERVATIONS";

        const reservationParagraph = document.createElement("p");
        reservationParagraph.textContent = "Experience the taste of Italy at Dieci Piatti. Reserve your table now and dive into our exquisite pasta dishes made with love and tradition. From our homemade sauces to our fresh, locally-sourced ingredients, every bite is a testament to our dedication to authentic Italian cuisine. Don't miss out on the opportunity to savor the flavors that have been perfected over generations.";

        const reservationButton = document.createElement("button");
        reservationButton.classList.add("home-reservation-button");
        reservationButton.textContent = "MAKE RESERVATION";

        reservationContainer.appendChild(reservationHeading);
        reservationContainer.appendChild(reservationParagraph);
        reservationContainer.appendChild(reservationButton);
        homeReservation.appendChild(reservationsImage);
        homeReservation.appendChild(reservationContainer);

        return homeReservation;
    }

    const story = createStory();
    const featured = createFeatured();
    const reviews = createReviews();
    const reservation = createReservations();

    contentContainer.appendChild(mainImage);
    contentContainer.appendChild(story);
    contentContainer.appendChild(featured);
    contentContainer.appendChild(reviews);
    contentContainer.appendChild(reservation);

};

export default renderHome;
