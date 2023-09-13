const all = (list, callback, val = true) => {
  list.forEach((el) => {
    if (!callback(el)) val = false;
  });
  return val;
};

console.log(all([1, 4, 5], (num) => num < 7));
