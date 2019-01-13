// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-pepperoncini');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    return _.filter(array, (e) => e.gender === 'male').length;
};

var femaleCount = function(array) {
    return _.filter(array, (e) => e.gender === 'female').length;
};

var oldestCustomer = function(array) {
    const customer = _.reduce(array, (acc, val) => {
       if (val.age > acc.age) {
           acc = val;
       }
    return acc;
    });
    return customer.name;
};

var youngestCustomer = function(array) {
    const customer = _.reduce(array, (acc, val) => {
       if (val.age < acc.age) {
           acc = val;
       }
    return acc;
    });
    return customer.name;
};

var averageBalance = function(array) {
   const strBalanceArr = _.pluck(array, 'balance');
    const newBalanceArr = _.map(strBalanceArr, (e) => {
        const f = e.slice(1);
        const g = f.split(",");
        return parseFloat(g.join(""));
   });
    const totalNumber = _.reduce(newBalanceArr, (acc, val) => {
       acc += val;
       return acc;
   });
   return totalNumber / newBalanceArr.length;
};

var firstLetterCount = function(array, letter) {
    return _.reduce(array, (acc, val) => {
        if (val.name[0].toLowerCase() === letter.toLowerCase()) {
            acc += 1;
            return acc;
        }        
            return acc;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter) {
    const customerObj = _.filter(array, (e) => e.name === customer) ;
    const customerFriends = customerObj[0].friends;
    return _.reduce(customerFriends, (acc, val) => {
        if (val.name[0].toLowerCase() === letter.toLowerCase()) {
            acc += 1;
            return acc;
        }        
            return acc;
    }, 0);
};

var friendsCount = function(array, name) {
    //need to access each object in each friends array of each customer object in the array
    const friendArray = [];
    _.each(array, (cObj) => {
        _.each(cObj.friends, (e) => {
            if (e.name === name) {
                friendArray.push(cObj.name);
            }
        });
    });
    return friendArray;
};

var topThreeTags = function(array) {
    const tagArray = (_.pluck(array, "tags"));
    const flattened = [].concat.apply([], tagArray);
    const counts = {};
    _.each(flattened, (ele) => {
        counts[ele] = (counts[ele] || 0)+1;
    });
    const sortable = [];
    _.each(counts, (value, key) => {
        sortable.push([value, key]);
    });
    sortable.sort();
    const topThree = sortable.slice(sortable.length - 3, sortable.length)
    const flattenedThree = [].concat.apply([], topThree)
    return _.filter(flattenedThree, (e) => _.typeOf(e) === 'string')
    
};

var genderCount = function(array) {
    const genderArray = (_.pluck(array, "gender"));
    const counts = {};
    _.each(genderArray, (ele) => {
        counts[ele] = (counts[ele] || 0)+1;
    });
    return counts;
};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
