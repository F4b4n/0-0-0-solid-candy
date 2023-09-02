import styles from "../styles/nav.module.css";
import { A, useLocation } from "@solidjs/router";

function Navbar() {
  // define a function that returns the color of the link based on the current path and the href value
  function getLinkColor(href) {
    const location = useLocation();
    return location.pathname === href ? "#E0218A" : "#fff";
  }

  return (
    <div class={styles.nav}>
      <A href="/" style={{ color: getLinkColor("/") }}>
        Intro
      </A>
      <A href="/Diary" style={{ color: getLinkColor("/Diary") }}>
        Diary
      </A>
      <A href="/Candygram" style={{ color: getLinkColor("/Candygram") }}>
        Candygram
      </A>
      <A href="/Advice" style={{ color: getLinkColor("/Advice") }}>
        Advice
      </A>
      <A href="/Tomasina" style={{ color: getLinkColor("/Tomasina") }}>
        Tomasina
      </A>
    </div>
  );
}

export default Navbar;
