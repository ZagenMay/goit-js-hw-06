const formInput = document.querySelector(".login-form");
formInput.addEventListener("submit", submitedd);

function submitedd(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.password.value === "" ||
    event.currentTarget.elements.email.value === ""
  ) {
    alert("All fields are required");
  } else {
    const startingInfo = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value,
    };
    console.log(startingInfo);
    event.currentTarget.reset();
  }
}
