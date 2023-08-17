import styles from '../App.module.css/';
import { texts } from "../assets/texts/texts.js";

function Header() {
  return (
    <div class={styles.header1}>
      <h2>{texts.first.heading}</h2>
    </div>
  );
};

export default Header;