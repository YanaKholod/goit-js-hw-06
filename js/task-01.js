let categoryElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryElements.length} `);

categoryElements.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
