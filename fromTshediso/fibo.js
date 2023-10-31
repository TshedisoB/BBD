function isFibonacci(valueToCheck, previousValue, currentValue) {
  return currentValue > valueToCheck
    ? false
    : currentValue === valueToCheck
    ? true
    : isFibonacci(valueToCheck, currentValue, previousValue + currentValue);
}
console.log(isFibonacci(55, 0, 1));

// ================================================================================================
