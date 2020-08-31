const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (r = 0; r < (rows * cols); r++) {
    let row = document.createElement("div");
    row.innerText = (r + 1);
    container.appendChild(row).className = "grid-item";
  };
};

makeRows(16, 16);