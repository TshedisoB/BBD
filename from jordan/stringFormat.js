function formatAsCustomString(date, number) {
  return padLeft(number, 5) + "-" + formatDate(date);
}

function padLeft(str, max) {
  str = str.toString();
  return str.length === max ? str : padLeft("0" + str, max);
}

function formatDate(date) {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear().toString().slice(-2);
  month = Number(month);
  day = Number(day);
  if (month.length < 10) month = "0" + month;
  if (day.length < 10) day = "0" + day;
  return [year, month, day].join("");
}
console.log(formatAsCustomString("1990-12-22", 12345));
