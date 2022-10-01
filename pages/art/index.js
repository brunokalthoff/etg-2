import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Art.module.css";

export default function Art() {
  return (
    <div>
      <Head>
        <title>ETG#2</title>
        <meta name="description" content="virtual art exhibition" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="nes-container with-title">
          <span className="title">Exhibition</span>
          <div>
            <p className="nes-balloon from-right nes-pointer">
              I have contributed an amount of my choice to the Study Free
              Program or will do it later!
            </p>
          </div>
          <div>
            <p className="nes-balloon from-left nes-pointer">
              Thank you!{" "}
              <i className="nes-icon is-medium heart align-middle"></i>
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="art/artists">
              <button type="button" className="button-enter nes-btn is-purple">
                Enter Exhibition
              </button>
            </Link>
          </div>
          <br />
          <i className="nes-icon star is-small"></i> Note: If you want to buy an
          artist a coffee, you can do so on the exhibition page.
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
