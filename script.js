"use strict";

import { NONAME } from "dns";

// BURGERMENU
document.addEventListener("DOMContentLoaded", start);

let burgerMenu = document.querySelector("#header_menu");
let screenWidth = window.matchMedia("(min-width: 900px)");

let win1 = "";
let win2 = "";
let win3 = "";

// const audio_spin = new Audio("music/spin.mp3");

screenWidth.addListener(screenMeasure);

// start();
function start() {
  document.querySelector("#login-btn").addEventListener("click", loginModal);
  document.querySelector("#signup-btn").addEventListener("click", signupModal);
  document.querySelector("#mute-btn").addEventListener("click", muteSite);
  document.querySelector(".close").addEventListener("click", closeModal);

  document.querySelector("#burger_button").addEventListener("click", openSidebar);
  screenMeasure(screenWidth);
}

window.addEventListener("DOMContentLoaded", event => {
  fetch("svg/slotmachine.svg")
    .then(response => response.text())
    .then(svg => {
      document.querySelector("#slotmachine").innerHTML = svg;
      loadgif();
      gameLights();
    });
});
function gameLights() {
  document.querySelectorAll(".light1").forEach(q => {
    console.log("gamelights");
    q.classList.remove("winBlink");
    setTimeout(function() {
      q.classList.add("blink");
    }, 300);
  });
  document.querySelectorAll(".light2").forEach(q => {
    q.classList.remove("winBlink");
    q.classList.add("blink");
  });
}
function winLights() {
  document.querySelectorAll(".light1").forEach(q => {
    q.classList.remove("blink");
    q.classList.add("winBlink");
  });
  document.querySelectorAll(".light2").forEach(q => {
    q.classList.remove("blink");
    q.classList.add("winBlink");
  });
}

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
  document.querySelector(".signup-modal").classList.remove("right-panel-active");

  const signup = document.querySelector(".signup-modal");
  document.querySelector(".close").style.color = "#ffffff";

  if (signup.classList.contains("show-modal")) {
    signup.classList.remove("show-modal");
  }

  document.querySelector(".login-modal").classList.toggle("show-modal");
}

function signupModal() {
  const login = document.querySelector(".login-modal");
  document.querySelector(".close").style.color = "#9C141E";

  if (login.classList.contains("show-modal")) {
    login.classList.remove("show-modal");
  }
  document.querySelector(".signup-modal").classList.add("right-panel-active");

  document.querySelector(".signup-modal").classList.toggle("show-modal");
}

function closeModal() {
  console.log("sluk");
  document.querySelector(".signup-modal").classList.remove("show-modal");
  document.querySelector(".login-modal").classList.remove("show-modal");
}

function loadgif() {
  let credit = document.querySelector("#credit");
  let score = document.querySelector("#score");
  score.innerHTML = 0;
  credit.textContent = 30;

  document.querySelector("#pos1").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos2").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos3").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos4").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos5").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos6").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos7").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos8").setAttribute("xlink:href", "svg/5.svg");
  document.querySelector("#pos9").setAttribute("xlink:href", "svg/5.svg");

  document.querySelector("#spin").classList.add("firstRound");
  document.querySelector("#hold1").classList.add("uncheckedButton");
  document.querySelector("#hold2").classList.add("uncheckedButton");
  document.querySelector("#hold3").classList.add("uncheckedButton");

  document.querySelector("#image1").style.opacity = "0";
  document.querySelector("#image2").style.opacity = "0";
  document.querySelector("#image3").style.opacity = "0";

  document.querySelector("#spin").addEventListener("click", fetchgif);
}

function holdOption() {
  document.querySelector("#hold1").addEventListener("click", addEventListeners);

  document.querySelector("#hold2").addEventListener("click", addEventListeners);

  document.querySelector("#hold3").addEventListener("click", addEventListeners);
}

