// format number-date
// number portion is the last 5 numbers of the given number, prefix with zero if shorter
// date portion is YYMMDD - it must be 6 characters

function formatNumberDate(number, date) {
  let numberString = number.toString();
  console.log(date);
  let dateArray = date.split("-");
  let year = dateArray[0].slice(2);
  let month = dateArray[1];
  let day = dateArray[2];
  let datePortion = year + month + day;
  let numberPortion = numberString.slice(-5);
  if (numberPortion.length < 5) {
    numberPortion = "0" + numberPortion;
  }
  return numberPortion + datePortion;
}

console.log(formatNumberDate(123456789, 20200101));
