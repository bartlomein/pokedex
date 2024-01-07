"use client";

import styles from "../styles/layout.module.css";
import Search from "./Search/Search";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1>Pokedex</h1>
      <Search />
    </nav>
  );
};
