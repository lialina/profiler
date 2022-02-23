import React from "react";
import styles from "./Button.module.css";

function Button({ type, children }) {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
