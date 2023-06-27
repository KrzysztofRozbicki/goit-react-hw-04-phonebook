import css from './contactForm.module.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export const ContactForm = ({ contacts, setContacts }) => {
  //funkcja dodaje kontakt do tablicy kontaktów
  const appendContacts = contact => {
    setContacts([...contacts, contact]);
  };

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
    <form onSubmit={addContact} className={css.form}>
      <label>
        Name
        <input
          className={css.form__input}
          type="text"
          name="name"
          id=""
          placeholder="Contact name"
          pattern="^[a-zA-Z]+(([' \u2013][a-zA-Z])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={css.form__input}
          type="tel"
          name="number"
          placeholder="Contact number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.form__button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  setContacts: PropTypes.func.isRequired,
};
