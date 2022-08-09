import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Головна
    </NavLink>

    <NavLink
      to="/authors"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Автори
    </NavLink>

    <NavLink
      to="/books"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Книжки
    </NavLink>
  </nav>
);

export default Navigation;
