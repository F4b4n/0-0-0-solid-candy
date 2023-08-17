import { tomasina } from "../assets/texts/tomasina.js";
import styles from '../App.module.css/';

 function Tomasina() {

  return (
    <div>
      <h2>{tomasina.first.heading}</h2>
      {tomasina.paragraphs.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}
  export default Tomasina;