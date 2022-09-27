//import test from "node:test";
import AddressBook from "../src/addressbook";
import Contact from '../src/contact.js';

describe('AddressBook', () => {

  test('should create a new address book', () => {
    const addBook = new AddressBook();
    expect(addBook.currentId).toEqual(0);
  });

  test('should populate the Addressbook with contact1', () => {
    const addBook = new AddressBook();
    const contact1 = new Contact("Sonya", "Jamalungma", "603-555-2000", "sJam@ymail.com");
    addBook.addContact(contact1);
    expect(addBook.contacts[1]).toEqual(contact1);
  });
});