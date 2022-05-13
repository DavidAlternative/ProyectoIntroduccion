const loginForm = document.querySelector("#login");
const incorrectLogin = document.querySelector(".incorrect"); 
const API_URL = "https://cesde-f928b-default-rtdb.firebaseio.com/user.json";

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const mail = loginForm.querySelector("#mail").value;
  const password = loginForm.querySelector("#password").value;
  //validate mail and password with the api
  fetch(API_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data) {
        if (data[key].mail === mail && data[key].password === password) {
          incorrectLogin.style.display = "none";
          window.open("../../Home/main.html", "_self");
        }
        if (data[key].mail !== mail || data[key].password !== password) {
          //set value of inputs to empty
          loginForm.querySelector("#mail").value = "";
          loginForm.querySelector("#password").value = "";
          incorrectLogin.style.display = "block";

        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

