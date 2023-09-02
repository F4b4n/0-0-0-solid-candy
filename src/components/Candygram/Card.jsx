import styles from "../../styles/card.module.css";
import cprofile from "../../assets/imgs/gram/cprofile.webp"

function CIHeader() {
  return <div class={styles.ciheader}>
  <img img src={cprofile} alt="" ></img>
  <p>Candy21 • Following</p>
  </div>;
}

export default CIHeader;
