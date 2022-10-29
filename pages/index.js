import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import heart from '../public/heart.svg'

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
      Welcome back to the second exhibit of the ETG Online Art Gallery!
      <hr />
      <h1>Admission</h1>
      <p>
        To get access to the exhibition, please contribute a small amount to the Study Free Program.
<br /><br />
        Please take a moment to check out what this is about <Image src={heart} />
      </p>
      <div className={styles.button}>
        <Link href="/admission">
          <a type="button" className="button-enter nes-btn is-green">
            Get access
          </a>
        </Link>
      </div>
      <hr />
      <h1>EXHIBITION</h1>
      <p>
        We&apos;re happy to show you in this exhibit selected fine art from
         our hand picked beloved artists from accross da planet.
        It&apos;s been an inspiring year full of change and growth. Enjoy a
        high-spirit month of December.
      </p>
      <div className={styles.button}>
        <Link href="/admission">
          <a type="button" className="button-enter nes-btn is-purple">
            Exhibition
          </a>
        </Link>
      </div>
      <hr />
      <h1>ETG ART GALLERY</h1>
      <p>
        Vernisage!! Still remember ETG#1 from Feb 21? We&apos;re excited that
        ETG has now turned into an online art gallery; with high intentions. We,
        Gina and Bruno, will curate regular exhibitions following a 3-fold
        purpose: Enjoy art. Enjoy life. Continuously fund the Study Free
        Program. Don&apos;t forget to check out the ETG Art Gallery&apos;s site
        for more funky stuff going on in the intergalactic W3 out there.
      </p>
      <div className={styles.button}>
        <Link href="/admission">
          <a type="button" className="button-enter nes-btn is-yellow">
            ETG Art Gallery
          </a>
        </Link>
      </div>
    </div>
  );
}
