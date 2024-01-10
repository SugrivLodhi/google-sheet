
// Structure of our data that store and perform action
let sheetDb = [];

for (let i = 0; i < row; i++) {
  let rowDb = [];
  for (let j = 0; j < col; j++) {
    const cellProps = {
      bold: false,
      italic: false,
      underline: false,
      color: "#000",
      bgColor: "#000",
      fontSize: "14px",
      fontFamily: "Sans-serif",
      textAlign: "left",
    };
    rowDb.push(cellProps);
  }
  sheetDb.push(rowDb);
}

// access all the element which we perform action 
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let alignLeft = document.querySelector(".alignLeft");
let alignCenter = document.querySelector(".alignCenter");
let alignRight = document.querySelector(".alignRight");
let fontFamily = document.querySelector(".fontFamily");
let fontSize = document.querySelector(".fontSize");
let textColor = document.querySelector(".textColor");
let bgColor = document.querySelector(".bgColor");

// perform action to make the text bold
bold.addEventListener("click", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.bold = !cellProps.bold;
  cells.style.fontWeight = cellProps.bold ? "bold" : "normal";
});

// perform action to make the text italic
italic.addEventListener("click", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.italic = !cellProps.italic;
  cells.style.fontStyle = cellProps.italic ? "italic" : "normal";
});

// perform action to make the text underline
underline.addEventListener("click", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.underline = !cellProps.underline;
  cells.style.textDecoration = cellProps.underline ? "underline" : "none";
});

// perform action to align the text left
alignLeft.addEventListener("click", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.textAlign = "left";
  cells.style.textAlign = cellProps.textAlign;
});

// perform action to align the text center
alignCenter.addEventListener("click", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.textAlign = "center";
  cells.style.textAlign = cellProps.textAlign;
});

// perform action to align the text right
alignRight.addEventListener("click", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.textAlign = "right";
  cells.style.textAlign = cellProps.textAlign;
});

// perform action to change the text  color
textColor.addEventListener("change", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.color = textColor.value;
  cells.style.color = cellProps.color;
});

// perform action to change the background color
bgColor.addEventListener("change", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.bgColor = bgColor.value;
  cells.style.backgroundColor = cellProps.bgColor;
});

// perform action to change the font family
fontFamily.addEventListener("change", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.fontFamily = e.target.value;
  cells.style.fontFamily = cellProps.fontFamily;
});

// perform action to change the font size
fontSize.addEventListener("change", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.fontSize = e.target.value + "px";
  cells.style.fontSize = cellProps.fontSize;
});

// perform action to get the Active cell 
function getActiveCell(address) {
  const [rid, cid] = decodeRidCidAddress(address);
  // access the cell and storage
  let cells = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
  let cellProps = sheetDb[(rid, cid)];
  return [cells, cellProps];
}

// perform action to decode the address bar to know the actaul row and column
function decodeRidCidAddress(address) {
  const cid = Number(address.slice(1)) - 1;
  const rid = Number(address.charCodeAt(0)) - 65;
  return [rid, cid];
}
