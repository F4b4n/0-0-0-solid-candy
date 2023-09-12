import styles from '../styles/header.module.css';
import { texts } from "../assets/texts/texts.js";
console.log('        _..---...,""-._     ,/}/)', '\n', 
"     .''        ,      ``..'(/-<", '\n', 
'    /   _      {      )         \\', '\n', 
'   ;   _ `.     `.   <         a(', '\n', 
" ,'   ( \\  )      `.  \\ __.._ .: y", '\n', 
"(  <\\_-) )'-.____...\\  `._   //-'", '\n', 
" `. `-' /-._)))      `-._)))", '\n', 
"   `...'"
);

function Header() {
  return (
    <div class={styles.header1}>
      <h1>{texts.first.heading}</h1>
    </div>
  );
};

export default Header;