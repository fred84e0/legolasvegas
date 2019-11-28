console.log("haasd");
console.log(fetchSVG);

fetchSVG();

function fetchSVG() {
  console.log("hallooo");
  fetch("svg/slotmachine.svg")
    .then(response => response.text())
    .then(svg => {
      document.querySelector("#slotmachine").innerHTML = svg;
      clickColor();
    });
}

function clickColor() {}
