function compare(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN explicitly
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

console.log(compare(NaN, NaN)); // Returns NaN
console.log(compare(5, NaN)); // Returns NaN
console.log(compare(NaN, 5)); // Returns NaN
console.log(compare(5,10)); // Returns -1