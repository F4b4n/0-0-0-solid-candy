import styles from "../styles/hero.module.css";
import heroimg from "/src/assets/hero-main.webp";
import herobg from "/src/assets/hero-bg.mp4";


function Hero() {
  return (
    <div class={styles.imgx}>
      <img
        src={heroimg}
        
        alt="Lucky Candy the cat laying behind the scrathing pole, while only half of her face is visible"
      />
      <video autoplay muted loop src={herobg} type="video/mp4"></video>
    </div>
  );
}

export default Hero;