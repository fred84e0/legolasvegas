start();

// BURGERMENU

let burgerMenu = document.querySelector("#header_menu");
let screenWidth = window.matchMedia("(min-width: 900px)");
screenWidth.addListener(screenMeasure);

document.querySelector("#burger_button").addEventListener("click", openSidebar);

function openSidebar() {
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
  burgerPil(this);
}

function burgerPil(x) {
  x.classList.toggle("burger_bar_open");
}

screenMeasure(screenWidth);

function screenMeasure(screenWidth) {
  if (screenWidth.matches) {
    document.querySelector("#header_menu").style.display = "block";
  } else {
    document.querySelector("#header_menu").style.display = "none";
  }
}

function clickColor() {}

function start() {
  document.querySelector("#login-btn").addEventListener("click", loginModal);
  document.querySelector("#signup-btn").addEventListener("click", signupModal);
  document.querySelectorAll(".close").forEach(em => {
    em.addEventListener("click", closeModal);
  });
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
  document.querySelector(".signup-modal").classList.remove("show-modal");
  document.querySelector(".login-modal").classList.remove("show-modal");
}
