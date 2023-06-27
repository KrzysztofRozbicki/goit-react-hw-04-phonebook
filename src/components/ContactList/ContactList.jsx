import css from './contactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filterValue, setContacts }) => {
  //Usuwa kontakt z bazy danych na podstawie id
  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  //Funkcja filtruje kontakty na podstawie przekazanej tablicy (contacts) i stringa (filter)
  const filteredArray = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  //Renderowanie listy kontaktów na podstawie przefiltrowanej tablicy
  return (
    <ul className={css.contacts}>
      {filteredArray.map(({ id, name, number }) => (
        <li key={id} className={css.contacts__item}>
          <p className={css.contacts__name}> {name} </p>
          <p className={css.contacts__number}>{number} </p>

          <button
            className={css.contacts__button}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filterValue: PropTypes.string.isRequired,
  setContacts: PropTypes.func.isRequired,
};
