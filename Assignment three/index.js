// First Approach: Using Recursion (Better than the second approach)
const contains = (obj, val) => {
  for (const el in obj) {
    if (typeof obj[el] === "object") {
      if (contains(obj[el], val)) {
        return true;
      }
    } else {
      if (obj[el] === val) {
        return true;
      }
    }
  }
  return false;
};

// Second Approach: Flatten the nested object and search for the wanted value
// const flatten = (obj, roots = [], sep = ".") => {
//   return Object.keys(obj).reduce((memo, prop) => {
//     const key = roots.concat([prop]).join(sep);
//     if (
//       typeof obj[prop] === "object" &&
//       !Array.isArray(obj[prop]) &&
//       obj[prop] !== null
//     ) {
//       Object.assign(memo, flatten(obj[prop], roots.concat([prop]), sep));
//     } else {
//       memo[key] = obj[prop];
//     }
//     return memo;
//   }, {});
// };

// const contains = (obj, val, flat = flatten(obj), res = false) => {
//   for (const el in flat) {
//     if (flat[el] === val) res = true;
//   }
//   return res;
// };

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

console.log(contains(nestedObject, 44));
