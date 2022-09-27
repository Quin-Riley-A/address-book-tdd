import AddressBook from "../src/addressbook";
import Contact from '../src/contact.js';

describe('AddressBook', () => {

  test('should create a new address book', () => {
    const addBook = new AddressBook();
    expect(addBook.currentId).toEqual(0);
  });
});