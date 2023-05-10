var Person;
(function (Person) {
    Person["Name"] = "Logan";
    Person["Age"] = "23";
    Person["Loc"] = "Hyderabad";
})(Person || (Person = {}));
console.log('Enum values:');
console.log(Person.Name);
console.log(Person.Age);
console.log(Person.Loc);
