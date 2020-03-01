const allButtons = document.querySelectorAll("button");
const bgColor = localStorage.getItem("bgcolor");
const txtColor = localStorage.getItem("txtcolor");
const fontSize = localStorage.getItem("fontsize");
const lineSpace = localStorage.getItem("linespace");
const fontStyle = localStorage.getItem("fontstyle");

if (bgColor) document.body.style.backgroundColor = bgColor;
if (txtColor) document.body.style.color = txtColor;
if (fontSize) document.body.style.fontSize = fontSize;
if (lineSpace) document.body.style.lineHeight = lineSpace;
if (fontStyle) document.body.style.fontFamily = fontStyle;


for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', function(event) {
    let valor = allButtons[i].value;
    localStorage.setItem(allButtons[i].className, allButtons[i].value)
    if (allButtons[i].className == "bgcolor") {
      document.body.style.backgroundColor = allButtons[i].value;
    } else if (allButtons[i].className == "txtcolor") {
      document.body.style.color = allButtons[i].value;
    } else if (allButtons[i].className == "fontsize") {
      document.body.style.fontSize = allButtons[i].value;
    } else if (allButtons[i].className == "linespace") {
      document.body.style.lineHeight = allButtons[i].value;
    } else if (allButtons[i].className == "fontstyle") {
      document.body.style.fontFamily = allButtons[i].value;
    }
  })
}