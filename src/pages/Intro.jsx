import styles from '../styles/intro.module.css';
import { intro } from "../assets/texts/intro.js";

// console.log({texts});

function Intro() {
  return (
    <div class={styles.intro}>
      {intro.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
};

export default Intro;