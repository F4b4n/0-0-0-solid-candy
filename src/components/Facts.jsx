import { createSignal, onMount } from "solid-js";
import styles from "../styles/facts.module.css";

function Facts() {
  const [fact, setFact] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  let myElement;

  const fetchFact = async () => {
    setLoading(true);
    const response = await fetch("https://catfact.ninja/fact");
    const json = await response.json();
    setFact(json.fact);
    setLoading(false);
  };

  onMount(() => {
    fetchFact();
    myElement = document.getElementById("my-element");
  }); 

  
  const inView = () => {
    fetchFact().then(() => {
      myElement.scrollIntoViewIfNeeded({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    });
  };

  return (
    <div class={styles.facts} id="container">
      <h2>Cat Fact</h2>
      <div id="my-element">
        <p>{loading() ? "Loading..." : fact()}</p>
        <button onclick={inView}>
          <span>Get another fact</span>
        </button>
      </div>
    </div>
  );
}

export default Facts;
