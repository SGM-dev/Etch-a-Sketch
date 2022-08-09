const grid = document.querySelector(".grid");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//gets random color
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//resets the canvas using the 'reset' button
const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].style.backgroundColor = "white";
  }
});

// chooses random color to sketch
const rgb = document.querySelector("#rgb");
rgb.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = getRandomColor();
    });
  }
});

// sets black as color
const black = document.querySelector("#black");
black.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = "black";
    });
  }
});

createGrid();