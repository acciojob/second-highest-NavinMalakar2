function secondHighest(arr) {
  if (arr.length === 0 || arr.length === 1) return undefined;

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

 
  if (second === -Infinity) {
    // Check if all elements are same
    const allSame = arr.every(val => val === max);
    if (allSame) return max;
    return undefined;
  }

  return second;
}
