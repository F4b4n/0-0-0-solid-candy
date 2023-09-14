import { tomasina } from "../assets/texts/tomasina.js";
import styles from '../styles/tomasina.module.css';
import candymg from '../assets/imgs/candyattomasina.webp';
import { For } from "solid-js";

 function Tomasina() {

  return (
    <div class={styles.tomasina}>
      <object data="/src/assets/imgs/svgwaves.svg" type="image/svg+xml"></object>
      <h2>{tomasina.first.heading}</h2>
      <figure class={styles.animate}>
      <img
        src={candymg}
        
        alt="Lucky Candy's first picture in Tomasina Cat Sanctuary, she is standing adorably."
      />
      <figcaption>The very first known picture of Candy.</figcaption>
      </figure>

      <For each={tomasina.paragraphs}>
        {(paragraph) => (
          <p>{paragraph}</p>
        )}
      </For>
      <p>And the rest is catstory.. thank you <a href="http://tomasinasanctuary.org/" target="_blank" rel="noopener noreferrer">TOMASINCA CAT SANCTUARY!</a></p>
    </div>
  );
}
  export default Tomasina;