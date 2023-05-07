// Output my name in italics
console.log("%cYour Name", "font-style: italic;");
document.getElementById("name").innerHTML = "Name: <em>A Jyothi Swaroop</em>";

// Output the city of my birth
console.log("City of birth:");
document.getElementById("birth-city").textContent = "City of birth: Tanuku";

// Output my hobbies in an unordered list
console.log("Hobbies: ");
var hobbies = ["badminton", "Long Rides", "Video Games"];
var hobbyList = document.getElementById("hobbies");

for (var i = 0; i < hobbies.length; i++) {
  var hobbyItem = document.createElement("li");
  hobbyItem.textContent = hobbies[i];
  hobbyList.appendChild(hobbyItem);
}
