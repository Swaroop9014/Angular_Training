// Boolean
var isTrue: boolean = true;
var isFalse: boolean = false;

console.log(isTrue); 
console.log(isFalse); 

// Any
var anyValue: any = 5;
console.log(anyValue); 

anyValue = 'Hello';
console.log(anyValue);

// Array of Strings
var cars: string[] = ['Mercedes', 'BMW', 'Bugatti'];
console.log(cars); 

// Heterogeneous Array
var mixedArray: (string | number | boolean)[] = ['Bugatti', 5, true];
console.log(mixedArray); 
