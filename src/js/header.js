// Comportamento do Scroll
var ultimoScrolltop = 0;

var mediaLarge = "(min-width: 1440px)";
var mediMedium = "(min-width: 800px) and (max-width: 1440px)";
var mediaSmall = "(min-width: 100px) and (max-width: 799px)";

window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const menu = document.querySelector(".menu-hamburguer-elements");
  const menuButton = document.querySelector("input#menu-hamburguer");
  const logo = document.querySelector("header>#logo");

  const top = window.pageYOffset || document.documentElement.scrollTop;

  // Scroll down - esconde
  if (top > ultimoScrolltop) {
    header.style.top = "-100px";

    if (window.matchMedia(mediaLarge).matches) menu.style.right = "-40%";
    if (window.matchMedia(mediMedium).matches) menu.style.right = "-40%";
    if (window.matchMedia(mediaSmall).matches) menuButton.checked = false;
  }
  // Scroll up - mostra
  else {
    header.style.top = null;
    menu.style.right = null;
    logo.style.marginLeft = "1rem";
    logo.style.height = null;
    logo.style.width = null;
  }

  ultimoScrolltop = top;
});

const onClickMenuHamburgue = () => {
  if (window.matchMedia(mediaSmall).matches) {
    const checkbox = document.querySelector("input#menu-hamburguer");
    const logo = document.querySelector("header>#logo");
    if (checkbox.checked) {
      logo.style.marginLeft = "-1rem";
      logo.style.height = "0";
      logo.style.width = "0";
    } else {
      logo.style.marginLeft = "1rem";
      logo.style.height = null;
      logo.style.width = null;
    }
  }
};