function addEventListeners() {
  let identifier = event.target.id.slice(4, 5);
  if (document.querySelector(`#hold${identifier}`).classList.contains("on")) {
    document.querySelector(`#hold1`).classList.remove("on");
    document.querySelector(`#hold2`).classList.remove("on");
    document.querySelector(`#hold3`).classList.remove("on");
    document.querySelector(`#group1`).classList.remove("checked");
    document.querySelector(`#group2`).classList.remove("checked");
    document.querySelector(`#group3`).classList.remove("checked");
    document.querySelector(`#hold1`).classList.add("uncheckedButton");
    document.querySelector(`#hold2`).classList.add("uncheckedButton");
    document.querySelector(`#hold3`).classList.add("uncheckedButton");
  } else if (document.querySelector(`#hold1`).classList.contains("on") || document.querySelector(`#hold2`).classList.contains("on") || document.querySelector(`#hold3`).classList.contains("on")) {
    alert("You can only hold once in the trial. Sign up for the full LegolasVegas experience!");

    document.querySelector(`#hold1`).classList.remove("on");
    document.querySelector(`#hold2`).classList.remove("on");
    document.querySelector(`#hold3`).classList.remove("on");
    document.querySelector(`#group1`).classList.remove("checked");
    document.querySelector(`#group2`).classList.remove("checked");
    document.querySelector(`#group3`).classList.remove("checked");
    document.querySelector(`#hold1`).classList.add("uncheckedButton");
    document.querySelector(`#hold2`).classList.add("uncheckedButton");
    document.querySelector(`#hold3`).classList.add("uncheckedButton");
  } else {
    document.querySelector(`#hold${identifier}`).classList.add("on");
    document.querySelector(`#group${identifier}`).classList.add("checked");
    document.querySelector(`#hold${identifier}`).classList.remove("uncheckedButton");
  }
}

