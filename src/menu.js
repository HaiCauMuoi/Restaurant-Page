import createParagragh from "./create";

function createMenu() {
  const menu_section = document.createElement("div");
  const menu = document.createElement("div");

  menu_section.appendChild(menu);

  menu_section.classList.add("menu-section");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItems(
      "Tiramisu",
      "9.99$",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati fugiat quisquam sit unde ea corporis asperiores."
    )
  );

  menu.appendChild(
    createMenuItems(
      "Cheesecake",
      "14.99$",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati fugiat quisquam sit unde ea corporis asperiores."
    )
  );

  menu.appendChild(
    createMenuItems(
      "Cupcake",
      "4.99$",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati fugiat quisquam sit unde ea corporis asperiores."
    )
  );

  menu.appendChild(
    createMenuItems(
      "Crumblepie",
      "9.99$",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Obcaecati fugiat quisquam sit unde ea corporis asperiores."
    )
  );

  return menu_section;
}

function createMenuItems(name, price, description) {
  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");

  const foodImg = document.createElement("img");
  foodImg.src = `img/${name.toLowerCase()}.jpg`;
  foodImg.classList.add("menu-img");

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  menuItems.appendChild(foodImg);
  menuItems.appendChild(textContainer);

  const itemName = createParagragh(name, "h3");
  itemName.classList.add("item-name");

  const itemPrice = createParagragh(price, "p");
  itemName.classList.add("item-price");

  const itemP = createParagragh(description, "p");
  itemName.classList.add("item-p");

  const itemBtn = createParagragh("Add to cart", "button");
  itemBtn.classList.add("item-btn");

  textContainer.appendChild(itemName);
  textContainer.appendChild(itemPrice);
  textContainer.appendChild(itemP);
  textContainer.appendChild(itemBtn);

  return menuItems;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
