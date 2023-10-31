function listNames(names) {
  console.time();
  let dic = {};
  if (names === undefined) return dic;
  names.forEach((element) => {
    if (!dic[element]) {
      dic[element] = 1;
    } else {
      dic[element]++;
    }
  });
  const sorted = Object.keys(dic)
    .sort()
    .reduce((accumulator, key) => {
      accumulator[key] = dic[key];
      return accumulator;
    }, {});
  return Object.keys(sorted)
    .map((i) => `${i} ${sorted[i]}`)
    .join("\n");
}
console.timeEnd();

// const listNames = (names) => {
//   const occObj = {};
//   for (let i = 0; i < names.length; i++) {
//     if(occObj[names[i]]){
//       occObj[names[i]] += 1;
//     }else{
//       occObj[names[i]] = 1
//     }
//   }
//   for (const person in occObj) {
//     console.log(person, occObj[person])
//   }
// }

console.log(
  listNames([
    "Albert",
    "Andrew",
    "Andrew",
    "Andrew",
    "Andrew",
    "Anne",
    "Ann",
    "Sam",
    "Sam",
  ])
);
