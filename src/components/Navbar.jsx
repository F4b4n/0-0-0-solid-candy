import styles from "../App.module.css";
import { A } from "@solidjs/router";

function Navbar() {
  return (
    <div class={styles.nav}>
      <A href="/">Intro</A>
      <A href="/Diary">Diary</A>
      <A href="/Candygram">Candygram</A>
      <A href="/Advice">Advice</A>
      <A href="/Tomasina">Tomasina</A>
    </div>
  );
}

export default Navbar;
