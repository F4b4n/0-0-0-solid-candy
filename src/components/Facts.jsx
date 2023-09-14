import { Show, createResource, onMount } from "solid-js";
import styles from "../styles/facts.module.css";

function Facts() {
  let myElement;

  const fetchFact = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const json = await response.json();
    return json.fact;
  }
 
  const [fact, {refetch}] = createResource(fetchFact);

  const inView = () => {
    refetch().then(() => {
      myElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    });
  };

  onMount(() => {
    myElement = document.getElementById("my-element");
  }); 
  
  return (
    <div class={styles.facts}>
      <h2>Cat Fact</h2>
      <div id="my-element">
        <Show when={fact()} fallback={<p>Loading...</p>}> 
        <p>{fact()}</p>
        </Show>
        <button onclick={inView}>
          Get another fact
        </button>
      </div>
    </div>
  );
}

export default Facts;
