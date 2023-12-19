function reverseString(inputString) {
    return inputString.split('').reverse().join('');
  }
  
  let kata = "rinduy";
  let kataTerbalik = reverseString(kata);
  console.log('String Terbalik: ' + kataTerbalik)
  