var arrMax = [5, 10, 8, 3, 2, 7, 9];

// Find the largest number using arrow function and forEach
var largestNumber = 0;
arrMax.forEach((number) => {
  if (number > largestNumber) {
    largestNumber = number;
  }
});

// Displaying the largest number
var resultElement = document.getElementById("result");
resultElement.textContent = "The largest number is: " + largestNumber;
