import styles from "../App.module.css";
import { A } from "@solidjs/router";

function Navbar() {
  return (
    <div class={styles.nav}>
      <A href="/">Intro</A>
      <A href="/">My diary</A>
      <A href="/">Media</A>
      <A href="/">Advice</A>
      <A href="/">Tomasina</A>
    </div>
  );
}

export default Navbar;
