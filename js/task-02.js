const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const arrayOfIngredients = document.querySelector("#ingredients");

const newArrayOfIngred = [];

ingredients.forEach((ingredient) => {
  const item = document.createElement("li");

  item.textContent = ingredient;

  item.classList.add("item");

  newArrayOfIngred.push(item);
});

arrayOfIngredients.append(...newArrayOfIngred);

console.log(arrayOfIngredients);
