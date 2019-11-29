console.log("haasd");

fetchSVG();

function fetchSVG() {
  console.log();
}

function clickColor() {}

window.addEventListener("DOMContentLoaded", event => {
  fetch("svg/slotmachine.svg")
    .then(response => response.text())
    .then(svg => {
      console.log(svg);
      document.querySelector("#slotmachine").innerHTML = svg;
      clickColor();
    });
});
