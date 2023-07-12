import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import css from './contactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  //Usuwa kontakt z bazy danych na podstawie id

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
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
            onClick={() => handleDeleteContact(id)}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};
