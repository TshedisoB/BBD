function isFibo(valueToCheck) {
  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
  // create an x and y
  let x = 0;
  let y = 1;
  // have a while loop to iterate until we either exceed or get to our validity check
  while(y !== valueToCheck){
    let tempVar = y;
    y = x+y;
    x = tempVar
    if(y > valueToCheck){
      return false
    }
  }

  return true
}

console.log(isFibo(3)); //true
console.log(isFibo(1)); //true
console.log(isFibo(21)); //true
console.log(isFibo(4)); //false


// let check1 = (5*Math.pow(valueToCheck, 2) + 4);
// let check2 = (5*Math.pow(valueToCheck, 2) - 4);
// return Number.isInteger(Math.sqrt(check1)) || Number.isInteger(Math.sqrt(check2))