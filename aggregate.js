// parameters 1 and 2 may be non-numeric SET ErrorMsg = 'Values must be numeric'
//as calculation operator passed to string

function calc(value2, value1, operator) {
  let v1 = parseFloat(value1);
  let v2 = parseFloat(value2);

  // throw an error if v1 or v2 is not a number
  if (isNaN(v1) || isNaN(v2)) {
    throw ErrorMsg;
  }

  switch (operator) {
    case "Add":
      return v1 + v2;
    case "Subtract":
      return v1 - v2;
    case "Multiply":
      return v1 * v2;
    case "Divide":
      return v1 / v2;
    default:
      return ErrorMsg;
  }
}
console.log(calc(1, "2", "Multiply"));

/* 
double Calc (string value1, string value2, string calcOperator){
  float v1 = stof(vakue1);
  float v2 = stof(value2);
  float returnValue = 0;
  switch (calcOperator){
    case "Add":
      returnValue = v1 + v2;
      break;
    case "Subtract":
      returnValue = v1 - v2;
      break;
    case "Multiply":
      returnValue = v1 * v2;
      break;
    case "Divide":
      returnValue = v1 / v2;
      break;
    default:
      returnValue = 0;
      break;
      
  }
  return returnValue;
} */
