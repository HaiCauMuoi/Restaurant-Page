import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import createParagraph from "./home";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const name = createParagraph("Exotic Bakery", "h1");
  name.classList.add("name");

  header.appendChild(name);
  header.appendChild(createNav());

  return header;
}

function createNav() {
  const nav = document.createElement("nav");

  const homeBtn = createParagraph("Home", "button");
  homeBtn.classList.add("button-nav");
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveBtn(homeBtn);
    loadHome();
  });

  const menuBtn = createParagraph("Menu", "button");
  homeBtn.classList.add("button-nav");
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveBtn(menuBtn);
    loadMenu();
  });

  const contactBtn = createParagraph("Contact", "button");
  homeBtn.classList.add("button-nav");
  homeBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActiveBtn(contactBtn);
    loadContact();
  });

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function setActiveBtn(btn) {
  const btns = document.querySelectorAll(".button-nav");

  btns.forEach((btn) => {
    if (btn !== this) {
      btn.classList.remove("active");
    }
  });

  btn.classList.add("active");
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footer_p = createParagraph("Project Made in 2022 by HaiCauMuoi", "p");

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/HaiCauMuoi";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  githubLink.appendChild(githubIcon);
  footer.appendChild(footer_p);
  footer.appendChild(githubLink);

  return footer;
}

function initializeWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".button-nav"));
  loadHome();
}

export default initializeWebsite;
