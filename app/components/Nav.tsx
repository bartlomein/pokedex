"use client";

import styles from "../styles/layout.module.css";
import Search from "./Search/Search";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Search />
    </nav>
  );
};
