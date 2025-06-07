// Task 4: Temperature categorization
const tempInput = prompt("Enter temperature in °C:");
const tempVal = parseFloat(tempInput);

if (isNaN(tempVal)) {
  alert("Please enter a valid number for temperature.");
} else {
  let category;
  if (tempVal < 0) {
    category = "Freezing";
  } else if (tempVal <= 15) {
    category = "Cold";
  } else if (tempVal <= 30) {
    category = "Moderate";
  } else {
    category = "Hot";
  }
  console.log(`Temperature ${tempVal}°C is classified as: ${category}`);
  alert(`Temperature ${tempVal}°C is classified as: ${category}`);
}
