import css from './filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ setFilter }) => {
  //Ustawia filtr do wyszukiwania kontaktów
  const filterContacts = event => {
    setFilter(event.target.value);
  };

  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        onChange={filterContacts}
        placeholder="Contact name"
      ></input>
    </div>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
