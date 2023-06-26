import css from './filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filterContacts }) => {
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
  filterContacts: PropTypes.func.isRequired,
};
