import React from 'react'
import { Outlet } from "react-router-dom";
import styles from './SharedLayout.module.css';
import { NavLink } from 'react-router-dom';
import Container from 'components/Container/Container';

const SharedLayout = () => {
  return (
    <>
    <header className={styles.header}>
    <Container>
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
    </Container>
    </header>
    <Outlet />
    </>
  );
}

export default SharedLayout;






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