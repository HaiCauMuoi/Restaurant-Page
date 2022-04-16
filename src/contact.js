import createParagraph from "./create";

function createContact() {
  const contact_section = document.createElement("div");
  const contact = document.createElement("div");
  const form = document.createElement("div");
  form.classList.add("form");
  contact_section.classList.add("contact-section");
  contact.classList.add("contact");
  contact_section.appendChild(contact);
  contact.appendChild(form);

  const number = createParagraph("📞 123456789", "p");
  const place = createParagraph("📫 365 Prestige Street, HCMC, Vietnam", "p");
  number.classList.add("contact-p-box");
  place.classList.add("contact-p-box");

  const restaurantLocation = document.createElement("img");
  restaurantLocation.src = "img/location.jpg";
  restaurantLocation.alt = "Location";
  restaurantLocation.classList.add("contact-img");

  form.appendChild(number);
  form.appendChild(place);
  form.appendChild(restaurantLocation);

  return contact_section;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
