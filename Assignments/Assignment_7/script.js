let numbers = [4, -4, 10, 203, 53, 11];

let minimumValue = numbers.reduce((min, current) => {
  return (current < min) ? current : min;
});

let resultElement = document.getElementById("result");
resultElement.textContent = "Minimum Value: " + minimumValue;
