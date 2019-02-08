Array.prototype.uniq = function() {
  const unique = [];

  this.forEach(el => {
    if (!unique.includes(el)) {
      unique.push(el);
    };
  });

  return unique;
};

Array.prototype.twoSum = function() {
  const arr = [];

  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        arr.push([i, j]);
      };
    };
  };

  return arr
};

Array.prototype.transpose = function(){
  const trans = [];

  for (let i = 0; i < this.length; i++) {
    let subs = [];
    for (let j = 0; j < this.length; j++) {
      subs.push(this[j][i]);
    };
    trans.push(subs);
  };

  return trans;
};

// [[1,2,3]
// [4,5,6]
// [7,8,9]]

// [[1,4,7]
// [2,5,8]
// [3,6,9]]