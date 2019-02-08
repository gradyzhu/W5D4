Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i])
  };
  return this;
};

Array.prototype.myMap = function(callback) {
  const arr = [];

  // const cb = function(el) {
  //   arr.push(callback(el));
  // };

  this.myEach(el => {
    arr.push(callback(el));
  });

  return arr;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let skip = false;
  if (!initialValue) {
    initialValue = this[0];
    skip = true;
  };
  
  this.myEach(el => {
    if (!skip) {
      initialValue = callback(initialValue, el);
    } else {
      skip = false;
    };
  });

  return initialValue;
};