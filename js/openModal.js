import {
  modalProduct,
  modalProductTitle,
  modalProductImage,
  modalProductDescription,
  ingredientsList,
  ingredientsCalories,
  modalProductPriceCount,
} from "./elements.js";

export const openModal = (product) => {
  modalProductTitle.textContent = product.title;
  modalProductImage.src = product.image;
  ingredientsList.textContent = "";

  const ingredientsListItem = product.ingridients.map((item) => {
    const li = document.createElement("li");
    li.classList.add("ingredients__item");
    li.textContent = item;
    return li;
  });

  ingredientsList.append(...ingredientsListItem);

  modalProductDescription.textContent = product.description;
  ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`;
  modalProductPriceCount.textContent = product.price;

  modalProduct.classList.add("modal_open");
};
