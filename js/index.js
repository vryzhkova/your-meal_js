import { modalProduct, catalogList } from "./elements.js";
import { navigationListController } from "./navigationListController.js";
import { openModal } from "./openModal.js";
import { renderListProduct } from "./renderListProduct.js";

const burgerMax = {
  title: "Burger Max",
  price: 10000,
  weight: 5000,
  calories: 1500,
  description: "Big burger - sdfjdjfksfkshfkshdfskdhfsdkjf",
  image: "img/megaburger.jpg",
  ingridients: [
    "Пшеничная булочка",
    "мега котлета",
    "много сыра",
    "листья салата",
    "лук",
  ],
};

catalogList.addEventListener("click", (event) => {
  const target = event.target;

  if (target.closest(".product__detail") || target.closest(".product__image")) {
    openModal(burgerMax);
  }
});

modalProduct.addEventListener("click", (event) => {
  const target = event.target;
  if (target.closest(".modal__close") || target === modalProduct) {
    modalProduct.classList.remove("modal_open");
  }
});

const init = () => {
  renderListProduct();
  navigationListController();
};

init();
