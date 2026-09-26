const burger = document.querySelector(".burger");
const navigation = document.querySelector(".navigation");
const closeButton = document.querySelector(".mobile-menu__close");
const catalogLink = document.querySelector(".navigation-link--arrow");
const navigationList = document.querySelector(".navigation-list");
const catalogSubmenu = document.querySelector(".catalog-submenu");
const navigationLinks = document.querySelectorAll(
    ".navigation-link:not(.navigation-link--arrow)"
  );
burger.addEventListener("click", () => {
    navigation.classList.toggle("navigation--open");
    document.body.classList.toggle("menu-open");
  });
closeButton.addEventListener("click", () => {
    navigation.classList.remove("navigation--open");
    document.body.classList.remove("menu-open");
  });
 

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("navigation--open");
      document.body.classList.remove("menu-open");
    });
  });
  catalogLink.addEventListener("click", (event) => {
    event.preventDefault();
  
    navigationList.hidden = true;
    catalogSubmenu.hidden = false;
  });