import React from 'react'
import styles from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink
        exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home
      </NavLink>

      <NavLink
        exact
        to="/movies"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies
      </NavLink>
      
    </nav>
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