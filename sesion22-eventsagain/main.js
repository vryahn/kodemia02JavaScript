const title = document.getElementById("test-event");
const loginForm = document.querySelector("#login-form");

title.addEventListener("click", (event) => {
  event.preventDefault();

  event.target;
  console.log("Ejectuaste el evento ", event);
});

/// Rcuperar los valores de los inputs

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#login-form__email").value;
  const password = document.querySelector("#login-form__password").value;
  const rememberMe = document.querySelector("#login-form__rememberme").value;

  console.log(email, password, rememberMe);

  //   const myInput = document.querySelectorAll("input");
  //   const arrayInput = Array.from(myInput).map((input) => {
  //     return input.value;
  //     // console.log(input.value);
  //   });
  //   console.log("Este es el arrayInput", arrayInput);

  const data = Array.from(event.target.children)
    .filter((element) => {
      if (element.tagName == "INPUT") return true;
      return false;
    })
    .map((element) => element.value);
  console.log(data);
});