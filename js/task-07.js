const sizeSwing = document.querySelector("input#font-size-control");
const textForSwing = document.querySelector("span#text");

console.log(sizeSwing); //56px
textForSwing.style.fontSize = `${sizeSwing.value}px`;

sizeSwing.addEventListener("input", (event) => {
  console.log(event.target.value);
  textForSwing.style.fontSize = `${event.target.value}px`;
});
