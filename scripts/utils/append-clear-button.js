const displayElement = document.getElementById('box-display');

function appendNumber(number) {
  if (displayElement.innerText === '0') {
      displayElement.innerText = number;
  } 
  else {
      displayElement.innerText += number;
  }
}
function clearDisplay() {
  displayElement.innerText = '0';
}