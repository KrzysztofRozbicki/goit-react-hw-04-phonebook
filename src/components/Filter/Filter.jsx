import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/filterSlice.js';

import css from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  //Ustawia filtr do wyszukiwania kontaktów
  const handleFilter = event => {
    dispatch(addFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        onChange={handleFilter}
        placeholder="Contact name"
      ></input>
    </div>
  );
};