function fetchgif() {
  document.querySelector("#spin").style.pointerEvents = "none";
  document.querySelector("#audio_spin").play();

  credit.textContent -= "10";
  let allPos = document.querySelectorAll(".pos");

  allPos.forEach(pos => {
    pos.classList.remove("bounce_in");
  });

  if (document.querySelector("#group1").classList.contains("checked")) {
    let holdOption = document.querySelector("#group1").childNodes[3].getAttributeNS("http://www.w3.org/1999/xlink", "href");

    document.querySelector("#group2").style.opacity = "0";
    document.querySelector("#image2").style.opacity = "1";
    document.querySelector("#image2").setAttribute("xlink:href", "svg/spin2.gif");
    document.querySelector("#group3").style.opacity = "0";
    document.querySelector("#image3").style.opacity = "1";
    document.querySelector("#image3").setAttribute("xlink:href", "svg/spin3.gif");

    holdSpin1(holdOption);
  } else if (document.querySelector("#group2").classList.contains("checked")) {
    let holdOption = document.querySelector("#group2").childNodes[3].getAttributeNS("http://www.w3.org/1999/xlink", "href");

    document.querySelector("#group1").style.opacity = "0";
    document.querySelector("#image1").style.opacity = "1";
    document.querySelector("#image1").setAttribute("xlink:href", "svg/spin2.gif");
    document.querySelector("#group3").style.opacity = "0";
    document.querySelector("#image3").style.opacity = "1";
    document.querySelector("#image3").setAttribute("xlink:href", "svg/spin3.gif");

    holdSpin2(holdOption);
  } else if (document.querySelector("#group3").classList.contains("checked")) {
    let holdOption = document.querySelector("#group3").childNodes[3].getAttributeNS("http://www.w3.org/1999/xlink", "href");

    document.querySelector("#group2").style.opacity = "0";
    document.querySelector("#image2").style.opacity = "1";
    document.querySelector("#image2").setAttribute("xlink:href", "svg/spin2.gif");
    document.querySelector("#group1").style.opacity = "0";
    document.querySelector("#image1").style.opacity = "1";
    document.querySelector("#image1").setAttribute("xlink:href", "svg/spin3.gif");

    holdSpin3(holdOption);
  } else {
    if (document.querySelector("#hold1").classList.contains("uncheckedButton")) {
      document.querySelector("#group1").style.opacity = "0";
      document.querySelector("#image1").style.opacity = "1";
      document.querySelector("#image1").setAttribute("xlink:href", "svg/spin1.gif");
      if (credit.textContent == "0") {
        specialSpinOut1();
      } else {
        spinOut1();
      }
    }

    if (document.querySelector("#hold2").classList.contains("uncheckedButton")) {
      document.querySelector("#group2").style.opacity = "0";
      document.querySelector("#image2").style.opacity = "1";
      document.querySelector("#image2").setAttribute("xlink:href", "svg/spin2.gif");

      if (credit.textContent == "0") {
        specialSpinOut2();
      } else {
        spinOut2();
      }
    }

    if (document.querySelector("#hold3").classList.contains("uncheckedButton")) {
      document.querySelector("#group3").style.opacity = "0";

      document.querySelector("#image3").style.opacity = "1";
      document.querySelector("#image3").setAttribute("xlink:href", "svg/spin3.gif");
      if (credit.textContent == "0") {
        specialSpinOut3();
      } else {
        spinOut3();
      }
    }
  }

  setTimeout(checkwin, 2600);
}
function spinOut1() {
  setTimeout(function() {
    document.querySelector("#image1").style.opacity = "0";
    document.querySelector("#group1").style.opacity = "1";
    document.querySelector("#group1").classList.add("bounce_in");

    document.querySelector("#pos1").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos2").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos3").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;

    return (win1 = document.querySelector("#pos2").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 1800);
}

function spinOut2() {
  setTimeout(function() {
    document.querySelector("#image2").style.opacity = "0";
    document.querySelector("#group2").style.opacity = "1";
    document.querySelector("#group2").classList.add("bounce_in");

    document.querySelector("#pos4").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos5").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos6").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;

    return (win2 = document.querySelector("#pos5").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2100);
}

function spinOut3() {
  setTimeout(function() {
    document.querySelector("#image3").style.opacity = "0";
    document.querySelector("#group3").style.opacity = "1";
    document.querySelector("#group3").classList.add("bounce_in");

    document.querySelector("#pos7").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos8").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos9").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;

    return (win3 = document.querySelector("#pos8").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2600);
}

function checkwin() {
  document.querySelector("#spin").style.pointerEvents = "auto";
  let score = "";

  if (win1 == win2 && win2 == win3 && win3 == win1) {
    if (win1 == "svg/1.svg" || win1 == "svg/2.svg" || win1 == "svg/3.svg" || win1 == "svg/4.svg" || win1 == "svg/6.svg" || win1 == "svg/7.svg" || win1 == "svg/8.svg") {
      score = "50";

      document.querySelector("#audio_spin_win").play();
      document.querySelector("#audio_spin_win").currentTime = 0;

      document.querySelector("#spin").style.pointerEvents = "none";
      setTimeout(function() {
        callToAction(score);
      }, 1000);
    }
    if (win1 == "svg/5.svg") {
      score = "100";
      document.querySelector("#audio_spin_win").play();
      document.querySelector("#audio_spin_win").currentTime = 0;

      document.querySelector("#spin").style.pointerEvents = "none";
      setTimeout(function() {
        callToAction(score);
      }, 1000);
    }
    if (win1 == "svg/9.svg") {
      score = "150";
      document.querySelector("#audio_spin_win").play();
      document.querySelector("#audio_spin_win").currentTime = 0;

      document.querySelector("#spin").style.pointerEvents = "none";
      setTimeout(function() {
        callToAction(score);
      }, 1000);
    }

    console.log("you've won");
    winLights();
    setTimeout(function() {
      gameLights();
    }, 2800);
  } else {
    console.log("you didnt win");
  }
  holdOption();
}

function callToAction(score) {
  document.querySelector("#score").innerHTML = score;
  document.querySelector(".close").style.display = "none";
  document.querySelector(".signup-modal").style.display = "block";
  document.querySelector(".signup-modal").classList.add("right-panel-active");
  document.querySelector(".winner_title").textContent = "Wow du er heldig!!";
  document.querySelector(".winner_description").textContent = `Du har lige vundet ${score} credits! Opret en profil og gør krav på dem med det samme!`;
}

function specialSpinOut1() {
  setTimeout(function() {
    document.querySelector("#image1").style.opacity = "0";
    document.querySelector("#group1").style.opacity = "1";
    document.querySelector("#group1").classList.add("bounce_in");

    document.querySelector("#pos1").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos2").setAttribute("xlink:href", `svg/5.svg`);
    document.querySelector("#pos3").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win1 = document.querySelector("#pos2").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 1800);
}

function specialSpinOut2() {
  setTimeout(function() {
    document.querySelector("#image2").style.opacity = "0";
    document.querySelector("#group2").style.opacity = "1";
    document.querySelector("#group2").classList.add("bounce_in");

    document.querySelector("#pos4").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos5").setAttribute("xlink:href", `svg/5.svg`);
    document.querySelector("#pos6").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win2 = document.querySelector("#pos5").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2100);
}

function specialSpinOut3() {
  setTimeout(function() {
    document.querySelector("#image3").style.opacity = "0";
    document.querySelector("#group3").style.opacity = "1";
    document.querySelector("#group3").classList.add("bounce_in");

    document.querySelector("#pos7").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos8").setAttribute("xlink:href", `svg/5.svg`);
    document.querySelector("#pos9").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win3 = document.querySelector("#pos8").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2600);
}

function holdSpin1(holdOption) {
  setTimeout(function() {
    document.querySelector("#image2").style.opacity = "0";
    document.querySelector("#group2").style.opacity = "1";
    document.querySelector("#group2").classList.add("bounce_in");

    document.querySelector("#pos4").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos5").setAttribute("xlink:href", `${holdOption}`);
    document.querySelector("#pos6").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win2 = document.querySelector("#pos5").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2100);

  setTimeout(function() {
    document.querySelector("#image3").style.opacity = "0";
    document.querySelector("#group3").style.opacity = "1";
    document.querySelector("#group3").classList.add("bounce_in");

    document.querySelector("#pos7").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos8").setAttribute("xlink:href", `${holdOption}`);
    document.querySelector("#pos9").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win3 = document.querySelector("#pos8").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2600);
}
function holdSpin2(holdOption) {
  setTimeout(function() {
    document.querySelector("#image1").style.opacity = "0";
    document.querySelector("#group1").style.opacity = "1";
    document.querySelector("#group1").classList.add("bounce_in");

    document.querySelector("#pos1").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos2").setAttribute("xlink:href", `${holdOption}`);
    document.querySelector("#pos3").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win1 = document.querySelector("#pos5").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 1800);

  setTimeout(function() {
    document.querySelector("#image3").style.opacity = "0";
    document.querySelector("#group3").style.opacity = "1";
    document.querySelector("#group3").classList.add("bounce_in");

    document.querySelector("#pos7").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos8").setAttribute("xlink:href", `${holdOption}`);
    document.querySelector("#pos9").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win3 = document.querySelector("#pos8").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2600);
}
function holdSpin3(holdOption) {
  setTimeout(function() {
    document.querySelector("#image2").style.opacity = "0";
    document.querySelector("#group2").style.opacity = "1";
    document.querySelector("#group2").classList.add("bounce_in");

    document.querySelector("#pos4").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos5").setAttribute("xlink:href", `${holdOption}`);
    document.querySelector("#pos6").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win2 = document.querySelector("#pos5").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2100);

  setTimeout(function() {
    document.querySelector("#image1").style.opacity = "0";
    document.querySelector("#group1").style.opacity = "1";
    document.querySelector("#group1").classList.add("bounce_in");

    document.querySelector("#pos1").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos2").setAttribute("xlink:href", `${holdOption}`);
    document.querySelector("#pos3").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#audio_spin_end").play();
    document.querySelector("#audio_spin_end").currentTime = 0;
    return (win1 = document.querySelector("#pos8").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 1800);
}
function muteSite() {
  if (document.querySelector("#sound").classList.contains("mute-on")) {
    console.log("hej1");
    document.querySelector("#sound").classList.remove("mute-on");
    document.querySelector("#sound").classList.add("mute-off");
    document.querySelector("#audio_spin").muted = false;
    document.querySelector("#audio_spin_win").muted = false;
    document.querySelector("#audio_spin_end").muted = false;
    console.log("page UNmuted");
  } else {
    console.log("hej2");
    document.querySelector("#sound").classList.remove("mute-off");
    document.querySelector("#sound").classList.add("mute-on");
    document.querySelector("#audio_spin").muted = true;
    document.querySelector("#audio_spin_win").muted = true;
    document.querySelector("#audio_spin_end").muted = true;
    console.log("page muted");
  }
}

function post(data) {
  const postData = JSON.stringify(data);
  fetch("https://frontendeksamen2019-2ef9.restdb.io/rest/accounts", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de0eb264658275ac9dc207c",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      localStorage.setItem("identity", data._id);
      localStorage.setItem("credit", document.querySelector("#score").textContent);
      window.location.href = "login.html";
    });
}

document.querySelector("button").addEventListener("click", e => {
  e.preventDefault();
  const un = document.querySelector("input[name=username]").value;
  const pw = document.querySelector("input[name=password]").value;
  const em = document.querySelector("input[name=email]").value;
  const cr = document.querySelector("#score").textContent;

  if (un == "" || pw == "" || em == "") {
    alert("Fill out all boxes");
  } else {
    post({
      username: un,
      password: pw,
      email: em,
      credit: cr
    });
  }
});

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
  document.querySelector(".close").style.color = "#ffffff";
});

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
  document.querySelector(".close").style.color = "#9C141E";
});

document.querySelector("#qMark").addEventListener("mouseover", openInfo);
document.querySelector("#qMark").addEventListener("mouseout", closeInfoBox);
function openInfo() {
  console.log("info");
  document.querySelector(".infoBox").classList.remove("info_close");
  document.querySelector(".infoBox").classList.add("info_open");
  document.querySelector(".infoBox").style.display = "grid";
}
function closeInfoBox() {
  document.querySelector(".infoBox").classList.remove("info_open");
  document.querySelector(".infoBox").classList.add("info_close");
  setTimeout(function() {
    document.querySelector(".infoBox").style.display = "none";
  }, 500);
}

document.querySelector(".welcome-btn").addEventListener("click", e => {
  e.preventDefault();
  document.querySelector(".welcome").classList.add("close-welcome");
  document.querySelector(".close-welcome").addEventListener("animationend", e => {
    document.querySelector(".welcome").style.display = "none";
  });
});
