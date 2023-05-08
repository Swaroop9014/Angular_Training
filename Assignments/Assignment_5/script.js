var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//multiply by 10
var multipliedList = list.map((number) => number * 10);

// Display the multiplied list
var resultElement = document.getElementById("result");
resultElement.textContent = "Multiplied List: " + multipliedList.join(", ");
