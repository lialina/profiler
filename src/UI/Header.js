import React from "react";
import Button from "../components/Button";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Button type="button">Create profile</Button>
    </header>
  );
}

export default Header;
