function trailingZeros(n) {
  let count = 0;
  for (let i = 5; Math.floor(n / i) >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

// Prompt input and alert output
const input = parseInt(prompt("Enter a non-negative integer:"));
if (!isNaN(input) && input >= 0) {
  alert(trailingZeros(input));
} else {
  alert("Invalid input. Please enter a non-negative integer.");
}
