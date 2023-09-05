import styles from "../styles/candygram.module.css";
import clogo from "/src/assets/imgs/gram/clogo.webp";
import Card from "../components/Candygram/Card";
import { textsc } from "../assets/texts/candygram.js";

const posts = import.meta.glob("/src/assets/imgs/gram/posts/*.{webp,mp4}", {
  eager: true,
});

// console.log(posts, typeof(posts));
console.log(Object.keys(posts));

function Candygram() {
  return (
    <>
      <div class={styles.candygram}>
        <img src={clogo} alt="" />
      </div>
      <div class={styles.wrap}>
        {/* Map over the posts object and render a Card component for each entry */}
        {Object.entries(posts).map(([key, value], index) => (
          <Card text={textsc[index]} local={value} />
        ))}
      </div>
    </>
  );
}
export default Candygram;
