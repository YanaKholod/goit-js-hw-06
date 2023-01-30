const formInput = document.querySelector(".login-form");

formInput.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Fields must be filled");
  } else {
    const userData = {
      email: email.value,
      password: password.value,
    };
    console.log(userData);

    event.currentTarget.reset();
  }
}
