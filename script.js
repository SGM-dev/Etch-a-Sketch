const grid = document.querySelector(".grid");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
      let currentOpacity = +this.style.opacity;
      if (currentOpacity < 1) currentOpacity += 0.1;
      this.style.opacity = currentOpacity;
    });
    grid.appendChild(div);
  }
};