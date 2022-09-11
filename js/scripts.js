//Contact constructor
function AdressBook() {
  this.contacts = {}
}

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Concact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};