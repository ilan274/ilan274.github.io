// Get input and paste into the page
document
  .querySelector("#text-input")
  .addEventListener("input", () => {
    document.querySelector("#meme-text").innerHTML = document.querySelector(
      "#text-input"
    ).value;
  });

var loadFile = (event) => {
  var image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(event.target.files[0]);
};

const getDiv = document.querySelector("div");
const borderStyle = ['3px dashed red', '5px double blue', '6px groove green'];

// // Event listeners
['button1', 'button2', 'button3'].forEach((el, index) => {
  document.getElementById(`${el}`)
    .addEventListener('click', () => {
      getDiv.style.border = borderStyle[index];
    });
});

const getMainImage = document.getElementById("meme-image");

['meme-1', 'meme-2', 'meme-3', 'meme-4'].forEach((el, index) => {
  document.getElementById(`${el}`)
    .addEventListener("click", () => {
      getMainImage.src = `./imgs/meme${index + 1}.jpeg`;
    });
});
