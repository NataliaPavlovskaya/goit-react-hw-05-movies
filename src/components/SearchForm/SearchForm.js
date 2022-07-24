import { useState } from 'react';

// import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import styles from './SearchForm.module.css';
// import {ToastContainer, toast } from 'react-toastify';

const SearchFrom = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleSearchInput = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    // Запрещает отправку пустого инпута
    if (!query.trim()) return;

    // Отдать данные внешнему компоненту
    onSearch(query);

    resetForm();
  };
 

// Сбрасывает поле отправки
  const resetForm = () => setQuery('');
  
  return (
  <form className={styles.SearchForm} onSubmit={handleFormSubmit}>
    <button type="submit" className={styles['SearchForm-button']}>
      <span className={styles['SearchForm-button-label']}>Search</span>
    </button>

    <input
      className={styles['SearchForm-input']}
      type="text"
      name="query"
      value={query}
      onChange={handleSearchInput}
      autoComplete="off"
      autoFocus
      placeholder="Enter movie name.."
    />
    <button type="submit" className={styles.button}>
        Search
      </button>
  </form>);
};

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;