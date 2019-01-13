//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//Should take an object and return its values in an array
    var arr = [];
    for (var key in object) {
        arr.push(object[key])
    }
    return arr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var arr = [];
//Should take an object and return all its keys in a string each separated with a space
for (var key in object) {
    arr.push(key);
}
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
//Should take an object and return all its keys in a string each separated with a space
        for (var key in object) {
            if (typeof(object[key]) === 'string') {
            
            arr.push(object[key]);
            }
}
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    }
        return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
     let upperString = string[0].toUpperCase();
     let restString = string.slice(1);
     return upperString + restString;

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var arr = string.split(' ');
    var returnArr = [];
    for (var i = 0; i < arr.length; i++) {
        let upperString = arr[i][0].toUpperCase();
        let restString = arr[i].slice(1);
        returnArr.push(upperString + restString);
    }
    return returnArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
// Should take an object with a name property and return 'Welcome <Name>!
return `Welcome ${object.name[0].toUpperCase() + object.name.slice(1)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name an a species and return '<Name> is a <Species>' 
function profileInfo(object) {
return `${object.name[0].toUpperCase() + object.name.slice(1)} is a ${object.species[0].toUpperCase() + object.species.slice(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (!object.noises) {
        return 'there are no noises';
    }
    else if (object.noises.length === 0) {
        return 'there are no noises';
    }
    else if (object.noises) {
        return object.noises.join(" ");
    }
    return 'there are no noises';
    }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Take a string of words and a word
function hasWord(string, word) {
// return true if <word> is in <string of words>
    if (string.search(word) >= 0) {
        return true;
    }
//otherwise return false
    else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take a name and an object 
function addFriend (name, object) {
    //add the name to the object's friends array then return the object
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //return true if <name> is a friend of <object>
    if (object.friends) {
        for (let ele in object.friends) {

            if (name === object.friends[ele]) {
                return true;
            }
        }
    }
    //otherwise return falses
    return false;
    
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take a name and an array of people objects
function nonFriends(name, array) {
    let nonFriendsList = [];
// first, find the friend list of the name given
    let friendsArray = (name, array) => {
        for (let obj of array) {
            if (obj.name === name) {
                return obj.friends;
            }
        }
    };
    let fArray = friendsArray(name, array);
    // compare the friend array values to the name value in each of the person objects
    for (let obj of array) {
        if (obj.name !== name) {
        if (fArray.indexOf(obj.name) < 0) {
            nonFriendsList.push(obj.name);
            }
        }
    }
    // if the name value in a person object does not equal any value on the name given's friend array, push the person object name vlaue to the nonfriends list array
    //return a list of all the names that <name> is not friends with
    return nonFriendsList;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value.
function updateObject(object, key, value) {
    //update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array> 
function removeProperties(object, array) {
    for (let str of array) {
        if (str) {
            delete object[str]
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //Should take an array and return an array with all the duplicates removed
return array.filter((item, index) => array.indexOf(item) >= index);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}