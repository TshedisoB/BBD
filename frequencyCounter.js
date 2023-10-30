// find the frequency of the words occurring in the input, in other words find the number of times a word occurs in the given passage.
// Input: My name is Xyz He is Abc Is he allright
// Output: MY 1
//         NAME 1
//         IS 3
//         XYZ 1
//         HE 1
//         ABC 1
//         ALLRIGHT 1

// function frequencyCounter(input) {
//   input = input.toLocaleUpperCase();
//   let arr = input.split(" ");
//   let frequency = new Map();
//   let result = "";
//   arr.forEach((elem) => {
//     if (!frequency.get(elem)) {
//       frequency.set(elem, 1);
//     } else {
//       frequency.set(elem, frequency.get(elem) + 1);
//     }
//   });
//   for (let [key, value] of frequency) {
//     result = result + key + " " + value + "\n";
//   }
//   process.stdout.write(result); // Writing output to STDOUT
// }

// console.log(
//   frequencyCounter(
//     "Bannari Bannari Amman Institute of Technology is an autonomous engineering"
//   )
// );

// function frequencyCounter(str) {
//   const splitStr = str.split(" ");
//   let result = {};

//   splitStr.map((words) => {
//     if (result[words] === undefined) {
//       result[words] = 1;
//     } else result[words] += 1;
//   });

//   for (let [key, value] of Object.entries(result)) {
//     console.log(`${key} ${value}`);
//   }
// }

function frequencyCounterUsingArray(str) {
  const splitStr = str.split(" ");
  let result = [];

  splitStr.map((words) => {
    // console.log(words);
    if (result[words] === undefined) {
      result[words] = 1;
    } else result[words] += 1;
  });

  for (let key in result) {
    console.log(`${key} ${result[key]}`);
  }
}

// frequencyCounter("Geeks for Geeks");
frequencyCounterUsingArray("Geeks for Geeks");
