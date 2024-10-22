import styles from "../styles/treat.module.css";

function Treat() {
  return (
    <div class={styles.treat}>
      <p>
        🏠 You see, I used to live in a shelter with many other cats who were
        waiting for their forever homes. It was not easy, but we had each other.
        We became friends and family. 🐈‍⬛
      </p>
      <p>
        👩‍👧‍👦 Then one day, my humans came and adopted me. They gave me a new home,
        a new name, and a lot of love. They also gave me treats, lots of treats.
        🥰
      </p>
      <p>
        🎁 But they also told me that I should share my treats with my friends
        in the shelter, to thank them for being there for me and to help them
        find their own homes. They said it’s a way of giving back and spreading
        happiness. 😊
      </p>
      <p>
        🙏 My business human often sends treats to my friends in Tomasina Cat
        Sanctuary, where I used to live. 🐾 You can also donate to the sanctuary
        via PayPal or a{" "}
        <a
          href="tomasinasanctuary.org/?contactUz=YES&divSection=helpMe"
          target="_blank"
          rel="noopener noreferrer"
        >
          bank transfer
        </a>{" "}
        and help them provide food, shelter, and medical care for hundreds of
        cats in need. Thank you for being a cat lover! 😻
      </p>
      <p>
        👏 My business human has been supporting the sanctuary since before they
        adopted me. They are very generous and caring. They want to make sure
        that every cat has a chance to be happy and loved. 💕
      </p>
      <p>
        😍 You will make me and my friends very happy and grateful. You will
        also support the shelter and the amazing people who work there. You will
        make a difference in our lives. 🙌
      </p>
      <p>🐾 Love, Candy 🐾</p>
      <div>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
          rel="noopener noreferrer"
        >
          <input type="hidden" name="cmd" value="_s-xclick"></input>
          <input
            type="hidden"
            name="hosted_button_id"
            value="WHDLVR5XVKMWE"
          ></input>
          <input
            type="image"
            src="https://www.paypalobjects.com/webstatic/en_US/i/btn/png/gold-rect-paypal-60px.png"
            border="0"
            name="submit"
            alt="PayPal - The safer, easier way to pay online!"
          ></input>
        </form>
      </div>
    </div>
  );
}
export default Treat;
