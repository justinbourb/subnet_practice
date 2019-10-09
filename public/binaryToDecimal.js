function binaryToDecimal(input) {
  let results = parseInt(input, 2);
  if (typeof(results) === 'number' && isNaN(results) === false) {
    return results
  } else {
    return 'Please enter a valid binary number.'
  }
  
}