import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
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

      <main className={styles.main}>
        <nav>
          <div className="nes-container is-dark">
            <div className="navigation">
              <a href="/">
                Home
              </a>
              <a href="/art">
                Exhibition
              </a>
            
              <a href="https://enterthegateway.art">
                ETG Gallery
              </a>
            </div>
          </div>
        </nav>

        <div class="nes-container with-title">
          <span class="title">Welcome to ETG#2</span>
          <p>
            Hi visitor! <br />
            <br />
            Much happy to see you here!
            <br />
            <br />
            We hope you'll love the art we got for you as much as we do.
            <br />
            <br />          
            </p>
        
        </div>

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
            <button
              type="button"
              class="button-enter nes-btn is-primary nes-center"
            >
              Enter Exhibition
            </button>
          </div>
        </div>

            <div class="nes-container with-title">
          <span class="title">Get Access</span>
          <p>
         
            <br />
            <i class="nes-icon coin is-small" /> Entrance to the exhibit is donation based.<i class="nes-icon coin is-small" /><br />
            <br />
            Please take a second to check out what this is about.
            <br />
            <br />
            <hr></hr>
        
            <br />
            We’d like to invite you to donate an amount of your choice to the
            Study Free Program, it will leave a lucky Filipino student completely care-free of their finances.
            <br />
            <br />
            100% of your money goes to a student.
            <br />
            <br />
            Nonetheless, we want to grant equal accessability to art, so if you
            cannot or want not donate, you’re still warmly welcome to enjoy this
            exhibition for free. <br />
            <br />
            Read more about the ETG Art Gallery here and about the Study Free
            Program on the donation page.
            <br />
            <br />

<i class="nes-icon star is-small"></i> Note: If you want to buy an artist a coffee, you can do so on the
            exhibition page.
            <br />
            <br />
            </p>
            <hr></hr>
            <div className="buttons">
          <button
              type="button"
              class="button-enter nes-btn is-success nes-center"
            >
              DONATE
            </button>
            <button
              type="button"
              class="button-enter nes-btn is-primary nes-center"
            >
              Enter Exhibition
            </button>
          </div>

        </div>

        
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
