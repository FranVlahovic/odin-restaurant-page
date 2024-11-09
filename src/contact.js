import { createContentHeader } from "./about";
import contactHeaderImage from './img/contact-header.jpg';

//
const renderContact = () => {
    const contentContainer = document.querySelector("#content");
    contentContainer.innerHTML = '';

    const createFormElement = (type, id, name, labelText) => { 
        const label = document.createElement("label"); 
        label.htmlFor = id; 
        label.textContent = labelText; 
        const input = document.createElement("input"); 
        input.type = type; 
        input.id = id; 
        input.name = name; 
        input.required = true; 

        return { label, input };
    };

    const createForm = () => {   
        const reservationForm = document.createElement("form");
        reservationForm.classList.add("reservation-form");
        reservationForm.action = "#";
        reservationForm.method = "post";

        const reservationFormHeading = document.createElement("h2");
        reservationFormHeading.textContent = "RESERVATION FORM";
        reservationForm.appendChild(reservationFormHeading);

        const { label: reservationNameLabel, input: inputName } = createFormElement("text", "name", "name", "NAME"); 
        reservationForm.appendChild(reservationNameLabel); 
        reservationForm.appendChild(inputName);

        const { label: reservationEmailLabel, input: inputEmail } = createFormElement("email", "email", "email", "EMAIL"); 
        reservationForm.appendChild(reservationEmailLabel); 
        reservationForm.appendChild(inputEmail);

        const { label: reservationDateLabel, input: inputDate } = createFormElement("date", "date", "date", "DATE"); 
        reservationForm.appendChild(reservationDateLabel); 
        reservationForm.appendChild(inputDate);

        const { label: reservationTimeLabel, input: inputTime } = createFormElement("time", "time", "time", "TIME"); 
        reservationForm.appendChild(reservationTimeLabel); 
        reservationForm.appendChild(inputTime);

        const reservationBtn = document.createElement("button");
        reservationBtn.type = "submit";
        reservationBtn.textContent = "RESERVE TABLE";
        reservationForm.appendChild(reservationBtn);

        reservationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert(`Thank you for reserving table at Dieci Piatti ${inputName.value}! \n\nYour Table Reservation: ${inputDate.value + " " + inputTime.value}`);
            reservationForm.reset();
        });

        return reservationForm;
    };

    const createContactInfo = () => {
        const contactInfoContainer = document.createElement("div");
        contactInfoContainer.classList.add("contact-info-container");

        const contactInfoHeader = document.createElement("h2");
        contactInfoHeader.textContent = "CONTACT INFORMATION";
        contactInfoContainer.appendChild(contactInfoHeader);

        const contactInfoAddress = document.createElement("p");
        contactInfoAddress.innerHTML = "<h4>Address:</h4> Obala Kralja Tomislava 8, 21300 Makarska, Croatia";
        contactInfoContainer.appendChild(contactInfoAddress);

        const contactInfoPhone = document.createElement("p");
        contactInfoPhone.innerHTML = "<h4>Phone:</h4> +385 21 123 456";
        contactInfoContainer.appendChild(contactInfoPhone);

        const contactInfoEmail = document.createElement("p");
        contactInfoEmail.innerHTML = '<h4>Email:</h4> <a href="mailto:info@diecipiatti.com">info@diecipiatti.com</a>';
        contactInfoContainer.appendChild(contactInfoEmail);

        const contactInfoHours = document.createElement("p");
        contactInfoHours.innerHTML = "<h4>Open:</h4> 15:00 pm - 11:00 pm";
        contactInfoContainer.appendChild(contactInfoHours);

        return contactInfoContainer;
    };

    const createContact = () => {
        const contactContainer = document.createElement("div");
        contactContainer.classList.add("contact-container");

        contactContainer.appendChild(createForm());
        contactContainer.appendChild(createContactInfo());


        return contactContainer;
    };


    const contactHeader = createContentHeader(contactHeaderImage, "Outdoor Sea View", "CONTACT");
    const contact = createContact();

    contentContainer.appendChild(contactHeader);
    contentContainer.appendChild(contact);
    
};
//

export default renderContact;