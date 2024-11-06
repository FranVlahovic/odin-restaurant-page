import { createContentHeader } from "./about";
import gallery2 from './img/gallery2.jpg';
import gallery1 from './img/gallery1.jpg';
import gallery3 from './img/gallery3.jpg';
import galleryHeaderImage from './img/restaurant_outside.jpg';
import freshImageOne from './img/fresh1.jpg';
import freshImageTwo from './img/fresh2.jpg';
import freshImageThree from './img/fresh3.jpg';
import freshImageFour from './img/fresh4.jpg';
import freshImageFive from './img/fresh5.jpg';
import freshImageSix from './img/fresh6.jpg';
import carbonara from './img/home-carbonara.jpg';
import cacioepepe from './img/home-cacioepepe.jpeg';
import bolognese from './img/home-bolognese.jpg';

const renderGallery = () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = '';
    
    const createGallery = () => {

        const mainGallery = document.createElement("div");
        mainGallery.classList.add("main-gallery");
      
        const images = [
          { src: gallery1, alt: "Locks on fence" },
          { src: gallery2, alt: "Beach with Boats" },
          { src: gallery3, alt: "Restaurant Interior Bottles in Bucket" },
          { src: freshImageOne, alt: "Tomato Harvest" },
          { src: freshImageTwo, alt: "Wheat farm" },
          { src: freshImageThree, alt: "Grape Collecting" },
          { src: freshImageFour, alt: "Fisherman with his fishing net" },
          { src: freshImageFive, alt: "Cows" },
          { src: freshImageSix, alt: "Mix of fresh vegetables" },
          { src: cacioepepe, alt: "Pasta Cacio e Pepe" },
          { src: bolognese, alt: "Ragu Bolognese" },
          { src: carbonara, alt: "Pasta Carbonara" },
        ];
    
        const shuffledImages = images.sort(() => 0.5 - Math.random());
    
        const selectedImages = shuffledImages.slice(0, images.length);
      
        selectedImages.forEach(image => {
          const img = document.createElement("img");
          img.src = image.src;
          img.alt = image.alt;
          mainGallery.appendChild(img);
        });

        return mainGallery;
    };
  
    const galleryHeader = createContentHeader(galleryHeaderImage, "Drone Photo of Seaside", "GALLERY");
    const galleryMain = createGallery();

    contentContainer.appendChild(galleryHeader);
    contentContainer.appendChild(galleryMain);
};

export default renderGallery;
