import { tomasina } from "../assets/texts/tomasina.js";
import styles from '../App.module.css/';
import candymg from '../assets/imgs/candyattomasina.webp';

 function Tomasina() {

  return (
    <div class={styles.tomasina}>
      <h2>{tomasina.first.heading}</h2>
      <img
        src={candymg}
        
        alt="Lucky Candy's first picture in Tomasina Cat Sanctuary, she is standing adorably."
      />
      {tomasina.paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
      <p>And the rest is catsory.. thank you <a href="http://tomasinasanctuary.org/">TOMASINCA CAT SANCTUARY!</a></p>
    </div>
  );
}
  export default Tomasina;