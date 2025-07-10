function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num < max) {
      second = num;
    }
  }

  // If second never updated => all values were equal or only one unique value
  if (second === -Infinity) {
    return -Infinity;
  }

  return second;
}
