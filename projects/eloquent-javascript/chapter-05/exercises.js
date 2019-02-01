// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function flatten(arr) {
//use the reduce method in combination with the concat method to flatten an array of arrays into a single array that has all the elements of the original array.
  return arr.reduce((a, b) => a.concat(b));

}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(val, test, update, body) {
  if (!test(val)) {
  return false;
  }
  body(val);
  val = update(val);
  loop(val, test, update, body);
  
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  for (var ele of array) {
    if (!test(ele)) {
      return false;
    }
  }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  let count = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    if (script) {
      return script.direction 
      } 
      return "none";
  }).filter(({name}) => {
    return name != "none";
  });

  if (count.length == 0) return "ltr";

  return count.reduce((accumulator, currentValue) => {
    if (accumulator.count > currentValue.count) {
      return accumulator;
    }
      return currentValue;
  }).name
}


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
