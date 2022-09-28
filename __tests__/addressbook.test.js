//import test from "node:test";
//import test from "node:test";
import AddressBook from "../src/addressbook";
import Contact from '../src/contact.js';

describe('AddressBook', () => {
  let addBook;

  beforeEach(() => {
    addBook = new AddressBook();
  });

  test('should create a new address book', () => {
    expect(addBook.currentId).toEqual(0);
  });

  test('should populate the Addressbook with contact1', () => {
    const contact1 = new Contact("Sonya", "Jamalungma", "603-555-2000", "sJam@ymail.com");
    addBook.addContact(contact1);
    expect(addBook.contacts[1]).toEqual(contact1);
  });

  test('should return the contact ID for contact1', () => {
    const contact1 = new Contact("Sonya", "Jamalungma", "603-555-2000", "sJam@ymail.com");
    addBook.addContact(contact1);
    expect(addBook.findContact(1)).toEqual(contact1);
  });

  test('return false for a non-existing contact ID', () => {
    const contact1 = new Contact("")
    addBook.addContact(contact1);
    expect(addBook.findContact(2)).toEqual(false);
  });

  test('should return false if deleteContact receives not a vaild id', () => {
    expect(addBook.deleteContact(1)).toEqual(false);
  });
  
});