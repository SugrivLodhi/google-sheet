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
      fontSize: "14",
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
// let alignLeft = document.querySelector(".alignLeft");
// let alignCenter = document.querySelector(".alignCenter");

let alignment = document.querySelectorAll(".alignment");
let alignLeft = alignment[0];
let alignCenter = alignment[1];
let alignRight = alignment[2];

let fontFamily = document.querySelector(".fontFamily");
let fontSize = document.querySelector(".fontSize");
let textColor = document.querySelector(".textColor");
let bgColor = document.querySelector(".bgColor");
let activeColor = "red";
let inActiveColor = "transparent";
// perform action to make the text bold
bold.addEventListener("click", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.bold = !cellProps.bold;
  cells.style.fontWeight = cellProps.bold ? "bold" : "normal";
  bold.style.backgroundColor = cellProps.bold ? activeColor : inActiveColor;
});

// perform action to make the text italic
italic.addEventListener("click", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.italic = !cellProps.italic;
  cells.style.fontStyle = cellProps.italic ? "italic" : "normal";
  italic.style.backgroundColor = cellProps.italic ? activeColor : inActiveColor;
});

// perform action to make the text underline
underline.addEventListener("click", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.underline = !cellProps.underline;
  cells.style.textDecoration = cellProps.underline ? "underline" : "none";
  underline.style.backgroundColor = cellProps.underline
    ? activeColor
    : inActiveColor;
});

// perform action to change the text  color
textColor.addEventListener("change", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.color = textColor.value;
  cells.style.color = cellProps.color;
  textColor.value= cellProps.color
});

// perform action to change the background color
bgColor.addEventListener("change", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.bgColor = bgColor.value;
  cells.style.backgroundColor = cellProps.bgColor;
  bgColor.value = cellProps.bgColor
});

// perform action to change the font family
fontFamily.addEventListener("change", () => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.fontFamily = fontFamily.value;
  cells.style.fontFamily = cellProps.fontFamily;
  fontFamily.value = cellProps.fontFamily
});

// perform action to change the font size
fontSize.addEventListener("change", (e) => {
  let [cells, cellProps] = getActiveCell(addressBar.value);
  cellProps.fontSize = fontSize.value + "px";
  cells.style.fontSize = cellProps.fontSize;
  fontSize.value = cellProps.fontSize
});

// // perform action on alignment text
alignment.forEach((element) => {
  element.addEventListener("click", (e) => {
    let [cells, cellProps] = getActiveCell(addressBar.value);
    let alignValue = e.target.classList[0];
    cellProps.textAlign = alignValue; //Data change
    cells.style.textAlign = cellProps.textAlign; //ui change

    switch (alignValue) {
      case "left":
        alignLeft.style.backgroundColor = activeColor;
        alignCenter.style.backgroundColor = inActiveColor;
        alignRight.style.backgroundColor = inActiveColor;
        break;
      case "center":
        alignLeft.style.backgroundColor = inActiveColor;
        alignCenter.style.backgroundColor = activeColor;
        alignRight.style.backgroundColor = inActiveColor;
        break;
      case "right":
        alignLeft.style.backgroundColor = inActiveColor;
        alignCenter.style.backgroundColor = inActiveColor;
        alignRight.style.backgroundColor = activeColor;
        break;
    }
  });
});

// get all cell and apply default and selected property on each cell 
  
let allCells = document.querySelectorAll('.cell') 

 for(let i=0; i<allCells.length; i++){
    addAttchedPropertyOnEachCell(allCells[i])
 }

  function  addAttchedPropertyOnEachCell(cells){
      cells.addEventListener("click",()=>{
        const [rid,cid] = decodeRidCidAddress(addressBar.value)
        let cellProps = sheetDb[rid][cid]

        // cells property ui change
        cells.style.fontWeight = cellProps.bold ? "bold" : "normal";
        cells.style.fontStyle = cellProps.italic ? "italic" : "normal";
        cells.style.textDecoration = cellProps.underline ? "underline" : "none";
        cells.style.color = cellProps.color;
        cells.style.backgroundColor = cellProps.bgColor ==="#000"?"transparent":cellProps.bgColor;
        cells.style.fontFamily = cellProps.fontFamily;
        cells.style.fontSize = cellProps.fontSize + "px";
        cells.style.textAlign = cellProps.textAlign

        // action container Ui change active /inactive
        bold.style.backgroundColor = cellProps.bold ? activeColor : inActiveColor;
        italic.style.backgroundColor = cellProps.italic ? activeColor : inActiveColor;
        underline.style.backgroundColor = cellProps.underline
        ? activeColor
        : inActiveColor;
        
        fontSize.value = cellProps.fontSize
        fontFamily.value= cellProps.fontFamily
        
        switch (cellProps.textAlign) {
          case "left":
            alignLeft.style.backgroundColor = activeColor;
            alignCenter.style.backgroundColor = inActiveColor;
            alignRight.style.backgroundColor = inActiveColor;
            break;
          case "center":
            alignLeft.style.backgroundColor = inActiveColor;
            alignCenter.style.backgroundColor = activeColor;
            alignRight.style.backgroundColor = inActiveColor;
            break;
          case "right":
            alignLeft.style.backgroundColor = inActiveColor;
            alignCenter.style.backgroundColor = inActiveColor;
            alignRight.style.backgroundColor = activeColor;
            break;
        }
      })
  }

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
