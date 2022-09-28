export default function Contact(firstName, lastName, phoneNumber, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
  this.email = email;
}

Contact.prototype.fullName = function() {
  return this.firstName + "" + this.lastName;
};