// Task 3: Factorial of a number using prompt, function, console.log, and alert
function factorial(n) {
  if (n < 0) return undefined; // factorial not defined for negatives
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const inputStr = prompt("Enter a non-negative integer to compute its factorial:");
const num = parseInt(inputStr, 10);

if (isNaN(num) || num < 0) {
  alert("Please enter a valid non-negative integer.");
} else {
  const fact = factorial(num);
  console.log(`Factorial of ${num} is ${fact}`);
  alert(`Factorial of ${num} is ${fact}`);
}
