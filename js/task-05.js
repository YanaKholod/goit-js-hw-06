const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
console.log("value -> ", typeof textInput.value);

if (textInput.value === "") {
  textOutput.textContent = "Anonymous";
} else {
  textOutput.textContent = textInput.value;
}

textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.target.value;
  if (event.target.value === "") {
    console.log(textOutput);
    textOutput.textContent = "Anonymous";
  }
});
