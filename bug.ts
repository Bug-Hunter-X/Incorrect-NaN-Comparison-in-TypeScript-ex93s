function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0; 
  }
}

console.log(compare(NaN, NaN)); //This will return 0, which is incorrect. NaN should not be equal to itself.