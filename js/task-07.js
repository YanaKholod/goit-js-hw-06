const sizeSwing = document.querySelector("input#font-size-control");
const textForSwing = document.querySelector("span#text");

sizeSwing.addEventListener("input", (event) => {
  textForSwing.style.fontSize = `${event.target.value}px`;
});
