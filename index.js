const container = document.querySelector(".gridContainer");
container.addEventListener("mouseover", (evt) => {
  evt.target.classList.add("hover");
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  evt.target.style.backgroundColor = `rgb(${r}, ${b}, ${g})`;
});

function createGrid(size) {
  for (let rows = 0; rows < size; rows++) {
    const rowEm = document.createElement("div");
    rowEm.classList.add("js-row");
    container.appendChild(rowEm);
    for (let cols = 0; cols < size; cols++) {
      const colEm = document.createElement("div");
      colEm.classList.add("js-gridDiv");
      rowEm.appendChild(colEm);
    }
  }
}

function getPrompt(promptStr) {
  const sizeStr = prompt(promptStr);
  return parseInt(sizeStr);
}

const btn = document.getElementById("js-promptButton");
btn.addEventListener("click", (e) => {
  let choice;
  let isValid;
  let promptString = "Enter Grid Size";
  do {
    choice = getPrompt(promptString);
    const lessThan100 = choice < 101;
    const isAnumber = !isNaN(choice);
    isValid = lessThan100 && isAnumber;
    if (!isValid) {
      promptString = "Enter a number less than 100";
    }
  } while (!isValid);
  container.innerHTML = "";
  createGrid(choice);
});
