let words = ['cool', 'lock', 'cook'];
// let words = ['bella', 'label', 'roller'];

let globalCount;

for (word of words) {
  const currCount = {};

  for (char of word) {
    !currCount[char] && (currCount[char] = 0);
    currCount[char]++;
  }

  if (!globalCount) {
    globalCount = { ...currCount };
  }

  for (char in globalCount) {
    if (currCount[char]) {
      globalCount[char] = Math.min(globalCount[char], currCount[char]);
    } else {
      globalCount[char] = 0;
    }
  }
}

const result = [];
for (item in globalCount) {
  if (globalCount[item] > 0) {
    for (i = 0; i < globalCount[item]; i++) {
      result.push(item);
    }
  }
}
console.log(result);
