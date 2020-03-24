let clickCount = 0;
let clickCountElement = document.getElementById( 'click-count' );
document.getElementById('counter').addEventListener('click', () => {
  clickCount += 1;
  clickCountElement.innerHTML = clickCount;
})