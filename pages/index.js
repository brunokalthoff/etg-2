import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ETG#2</title>
        <meta name="description" content="virtual art exhibition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="nes-container with-title">
        <span className="title">Welcome to ETG#2</span>

        <h2>
          Hi visitor <i className="nes-icon is-large heart align-middle"></i>
        </h2>
        <p>
          It's great to see you're here!
          <br /> <br />
          Welcome text...
        </p>
      </div>

      <div className="nes-container with-title">
        <span className="title"> Admission</span>
        <p>
          You can get access to the exhibition by paying an amount of your
          choice to the Study Free Program.
        </p>
        <p>Please take a moment to check out what this is about!</p>

        <div className={styles.button}>
          <a
            href="/admission"
            type="button"
            className="button-enter nes-btn is-green"
          >
            Get access
          </a>
        </div>
      </div>

      <div className="nes-container with-title">
        <span className="title">Exhibition</span>
        <p>
          Welcome back to the second exhibit of the ETG Online Art Gallery! It's
          been an inspiring year full of change and growth. We're
          extraordinarily happy that we can show you this exhibit featuring
          our hand picked more-than talented international artists. Enjoy a
          high-spirit month of December.
        </p>

        <div className={styles.button}>
          <a
            href="/admission"
            type="button"
            className="button-enter nes-btn is-purple"
          >
            Exhibition
          </a>
        </div>
      </div>
      <div className="nes-container with-title">
        <span className="title">ETG Art Gallery</span>
        <p>
          Vernisage!! Still remember ETG#1 from Feb 21? We're excited that ETG
          has now turned into an online art gallery; with high intentions. We,
          Gina and Bruno, will curate regular exhibitions following a 3-fold
          purpose: Enjoy art. Enjoy life. Continuously fund the Study Free
          Program. Don't forget to check out the ETG Art Gallery's site for more
          funky stuff going on in the intergalactic W3 out there.
        </p>

        <div className={styles.button}>
          <a
            href="/admission"
            type="button"
            className="button-enter nes-btn is-yellow"
          >
            ETG Art Gallery
          </a>
        </div>
      </div>
    </div>
  );
}
