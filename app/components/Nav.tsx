"use client";

import styles from "../styles/layout.module.css";
import History from "./History/History";
import Search from "./Search/Search";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Search />
      <History />
    </nav>
  );
};
