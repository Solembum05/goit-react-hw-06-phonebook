import Phonebook from './Phonebook/Phonebook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';


export default function App() {

// const initialState = {
//   contacts: [],
//   filter: '',
// };


  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    window.localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  function isFound(name) {
    const findName = name.trim().toLowerCase();
    return contacts.some(item => item.name.toLowerCase() === findName);
  }

  function formSubmitHandler(data) {
    if (isFound(data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  }

  function onRemoveContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  function onFilterContact(event) {
    setFilter(event.target.value);
  }
  function getOneContact() {
    const normalizeValue = filter.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizeValue)
    );
  }

  return (
    <div>
      <Phonebook addContact={formSubmitHandler} />
      <h2 className={css.title}>Contacts</h2>

      <Filter onFilterData={filter} onFilterContact={onFilterContact} />

      {contacts.length > 0 && (
        <ContactList
          removeContact={onRemoveContact}
          contacts={getOneContact()}
        />
      )}
    </div>
  );
}
