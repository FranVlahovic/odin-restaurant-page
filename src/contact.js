import { createContentHeader } from "./about";
import contactHeaderImage from './img/contact-header.jpg';

//
const renderContact = () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = '';

    const createContact = () => {
        const contactContainer = document.createElement("div");
        contactContainer.classList.add("contact-container");

        const createForm = () => {   
            const reservationForm = document.createElement("form");
            reservationForm.classList.add("reservation-form");
            reservationForm.action = "#";
            reservationForm.method = "post";
    
            const reservationName = document.createElement("label");
    
    
            const reservationEmail =
    
    
            const reservationDate =
    
    
            const reservationTime =
    
    
            const reservationPhone =
    
    
            const reservationBtn = 

            return reservationForm;
        };

        const createContactInfo = () => {

        };



        return contactContainer;
    };


    const contactHeader = createContentHeader(contactHeaderImage, "Outdoor Sea View", "CONTACT");
    const contact = createContact();

    contentContainer.appendChild(contactHeader);
    contentContainer.appendChild(contact);
    
    
};
//

export default renderContact;