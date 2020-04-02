import { Meteor } from 'meteor/meteor';
import { Contact } from '../../api/contact/Contact.js';
/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** Initialize the database with a default data document. */
function addContact(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Contact.insert(data);
}


if (Contact.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating contact data.');
    Meteor.settings.defaultContacts.map(data => addContact(data));
  }
}