var currentDateElement = document.getElementById("currentDate");

var currentDate = new Date();
currentDateElement.textContent = "Current Date: " + currentDate.toDateString();
