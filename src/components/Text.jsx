import styles from '../App.module.css/';
import { texts } from "../assets/texts/texts.js";

function Text() {
  return (
    <div class={styles.intro}>
      <h2>{texts.first.heading}</h2>
      {texts.first.paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
};

export default Text;