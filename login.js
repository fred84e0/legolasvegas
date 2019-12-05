import { NONAME } from "dns";

// BURGERMENU

let win1 = "";
let win2 = "";
let win3 = "";

let identity = localStorage.getItem("identity");

start();
function start() {
  document.querySelector("#mute-btn").addEventListener("click", muteSite);

  document.querySelectorAll(".close").forEach(em => {
    em.addEventListener("click", closeModal);
  });
}

window.addEventListener("DOMContentLoaded", event => {
  fetch("svg/slotmachine.svg")
    .then(response => response.text())
    .then(svg => {
      document.querySelector("#slotmachine").innerHTML = svg;
      loadgif();
    });
});

window.addEventListener("DOMContentLoaded", event => {
  fetch("svg/mute.svg")
    .then(response => response.text())
    .then(svg => {
      document.querySelector(".mute").innerHTML = svg;
    });
});

function loadgif() {
  let credit = document.querySelector("#credit");
  credit.textContent = 3;

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
  document.querySelector("#hold1").addEventListener("click", () => {
    console.log("checked");

    document.querySelector("#group1").classList.toggle("checked");
    document.querySelector("#hold1").classList.toggle("uncheckedButton");
  });

  document.querySelector("#hold2").addEventListener("click", () => {
    document.querySelector("#group2").classList.toggle("checked");
    document.querySelector("#hold2").classList.toggle("uncheckedButton");
  });

  document.querySelector("#hold3").addEventListener("click", () => {
    document.querySelector("#group3").classList.toggle("checked");
    document.querySelector("#hold3").classList.toggle("uncheckedButton");
  });
}

function fetchgif() {
  credit.textContent--;

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
    return (win3 = document.querySelector("#pos8").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2600);
}

function checkwin() {
  console.log(win1);
  console.log(win2);
  console.log(win3);

  if (win1 == win2 && win2 == win3 && win3 == win1) {
    console.log("you've won");
  } else {
    console.log("you didnt win");
  }
  holdOption();
}

function specialSpinOut1() {
  setTimeout(function() {
    document.querySelector("#image1").style.opacity = "0";
    document.querySelector("#group1").style.opacity = "1";
    document.querySelector("#group1").classList.add("bounce_in");

    document.querySelector("#pos1").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos2").setAttribute("xlink:href", `svg/5.svg`);
    document.querySelector("#pos3").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);

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
    return (win2 = document.querySelector("#pos5").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2100);

  setTimeout(function() {
    document.querySelector("#image3").style.opacity = "0";
    document.querySelector("#group3").style.opacity = "1";
    document.querySelector("#group3").classList.add("bounce_in");

    document.querySelector("#pos7").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos8").setAttribute("xlink:href", `${holdOption}`);
    document.querySelector("#pos9").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
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
    return (win1 = document.querySelector("#pos5").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 1800);

  setTimeout(function() {
    document.querySelector("#image3").style.opacity = "0";
    document.querySelector("#group3").style.opacity = "1";
    document.querySelector("#group3").classList.add("bounce_in");

    document.querySelector("#pos7").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos8").setAttribute("xlink:href", `${holdOption}`);
    document.querySelector("#pos9").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
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
    return (win2 = document.querySelector("#pos5").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
  }, 2100);

  setTimeout(function() {
    document.querySelector("#image1").style.opacity = "0";
    document.querySelector("#group1").style.opacity = "1";
    document.querySelector("#group1").classList.add("bounce_in");

    document.querySelector("#pos1").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
    document.querySelector("#pos2").setAttribute("xlink:href", `${holdOption}`);
    document.querySelector("#pos3").setAttribute("xlink:href", `svg/${Math.floor(Math.random() * 9 + 1)}.svg`);
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

// document.querySelector("#dropdown").addEventListener("mouseover", () => {
//   document.querySelector(".options").style.display = "flex";
//   document.querySelector(".options").classList.add("showdrop");
// });
// document.querySelector("#dropdown").addEventListener("mouseout", () => {
//   document.querySelector(".options").style.display = "none";
// });

get();

function get() {
  fetch(`https://frontendeksamen2019-2ef9.restdb.io/rest/accounts?q={"_id": "${identity}"}`, {
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
  document.querySelector(".profile-name").innerHTML = account.username;
  document.querySelector(".username").innerHTML = account.username;
  document.querySelector(".mail").innerHTML = account.email;
  document.querySelector(".password").innerHTML = account.password;
}

document.querySelector(".edit_profile_button").addEventListener("click", openEditProfile);

function openEditProfile() {
  document.querySelector(".edit_profile").style.display = "block";

  document.querySelector(".edit_button").addEventListener("click", e => {
    e.preventDefault();
    const un = document.querySelector("input[name=username]").value;
    const pw = document.querySelector("input[name=password]").value;
    const em = document.querySelector("input[name=email]").value;
    editProfile({
      username: un,
      password: pw,
      email: em
    });
  });
}

function editProfile(editData) {
  let postData = JSON.stringify(editData);

  fetch(`https://frontendeksamen2019-2ef9.restdb.io/rest/accounts/${identity}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5de0eb264658275ac9dc207c",
      "cache-control": "no-cache"
    },
    body: postData
  })
    .then(d => d.json())
    .then(t => console.log(t));
}
