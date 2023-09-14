import styles from '../styles/intro.module.css';
import { intro } from "../assets/texts/intro.js";
import { For } from 'solid-js';

function Intro() {
  return (
    <div class={styles.intro}>
      <For each={intro}>{(intro) => (
          <p>{intro}</p>
        )}
      
      </For>
    </div>
  );
};

export default Intro;