import styles from "../styles/candygram.module.css";
import clogo from "/src/assets/imgs/gram/clogo.webp";
import Card from "../components/Candygram/Card";

function Candygram() {
  return (
    <>
      <div class={styles.candygram}>
        <img src={clogo} alt="" />
      </div>
      <Card />
    </>
  );
}
export default Candygram;
