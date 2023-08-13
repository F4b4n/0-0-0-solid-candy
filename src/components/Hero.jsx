import "./hero.css";
import heroimg from "/src/assets/hero-main.webp";

function Hero() {
  return (
    <div class="imgx">
      <img
        src={heroimg}
        
        alt="Lucky Candy the cat laying behind the scrathing pole, while only half of her face is visible"
      />
    </div>
  );
}

export default Hero;