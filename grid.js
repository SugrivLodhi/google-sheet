let row = 100;
let col = 26;
let columContainer = document.querySelector(".col-container");
let addressBar = document.querySelector(".address-bar");
let rowContainer = document.querySelector(".address-row-cont");
let cellContainer = document.querySelector(".cell-container");

//insert address column elment
for (let i = 0; i < row; i++) {
  let columnCell = document.createElement("div");
  columnCell.innerText = i + 1;
  columnCell.setAttribute("class", "address-col");
  columContainer.appendChild(columnCell);
}

//insert address row  elment
for (let i = 0; i < col; i++) {
  let rowCell = document.createElement("div");
  rowCell.innerText = String.fromCharCode(65 + i);
  rowCell.setAttribute("class", "address-row");
  rowContainer.appendChild(rowCell);
}

//show the address bar column in form of Alphabet
const addressBarHandler = (cell, i, j) => {
  cell.addEventListener("click", () => {
    let rowId = String.fromCharCode(65 + j);
    let colId = i + 1;
    addressBar.value = `${rowId}${colId}`;
  });
};

//Insert text box in row and column
for (let i = 0; i < row; i++) {
  let rouCount = document.createElement("div");
  rouCount.setAttribute("class", "row-cont");
  for (let j = 0; j < col; j++) {
    const cell = document.createElement("div");
    cell.setAttribute("rid", j);
    cell.setAttribute("cid", i);
    cell.setAttribute("contenteditable", "true");
    cell.setAttribute("spellcheck", "false");
    cell.setAttribute("class", "cell");
    rouCount.appendChild(cell);
    addressBarHandler(cell, i, j);
  }
  cellContainer.appendChild(rouCount);
}

//by default click on first cell

let firstCell = document.querySelector(".cell");
firstCell.click();
