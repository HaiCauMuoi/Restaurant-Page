function createHome() {
  //Creating the main components
  const home_section = document.createElement("div");
  const home = document.createElement("div");
  const card_1 = document.createElement("div");
  const card_2 = document.createElement("div");

  //Adding styles to the components
  home_section.classList.add("home-section");
  home.classList.add("home");
  card_1.classList.add("card-1");
  card_2.classList.add("card-2");

  //Linking the components
  home_section.appendChild(home);
  home.appendChild(card_1);
  home.appendChild(card_2);

  //Operating on the first card
  const h1_img = createParagraph("What is it?", "h1");
  h1_img.classList.add("h1-img");

  const p_img_1 = createParagraph(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Laboriosam, nam aspernatur commodi veniam earum sit voluptateesse quisquam eveniet quis exercitationem similique fugiat nobis sequi, laudantium culpa deserunt odit vero?",
    "p"
  );
  p_img_1.classList.add("p-img-1");

  const btn_white = createParagraph("Learn more", "button");
  btn_white.classList.add("btn-white");

  card_1.appendChild(h1_img);
  card_1.appendChild(p_img_1);
  card_1.appendChild(btn_white);

  //Operating the second card
  //Image processing
  const img_1 = document.createElement("img");
  img_1.src = "../dist/img/small-img.jpg";
  img_1.alt = "Baking";

  const p_img_2 = createParagraph(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minusdicta maxime eius placeat sit eligendi. Harum similique modi alias possimus obcaecati maxime molestiae sunt, nostrum,dolorem, voluptatibus reprehenderit vero esse!",
    "p"
  );
  p_img_2.classList.add("p-img-2");

  card_2.appendChild(img_1);
  card_2.appendChild(p_img_2);
}

//Create paragraph based on type
function createParagraph(text, type) {
  const paragraph = document.createElement(type);
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default { loadHome, createParagraph };
