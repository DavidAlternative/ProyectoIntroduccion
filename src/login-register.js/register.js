const API_URL = "https://cesde-f928b-default-rtdb.firebaseio.com/user.json";
const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();


  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      address: registerForm.querySelector("#address").value,
      document: registerForm.querySelector("#document").value,
      mail: registerForm.querySelector("#mail").value,
      name: registerForm.querySelector("#name").value,
      password: registerForm.querySelector("#password").value,
      phone: registerForm.querySelector("#phone").value,
      surname: registerForm.querySelector("#surname").value,
    }),
  }).then((response) => {
    response
      .json()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  setTimeout(() => {
    window.open("login.html", "_self");
  }, 2000);
});
