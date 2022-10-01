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
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
      </Head>

      <main>

        <div class="nes-container with-title">
          <span class="title">Exhibition</span>
          <div>
            <p class="nes-balloon from-right nes-pointer">
              I have donated to the cause or will donate later!
            </p>
          </div>
          <div>
            <p class="nes-balloon from-left nes-pointer">
              Thank you! <i class="nes-icon is-medium heart icon"></i>
            </p>
          </div>
          <div className="buttons">
          <button
              type="button"
              class="button-enter nes-btn is-success nes-center"
            >
              DONATE
            </button>
            <Link href="art/artists">
  
       
            <button
              type="button"
              class="button-enter nes-btn is-primary nes-center"
            >
              Enter Exhibition
             
            </button>
            </Link>
          </div>
        </div>

           
        
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
