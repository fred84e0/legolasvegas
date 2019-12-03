document.addEventListener("DOMContentLoaded", start);

let burgerMenu = document.querySelector("#header_menu");
let screenWidth = window.matchMedia("(min-width: 900px)");
screenWidth.addListener(screenMeasure);

start();
function start() {
  document.querySelector("#login-btn").addEventListener("click", loginModal);
  document.querySelector("#signup-btn").addEventListener("click", signupModal);
  document.querySelector("#mute-btn").addEventListener("click", muteSite);

  document.querySelectorAll(".close").forEach(em => {
    em.addEventListener("click", closeModal);
  });

  document.querySelector("#burger_button").addEventListener("click", openSidebar);
  screenMeasure(screenWidth);
}

window.addEventListener("DOMContentLoaded", event => {
  fetch("svg/slotmachine.svg")
    .then(response => response.text())
    .then(svg => {
      document.querySelector("#slotmachine").innerHTML = svg;
    });
});

window.addEventListener("DOMContentLoaded", event => {
  fetch("svg/mute.svg")
    .then(response => response.text())
    .then(svg => {
      document.querySelector(".mute").innerHTML = svg;
    });
});

// BURGERMENU
function openSidebar() {
  closeModal();
  console.log("Burgermenu toggled");

  if (!(burgerMenu.style.display == "block")) {
    document.querySelector("#header_menu").classList.remove("header_menu_close");
    burgerMenu.style.display = "block";
  } else {
    document.querySelector("#header_menu").classList.add("header_menu_close");
    setTimeout(function() {
      burgerMenu.style.display = "none";
    }, 590);
  }
  burgerPil();
}

function burgerPil() {
  document.querySelector("#burger_button").classList.toggle("burger_bar_open");
}

function screenMeasure(screenWidth) {
  if (screenWidth.matches) {
    document.querySelector("#header_menu").style.display = "block";
  } else {
    document.querySelector("#header_menu").style.display = "none";
  }
}

function loginModal() {
  const signup = document.querySelector(".signup-modal");

  if (signup.classList.contains("show-modal")) {
    signup.classList.remove("show-modal");
  }

  document.querySelector(".login-modal").classList.toggle("show-modal");
}

function signupModal() {
  const login = document.querySelector(".login-modal");

  if (login.classList.contains("show-modal")) {
    login.classList.remove("show-modal");
  }
  document.querySelector(".signup-modal").classList.toggle("show-modal");
}

function closeModal() {
  console.log("sluk");
  document.querySelector(".signup-modal").classList.remove("show-modal");
  document.querySelector(".login-modal").classList.remove("show-modal");
}

function muteSite() {
  console.log("mute");

  if (document.querySelector("#sound").classList.contains("mute-on")) {
    document.querySelector("#sound").classList.add("mute-off");
  }
  if (document.querySelector("#sound").classList.contains("mute-off")) {
    document.querySelector("#sound").classList.add("mute-on");
  }

  document.querySelector("#sound").classList.add("mute-on");
}

// document.querySelector("#signup-btn").addEventListener("click", openModal);

// document.querySelector(".header-btn").forEach(
//   addEventListener("click", e => {
//     console.log(e.target.id);
//     openModal(e.target.id);
//   })
// );

// function openModal(btnName) {
//   let call = btnName.split("-");
//   const login = document.querySelector(".login-modal");
//   const signup = document.querySelector(".signup-modal");

//   if (login.classList.contains("show-modal")) {
//     login.classList.remove("show-modal");
//     console.log("hej");
//   }
//   if (signup.classList.contains("show-modal")) {
//     signup.classList.remove("show-modal");
//   }
//   document.querySelector(`.${call[0]}-modal`).classList.toggle("show-modal");
// }
// document.querySelector(".close").forEach(em => {
//   em.addEventListener("click", closeModal);
// });
