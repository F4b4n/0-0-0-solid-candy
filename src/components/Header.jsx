import styles from '../styles/header.module.css';
import { texts } from "../assets/texts/texts.js";

function Header() {
  return (
    <div class={styles.header1}>
      <h1>{texts.first.heading}</h1>
    </div>
  );
};

export default Header;