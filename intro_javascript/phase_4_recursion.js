const range = function(start, end) {
  if (start === end) return [start];
  return [start].concat(range(start+1, end))
};


const sumRec = function(arr) {
  if (arr.length === 0) return [0];
  return arr[0] + sumRec(arr.slice(1));
};

const exponent = function(base, exp) {
  if (exp === 0) return 1;
  return base * exponent(base, exp-1);
};

const fibonacci = function(n) {
  if (n === 0 || n === 1) return [1];

  return [n].concat(fibonacci(n-1)[-1] + fibonacci(n-1)[-1])
};
