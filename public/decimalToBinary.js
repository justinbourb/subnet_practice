function decimalToBinary(input) {
  let leadingZero = '';
  let binaryLength;
  let results;
  let binary = parseInt(input).toString(2);
  binaryLength = binary.length;
  
  if (binaryLength < 8) {
    while (binaryLength < 8) {
      leadingZero += '0'
      binaryLength += 1;
    }
    results = leadingZero.concat(binary);
    return results
  } else {
    return binary    
  }
  
}