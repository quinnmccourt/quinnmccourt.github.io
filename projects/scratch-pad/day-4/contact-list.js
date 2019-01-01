// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//return the paramaters as an object
return { id: id,
         nameFirst: nameFirst,
         nameLast: nameLast
}
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // pushes the contact object to contacts array
        addContact: function(contact) {
           contacts.push(contact);
        },
        // loops through the array to check if the fullName string is equal the object's nameFirst + nameLast values concatcated together
        findContact: function(fullName) {
          for (let i = 0; i < contacts.length; i++) {
             
              if (fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) {
                  // if a contact is found it returns the contact
                  return contacts[i];
              }
          }
          //if no contact is found the loop ends and it returns undefined
          return undefined;
        },
        //removeContact(contact): takes a contact object to be removed from the contact list
        removeContact: function(contact) {
            // loop through the list to look for the object
          for (let i = 0; i < contacts.length; i++) {
              // if object is found, splice off the array position
              if (contact === contacts[i]) {
                  contacts.splice(i, 1);
              }
          }
        },
        printAllContactNames: function() {
       //create array
       var fullNameArr = [];
       //loop through contacts array
       for (let i = 0; i < contacts.length; i++) {
           //push the combined names seperated by a space
           fullNameArr.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
       }
        //outside of the loop return the array joined with a line break
        return fullNameArr.join("\n")
    
            
        }
        
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
