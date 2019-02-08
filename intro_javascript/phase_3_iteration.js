
Array.prototype.bubbleSort = function() {
  let notSorted = true;
  while (notSorted) {
    notSorted = false;
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i+1]] = [this[i+1], this[i]]
        notSorted = true
      };
    };
  };

  return this;

  // while
  // sorted = false
  // i = 0
  // until sorted
  //  sorted === true
  //  iterate through once
  //  
  // i, j = j, i 
}

String.prototype.subStrings = function() {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      array.push(this.slice(i, j+1));
    };
  };

  return array.unique();
};

