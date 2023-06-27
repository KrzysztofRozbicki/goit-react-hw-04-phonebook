import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const appendContacts = contact => {
    setContacts([...contacts, contact]);
  };

  //Ustawia filtr do wyszukiwania kontaktów
  const filterContacts = event => {
    setFilter(event.target.value);
  };

  //Usuwa kontakt z bazy danych na podstawie id

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    setIsMounted(true);
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  //Metoda tworzy kontakt i modyfikuje state dodajac do niego nowy kontakt
  const addContact = event => {
    event.preventDefault();

    //Tworzy nowy obiekt - kontakt na podstawie danych z inputów
    const contact = {
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    };

    // Walidacja - sprawdza czy kontakt jest już dodany (case insensitive)
    if (
      contacts.some(
        person => person.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} already in contacts`);
    }

    //Dodaje kontakt do state
    appendContacts(contact);
    event.target.reset();
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filterContacts={filterContacts} />
      <ContactList
        contacts={contacts}
        filterValue={filter}
        deleteContact={deleteContact}
      />
    </>
  );
};

export default App;
