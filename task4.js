const rimNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

const number = 'IX';

let result = 0;

for (i = 0; i < number.length; i++) {
  const currDigit = number[i];
  const nextDigit = number[i + 1];
  if (currDigit < nextDigit) {
    result += rimNumbers[nextDigit] - rimNumbers[currDigit];
    i++;
    continue;
  }
  result += rimNumbers[currDigit];
}

console.log(result);
