const arr1 = [1, 4, 6];
const arr2 = [11, 33, 22];

const result = arr1.sort((a, b) => {
  const aIndex = arr1.indexOf(a);
  const bIndex = arr1.indexOf(b);
  if (arr2[aIndex] < arr2[bIndex]) return -1;
  if (arr2[aIndex] > arr2[bIndex]) return 1;
  else return 0;
});

console.log(result);
