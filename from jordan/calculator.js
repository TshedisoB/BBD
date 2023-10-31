// parameters 1 and 2 may be non-numeric SET ErrorMsg = 'Values must be numeric'
//as calculation operator passed to string

function calculator(value1, value2, operator) {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    return "Values must be numeric";
  }

  switch (operator) {
    case "Add":
      value1 + value2;
      break;
    case "Subtract":
      returnValue = value1 - value2;
      break;
    case "Multiply":
      returnValue = value1 * value2;
      break;
    case "Divide":
      returnValue = value1 / value2;
      break;
    default:
      returnValue = "INCORRECT OPERATOR";
  }
  return returnValue;
}

console.log(calculator(2, 3, "Add")); // 5
console.log(calculator(2, 3, "Multiply")); // 5
console.log(calculator(2, 3, "Subtract")); // 5
console.log(calculator(2, 3, "")); // INCORRECT OPERATOR
