import Contact from '../src/contact.js';

describe('Contact', () => {

  test('should properly instantiate a contact object with names, phone number, and email', () => {
    const contact1 = new Contact("Sonya", "Jamalungma", "603-555-2000", "sJam@ymail.com");
    expect(contact1.firstName).toEqual("Sonya");
    expect(contact1.lastName).toEqual("Jamalungma");
    expect(contact1.phoneNumber).toEqual("603-555-2000");
    expect(typeof contact1.phoneNumber).toEqual("string");
    expect(contact1.email).toEqual("sJam@ymail.com");
  });
});