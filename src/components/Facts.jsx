import { createSignal, onMount } from "solid-js";
import styles from "../styles/facts.module.css";

function Facts() {
  const [fact, setFact] = createSignal("");
  const [loading, setLoading] = createSignal(false);

  const fetchFact = async () => {
    setLoading(true);
    const response = await fetch("https://catfact.ninja/fact");
    const json = await response.json();
    setFact(json.fact);
    setLoading(false);
  };

  onMount(fetchFact); // fetch a fact on initial render

  return (
    <div class={styles.facts}>
      <h2>Cat Fact</h2>
      <div>
        <p>{loading() ? "Loading..." : fact()}</p>
        <button onclick={fetchFact}><span>Get another fact</span></button>{" "}
      </div>
    </div>
  );
}

export default Facts;
