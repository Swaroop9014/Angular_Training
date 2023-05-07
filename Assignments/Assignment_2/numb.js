var number = 42.0;
var resultElement = document.getElementById("output");

if (Number.isInteger(number)) {
  resultElement.textContent = number + " is an integer.";
} else {
  resultElement.textContent = number + " is not an integer.";
}
