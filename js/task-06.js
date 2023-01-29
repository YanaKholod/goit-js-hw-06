const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", (event) => {
  if (event.target.value.length == validInput.getAttribute("data-length")) {
    validInput.classList.add("valid");

    if (validInput.classList.contains("invalid")) {
      validInput.classList.remove("invalid");
    }
  } else {
    if (validInput.classList.contains("valid")) {
      validInput.classList.remove("valid");
    }
    validInput.classList.add("invalid");
  }
});
