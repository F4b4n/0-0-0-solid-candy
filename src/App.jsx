import logo from './assets/cat.png';
import styles from './App.module.css';
import Hero from '/src/components/Hero';
import Text from './components/Text';

function App() {
  return (
    <>
    <Hero />
    <Text />
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
