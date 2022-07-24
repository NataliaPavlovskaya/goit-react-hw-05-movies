import React from 'react'
import styles from './AppBar.module.css';
import Navigations from 'components/Navigations';

const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigations />
    </header>
  );
}

export default AppBar;



// import React from 'react'
// import PropTypes from 'prop-types';
// import SearchFrom from 'components/SearchForm';


// import styles from './Search.module.css';


// const SearchBar = ({ onSearch }) => (
//     <header className={styles.Searchbar}>
//       <SearchFrom onSearch={onSearch} />
//     </header>
//   );
  
//   SearchBar.propTypes = {
//     onSearch: PropTypes.func.isRequired,
//   };
  
//   export default SearchBar;