let accounts = [];
document.querySelector(".sign_in_button").addEventListener("click", e => {
  console.log("test");
  e.preventDefault();

  let yourEmail = document.querySelector("input[name=yourEmail]").value;
  let yourPassword = document.querySelector("input[name=yourPassword]").value;

  localStorage.setItem("yourEmail", yourEmail);
  localStorage.setItem("yourPassword", yourPassword);

  checkID(yourEmail);
});

function checkID() {
  fetch(`https://frontendeksamen2019-2ef9.restdb.io/rest/accounts`, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de0eb264658275ac9dc207c",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(accounts => {
      let emailIndex = accounts.findIndex(x => x.email === localStorage.getItem("yourEmail"));
      let passwordIndex = accounts.findIndex(x => x.password === localStorage.getItem("yourPassword"));

      console.log(passwordIndex);
      console.log(emailIndex);

      if (emailIndex == "-1" && passwordIndex == "-1") {
        alert("Forkert kodeord - Prøv venligst igen.");
      }
      if (emailIndex === passwordIndex) {
        localStorage.setItem("identity", accounts[emailIndex]._id);
        window.location.href = "login.html";
      } else {
        alert("Forkert kodeord - Prøv venligst igen.");
      }
    });
}
