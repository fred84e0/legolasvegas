"use strict";

let url = `https://frontendeksamen2019-2ef9.restdb.io/rest/accounts`;

get();

document.querySelector(".NameSort").addEventListener("click", () => {
  if (event.target.classList.contains("sortOn")) {
    url = `https://frontendeksamen2019-2ef9.restdb.io/rest/accounts?q={}&h={"$orderby": {"username": 1}}`;
    event.target.classList.remove("sortOn");
    event.target.innerHTML = "Name &darr;";
  } else {
    event.target.classList.add("sortOn");
    event.target.innerHTML = "Name &uarr;";
    url = `https://frontendeksamen2019-2ef9.restdb.io/rest/accounts?q={}&h={"$orderby": {"username": -1}}`;
  }
  get();
});

document.querySelector(".creditFilter").addEventListener("click", () => {
  if (event.target.classList.contains("filterOn")) {
    document.querySelector(".NameSort").innerHTML = "Name";
    document.querySelector(".NameSort").classList.remove("sortOn");

    url = `https://frontendeksamen2019-2ef9.restdb.io/rest/accounts?q={}&h={"$orderby": {"username": -1}}`;
    event.target.classList.remove("filterOn");
  } else {
    document.querySelector(".NameSort").innerHTML = "Name";
    document.querySelector(".NameSort").classList.remove("sortOn");

    event.target.classList.add("filterOn");
    url = `https://frontendeksamen2019-2ef9.restdb.io/rest/accounts?q={ "credit": { "$gt": 100 } }`;
  }
  get();
});

function get() {
  document.querySelector("#app").innerHTML = "";

  fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de0eb264658275ac9dc207c",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(accounts => {
      accounts.forEach(addAccountToTheDOM);
    });
}

function addAccountToTheDOM(account) {
  let template = document.querySelector("template").content;
  let copy = template.cloneNode(true);
  copy.querySelector("h3").textContent = "Username: " + account.username;
  copy.querySelector("p").textContent = "Password: " + account.password;
  copy.querySelector("h2").textContent = "E-mail: " + account.email;
  copy.querySelector("h4").textContent = "Credit: " + account.credit;
  copy.querySelector(".account").dataset.accountid = account._id;
  copy.querySelector(".deleteaccount").addEventListener("click", () => {
    deleteIt(account._id);
  });
  document.querySelector("#app").prepend(copy);
  document.addEventListener("keyup", logKey);
  listenForAnimation();
}

function deleteIt(id) {
  console.log(id);
  fetch("https://frontendeksamen2019-2ef9.restdb.io/rest/accounts/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de0eb264658275ac9dc207c",
      "cache-control": "no-cache"
    }
  })
    .then(res => res.json())
    .then(data => {
      document.querySelector(`.account[data-accountid="${id}"]`).remove();
    });
}

function logKey() {
  var input, filter, ul, li, a, b, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.querySelector("#app");
  li = document.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].firstElementChild;
    console.log(b);
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function listenForAnimation() {
  // callback function to do animations
  const scrollImations = (entries, observer) => {
    entries.forEach(entry => {
      // only do animation if the element is fully on screen
      if (entry.isIntersecting && entry.intersectionRatio == 1) {
        entry.target.classList.add("animation--visible");
      } else {
      }
    });
  };

  // create the observer
  const options = {
    threshold: 1.0
  };
  const observer = new IntersectionObserver(scrollImations, options);

  // target the elements to be observed
  const animations = document.querySelectorAll(".animation");
  animations.forEach(animation => {
    observer.observe(animation);
  });
}
