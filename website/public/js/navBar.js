// Esta funcion se ejecuta a si misma para limitar el scope //

(function () {
  const listElements = document.querySelectorAll(".menu_item--show");
  const list = document.querySelector(".menu_links");
  const menu = document.querySelector(".menu_hamburguer");

  const addClick = () => {
    listElements.forEach((element) => {
      element.addEventListener("click", () => {
        let subMenu = element.children[1];
        element.classList.toggle("menu_item--active");
      });
    });
  };

  addClick();
})();
