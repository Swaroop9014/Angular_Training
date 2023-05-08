let sumEvens = (arr) => {
    let sum = 0;
    for (const num of arr) {
      if (num % 2 === 0) {
        sum += num;
      }
    }
    return sum;
  }
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = sumEvens(numbers);
  
  let resultElement = document.getElementById("result");
  resultElement.textContent = "Sum of Even Numbers: " + result;
  