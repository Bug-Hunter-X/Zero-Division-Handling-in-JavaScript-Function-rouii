function myFunction(a, b) {
  if (a === 0 || b === 0) {
    throw new Error("Division by zero or zero as dividend is not allowed");
  }
  return a / b; 
}