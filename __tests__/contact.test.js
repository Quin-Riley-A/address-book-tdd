import Contact from '../src/contact.js';

describe('Contact', () => {
  let contact1;

  beforeEach(() => {
    contact1 = new Contact("Sonya", "Jamalungma", "603-555-2000", "sJam@ymail.com");
  });

  test('should properly instantiate a contact object with names, phone number, and email', () => {
    expect(contact1.firstName).toEqual("Sonya");
    expect(contact1.lastName).toEqual("Jamalungma");
    expect(contact1.phoneNumber).toEqual("603-555-2000");
    expect(typeof contact1.phoneNumber).toEqual("string");
    expect(contact1.email).toEqual("sJam@ymail.com");
  });

  test('should return full name by concatenating the first name, a space, and the last name', () => {
    expect(contact1.fullName()).toEqual("Sonya Jamalungma");
  });
});