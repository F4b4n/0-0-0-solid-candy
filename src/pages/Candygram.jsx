import { lazy } from "solid-js";
import styles from "../styles/candygram.module.css";
import clogo from "/src/assets/imgs/gram/clogo.webp";
const Card = lazy(() => import("../components/Candygram/Card"));
import { textsc } from "../assets/texts/candygram.js";

const posts = import.meta.glob("/src/assets/imgs/gram/posts/*.{webp,mp4}", {
  eager: true,
});

// Define a custom sorting function that extracts the numbers from the file names and compares them
function compareFileNames(a, b) {
  // Use a regular expression to match the numbers in the file names
  const regex = /\d+/;
  // Extract the numbers from the file names
  const numA = parseInt(a.match(regex)[0]);
  const numB = parseInt(b.match(regex)[0]);
  // Compare the numbers
  return numA - numB;
}

function Candygram() {
  return (
    <>
      <div class={styles.candygram}>
        <img src={clogo} alt="" />
      </div>
      <div class={styles.wrap}>
        {/* Sort the entries by the custom function and render a Card component for each entry */}
        {Object.entries(posts).sort(([keyA], [keyB]) => compareFileNames(keyA, keyB)).map(([key, value], index) => (
          <Card text={textsc[index]} local={value} />
        ))}
      </div>
    </>
  );
}
export default Candygram;
