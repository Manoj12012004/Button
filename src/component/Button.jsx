import React from "react";
import styles from "./Button.module.css";

const Button = ({ type = "primary", disabled = false, children, onClick }) => {
  const buttonClass = `${styles.button} ${styles[type]} ${disabled ? styles.disabled : ""}`;

  return (
    <button className={buttonClass} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
