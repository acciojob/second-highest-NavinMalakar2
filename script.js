function secondHighest(arr) {
  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      if (num !== max) 
		  second = max; 
	      max = num; 
    } else if (num > second && num < max) {
      second = num;
    }
  }

  return second;
}
