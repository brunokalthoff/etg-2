import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ETG#2</title>
        <meta name="description" content="virtual art exhibition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to ETG#2</h1>
      <p className="mt-0">
        Hi visitor, it&apos;s great to see you&apos;re here!
      </p>

      <div className="nes-container with-title is-rounded">
        <span className="title">ADMISSION</span>
        <p>
          You can get access to the exhibition by paying an amount of your
          choice to the Study Free Program.
        </p>
        <p>Please take a moment to check out what this is about!</p>

        <div className={styles.button}>
          <Link href="/admission">
            <a type="button" className="button-enter nes-btn is-green">
              Get access
            </a>
          </Link>
        </div>
      </div>

      <div className="nes-container with-title is-rounded">
        <span className="title">EXHIBITION</span>
        <p>
          Welcome back to the second exhibit of the ETG Online Art Gallery!
          It&apos;s been an inspiring year full of change and growth. We&apos;re
          extraordinarily happy that we can show you this exhibit featuring our
          hand picked more-than talented international artists. Enjoy a
          high-spirit month of December.
        </p>

        <div className={styles.button}>
          <Link href="/admission">
            <a type="button" className="button-enter nes-btn is-purple">
              Exhibition
            </a>
          </Link>
        </div>
      </div>
      <div className="nes-container with-title is-rounded">
        <span className="title">ETG ART GALLERY</span>
        <p>
          Vernisage!! Still remember ETG#1 from Feb 21? We&apos;re excited that
          ETG has now turned into an online art gallery; with high intentions.
          We, Gina and Bruno, will curate regular exhibitions following a 3-fold
          purpose: Enjoy art. Enjoy life. Continuously fund the Study Free
          Program. Don&apos;t forget to check out the ETG Art Gallery&apos;s
          site for more funky stuff going on in the intergalactic W3 out there.
        </p>

        <div className={styles.button}>
          <Link href="/admission">
            <a type="button" className="button-enter nes-btn is-yellow">
              ETG Art Gallery
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
